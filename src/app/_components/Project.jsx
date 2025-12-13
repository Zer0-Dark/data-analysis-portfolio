'use client';
import React, { useRef, useState } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "motion/react";
import Image from "next/image";
import ProjectPopup from "./ProjectPopup";
const ROTATION_RANGE = 8;
const HALF_ROTATION_RANGE = 8 / 2;



function Project({ title, para, imgs }) {

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

    const ref = useRef(null);
    const containerRef = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;



    const [showMoreInfo, setShowMoreInfo] = useState(false);

    function handleShow() {
        setShowMoreInfo((value) => !value)
    }




    return (
        <>

            <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="lg:w-[calc(50%_-_15px)]  lg:p-4 cursor-pointer"
                style={{ perspective: "2000px" }}
                onClick={handleShow}
            >
                <motion.div
                    ref={ref}
                    style={{
                        transformStyle: "preserve-3d",
                        transform,
                    }}
                    className="bg-brand-semi-dark rounded-xl lg:p-6 p-2 text-white border-1 border-purple-950"
                >
                    <div
                        style={{
                            transform: "translateZ(30px)",
                            transformStyle: "preserve-3d",
                        }}
                        className="p-4"
                    >
                        {imgs[0].toLowerCase().endsWith('.mp4') ? (
                            <video
                                src={imgs[0]}
                                className="w-full max-h-96 h-fit object-contain rounded lg:mb-12 mb-10 bg-black"
                                style={{ transform: "translateZ(20px)" }}
                                muted
                                autoPlay
                                loop
                                playsInline
                            />
                        ) : (
                            <Image
                                width={1920}
                                height={1080}
                                src={imgs[0]}
                                alt={title}
                                className="w-full max-h-96  h-fit  object-contain rounded lg:mb-12 mb-10 "
                                style={{ transform: "translateZ(20px)" }}
                            />
                        )}
                        <h1
                            className="lg:text-3xl text-xl capitalize font-bold mb-2 text-brand"
                            style={{ transform: "translateZ(40px)" }}
                        >
                            {title}
                        </h1>
                        <p
                            className="text-white mb-4 lg:text-base text-sm"
                            style={{ transform: "translateZ(30px)" }}
                        >
                            {para}
                        </p>
                        <button
                            className="px-4 py-2 lg:text-xl bg-brand text-brand-dark font-bold hover:text-white rounded border-2 border-transparent hover:bg-brand-dark hover:border-brand cursor-pointer z-30"
                            style={{ transform: "translateZ(50px)" }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowMoreInfo((value) => !value);
                            }}
                        >
                            See more
                        </button>


                    </div>
                </motion.div>
            </div>
            {showMoreInfo &&
                <ProjectPopup handleShow={handleShow} title={title} para={para} imgs={imgs} />
            }
        </>
    )
}

export default Project