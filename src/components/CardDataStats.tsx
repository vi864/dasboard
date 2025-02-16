import React, { ReactNode } from 'react';
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  children: ReactNode;
  bgColor:string
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  rate,
  levelUp,
  children,
  bgColor
}) => {
  return (
    <div className="h-full rounded-lg border border-stroke bg-white p-3 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className={`${bgColor} flex h-11.5 w-11.5 items-center justify-center rounded-full `}>
        {children}
      </div>

      <div className=" flex items-end justify-between">
        <div className='pt-1'>
          <span className="text-sm font-medium">{title}</span>
          <h4 className="text-title-md pt-2 font-bold text-black dark:text-white">
            {total}
          </h4>
        </div>
        <span
          className={`flex items-center gap-1 text-sm font-medium ${levelUp ? 'text-meta-3' : 'text-red-500'} `}
        >
          {levelUp ? <FaCaretUp /> : <FaCaretDown />          }
          {rate}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
