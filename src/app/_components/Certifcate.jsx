import Image from "next/image"

function Certifcate() {
    return (
        <div className="w-[500px] relative group">
            <Image
                width={1920}
                height={1080}
                src={"/313123.jpg"}
                alt={"test"}
                className=""
                style={{ transform: "translateZ(20px)" }}
            />
            <div className="absolute bottom-0 left-0 pb-5 pl-5 text-white z-30 text-2xl text-left w-full bg-[rgba(35,13,51,0.6)] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                <h1 className="my-2 font-semibold text-purple-300">Name of the certifcate</h1>
                <p className="text-base">Info about the certifcate and when you took it etc dasklasdLKJ DASJLKADS JLK ASDLJKD ASLKJA SDLJK ADSJLK </p>
            </div>
        </div>
    )
}

export default Certifcate