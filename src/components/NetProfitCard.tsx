import React, { ReactNode } from 'react';
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

interface NetProfitCardProps {
    title: string;
    total: string;
    rate: string;
    levelUp?: boolean;
    children: ReactNode;
}

const NetProfitCard: React.FC<NetProfitCardProps> = ({
    title,
    total,
    rate,
    levelUp,
    children,
}) => {
    return (
        <div className="flex flex-row p-2 gap-4 ">
            <div className="flex flex-col w-3/5">
                    <span className="text-sm font-medium">{title}</span>
                    <h4 className="text-title-md font-bold text-black dark:text-white pt-4">
                        {total}
                    </h4>
                    <span
                        className={`pt-3 flex items-center gap-1 text-sm font-medium ${levelUp ? 'text-meta-3' : 'text-red-500'} `}
                    >
                        {levelUp ? <FaCaretUp /> : <FaCaretDown />}
                        {rate}
                    </span>
            </div>

            <div className='w-full'>
                {children}
            </div>
        </div>
    );
};

export default NetProfitCard;
