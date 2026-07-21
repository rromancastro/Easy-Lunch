"use client";

import { ReactLenis } from "lenis/react";

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
            {children}
        </ReactLenis>
    );
}
