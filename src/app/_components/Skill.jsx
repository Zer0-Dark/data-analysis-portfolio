import Image from "next/image"

function Skill() {
    return (
        <div className=" w-fit">
            <div className="w-64 h-72 bg-brand-semi-dark flex flex-col  justify-center items-center  hover:bg-brand transition-all duration-500 rounded-2xl ">
                <Image src="/excel.png" alt="test" width={150} height={100}></Image>
                <h1>Excel</h1>
            </div>
        </div>

    )
}

export default Skill