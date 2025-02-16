import { useState } from 'react';
import { Link } from 'react-router-dom';
import ClickOutside from '../ClickOutside';
import { CiMail } from "react-icons/ci";
import { Messages } from '../../data/data';

const DropdownMessage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <li className="relative">
        <Link
          onClick={() => {
            setNotifying(false);
            setDropdownOpen(!dropdownOpen);
          }}
          className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
          to="#"
        >
          <span
            className={`absolute -top-0.5 -right-0.5 z-1 h-2 w-2 rounded-full bg-meta-1 ${notifying === false ? 'hidden' : 'inline'
              }`}
          >
            <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
          </span>

          <CiMail size={"20px"} />
        </Link>

        {dropdownOpen && (
          <div
            className={`absolute -right-16 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80`}
          >
            <div className="px-4.5 py-3">
              <h5 className="text-sm font-medium text-bodydark2">Messages</h5>
            </div>

            <ul className="flex h-auto flex-col overflow-y-auto">
              {Messages?.map((item: any, i: number) => {
                return <li key={i}>
                  <Link
                    className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                    to="/messages"
                  >
                    <div className="h-12.5 w-12.5 rounded-full">
                      <img src={item?.profile} alt="User" />
                    </div>

                    <div>
                      <h6 className="text-sm font-medium text-black dark:text-white">
                        {item?.name}
                      </h6>
                      <p className="text-sm">{item?.message}</p>
                      <p className="text-xs">{item?.time}</p>
                    </div>
                  </Link>
                </li>
              })}
            </ul>
          </div>
        )}
      </li>
    </ClickOutside>
  );
};

export default DropdownMessage;
