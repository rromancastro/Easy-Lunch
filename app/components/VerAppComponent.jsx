"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { formPatterns } from "@/app/utils/contactForms"
import { useContactFormSubmit } from "@/app/utils/useContactFormSubmit"

const MODAL_TRANSITION_MS = 220

export const VerAppComponent = ({ content = "Ver App" }) => {
    const [isOpen, setIsOpen] = useState(false)
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
        <div className={`verAppComponentModal ${isClosing ? "isClosing" : ""}`} onClick={closeModal}>
            <div className="verAppComponentModalContent" onClick={(event) => event.stopPropagation()}>
                <button className="verAppComponentModalClose" onClick={closeModal} aria-label="Cerrar">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 10L22 22" stroke="white" strokeWidth="2.5" />
                        <path d="M22 10L10 22" stroke="white" strokeWidth="2.5" />
                    </svg>
                </button>
                <img src="/app/marco.png" alt="Ver App Marco" />
                <video src="/app/app.mp4"
                    muted
                    playsInline
                    loop
                    id="appSecondSectionVideo"
                    autoPlay
                ></video>
            </div>
        </div>,
        document.body
    )

    return <>
        <div className="verAppComponent">
            <button onClick={openModal}>{content}</button>
        </div>
        {modal}
    </>
}