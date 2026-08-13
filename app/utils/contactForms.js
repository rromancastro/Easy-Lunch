export const formPatterns = {
    fullName: "[A-Za-zÁÉÍÓÚÜÑáéíóúüñ' -]{2,80}",
    email: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
    phone: "[0-9+() .-]{7,25}",
    company: "[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9' .,&-]{2,100}",
    location: "[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9' .,-]{2,100}",
    positiveInteger: "[0-9]{1,6}",
    birthDate: "(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/[0-9]{4}",
    experienceYears: "[0-9]{1,2}",
    deliveryZone: "[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9' .,-]{2,120}",
}

export const fieldLabels = {
    fullName: "Nombre y Apellido",
    email: "E-mail",
    phone: "Teléfono",
    company: "Empresa",
    location: "Ubicación",
    collaborators: "Cantidad de colaboradores",
    birthDate: "Fecha de Nacimiento",
    neighborhood: "Barrio o localidad",
    experienceYears: "Años de experiencia",
    employeeCount: "Cantidad de empleados",
    deliveryZone: "Zona de entrega",
}

export const contactFormFields = {
    quote: [
        { name: "fullName", label: fieldLabels.fullName, pattern: formPatterns.fullName },
        { name: "email", label: fieldLabels.email, pattern: formPatterns.email },
        { name: "phone", label: fieldLabels.phone, pattern: formPatterns.phone },
        { name: "company", label: fieldLabels.company, pattern: formPatterns.company },
        { name: "location", label: fieldLabels.location, pattern: formPatterns.location },
        { name: "collaborators", label: fieldLabels.collaborators, pattern: formPatterns.positiveInteger },
    ],
    footer: [
        { name: "fullName", label: fieldLabels.fullName, pattern: formPatterns.fullName },
        { name: "phone", label: fieldLabels.phone, pattern: formPatterns.phone },
        { name: "email", label: fieldLabels.email, pattern: formPatterns.email },
        { name: "company", label: fieldLabels.company, pattern: formPatterns.company },
    ],
    work: [
        { name: "fullName", label: fieldLabels.fullName, pattern: formPatterns.fullName },
        { name: "birthDate", label: fieldLabels.birthDate, pattern: formPatterns.birthDate },
        { name: "email", label: fieldLabels.email, pattern: formPatterns.email },
        { name: "phone", label: fieldLabels.phone, pattern: formPatterns.phone },
        { name: "neighborhood", label: fieldLabels.neighborhood, pattern: formPatterns.location },
        { name: "experienceYears", label: fieldLabels.experienceYears, pattern: formPatterns.experienceYears },
    ],
}

export const formTitles = {
    quote: "Nueva solicitud de cotización",
    footer: "Nuevo contacto desde el footer",
    work: "Nueva postulación de trabajo",
}

export const validateContactForm = (formType, values) => {
    const fields = contactFormFields[formType]

    if (!fields) {
        return { valid: false, message: "Formulario invalido." }
    }

    for (const field of fields) {
        const value = String(values[field.name] || "").trim()
        const regex = new RegExp(`^${field.pattern}$`)

        if (!regex.test(value)) {
            return { valid: false, message: `Revisa el campo ${field.label}.` }
        }
    }

    return { valid: true }
}
