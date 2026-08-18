"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { ReactLenis, useLenis } from "lenis/react";

function LenisRouteSync() {
    const pathname = usePathname();
    const lenis = useLenis();
    const previousPathnameRef = useRef(pathname);

    useEffect(() => {
        if (!lenis) return;

        const hasChangedRoute = previousPathnameRef.current !== pathname;
        previousPathnameRef.current = pathname;

        const sync = () => {
            lenis.resize();
            lenis.emit();

            if (!hasChangedRoute) {
                return;
            }

            const hash = window.location.hash;
            const target = hash || 0;

            lenis.scrollTo(target, {
                immediate: true,
                force: true,
            });

            if (!hash) {
                window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            }
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
