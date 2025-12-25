'use client';
import Image from "next/image"
import { FaDownload, FaBars, FaTimes } from "react-icons/fa"
import data from "../_data/sections.json"
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "motion/react";
import { useState } from "react";

function NewHero() {
    const { hero, skills } = data
    const [hoverd, setHoverd] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=" w-full h-screen flex flex-col lg:px-12 px-8   ">
            <div className="w-full mb-4 pt-6  flex justify-between relative">
                <div className="hidden md:flex lg:gap-5 gap-2 lg:text-xl text-sm [&>a]:bg-brand-semi-dark [&>a]:flex [&>a]:justify-center [&>a]:items-center [&>a]:lg:px-4 [&>a]:px-2 [&>a]:lg:py-2 [&>a]:rounded-xl [&>a]:hover:bg-brand [&>a]:hover:text-black [&>a]:font-bold [&>a]:transition-all [&>a]:duration-300">
                    <a href="#projects">Projects</a>
                    <a href="#certificates">Certifecates</a>
                    <a href="#contact">Contact Me</a>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="p-2 bg-brand-semi-dark rounded-xl flex items-center justify-center cursor-pointer">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    {isOpen && (
                        <div className="absolute left-4 top-16 w-44 bg-brand-semi-dark rounded-xl p-3 flex flex-col gap-2 z-50">
                            <a href="#projects" onClick={() => setIsOpen(false)} className="flex justify-center items-center px-4 py-2 rounded-xl hover:bg-brand hover:text-black font-bold transition-all duration-300">Projects</a>
                            <a href="#certificates" onClick={() => setIsOpen(false)} className="flex justify-center items-center px-4 py-2 rounded-xl hover:bg-brand hover:text-black font-bold transition-all duration-300">Certifecates</a>
                            <a href="#contact" onClick={() => setIsOpen(false)} className="flex justify-center items-center px-4 py-2 rounded-xl hover:bg-brand hover:text-black font-bold transition-all duration-300">Contact Me</a>
                        </div>
                    )}
                </div>
                <div>
                    <a href={hero.cvLink}>
                        <button className="text-xl bg-brand-semi-dark py-2 px-4 font-bold  rounded border-2 border-brand cursor-pointer hover:bg-brand hover:text-black flex gap-2 items-center transition-all duration-300">
                            Download Cv
                            <FaDownload />
                        </button>
                    </a>

                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 h-[100%] pb-12  ">
                <div className="w-full md:w-1/4 flex flex-col mt-[4%] relative order-2 md:order-none ">
                    <h1 className="text-3xl md:text-5xl font-black mb-4">
                        {hero.name.split(" ").slice(0, 2).join(" ")} <br />
                        {hero.name.split(" ").slice(2).join(" ")}
                    </h1>
                    <h2 className="text-xl md:text-3xl font-semibold text-brand mb-6 ">{hero.role}</h2>
                    <p className=" text-sm">{hero.description}</p>
                    <div className=" hidden md:block absolute bottom-0 left-0 w-[100%] z-40 text-xs">
                        {hero.subDescription && hero.subDescription.map((desc, index) => (
                            <div key={index} className={`bg-brand-dark w-[140%] ${index === 1 ? 'w-[160%]' : ''} rounded-xl ${index === 0 ? '-mb-5 pb-8' : ''} pl-0 p-4`}>
                                <p>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-2/4 h-[50vh] md:h-[100%] relative order-1 md:order-none ">
                    <Image
                        fill
                        src={hero.heroImage}
                        alt={hero.name}
                        className="max-h-full object-contain "
                    />
                </div>
                <div className="w-full md:w-1/4 relative hidden md:block">
                    <div className=" absolute top-[30%] -left-48 flex flex-row-reverse flex-wrap gap-12  w-92  ">
                        {skills.items.slice(0, 3).map((skill, index) => (
                            <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onHoverStart={() => setHoveredIndex(index)} // Set the specific index
                                onHoverEnd={() => setHoveredIndex(null)}    // Reset to null
                                key={index} className="w-28 h-28 bg-brand-semi-dark rounded-xl border-2 border-brand flex justify-center items-center">
                                <Image
                                    style={{ transform: "translateZ(50px)" }}
                                    src={skill.icon}
                                    alt={skill.name}
                                    width={index === 2 ? 80 : 100}
                                    height={50}
                                />
                                {hoveredIndex === index && (
                                    <div className="absolute -bottom-10 bg-black text-white px-2 py-1 rounded-xl ">
                                        {skill.name}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewHero