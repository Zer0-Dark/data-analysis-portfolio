import Image from "next/image"
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
    FaXingSquare,
    FaArrowAltCircleRight,
    FaArrowAltCircleLeft
} from "react-icons/fa";

function ProjectPopup({ handleShow, title, para, imgs, github, code }) {


    const [currentImg, setCurrentImg] = useState(0);
    const [scrollIndex, setScrollIndex] = useState(0);
    const [imgExpand, setImgExpand] = useState(false);
    const [visibleThumbnails, setVisibleThumbnails] = useState(4);
    useEffect(() => {
        if (window.innerWidth > 600) {

            setVisibleThumbnails(4)
        } else {
            setVisibleThumbnails(2)

        }
    }, [])


    function handleBigImgButton(dir) {
        if (dir === 0) {
            if (currentImg < imgs.length - 1) {

                setCurrentImg((prev) => prev + 1)
            }
        } else {
            if (currentImg > 0) {
                setCurrentImg((prev) => prev - 1)
            }
        }
    }

    function handleImgClick(e) {
        // For video elements, the id might be on the video tag itself
        setCurrentImg(Number(e.target.id))
    }

    function handlePrevScroll() {
        setScrollIndex(Math.max(0, scrollIndex - 1))
    }

    function handleNextScroll() {
        setScrollIndex(Math.min(imgs.length - visibleThumbnails, scrollIndex + 1))
    }

    const isVideo = (url) => url.toLowerCase().endsWith('.mp4');

    let imgsContainer = [];
    for (let i = scrollIndex; i < Math.min(scrollIndex + visibleThumbnails, imgs.length); i++) {
        const url = imgs[i];
        const isVid = isVideo(url);

        imgsContainer.push(
            isVid ? (
                <video
                    onClick={handleImgClick}
                    key={i}
                    id={i}
                    src={url}
                    className={`cursor-pointer object-cover rounded-xl w-32 h-18 bg-black ${currentImg == i ? "border-4 border-brand grayscale-0" : "grayscale-75 hover:grayscale-50"}`}
                    style={{ transform: "translateZ(20px)" }}
                    muted
                />
            ) : (
                <Image
                    onClick={handleImgClick}
                    key={i}
                    id={i}
                    width={1920}
                    height={1080}
                    src={url}
                    alt={"test"}
                    className={`cursor-pointer object-contain rounded-xl w-32 h-18  ${currentImg == i ? "border-4 border-brand grayscale-0" : "grayscale-75 hover:grayscale-50"}`}
                    style={{ transform: "translateZ(20px)" }}
                />
            )
        )
    }

    const currentUrl = imgs[currentImg];
    const currentIsVideo = isVideo(currentUrl);

    return (
        <div className=" w-screen h-screen fixed flex justify-center items-center  bg-[rgba(0,0,0,0.6)] top-0 left-0 z-50 text-white">
            {
                !imgExpand &&
                <div
                    className="flex flex-col items-center  lg:h-[90%] h-[95%] lg:w-[90%] w-[95%] bg-brand-dark relative rounded-md lg:px-12 px-5 border-2 border-brand">
                    <button
                        className=" cursor-pointer absolute top-4 right-4 text-4xl lg:text-6xl"
                        onClick={handleShow}>
                        <FaXingSquare />
                    </button>
                    <div className="w-full max-h-[30%]">
                        <h1 className="lg:mt-12 mt-10 lg:mb-16 mb-4 p-4 lg:mr-12 lg:text-4xl text-base font-black text-brand-white bg-brand-semi-dark rounded-2xl w-fit ">{title}</h1>
                    </div>
                    <div className="flex w-full lg:flex-row flex-col   lg:justify-between lg:items-start items-center lg:gap-12 gap-3 lg:h-[70%] pb-8">
                        {/* left container */}
                        <div className="lg:w-7/12 flex flex-col justify-between lg:h-full  ">
                            {currentIsVideo ? (
                                <video
                                    onClick={() => setImgExpand((prev) => !prev)}
                                    src={currentUrl}
                                    className="cursor-pointer w-full max-h-[70%] object-contain rounded-2xl bg-black"
                                    style={{ transform: "translateZ(20px)" }}
                                    controls
                                    autoPlay
                                    muted
                                />
                            ) : (
                                <Image
                                    onClick={() => setImgExpand((prev) => !prev)}
                                    width={1920}
                                    height={1080}
                                    src={currentUrl}
                                    alt={"test"}
                                    className=" cursor-pointer w-full max-h-[70%] object-contain rounded-2xl  "
                                    style={{ transform: "translateZ(20px)" }}

                                />
                            )}
                            <div className="flex  gap-4 py-4 mt-4 relative ">
                                <button
                                    onClick={handlePrevScroll}
                                    disabled={scrollIndex === 0}
                                    className="absolute cursor-pointer z-50 left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-brand text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-2xl font-bold">
                                    <FaArrowAltCircleLeft />
                                </button>
                                <div className="flex w-full gap-4 px-24 overflow-hidden justify-center items-center ">
                                    {imgsContainer}
                                </div>
                                <button
                                    onClick={handleNextScroll}
                                    disabled={scrollIndex >= imgs.length - visibleThumbnails}
                                    className="absolute cursor-pointer z-50 right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-brand text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-2xl font-bold">
                                    <FaArrowAltCircleRight />
                                </button>
                            </div>
                        </div>
                        {/* right container */}
                        <div className="lg:w-5/12  overflow-hidden max-h-full text-sm flex flex-col h-full ">
                            <p className="max-h-[90%] overflow-y-scroll overflow-x-hidden custom-scrollbar">
                                {para}
                            </p>
                            <a
                                target="_blank"
                                href={github}
                                className="text-4xl hover:text-brand w-full flex justify-end mt-auto">
                                <FaGithub />
                            </a>

                        </div>

                    </div>
                </div>
            }

            {
                imgExpand &&
                <div className=" absolute gap-1  flex  items-center justify-center h-[90%] w-[90%] bg-brand-dark border-2 border-brand  rounded-md px-12 ">

                    <button onClick={() => setImgExpand((prev) => !prev)} className=" absolute text-6xl top-6 right-6 cursor-pointer">
                        <FaXingSquare />
                    </button>
                    <button className="text-5xl text-brand rounded-xl ml-4 p-2 cursor-pointer" onClick={() => { handleBigImgButton(1) }}>
                        <FaArrowAltCircleLeft />
                    </button>
                    {currentIsVideo ? (
                        <video
                            src={currentUrl}
                            className="w-full max-h-[90%] object-contain rounded-2xl bg-black p-4"
                            style={{ transform: "translateZ(20px)" }}
                            controls
                            autoPlay
                        />
                    ) : (
                        <Image
                            width={1920}
                            height={1080}
                            src={currentUrl}
                            alt={"test"}
                            className=" w-full max-h-[90%] object-contain rounded-2xl  "
                            style={{ transform: "translateZ(20px)" }}
                        />
                    )}
                    <button className="text-5xl text-brand rounded-xl p-2 cursor-pointer mr-4" onClick={() => { handleBigImgButton(0) }}>
                        <FaArrowAltCircleRight />
                    </button>
                </div>
            }

        </div>
    )
}

export default ProjectPopup