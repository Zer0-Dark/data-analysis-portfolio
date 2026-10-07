import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import sections from "../_data/sections.json";

function Skills() {
    const { skills } = sections;

    return (
        <section id="skills" className="mx-auto flex max-w-[1200px] flex-col gap-10 px-4 pt-20 pb-6 sm:px-6 md:pt-24">
            <SectionTitle eyebrow={skills.eyebrow} title={skills.title} intro={skills.intro} />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
                {skills.items.map((skill, i) => (
                    <Reveal key={skill.name} delay={i * 0.08} className={i === skills.items.length - 1 ? "col-span-2 sm:col-span-1" : ""}>
                        <div className="skill-card flex h-full flex-col items-center gap-4 rounded-[20px] border border-brand-line bg-brand-semi-dark px-5 py-7">
                            <div className="flex h-[72px] w-[72px] items-center justify-center">
                                <Image src={skill.icon} alt="" width={64} height={64} className="max-h-16 w-auto object-contain" />
                            </div>
                            <span className="text-[17px] font-bold">{skill.name}</span>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default Skills;
