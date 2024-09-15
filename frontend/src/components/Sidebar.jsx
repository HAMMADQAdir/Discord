import React from "react";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div
      className={`fixed inset-y-0 right-0 w-[70%] h-screen lg:w-[50%]   bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out  rounded-3xl`}
    >
      <div className="p-4 text-xl md:text-3xl">
        <div className="flex flex-row flex-wrap justify-between content-center">
          <h1 className=" font-sans font-bold mb-4  ">Discord</h1>
          <button className="p-4 bg-white hover:text-sky-600   font-bold rounded-3xl p-4 m-2">
            Login
          </button>
          <button className="" onClick={toggleSidebar}>
            ❌
          </button>
        </div>
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
        <button className="w-[100%] font-sans text-xl md:text-4xl font-bold text-white bg-blue-600 rounded-3xl p-4 my-12">
          Download
        </button>
      </div>
    </div>
  );
}
