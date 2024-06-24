import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function Header() {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false)

  const toggleSidebar = () =>{
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="px-3 flex align-center justify-between 2xl:justify-around font-sans">
      <div>
        <img  loading="lazy" className="w-[60%] lg:w-[100%] h-[100%] cursor-pointer" src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg" alt="" />
    
        </div>
      <div className="hidden 2xl:flex  2xl:flex-wrap 2xl:content-center">
        <ul className=" flex  space-x-12 text-white font-bold text-3xl cursor-pointer ">
          <li className="hover:underline">Download</li>
          <li className="hover:underline">Discover</li>
          <li className="hover:underline">Suppport</li>
          <li className="hover:underline">Nitro</li>
          <li className="hover:underline">Safety</li>
          <li className="hover:underline">Blog</li>
          <li className="hover:underline">Careers</li>
        </ul>
      </div>
      <div className="flex justify-end content-center">
        <button className="p-4 bg-white hover:text-sky-600  text-lg lg:text-3xl font-bold rounded-3xl p-4 m-2">Login</button>
        <img  className="h-[70%] lg:h-[100%] mx-2 2xl:hidden cursor-pointer my-auto"  onClick={()=>toggleSidebar()} loading="lazy" src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/625846fc39fbe53385840143_1%20(3).svg" alt="" />
      </div>
      <Sidebar  isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}
