import Image from "next/image"
import { useState } from "react";

function ProjectPopup({ handleShow, title, para, imgs }) {

    const [currentImg, setCurrentImg] = useState(0)
    const [scrollIndex, setScrollIndex] = useState(0)
    const visibleThumbnails = 5

    function handleImgClick(e) {
        setCurrentImg(Number(e.target.id))
    }

    function handlePrevScroll() {
        setScrollIndex(Math.max(0, scrollIndex - 1))
    }

    function handleNextScroll() {
        setScrollIndex(Math.min(imgs.length - visibleThumbnails, scrollIndex + 1))
    }

    let imgsContainer = [];
    for (let i = scrollIndex; i < Math.min(scrollIndex + visibleThumbnails, imgs.length); i++) {
        imgsContainer.push(
            <Image
                onClick={handleImgClick}
                key={i}
                id={i}
                width={1920}
                height={1080}
                src={imgs[i]}
                alt={"test"}
                className={`cursor-pointer object-contain rounded-xl w-32 h-18  ${currentImg == i ? "border-4 border-brand grayscale-0" : "grayscale-75 hover:grayscale-50"}`}
                style={{ transform: "translateZ(20px)" }}
            />
        )
    }
    return (
        <div className=" w-screen h-screen fixed flex justify-center items-center  bg-[rgba(0,0,0,0.6)] top-0 left-0 z-50 text-white">

            <div className="flex flex-col items-center h-[90%] w-[90%] bg-brand-dark relative rounded-md px-12 border-2 border-brand">
                <button
                    className=" cursor-pointer absolute top-6 right-6 text-6xl"
                    onClick={handleShow}>
                    X
                </button>
                <div className="w-full">
                    <h1 className="mt-12 mb-16 p-4 mr-12 text-5xl font-black text-brand-white bg-brand-semi-dark rounded-2xl w-fit ">{title}</h1>
                </div>
                <div className="flex  justify-between gap-12 h-full pb-8">
                    {/* left container */}
                    <div className="w-7/12 flex flex-col justify-between h-full  ">
                        <Image
                            width={1920}
                            height={1080}
                            src={imgs[currentImg]}
                            alt={"test"}
                            className=" w-full max-h-[480px] object-contain rounded-2xl  "
                            style={{ transform: "translateZ(20px)" }}

                        />
                        <div className="flex  gap-4 py-4 mt-4 relative">
                            <button
                                onClick={handlePrevScroll}
                                disabled={scrollIndex === 0}
                                className="absolute z-50 left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-brand text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-2xl font-bold">
                                &lt;
                            </button>
                            <div className="flex w-full gap-4 px-12 overflow-hidden justify-center items-center ">
                                {imgsContainer}
                            </div>
                            <button
                                onClick={handleNextScroll}
                                disabled={scrollIndex >= imgs.length - visibleThumbnails}
                                className="absolute z-50 right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-brand text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-2xl font-bold">
                                &gt;
                            </button>
                        </div>
                    </div>
                    {/* right container */}
                    <div className="w-5/12">
                        <p className="text-xl">{para}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPopup