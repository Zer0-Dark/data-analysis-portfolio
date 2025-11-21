'use client'
import { motion } from "motion/react";
import { useEffect, useState } from "react";

function Loader() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-screen h-screen fixed top-0 left-0 bg-brand-dark z-50 flex justify-center items-center overlay"
        >
            <div className="flex flex-col items-center gap-8">
                <motion.div
                    className="relative w-24 h-24"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <motion.div
                        className="absolute inset-0 border-12 border-brand border-t-transparent rounded-full"
                    />
                </motion.div>
                <motion.h1
                    className="text-4xl font-bold text-white"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                >
                    Loading...
                </motion.h1>
            </div>
        </motion.div>
    )
}

export default Loader