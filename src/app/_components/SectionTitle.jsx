'use client';
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.2, 0.7, 0.2, 1];

function SectionTitle({ eyebrow, title, intro }) {
    const reduce = useReducedMotion();
    const words = title.split(" ");

    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-3">
                {eyebrow && (
                    <motion.span
                        className="flex items-center gap-3 font-mono text-[13px] uppercase tracking-[0.08em] text-brand-soft"
                        initial={reduce ? false : { opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.7, ease: EASE }}
                    >
                        <motion.span
                            aria-hidden="true"
                            className="h-px w-10 origin-left bg-brand"
                            initial={reduce ? false : { scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
                        />
                        {eyebrow}
                    </motion.span>
                )}
                {/* The heading itself is the in-view trigger: the words start clipped out of sight,
                    so they can never be "in view" on their own. */}
                <motion.h2
                    aria-label={title}
                    initial={reduce ? false : "hidden"}
                    whileInView="shown"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
                    className="m-0 flex flex-wrap gap-x-[0.28em] text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl lg:text-[56px]"
                >
                    {words.map((word, i) => (
                        <span key={i} aria-hidden="true" className="inline-block overflow-hidden pb-[0.08em]">
                            <motion.span
                                className="gradtext inline-block"
                                variants={{
                                    hidden: { y: "110%", rotate: 4 },
                                    shown: { y: "0%", rotate: 0, transition: { duration: 0.9, ease: EASE } },
                                }}
                            >
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </motion.h2>
            </div>
            {intro && (
                <motion.p
                    className="m-0 max-w-md text-base leading-relaxed text-brand-muted"
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
                >
                    {intro}
                </motion.p>
            )}
        </div>
    );
}

export default SectionTitle;
