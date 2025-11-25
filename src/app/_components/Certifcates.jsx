import Certifcate from "./Certifcate"
import SectionTitle from "./SectionTitle"


function Certifcates() {
    return (
        <div className="lg:px-42 px-8 ">
            <SectionTitle title="Certificates" />
            <div className="flex flex-wrap  gap-6">
                <Certifcate />
                <Certifcate />
                <Certifcate />
                <Certifcate />
                <Certifcate />
            </div>


        </div>
    )
}

export default Certifcates