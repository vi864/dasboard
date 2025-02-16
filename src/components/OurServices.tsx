import { IoIosArrowDropright } from "react-icons/io";
import { OurServicesItems } from "../data/data"

const OurServices = () => {
    return (
        <div className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-3 pt-5 rounded-lg h-full">
        {OurServicesItems?.map((item: any, i: number) => (
            <div key={i}>
                <div className="flex gap-3 items-center">
                    {/* Icon */}
                    <div className={`${item?.bgColor} ${item?.textColor} icon rounded-full p-2`}>
                        {item?.icon}
                    </div>
                    
                    {/* Title */}
                    <div className="icon">
                        {item?.title}
                    </div>
                    
                    {/* Arrow */}
                    <div className="ml-auto hover:cursor-pointer">
                        <IoIosArrowDropright size={"25px"} />
                    </div>
                </div>
            </div>
        ))}
    </div>
    
    )
}

export default OurServices
