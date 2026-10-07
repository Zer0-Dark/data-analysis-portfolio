import data from "../_data/sections.json";

function Marquee() {
    const { tools, industries } = data.marquee;

    return (
        <section aria-label="Tools and industries" className="flex flex-col gap-2 pt-12 md:pt-[72px]">
            <div className="marquee">
                <div className="marquee-track">
                    {[...tools, ...tools].map((item, i) => (
                        <span
                            key={i}
                            aria-hidden={i >= tools.length}
                            className="inline-flex items-center gap-6 pr-6 text-4xl font-extrabold whitespace-nowrap tracking-tight md:gap-9 md:pr-9 md:text-[64px]"
                        >
                            {item}
                            <span aria-hidden="true" className="h-3 w-3 rotate-45 rounded-[4px] bg-brand md:h-3.5 md:w-3.5" />
                        </span>
                    ))}
                </div>
            </div>
            <div className="marquee">
                <div className="marquee-track reverse">
                    {[...industries, ...industries].map((item, i) => (
                        <span
                            key={i}
                            aria-hidden={i >= industries.length}
                            className="inline-flex items-center gap-6 pr-6 text-4xl font-extrabold whitespace-nowrap tracking-tight md:gap-9 md:pr-9 md:text-[64px]"
                        >
                            <span className="text-outline">{item}</span>
                            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full border-2 border-[#6d55a0]" />
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Marquee;
