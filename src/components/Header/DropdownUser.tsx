import { useState } from 'react';
import { Link } from 'react-router-dom';
import ClickOutside from '../ClickOutside';
import UserOne from '../../images/user/user-01.png';
import { CiUser } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >

        <span className="h-10 w-10 rounded-full">
          <img src={UserOne} alt="User" />
        </span>
      </Link>

      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}
        >
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
            <li>
              <Link
                onClick={() => setDropdownOpen(!dropdownOpen)}
                to="/profile"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <CiUser size={"25px"} />
                My Profile
              </Link>
            </li>
          </ul>
          <Link
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            to={"/auth/signin"}>
            <CiLogout size={"25px"} />
            Log Out
          </Link>
        </div>
      )}
    </ClickOutside>
  );
};

export default DropdownUser;
