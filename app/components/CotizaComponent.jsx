"use client"
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const MODAL_TRANSITION_MS = 220;


export const CotizaComponent = ({ content = "Cotizá ahora" }) => {

    const [isOpen, setIsOpen] = useState(false);

    const [modalStep, setModalStep] = useState(1);
    const [isClosing, setIsClosing] = useState(false);
    const closeTimeoutRef = useRef(null);
    
    const openModal = () => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
        }

        setIsClosing(false);
        setModalStep(1);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsClosing(true);
        closeTimeoutRef.current = setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, MODAL_TRANSITION_MS);
    };

    useEffect(() => {
        return () => {
            if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
            }
        };
    }, []);

    const modal = isOpen && createPortal(
        <div className={`cotizaComponentModal ${isClosing ? "isClosing" : ""}`} onClick={closeModal}>
                <div className="cotizaComponentModalContent" onClick={(event) => event.stopPropagation()}>
                    <button className="cotizaComponentModalClose" onClick={closeModal} aria-label="Cerrar">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 10L22 22" stroke="white" strokeWidth="2.5" />
                            <path d="M22 10L10 22" stroke="white" strokeWidth="2.5" />
                        </svg>
                    </button>
                    {modalStep === 1 ? <><h3>Comer en el laburo nunca fue tan fácil</h3>
                    <p>Dejanos tu datos si queres saber más y un representante se pondra en contacto en la brevedad.</p>
                    <form>
                        <input type="text" placeholder="Nombre y Apellido" />
                        <input type="email" placeholder="E-mail" />
                        <input type="tel" placeholder="Teléfono" />
                        <input type="text" placeholder="Empresa" />
                        <button type="button" className="verMasButton" onClick={()=>setModalStep(2)}>Enviar</button>
                    </form>
                    </>
                    : <>
                        <h3>Tu consulta fue enviada correctamente</h3>
                        <p>Nos pondremos en contacto en la brevedad.</p>
                        <button className="verMasButton" onClick={closeModal}>Cerrar</button>
                    </>
                }
                </div>
            </div>,
        document.body
    );

    return <><div className="cotizaComponent">
        <button onClick={openModal}>{content}</button>
    </div>
        {modal}
    </>
}
