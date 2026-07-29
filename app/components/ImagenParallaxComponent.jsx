"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const ImagenParallaxComponent = ({
    rutaImagen,
    src,
    alt = "",
    className = "",
    intensidad = 1.5,
}) => {
    const pathname = usePathname();
    const containerRef = useRef(null);
    const isInViewRef = useRef(true);
    const frameRef = useRef(null);
    const pointerRef = useRef({ x: 0, y: 0 });
    const requestUpdateRef = useRef(null);
    const [isMobileParallax, setIsMobileParallax] = useState(false);
    const effectiveIntensity = isMobileParallax ? 1 : intensidad;

    useLenis(
        useCallback(() => {
            requestUpdateRef.current?.();
        }, []),
        [],
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        const updateIsMobileParallax = () => setIsMobileParallax(mediaQuery.matches);

        updateIsMobileParallax();
        mediaQuery.addEventListener("change", updateIsMobileParallax);

        return () => mediaQuery.removeEventListener("change", updateIsMobileParallax);
    }, []);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) {
            return;
        }

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const updatePerspective = () => {
            frameRef.current = null;

            if (prefersReducedMotion) {
                container.style.setProperty("--parallax-y", "0px");
                container.style.setProperty("--rotate-x", "0deg");
                container.style.setProperty("--rotate-y", "0deg");
                return;
            }

            if (!isInViewRef.current) {
                return;
            }

            const rect = container.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            const progress = clamp((viewportHeight - rect.top) / (viewportHeight + rect.height), 0, 1) - 0.5;
            const parallaxY = progress * -56 * effectiveIntensity;
            const pointerX = pointerRef.current.x;
            const pointerY = pointerRef.current.y;

            container.style.setProperty("--parallax-y", `${parallaxY}px`);
            container.style.setProperty("--rotate-x", `${pointerY * -8 * effectiveIntensity}deg`);
            container.style.setProperty("--rotate-y", `${pointerX * 8 * effectiveIntensity}deg`);
        };

        const requestUpdate = () => {
            if (frameRef.current) {
                return;
            }

            frameRef.current = window.requestAnimationFrame(updatePerspective);
        };

        requestUpdateRef.current = requestUpdate;

        const handlePointerMove = (event) => {
            const rect = container.getBoundingClientRect();

            pointerRef.current = {
                x: (clamp((event.clientX - rect.left) / rect.width, 0, 1) - 0.5) * 2,
                y: (clamp((event.clientY - rect.top) / rect.height, 0, 1) - 0.5) * 2,
            };

            requestUpdate();
        };

        const handlePointerLeave = () => {
            pointerRef.current = { x: 0, y: 0 };
            requestUpdate();
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                isInViewRef.current = entry.isIntersecting;
                requestUpdate();
            },
            { threshold: 0 },
        );

        observer.observe(container);

        requestUpdate();
        const routeUpdateTimeouts = [0, 100, 350].map((delay) => window.setTimeout(requestUpdate, delay));

        window.addEventListener("scroll", requestUpdate, { passive: true });
        window.addEventListener("resize", requestUpdate);
        container.addEventListener("pointermove", handlePointerMove);
        container.addEventListener("pointerleave", handlePointerLeave);

        return () => {
            routeUpdateTimeouts.forEach((timeout) => window.clearTimeout(timeout));
            observer.disconnect();
            window.removeEventListener("scroll", requestUpdate);
            window.removeEventListener("resize", requestUpdate);
            container.removeEventListener("pointermove", handlePointerMove);
            container.removeEventListener("pointerleave", handlePointerLeave);

            if (requestUpdateRef.current === requestUpdate) {
                requestUpdateRef.current = null;
            }

            if (frameRef.current) {
                window.cancelAnimationFrame(frameRef.current);
                frameRef.current = null;
            }
        };
    }, [effectiveIntensity, pathname]);

    return <div className={`imagenParallaxComponent ${className}`.trim()} ref={containerRef}>
        <img src={src || rutaImagen} alt={alt} onLoad={() => requestUpdateRef.current?.()} />
    </div>
}
