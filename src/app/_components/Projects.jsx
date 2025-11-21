import Project from "./Project"
import SectionTitle from "./SectionTitle"

function Projects() {
    return (
        <div className="px-42">
            <SectionTitle title="Projects"></SectionTitle>
            <div className="flex flex-wrap gap-[30px] ">
                <Project title="hello this is Project title" para="this project is about testing some features online so idk what to do rn" />
                <Project title="hello this is Project title" para="this project is about testing some features online so idk what to do rn" />
                <Project title="hello this is Project title" para="this project is about testing some features online so idk what to do rn" />
                <Project title="hello this is Project title" para="this project is about testing some features online so idk what to do rn" />
                <Project title="hello this is Project title" para="this project is about testing some features online so idk what to do rn" />
                <Project title="hello this is Project title" para="this project is about testing some features online so idk what to do rn" />
            </div>


        </div>
    )
}

export default Projects