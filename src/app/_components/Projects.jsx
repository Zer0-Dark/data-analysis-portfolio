
'use client';
import { useState } from "react";
import Project from "./Project";
import SectionTitle from "./SectionTitle";
import projectsData from "../_data/projectsData.json";
import sections from "../_data/sections.json";


function Projects() {
    const [displayCount, setDisplayCount] = useState(5);
    const visibleProjects = projectsData.slice(0, displayCount);
    const hasMore = displayCount < projectsData.length;

    const handleLoadMore = () => {
        setDisplayCount((prev) => prev + 5);
    };

    return (
        <div className="lg:px-42 px-8 ">
            <SectionTitle title={sections.projects.title} />
            <div className="flex flex-wrap lg:gap-[30px] gap-6  ">
                {visibleProjects.map((project, idx) => (
                    <Project key={idx} title={project.title} para={project.para} imgs={project.imgs} github={project.github} />

                ))}
            </div>
            {hasMore && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleLoadMore}
                        className="px-6 py-3 bg-purple-600 font-bold text-2xl cursor-pointer text-white rounded-lg hover:bg-purple-700 transition-colors">
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
}

export default Projects
