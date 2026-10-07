'use client';
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { FiArrowRight } from "react-icons/fi";
import data from "../_data/sections.json";

const EASE = [0.2, 0.7, 0.2, 1];

function Hero() {
    const { hero, stats } = data;
    const reduce = useReducedMotion();

    const fade = (delay) =>
        reduce
            ? {}
            : {
                initial: { opacity: 0, y: 28, filter: "blur(10px)" },
                animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                transition: { duration: 1.1, ease: EASE, delay },
            };

    const lines = [...hero.headline, null];

    return (
        <>
            <section className="relative mx-auto flex max-w-[1200px] flex-col-reverse items-center gap-10 px-4 pt-10 pb-12 sm:px-6 md:flex-row md:gap-14 md:pt-[72px]">
                <div aria-hidden="true" className="drift pointer-events-none absolute -left-32 top-5 h-[420px] w-[420px] rounded-full bg-brand opacity-[0.16] blur-[110px]" />
                <div aria-hidden="true" className="drift-alt pointer-events-none absolute right-[10%] -bottom-20 h-[360px] w-[360px] rounded-full bg-[#5a2fc0] opacity-[0.18] blur-[110px]" />

                <div className="relative flex w-full min-w-0 flex-1 flex-col gap-6">
                    <h1 className="m-0 text-[44px] leading-[1.02] font-extrabold tracking-[-0.03em] sm:text-6xl lg:text-[76px]">
                        {lines.map((line, i) => (
                            <span key={i} className="block overflow-hidden pb-[0.06em]">
                                <motion.span
                                    className="inline-block"
                                    initial={reduce ? false : { y: "110%", rotate: 3 }}
                                    animate={{ y: "0%", rotate: 0 }}
                                    transition={{ duration: 1.1, ease: EASE, delay: 0.05 + i * 0.13 }}
                                >
                                    {line ?? <span className="underline-draw">{hero.headlineAccent}</span>}
                                </motion.span>
                            </span>
                        ))}
                    </h1>
                    <motion.p {...fade(0.5)} className="m-0 max-w-[560px] text-base leading-relaxed text-[#cfc6dc] sm:text-lg">
                        {hero.intro}
                    </motion.p>
                    <motion.div {...fade(0.65)} className="mt-2 flex flex-wrap gap-3">
                        <a href="#projects" className="btn-primary inline-flex items-center gap-2.5 rounded-xl px-6 py-[15px] font-semibold">
                            View projects
                            <FiArrowRight className="arrow" aria-hidden="true" />
                        </a>
                        <a href="#contact" className="btn-ghost inline-flex items-center gap-2.5 rounded-xl px-6 py-[15px] font-semibold">
                            Get in touch
                        </a>
                    </motion.div>
                </div>

                <motion.div {...fade(0.3)} className="relative flex w-full min-w-0 flex-1 justify-center">
                    <div className="relative aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-[30px] p-0.5 shadow-[0_30px_80px_rgba(135,80,247,0.25)] sm:max-w-[400px] md:max-w-[440px]">
                        <div
                            aria-hidden="true"
                            className="spin-slow absolute -left-1/2 -top-1/2 h-[200%] w-[200%]"
                            style={{ background: "conic-gradient(from 0deg, transparent 0deg, transparent 230deg, #8750f7 300deg, #ffffff 330deg, transparent 360deg)" }}
                        />
                        <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-brand-semi-dark">
                            <div aria-hidden="true" className="glow-pulse absolute left-1/2 -bottom-[30%] h-4/5 w-[120%] rounded-full bg-brand opacity-35 blur-[70px]" />
                            <Image
                                fill
                                priority
                                src={hero.heroImage}
                                alt={`Portrait of ${hero.name}`}
                                sizes="(max-width: 768px) 300px, 440px"
                                className="object-contain object-bottom"
                            />
                            <div className="absolute right-4 bottom-4 left-4 flex flex-wrap gap-2">
                                {hero.tags.map((tag, i) => (
                                    <span
                                        key={tag}
                                        className={`float ${i === 1 ? "float-2" : i === 2 ? "float-3" : ""} rounded-full border border-[#3a2756] bg-brand-dark/85 px-3 py-[7px] font-mono text-xs`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            <motion.section {...fade(0.8)} aria-label="Highlights" className="mx-auto max-w-[1200px] px-4 pb-6 sm:px-6">
                <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[20px] border border-brand-line bg-brand-line lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col gap-1.5 bg-brand-semi-dark p-5 sm:p-7">
                            {stat.value !== undefined ? (
                                <span
                                    className="count text-3xl font-extrabold tracking-tight tabular-nums sm:text-[40px]"
                                    style={{ "--to": stat.value }}
                                    aria-label={String(stat.value)}
                                />
                            ) : (
                                <span className="text-3xl font-extrabold tracking-tight sm:text-[40px]">{stat.text}</span>
                            )}
                            <span className="text-[13px] text-brand-muted sm:text-sm">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </motion.section>
        </>
    );
}

export default Hero;
