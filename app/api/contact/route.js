import nodemailer from "nodemailer"
import { contactFormFields, fieldLabels, formTitles, validateContactForm } from "@/app/utils/contactForms"

export const runtime = "nodejs"

const COMPANY_EMAIL = process.env.CONTACT_TO_EMAIL || "info@easylunch.com.ar"
const MAX_ATTACHMENT_SIZE = 5 * 1024 * 1024
const ALLOWED_ATTACHMENT_TYPES = new Set([
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
])

const sanitize = (value) => String(value || "").trim()

const escapeHtml = (value) =>
    sanitize(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;")

const buildDataRows = (formType, values) =>
    contactFormFields[formType]
        .map((field) => `<tr><td><strong>${escapeHtml(field.label)}</strong></td><td>${escapeHtml(values[field.name])}</td></tr>`)
        .join("")

const buildTextData = (formType, values) =>
    contactFormFields[formType]
        .map((field) => `${field.label}: ${sanitize(values[field.name])}`)
        .join("\n")

const getTransporter = () => {
    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || 465)
    const secure = process.env.SMTP_SECURE !== "false"
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASSWORD

    if (!host || !user || !pass) {
        throw new Error("Faltan configurar SMTP_HOST, SMTP_USER y SMTP_PASSWORD.")
    }

    return nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass },
    })
}

export async function POST(request) {
    try {
        const formData = await request.formData()
        const formType = sanitize(formData.get("formType"))
        const fields = contactFormFields[formType]

        if (!fields) {
            return Response.json({ message: "Formulario invalido." }, { status: 400 })
        }

        const values = Object.fromEntries(fields.map((field) => [field.name, sanitize(formData.get(field.name))]))
        const validation = validateContactForm(formType, values)

        if (!validation.valid) {
            return Response.json({ message: validation.message }, { status: 400 })
        }

        const attachments = []
        const cv = formData.get("cv")

        if (formType === "work" && cv instanceof File && cv.size > 0) {
            if (cv.size > MAX_ATTACHMENT_SIZE) {
                return Response.json({ message: "El CV no puede superar los 5 MB." }, { status: 400 })
            }

            if (!ALLOWED_ATTACHMENT_TYPES.has(cv.type)) {
                return Response.json({ message: "El CV debe ser PDF, DOC o DOCX." }, { status: 400 })
            }

            attachments.push({
                filename: cv.name,
                content: Buffer.from(await cv.arrayBuffer()),
                contentType: cv.type,
            })
        }

        const transporter = getTransporter()
        const title = formTitles[formType]
        const sender = process.env.SMTP_USER
        const companyHtml = `
            <h2>${escapeHtml(title)}</h2>
            <table cellpadding="6" cellspacing="0" border="0">
                ${buildDataRows(formType, values)}
                ${formType === "work" ? `<tr><td><strong>CV adjunto</strong></td><td>${attachments.length ? "Si" : "No"}</td></tr>` : ""}
            </table>
        `

        await Promise.all([
            transporter.sendMail({
                from: `"Easy Lunch" <${sender}>`,
                to: COMPANY_EMAIL,
                replyTo: values.email,
                subject: title,
                text: `${title}\n\n${buildTextData(formType, values)}${formType === "work" ? `\nCV adjunto: ${attachments.length ? "Si" : "No"}` : ""}`,
                html: companyHtml,
                attachments,
            }),
            transporter.sendMail({
                from: `"Easy Lunch" <${sender}>`,
                to: values.email,
                subject: "Recibimos tus datos en Easy Lunch",
                text: "Recibimos tus datos correctamente. Pronto se contactara alguien de nuestro equipo.",
                html: `
                    <p>Hola ${escapeHtml(values.fullName)},</p>
                    <p>Recibimos tus datos correctamente. Pronto se contactara alguien de nuestro equipo.</p>
                    <p>Gracias por contactarte con Easy Lunch.</p>
                `,
            }),
        ])

        return Response.json({ message: "Formulario enviado correctamente." })
    } catch (error) {
        console.error("Contact form error:", error)
        return Response.json({ message: "No se pudo enviar el formulario. Intentalo nuevamente." }, { status: 500 })
    }
}
