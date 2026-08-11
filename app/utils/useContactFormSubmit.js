"use client"

import { useState } from "react"

export const useContactFormSubmit = ({ onSuccess } = {}) => {
    const [status, setStatus] = useState("idle")
    const [message, setMessage] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()

        const form = event.currentTarget

        if (!form.checkValidity()) {
            form.reportValidity()
            return
        }

        setStatus("sending")
        setMessage("")

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: new FormData(form),
            })
            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.message || "No se pudo enviar el formulario.")
            }

            form.reset()
            setStatus("sent")
            setMessage(result.message || "Formulario enviado correctamente.")
            onSuccess?.(result)
        } catch (error) {
            setStatus("error")
            setMessage(error.message || "No se pudo enviar el formulario.")
        }
    }

    return {
        isSending: status === "sending",
        status,
        message,
        handleSubmit,
    }
}
