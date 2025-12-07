
import Project from "./Project";
import SectionTitle from "./SectionTitle";
import projectsData from "../_data/projectsData.json";
import sections from "../_data/sections.json";


function Projects() {
    return (
        <div className="lg:px-42 px-8 ">
            <SectionTitle title={sections.projects.title} />
            <div className="flex flex-wrap lg:gap-[30px] gap-2 ">
                {projectsData.map((project, idx) => (
                    <Project key={idx} title={project.title} para={project.para} imgs={project.imgs} />

                ))}
            </div>
        </div>
    );
}

export default Projects