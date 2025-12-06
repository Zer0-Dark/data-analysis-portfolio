import Image from "next/image"

function ProjectPopup({ handleShow }) {
    return (
        <div className=" w-screen h-screen fixed flex justify-center items-center  bg-[rgba(0,0,0,0.6)] top-0 left-0 z-50 text-white">

            <div className="flex flex-col items-center h-[90%] w-[90%] bg-amber-950 relative rounded-md px-12">
                <button
                    className=" cursor-pointer absolute top-6 right-16 text-3xl"
                    onClick={handleShow}>
                    close
                </button>
                <div className="bg- ">
                    <h1 className="mt-12 mb-16 text-6xl font-black ">Project Name For Test</h1>
                </div>
                <div className="flex justify-between gap-12">
                    {/* left container */}
                    <div className="w-1/2">
                        <Image
                            width={1920}
                            height={1080}
                            src={"/313123.jpg"}
                            alt={"test"}
                            className="w-full  object-contain rounded mb-4 grayscale-25 hover:grayscale-0 transition-all timin"
                            style={{ transform: "translateZ(20px)" }}

                        />
                        <div>
                            <p>gallery</p>
                            <p>gallery</p>
                            <p>gallery</p>
                        </div>
                    </div>
                    {/* right container */}
                    <div className="w-1/2">
                        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum labore provident quasi nemo temporibus error nam. Tempore impedit necessitatibus incidunt omnis, perferendis et deleniti quisquam nesciunt nisi aut. Similique, sint?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPopup