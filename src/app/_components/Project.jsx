'use client';
import { useRef } from "react";
import Image from "next/image";
import { FiArrowRight, FiGithub, FiPlay } from "react-icons/fi";

const isVideo = (url) => url.toLowerCase().endsWith(".mp4");

function Project({ project, onOpen }) {
    const videoRef = useRef(null);
    const video = project.imgs.find(isVideo);
    const poster = project.imgs.find((url) => !isVideo(url));
    const num = String(project.id).padStart(2, "0");

    function playPreview() {
        const el = videoRef.current;
        if (!el || !window.matchMedia("(hover: hover)").matches) return;
        el.play().catch(() => { });
    }

    function stopPreview() {
        const el = videoRef.current;
        if (!el) return;
        el.pause();
    }

    return (
        <article
            onMouseEnter={playPreview}
            onMouseLeave={stopPreview}
            className="card-lift group flex h-full flex-col overflow-hidden rounded-[20px] border border-brand-line bg-brand-semi-dark"
        >
            <button
                type="button"
                onClick={onOpen}
                aria-label={`Open ${project.shortTitle} case study`}
                className="grid-bg relative block aspect-video w-full cursor-pointer overflow-hidden border-b border-brand-line bg-[#170e22]"
            >
                {poster && (
                    <Image
                        src={poster}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                        className="media-zoom object-cover"
                    />
                )}
                {video && (
                    <video
                        ref={videoRef}
                        src={video}
                        muted
                        loop
                        playsInline
                        preload="none"
                        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                )}
                <span className="absolute top-3.5 left-3.5 rounded-md bg-brand-dark/80 px-2 py-1 font-mono text-xs text-brand-soft">{num}</span>
                {video && (
                    <span className="play-badge absolute inset-0 m-auto flex h-[52px] w-[52px] items-center justify-center rounded-full bg-brand text-white shadow-[0_10px_30px_rgba(135,80,247,0.45)]">
                        <FiPlay aria-hidden="true" className="ml-0.5 fill-current" />
                    </span>
                )}
            </button>

            <div className="flex flex-1 flex-col gap-3 p-5 sm:p-[22px]">
                <span className="font-mono text-xs tracking-wide text-brand-soft uppercase">{project.category}</span>
                <h3 className="m-0 text-xl leading-snug font-bold">{project.shortTitle}</h3>
                <p className="m-0 flex-1 text-[15px] leading-relaxed text-brand-muted">{project.summary}</p>
                <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool) => (
                        <span key={tool} className="rounded-lg border border-brand-line-strong bg-brand-raised px-2.5 py-1 font-mono text-xs text-[#d9d0e6]">
                            {tool}
                        </span>
                    ))}
                </div>
                <div className="mt-1 flex items-center justify-between gap-3 border-t border-brand-line pt-3.5">
                    <button
                        type="button"
                        onClick={onOpen}
                        className="inline-flex min-h-11 cursor-pointer items-center gap-2 text-[15px] font-semibold text-brand-soft hover:text-white"
                    >
                        View case study
                        <FiArrowRight className="arrow" aria-hidden="true" />
                    </button>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.shortTitle} on GitHub`}
                        className="btn-ghost flex h-11 w-11 items-center justify-center rounded-xl text-xl"
                    >
                        <FiGithub aria-hidden="true" />
                    </a>
                </div>
            </div>
        </article>
    );
}

export default Project;
