import React from "react";
import Discord_black from '../assets/discord_black.png'
import { useNavigate } from "react-router";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const navigate = useNavigate();
  return (
    <div
      className={`fixed inset-y-0 right-0 w-[70%] h-screen lg:w-[50%]   bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out  rounded-3xl`}
    >
      <div className="p-4 text-xl md:text-3xl">

        {/* Header for sidebar */}
        <div className="flex flex-row flex-wrap justify-between items-center text-center">
          <div className="flex flex-row items-center space-x-2">

          <img src={Discord_black} className="w-16 h-16" />
          <h1 className="font-extrabold">Discord</h1>
          </div>
          {/* <button className="w-xl p-4 bg-white hover:text-sky-600  text-lg lg:text-3xl font-bold rounded-3xl p-4 m-2" onClick={()=>navigate('/login')}>Login</button> */}
          <button className=" bg-white hover:text-sky-600   font-bold rounded-3xl  " onClick={()=>navigate('/login')}>
            Login
          </button>

          {/* text center in button */}
          <button className="text-black font-bold text-6xl pb-2 " onClick={toggleSidebar}>
            x
          </button>
        </div>

        {/* Navigation Optioins */}
        <ul className="mx-2 my-4 space-y-6 font-semibold text-xl md:text-3xl font-sans">
          <li>
            <a href="#" className="block py-2 px-4 ">
              Download
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 ">
              Nitro
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 ">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 ">
              Support
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 ">
              Safety
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 ">
              Careers
            </a>
          </li>
        </ul>

        {/* App Download Button */}
        <button className="w-[100%] font-sans text-xl md:text-4xl font-bold text-white bg-blue-600 rounded-3xl p-4 my-12">
          Download
        </button>
      </div>
    </div>
  );
}
