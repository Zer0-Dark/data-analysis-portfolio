
'use client';
import { motion } from "motion/react";

function SectionTitle({ title }) {
    return (
        <div className="flex flex-col justify-center items-center mt-24 mb-12">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="lg:text-7xl text-6xl font-extrabold uppercase tracking-wider leading-none mb-6 inline-flex gap-4"
                style={{
                    background: "linear-gradient(to right, #8750F7 0%, #FFFFFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                }}
            >
                {title}
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="lg:w-[650px] text-center"
            >
                We put your ideas and thus your wishes in the form of a unique web
                project that inspires you and you customers.
            </motion.p>
        </div>
    )
}
export default SectionTitle;