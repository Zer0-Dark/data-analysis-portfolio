'use client';
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

function Certifcate({ id, title = 'Certificate', info = '', img = '/313123.jpg', hoveredId = null, setHoveredId = () => { } }) {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                onClick={() => setIsOpen(true)}
                className="w-[500px] relative group border-1 rounded-md p-1 border-purple-950 cursor-pointer will-change-transform overflow-hidden">
                <Image
                    width={500}
                    height={281}
                    src={img}
                    alt={title}
                    className="w-full h-auto block"
                    priority={false}
                    loading="lazy"
                    draggable={false}
                />
                <div className="absolute bottom-0 left-0 pb-5 px-5 text-white z-30 text-2xl text-left w-full bg-[rgba(35,13,51,0.6)] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto will-change-transform">
                    <h1 className="my-2 font-semibold text-purple-300">{title}</h1>
                    <p className="text-base">{info}</p>
                </div>
            </motion.div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed top-0 left-0 bg-[rgba(0,0,0,0.6)] w-screen h-screen flex items-center justify-center z-50">
                        <motion.div
                            key="modal-content"
                            initial={{ scale: 0.5, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.5, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative">
                            {/* <button
                                onClick={() => setIsOpen(false)}
                                className="absolute -top-10 -right-30 text-white text-5xl font-bold hover:text-gray-300 transition-colors cursor-pointer">
                                ✕
                            </button> */}
                            <Image
                                width={1920}
                                height={1080}
                                src={img}
                                alt={title}
                                className="max-w-fit h-auto max-h-[85vh] object-contain rounded-lg"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Certifcate