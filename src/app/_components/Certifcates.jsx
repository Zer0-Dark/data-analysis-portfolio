'use client';
import Certifcate from "./Certifcate"
import SectionTitle from "./SectionTitle"
import sections from "../_data/sections.json"
import certificatesData from "../_data/certificatesData.json"
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react"


function Certifcates() {
    const [displayCount, setDisplayCount] = useState(5)
    const visibleCertificates = certificatesData.slice(0, displayCount)
    const hasMore = displayCount < certificatesData.length

    const handleLoadMore = () => {
        setDisplayCount(prev => prev + 5)
    }

    return (
        <div
            className="lg:px-42 px-8 " id="certificates">
            <SectionTitle title={sections.certificates.title} />
            <div className="flex flex-wrap gap-6 justify-center items-center ">
                {visibleCertificates.map((c) => (
                    <Certifcate
                        key={c.id}
                        id={c.id}
                        title={c.title}
                        info={c.info}
                        img={c.img}
                    />
                ))}
            </div>
            {hasMore && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleLoadMore}
                        className="px-6 py-3 bg-purple-600 text-white font-bold text-2xl cursor-pointer rounded-lg hover:bg-purple-700 transition-colors">
                        Load More
                    </button>
                </div>
            )}
        </div>
    )
}

export default Certifcates