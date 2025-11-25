
import Project from "./Project";
import SectionTitle from "./SectionTitle";
import projectsData from "../_data/projectsData.json";


function Projects() {
    return (
        <div className="px-42">
            <SectionTitle title="Projects" />
            <div className="flex flex-wrap gap-[30px] ">
                {projectsData.map((project, idx) => (
                    <Project key={idx} title={project.title} para={project.para} />

                ))}
            </div>
        </div>
    );
}

export default Projects