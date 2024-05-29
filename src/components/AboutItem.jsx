/* eslint-disable react/prop-types */

const AboutItem = ({title, details}) => {
    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
            <li className="font-bold mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-bold text-white bg-[#483C32] rounded-md">{title}</span>
                </p>
                <p className="my-2 text-base font-bold text-[#483C32]">{details}</p>
            </li>
        </ol>
    )
}

export default AboutItem