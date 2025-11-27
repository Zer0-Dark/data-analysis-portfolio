import SectionTitle from "./SectionTitle"
import Skill from "./Skill"
import sections from "../_data/sections.json"

function Skills() {
    return (
        <div className=" lg:px-42 px-8  mt-12 mb-12">
            <SectionTitle title={sections.skills.title} />
            <div className="flex flex-wrap lg:justify-between justify-center  ">
                {sections.skills.items.map((s, i) => (
                    <Skill key={i} skillName={s.name} skillIcon={s.icon} />
                ))}
            </div>
        </div>
    )
}

export default Skills