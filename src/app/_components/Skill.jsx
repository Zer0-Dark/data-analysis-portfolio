'use client';
import Image from "next/image"
import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "motion/react";

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = 20 / 2;

function Skill({ skillName, skillIcon }) {
    const ref = useRef(null);
    const containerRef = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-fit p-8 uppercase"
            style={{ perspective: "1000px" }}
        >
            <motion.div
                ref={ref}
                style={{
                    transformStyle: "preserve-3d",
                    transform,
                }}
                className="w-54 h-62 bg-brand-semi-dark flex flex-col justify-center items-center hover:bg-brand transition-colors duration-500 rounded-2xl"
            >
                <div
                    style={{
                        transform: "translateZ(75px)",
                        transformStyle: "preserve-3d",
                    }}
                    className="flex flex-col items-center cursor-pointer"
                >
                    <Image
                        style={{ transform: "translateZ(50px)" }}
                        src={skillIcon}
                        alt="test"
                        width={130}
                        height={80}
                    />
                    <h1
                        style={{ transform: "translateZ(75px)" }}
                        className="mt-4 text-xl font-bold"
                    >
                        {skillName}
                    </h1>
                </div>
            </motion.div>
        </div>
    )
}

export default Skill