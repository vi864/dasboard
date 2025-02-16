import { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { sidebarMenu } from '../../data/data';
import { FaArrowLeft } from "react-icons/fa";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;
  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <aside
      ref={sidebar}
      className={`absolute px-2 left-0 top-0 z-9999 flex h-screen  flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      <div className="flex items-center justify-between gap-2  py-5.5 lg:py-6.5">
        <NavLink to="/" className="px-5 text-blue-300">
          <RxDashboard size={"30px"} />
        </NavLink>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <FaArrowLeft />
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-3 py-1">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {sidebarMenu?.map((nav: any, i: number) => {
                return <div key={i}>
                  <NavLink
                    to={nav?.href}
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 font-medium text-bodydark1 ${pathname === nav?.href ? "border-l-4 border-l-blue-300 text-blue-300 px-3" : "px-4"
                      }`}
                  >
                    {nav?.icon}
                  </NavLink>
                </div>
              })}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
