"use client";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

type AnimatedStatsProps = { value: string; label: string };

export function AnimatedStats({value, label} : AnimatedStatsProps) {
    const number = Number(value.replace(/\D/g, ''));
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, { once: true , margin: "-25% 0px"});
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const duration = 1200; // total duration of the animation in ms
        const start = performance.now();

        const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setDisplay(Math.floor(progress * number));

            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [inView, number]);

    return (
        <div ref={ref} className="rounded-2x1 border-slate-700 bg-slate-950/40 p-6 text-center">
            <p className="text-4xl font-bold text-white">{display}+{display === number ? "" : ""}</p>
            <p className="mt-2 text-sm uppercase traking-[0.3em] text-slate-400">{label}</p>
        </div>
    );
}