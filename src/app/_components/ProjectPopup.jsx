'use client';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FiChevronLeft, FiChevronRight, FiGithub, FiPlay, FiX } from "react-icons/fi";

const isVideo = (url) => url.toLowerCase().endsWith(".mp4");
const EASE = [0.2, 0.7, 0.2, 1];

// The write-ups are stored as one block where sentences run together ("analysis.The model"),
// so break them back into readable paragraphs.
function toParagraphs(text = "") {
    return text
        .split(/(?<=[.:])(?=[A-Z])/)
        .map((s) => s.trim())
        .filter(Boolean);
}

function ProjectPopup({ project, onClose }) {
    const { imgs } = project;
    const [current, setCurrent] = useState(0);
    const closeRef = useRef(null);
    const thumbsRef = useRef(null);

    const next = () => setCurrent((i) => (i + 1) % imgs.length);
    const prev = () => setCurrent((i) => (i - 1 + imgs.length) % imgs.length);

    useEffect(() => {
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeRef.current?.focus();
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") setCurrent((i) => (i + 1) % imgs.length);
            if (e.key === "ArrowLeft") setCurrent((i) => (i - 1 + imgs.length) % imgs.length);
        };
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = previous;
            window.removeEventListener("keydown", onKey);
        };
    }, [imgs.length, onClose]);

    useEffect(() => {
        thumbsRef.current?.children[current]?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
    }, [current]);

    const media = imgs[current];

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center bg-[rgba(8,3,12,0.92)] backdrop-blur-sm sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
        >
            <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-dialog-title"
                onClick={(e) => e.stopPropagation()}
                initial={{ y: 60, opacity: 0, scale: 0.97 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 40, opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex max-h-[94dvh] w-full max-w-[1200px] flex-col overflow-hidden rounded-t-[28px] border border-brand-line-strong bg-brand-semi-dark shadow-[0_40px_120px_rgba(0,0,0,0.6)] sm:rounded-[28px] lg:h-[860px] lg:max-h-[92dvh] lg:flex-row"
            >
                {/* Gallery */}
                <div className="flex shrink-0 flex-col gap-3 border-b border-brand-line p-3 sm:p-5 lg:w-[58%] lg:border-r lg:border-b-0 lg:p-7">
                    <div className="grid-bg relative aspect-video w-full overflow-hidden rounded-2xl border border-brand-line bg-black lg:aspect-auto lg:flex-1">
                        {isVideo(media) ? (
                            <video key={media} src={media} className="absolute inset-0 h-full w-full object-contain" controls autoPlay muted loop playsInline />
                        ) : (
                            <Image key={media} src={media} alt={`${project.shortTitle} — screenshot ${current + 1}`} fill sizes="(max-width: 1024px) 100vw, 700px" className="object-contain" />
                        )}
                        <span className="absolute top-3 right-3 rounded-lg bg-brand-dark/85 px-2.5 py-1.5 font-mono text-xs">
                            {current + 1} / {imgs.length}
                        </span>
                        {imgs.length > 1 && (
                            <>
                                <button type="button" onClick={prev} aria-label="Previous image" className="absolute top-1/2 left-3 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#3a2756] bg-brand-dark/85 text-lg hover:border-brand">
                                    <FiChevronLeft aria-hidden="true" />
                                </button>
                                <button type="button" onClick={next} aria-label="Next image" className="absolute top-1/2 right-3 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#3a2756] bg-brand-dark/85 text-lg hover:border-brand">
                                    <FiChevronRight aria-hidden="true" />
                                </button>
                            </>
                        )}
                    </div>
                    <div ref={thumbsRef} className="flex gap-2.5 overflow-x-auto pb-1">
                        {imgs.map((url, i) => (
                            <button
                                key={url}
                                type="button"
                                onClick={() => setCurrent(i)}
                                aria-label={`Show item ${i + 1}`}
                                aria-current={i === current}
                                className={`relative aspect-[16/10] w-20 shrink-0 cursor-pointer overflow-hidden rounded-[10px] border-2 bg-[#170e22] transition sm:w-24 ${i === current ? "border-brand" : "border-brand-line opacity-60 hover:opacity-100"}`}
                            >
                                {isVideo(url) ? (
                                    <span className="flex h-full w-full items-center justify-center text-brand-soft">
                                        <FiPlay aria-hidden="true" className="fill-current" />
                                    </span>
                                ) : (
                                    <Image src={url} alt="" fill sizes="96px" className="object-cover" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Details */}
                <div className="flex min-h-0 min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-4 border-b border-brand-line p-5 sm:px-7 sm:pt-7">
                        <div className="flex flex-col gap-2.5">
                            <span className="font-mono text-xs tracking-wide text-brand-soft uppercase">
                                {String(project.id).padStart(2, "0")} · {project.category}
                            </span>
                            <h2 id="project-dialog-title" className="m-0 text-xl leading-tight font-extrabold tracking-tight sm:text-[26px]">
                                {project.shortTitle}
                            </h2>
                            <div className="flex flex-wrap gap-1.5">
                                {project.tools.map((tool) => (
                                    <span key={tool} className="rounded-lg border border-brand-line-strong bg-brand-raised px-2.5 py-1 font-mono text-xs text-[#d9d0e6]">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <button
                            ref={closeRef}
                            type="button"
                            onClick={onClose}
                            aria-label="Close"
                            className="btn-ghost flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl text-lg"
                        >
                            <FiX aria-hidden="true" />
                        </button>
                    </div>

                    <div className="custom-scrollbar flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-5 sm:px-7 sm:py-6">
                        {toParagraphs(project.subPara).map((paragraph, i) => (
                            <p key={i} className="m-0 text-[15px] leading-relaxed text-[#d9d0e6]">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-3 border-t border-brand-line p-4 sm:px-7 sm:py-[18px]">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2.5 rounded-xl px-5 py-[13px] text-[15px] font-semibold">
                            <FiGithub aria-hidden="true" />
                            View on GitHub
                        </a>
                        <button type="button" onClick={onClose} className="btn-ghost cursor-pointer rounded-xl px-5 py-[13px] text-[15px] font-semibold">
                            Back to projects
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default ProjectPopup;
