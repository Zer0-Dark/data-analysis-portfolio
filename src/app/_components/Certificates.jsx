'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import sections from "../_data/sections.json";
import certificatesData from "../_data/certificatesData.json";

function CertificateLightbox({ certificate, onClose }) {
    useEffect(() => {
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKey = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = previous;
            window.removeEventListener("keydown", onKey);
        };
    }, [onClose]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(8,3,12,0.92)] p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.figure
                role="dialog"
                aria-modal="true"
                aria-label={certificate.title}
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                className="relative m-0 flex w-full max-w-4xl flex-col gap-3"
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                    autoFocus
                    className="btn-ghost absolute -top-14 right-0 flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl bg-brand-semi-dark text-lg"
                >
                    <FiX aria-hidden="true" />
                </button>
                <Image
                    src={certificate.img}
                    alt={certificate.title}
                    width={1600}
                    height={1200}
                    className="max-h-[78dvh] w-full rounded-xl object-contain"
                />
                <figcaption className="text-center text-sm text-brand-muted">{certificate.title}</figcaption>
            </motion.figure>
        </motion.div>
    );
}

function Certificates() {
    const [open, setOpen] = useState(null);
    const featured = certificatesData.filter((c) => c.featured);
    const rest = certificatesData.filter((c) => !c.featured);
    const groups = rest.reduce((acc, c) => {
        (acc[c.issuer] ||= []).push(c);
        return acc;
    }, {});

    return (
        <section id="certificates" className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 pt-20 pb-6 sm:px-6 md:pt-24">
            <SectionTitle eyebrow={sections.certificates.eyebrow} title={sections.certificates.title} intro={sections.certificates.intro} />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {featured.map((c, i) => (
                    <Reveal key={c.id} delay={i * 0.1}>
                        <button
                            type="button"
                            onClick={() => setOpen(c)}
                            className="card-lift group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-[20px] border border-brand-line bg-brand-semi-dark text-left"
                        >
                            <div className="grid-bg relative aspect-[16/10] w-full overflow-hidden border-b border-brand-line bg-[#170e22]">
                                <Image src={c.img} alt="" fill sizes="(max-width: 768px) 100vw, 380px" className="media-zoom object-cover object-top" />
                            </div>
                            <div className="flex flex-col gap-2.5 p-5 sm:p-[22px]">
                                <span className="font-mono text-xs tracking-wide text-brand-soft uppercase">{c.issuer}</span>
                                <h3 className="m-0 text-[19px] leading-snug font-bold">{c.title}</h3>
                                <p className="m-0 text-sm leading-relaxed text-brand-muted">{c.info}</p>
                            </div>
                        </button>
                    </Reveal>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                {Object.entries(groups).map(([issuer, items], i) => (
                    <Reveal key={issuer} delay={i * 0.1} className="rounded-[20px] border border-brand-line bg-brand-semi-dark p-2.5">
                        <div className="flex items-center justify-between px-3.5 py-3">
                            <span className="text-base font-bold">{issuer}</span>
                            <span className="font-mono text-xs text-brand-soft">
                                {items.length} {items.length === 1 ? "course" : "courses"}
                            </span>
                        </div>
                        <ul className="m-0 flex list-none flex-col p-0">
                            {items.map((c) => (
                                <li key={c.id}>
                                    <button
                                        type="button"
                                        onClick={() => setOpen(c)}
                                        className="row-slide group flex min-h-11 w-full cursor-pointer items-center gap-3 rounded-xl border border-transparent px-3.5 py-2.5 text-left text-sm text-[#d9d0e6]"
                                    >
                                        <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                                        <span className="flex-1">{c.title}</span>
                                        <FiArrowUpRight aria-hidden="true" className="shrink-0 text-brand-soft opacity-0 transition-opacity group-hover:opacity-100" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                ))}
            </div>

            <AnimatePresence>
                {open && <CertificateLightbox key={open.id} certificate={open} onClose={() => setOpen(null)} />}
            </AnimatePresence>
        </section>
    );
}

export default Certificates;
