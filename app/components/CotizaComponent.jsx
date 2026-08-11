"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { formPatterns } from "@/app/utils/contactForms"
import { useContactFormSubmit } from "@/app/utils/useContactFormSubmit"

const MODAL_TRANSITION_MS = 220

export const CotizaComponent = ({ content = "Cotizá ahora" }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [modalStep, setModalStep] = useState(1)
    const [isClosing, setIsClosing] = useState(false)
    const closeTimeoutRef = useRef(null)
    const { isSending, status, message, handleSubmit } = useContactFormSubmit({
        onSuccess: () => setModalStep(2),
    })

    const openModal = () => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current)
        }

        setIsClosing(false)
        setModalStep(1)
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsClosing(true)
        closeTimeoutRef.current = setTimeout(() => {
            setIsOpen(false)
            setIsClosing(false)
        }, MODAL_TRANSITION_MS)
    }

    useEffect(() => {
        return () => {
            if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current)
            }
        }
    }, [])

    const modal = isOpen && createPortal(
        <div className={`cotizaComponentModal ${isClosing ? "isClosing" : ""}`} onClick={closeModal}>
            <div className="cotizaComponentModalContent" onClick={(event) => event.stopPropagation()}>
                <button className="cotizaComponentModalClose" onClick={closeModal} aria-label="Cerrar">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 10L22 22" stroke="white" strokeWidth="2.5" />
                        <path d="M22 10L10 22" stroke="white" strokeWidth="2.5" />
                    </svg>
                </button>
                {modalStep === 1 ? <>
                    <h3>Comer en el trabajo nunca fue tan fácil</h3>
                    <p>Dejanos tus datos si querés saber más y un representante se pondrá en contacto a la brevedad.</p>
                    <form onSubmit={handleSubmit}>
                        <input type="hidden" name="formType" value="quote" />
                        <input type="text" name="fullName" placeholder="Nombre y Apellido" pattern={formPatterns.fullName} title="Usá solo letras, espacios, apóstrofes o guiones." required />
                        <input type="email" name="email" placeholder="E-mail" pattern={formPatterns.email} title="Ingresá un email válido." required />
                        <input type="tel" name="phone" placeholder="Teléfono" pattern={formPatterns.phone} title="Usá entre 7 y 25 caracteres: números, espacios, +, -, puntos o paréntesis." required />
                        <input type="text" name="company" placeholder="Empresa" pattern={formPatterns.company} title="Usá entre 2 y 100 caracteres válidos." required />
                        <input type="text" name="location" placeholder="Ubicación" pattern={formPatterns.location} title="Usá entre 2 y 100 caracteres válidos." required />
                        <input type="text" name="collaborators" inputMode="numeric" placeholder="Cantidad de colaboradores" pattern={formPatterns.positiveInteger} title="Ingresá solo números." required />
                        {status === "error" && <p className="formStatusMessage" role="alert">{message}</p>}
                        <button type="submit" className="verMasButton" disabled={isSending}>{isSending ? "Enviando..." : "Enviar"}</button>
                    </form>
                </>
                    : <>
                        <h3>Tu consulta fue enviada correctamente</h3>
                        <p>Nos pondremos en contacto a la brevedad.</p>
                        <button className="verMasButton" onClick={closeModal}>Cerrar</button>
                    </>
                }
            </div>
        </div>,
        document.body
    )

    return <>
        <div className="cotizaComponent">
            <button onClick={openModal}>{content}</button>
        </div>
        {modal}
    </>
}