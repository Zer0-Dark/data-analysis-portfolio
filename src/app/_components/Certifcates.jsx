'use client';
import Certifcate from "./Certifcate"
import SectionTitle from "./SectionTitle"
import sections from "../_data/sections.json"
import certificatesData from "../_data/certificatesData.json"
import { useState } from "react";


function Certifcates() {
    const [hoveredId, setHoveredId] = useState(null)

    return (
        <div className="lg:px-42 px-8 ">
            <SectionTitle title={sections.certificates.title} />
            <div className="flex flex-wrap gap-6 ">
                {certificatesData.map((c) => (
                    <Certifcate
                        key={c.id}
                        id={c.id}
                        title={c.title}
                        info={c.info}
                        img={c.img}
                        hoveredId={hoveredId}
                        setHoveredId={setHoveredId}
                    />
                ))}
            </div>


        </div>
    )
}

export default Certifcates