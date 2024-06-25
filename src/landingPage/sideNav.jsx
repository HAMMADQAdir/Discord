import React from 'react';
import logo from "./icons8-discord-480.png";

const SideNav = () => {
  return (
    <>
      <aside className="h-screen bg-orange-600">
        <nav className="h-full w-28 flex flex-col border-r shadow-sm bg-[#1e1f22] relative">
          <div className="p-4 pb-2 flex flex-row items-center relative">
            <div id="sideline" className="absolute left-0 bg-white h-[60px] w-2 rounded-r-3xl" ></div>
            <img src={logo} alt="logo" className="ml-2 h-16 w-16 bg-clip-border bg-[#536dfe] hover:rounded-3xl rounded-full" />
          </div>
          <ul className="flex flex-col mt-4 space-y-2">
            <li>
              <a href="#" className="text-white p-2 hover:bg-orange-500 rounded-md">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white p-2 hover:bg-orange-500 rounded-md">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white p-2 hover:bg-orange-500 rounded-md">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white p-2 hover:bg-orange-500 rounded-md">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default SideNav;
