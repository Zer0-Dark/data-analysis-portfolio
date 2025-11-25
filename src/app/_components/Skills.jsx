import SectionTitle from "./SectionTitle"
import Skill from "./Skill"

function Skills() {
    return (
        <div className=" lg:px-42 px-8  mt-12 mb-12">
            <SectionTitle title="my skills" />
            <div className="flex flex-wrap lg:justify-between justify-center  ">
                <Skill skillName="Excel" skillIcon={"/excel.png"} />
                <Skill skillName="Power Bi" skillIcon={"/power_bi.svg"} />
                <Skill skillName="Tableau" skillIcon={"/tablu.png"} />
                <Skill skillName="Python" skillIcon={"/python.png"} />
                <Skill skillName="SQL" skillIcon={"/sql.png"} />
            </div>



        </div>
    )
}

export default Skills