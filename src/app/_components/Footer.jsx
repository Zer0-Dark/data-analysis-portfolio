'use client';
import { motion, useReducedMotion } from "motion/react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
import sections from "../_data/sections.json";
import contactData from "../_data/contactData.json";

const LINKS = [
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#top", label: "Back to top" },
];

function Footer() {
    const { footer, hero } = sections;
    const email = contactData.find((c) => c.icon === "email");
    const reduce = useReducedMotion();

    return (
        <footer className="mt-24 overflow-hidden border-t border-brand-line bg-brand-semi-dark md:mt-32">
            <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-4 pt-14 pb-7 sm:px-6 md:pt-16">
                <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="flex min-w-0 flex-col gap-2.5">
                        <span className="font-mono text-[13px] tracking-[0.08em] text-brand-soft uppercase">Open to new projects</span>
                        {email && (
                            <a href={email.href} className="inline-flex items-center gap-3 text-[22px] font-bold tracking-tight text-white [overflow-wrap:anywhere] sm:text-[34px]">
                                {email.label}
                                <FiArrowRight className="arrow shrink-0 text-brand" aria-hidden="true" />
                            </a>
                        )}
                    </div>
                    <nav aria-label="Footer" className="-mx-3.5 flex flex-wrap gap-1">
                        {LINKS.map((link) => (
                            <a key={link.href} href={link.href} className="navlink px-3.5 py-2.5 text-[15px]">
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </Reveal>

                <motion.div
                    aria-hidden="true"
                    initial={reduce ? false : { opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
                    className="wordmark text-[17vw] leading-[0.9] font-extrabold tracking-[-0.045em] whitespace-nowrap select-none lg:text-[210px]"
                >
                    {footer.wordmark}
                </motion.div>

                <div className="flex flex-col gap-3 border-t border-brand-line pt-5 text-sm text-brand-muted sm:flex-row sm:items-center sm:justify-between">
                    <span>© {hero.name} · {hero.role}</span>
                    <span className="inline-flex flex-wrap items-center gap-2">
                        {footer.creditLabel}
                        <a
                            href={footer.creditLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="credit-link inline-flex items-center gap-1.5 font-bold text-white"
                        >
                            {footer.creditName}
                            <FiArrowUpRight className="text-brand" aria-hidden="true" />
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
