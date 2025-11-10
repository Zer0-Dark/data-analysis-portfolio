
function SectionTitle({ title }) {
    return (
        <div className="flex flex-col justify-center items-center mt-24 mb-12">
            <h1 className="text-6xl uppercase mb-6 font-bold text-brand">{title}</h1>
            <p className="w-[650px] text-center">We put your ideas and thus your wishes in the form of a unique web
                project that inspires you and you customers.</p>
        </div>
    )
}
export default SectionTitle;