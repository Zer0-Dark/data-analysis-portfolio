
import Project from "./Project";
import SectionTitle from "./SectionTitle";
import projectsData from "../_data/projectsData.json";


function Projects() {
    return (
        <div className="lg:px-42 px-8 ">
            <SectionTitle title="Projects" />
            <div className="flex flex-wrap lg:gap-[30px] gap-2 ">
                {projectsData.map((project, idx) => (
                    <Project key={idx} title={project.title} para={project.para} />

                ))}
            </div>
        </div>
    );
}

export default Projects