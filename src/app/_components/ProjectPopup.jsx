import Image from "next/image"

function ProjectPopup() {
    return (
        <div className=" w-screen h-screen fixed  bg-black top-0 left-0 z-50 text-white">
            <div>
                {/* <Image /> */}
            </div>
            <div>
                <h1>More info</h1>
                <p>this is some info</p>
            </div>
        </div>
    )
}

export default ProjectPopup