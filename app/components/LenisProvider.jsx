"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";

function LenisRouteSync() {
    const pathname = usePathname();
    const lenis = useLenis();

    useEffect(() => {
        if (!lenis) return;

        const sync = () => {
            lenis.resize();
            lenis.emit();
        };
        const frame = window.requestAnimationFrame(sync);
        const timeouts = [100, 350].map((delay) => window.setTimeout(sync, delay));

        return () => {
            window.cancelAnimationFrame(frame);
            timeouts.forEach((timeout) => window.clearTimeout(timeout));
        };
    }, [lenis, pathname]);

    return null;
}

export function LenisProvider({ children }) {
    return (
        <ReactLenis
            root
            options={{
                autoRaf: true,
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
                anchors: true,
            }}
        >
            <LenisRouteSync />
            {children}
        </ReactLenis>
    );
}
