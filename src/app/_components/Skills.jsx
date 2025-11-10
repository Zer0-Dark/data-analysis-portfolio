import SectionTitle from "./SectionTitle"
import Skill from "./Skill"

function Skills() {
    return (
        <div className="bg-brand-dark px-42 mt-12 mb-12">
            <SectionTitle title="my skills" />
            <div className="flex justify-between ">
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>



        </div>
    )
}

export default Skills