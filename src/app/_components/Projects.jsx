'use client';
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Project from "./Project";
import ProjectPopup from "./ProjectPopup";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import projectsData from "../_data/projectsData.json";
import sections from "../_data/sections.json";

const PAGE_SIZE = 6;

function Projects() {
    const [filter, setFilter] = useState("All");
    const [showAll, setShowAll] = useState(false);
    const [active, setActive] = useState(null);

    const categories = useMemo(() => {
        const counts = projectsData.reduce((acc, p) => {
            acc[p.category] = (acc[p.category] || 0) + 1;
            return acc;
        }, {});
        const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
        return [["All", projectsData.length], ...sorted];
    }, []);

    const filtered = filter === "All" ? projectsData : projectsData.filter((p) => p.category === filter);
    const visible = showAll ? filtered : filtered.slice(0, PAGE_SIZE);

    function pick(category) {
        setFilter(category);
        setShowAll(false);
    }

    return (
        <section id="projects" className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 pt-20 pb-6 sm:px-6 md:pt-24">
            <SectionTitle eyebrow={sections.projects.eyebrow} title={sections.projects.title} intro={sections.projects.intro} />

            <Reveal>
                <div role="group" aria-label="Filter projects by industry" className="-mx-4 flex gap-2.5 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
                    {categories.map(([category, count]) => {
                        const on = category === filter;
                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() => pick(category)}
                                aria-pressed={on}
                                className={`chip inline-flex min-h-11 shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-white ${on ? "border-brand bg-brand" : "border-brand-line-strong bg-brand-semi-dark"}`}
                            >
                                {category}
                                <span className="font-mono text-xs opacity-75">{count}</span>
                            </button>
                        );
                    })}
                </div>
            </Reveal>

            <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                    {visible.map((project, i) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay: (i % 3) * 0.08 }}
                        >
                            <Project project={project} onOpen={() => setActive(project)} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filtered.length > PAGE_SIZE && (
                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={() => setShowAll((v) => !v)}
                        className="btn-ghost min-h-11 cursor-pointer rounded-xl bg-transparent px-7 py-[15px] font-semibold"
                    >
                        {showAll ? "Show fewer" : `Show all ${filtered.length} projects`}
                    </button>
                </div>
            )}

            <AnimatePresence>
                {active && <ProjectPopup key={active.id} project={active} onClose={() => setActive(null)} />}
            </AnimatePresence>
        </section>
    );
}

export default Projects;
