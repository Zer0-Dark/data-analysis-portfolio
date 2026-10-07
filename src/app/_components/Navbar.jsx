'use client';
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import data from "../_data/sections.json";

const LINKS = [
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" },
];

function Navbar() {
    const { hero } = data;
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e) => e.key === "Escape" && setIsOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen]);

    return (
        <header className="sticky top-0 z-40 border-b border-brand-line bg-brand-dark/80 backdrop-blur-md">
            <div aria-hidden="true" className="scroll-progress absolute -bottom-px left-0 h-0.5 w-full bg-brand" />
            <motion.nav
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
                className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4"
            >
                <a href="#top" className="flex items-center gap-3 text-white">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-[15px] font-extrabold tracking-wide">
                        ME
                    </span>
                    <span className="text-[17px] font-bold">{hero.name}</span>
                </a>

                <div className="hidden items-center gap-2 md:flex">
                    {LINKS.map((link) => (
                        <a key={link.href} href={link.href} className="navlink px-3.5 py-2.5 text-[15px] font-medium">
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={hero.cvLink}
                        className="btn-primary ml-2 inline-flex items-center gap-2 rounded-[10px] px-[18px] py-[11px] text-[15px] font-semibold"
                    >
                        <FiDownload aria-hidden="true" />
                        Download CV
                    </a>
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen((v) => !v)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-brand-line-strong bg-brand-semi-dark text-xl md:hidden"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                        className="overflow-hidden border-t border-brand-line md:hidden"
                    >
                        <div className="flex flex-col gap-1 px-4 py-4">
                            {LINKS.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 + i * 0.06 }}
                                    className="rounded-xl px-4 py-3 text-lg font-semibold text-white hover:bg-brand-raised"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <a
                                href={hero.cvLink}
                                className="btn-primary mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 font-semibold"
                            >
                                <FiDownload aria-hidden="true" />
                                Download CV
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Navbar;
