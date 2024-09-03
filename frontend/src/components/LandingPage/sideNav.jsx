import React, { useState } from "react";
import icon from "../LandingPage/icons8-discord-480.png";
import profileIcon from "../LandingPage/hoq.jpg";
import { CgAddR } from "react-icons/cg";
import AddingServer from "./addingServer";

const SideNav = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isAddingServerOpen,setIsAddingServerOpen] = useState(false);
  const handleClick = (index) => {
    setActiveIndex(index);
    setIsAddingServerOpen(!isAddingServerOpen);

  };

  return (
    <div>
    <aside className="fixed top-0 left-0 h-full w-30 bg-orange-400">
      <nav className="h-full w-28 bg-black">
        <div className="flex items-center h-24" onClick={() => handleClick(0)}>
          <div
            className={`w-2 h-16 p-0 ${
              activeIndex === 0 ? "bg-white rounded-r-3xl" : ""
            }`}></div>
          <img
            src={icon}
            alt="discord icon"
            className="h-[70px] w-[70px] p-2 ml-3 bg-white rounded-full hover:rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="flex justify-center mb-6 lg:my-8 items-center">
          <hr className="border-[#2B2D31] border-2 rounded-full w-16 mr-2" />
        </div>
        <div
          className="flex items-center h-24"
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleClick(1)}>
          <div
            className={`w-2 h-16 p-0 transition-all duration-300 ease-in-out ${
              hoveredIndex === 1 && activeIndex !== 1
                ? "bg-white h-4 rounded-r-lg"
                : ""
            } ${activeIndex === 1 ? "bg-white rounded-r-3xl" : ""}`}></div>
          <img
            src={profileIcon}
            alt=""
            className="transition-transform duration-300 ease-in-out transform hover:scale-105 ml-3 bg-clip h-16 w-16 rounded-full hover:rounded-2xl"
          />
        </div>
        <div
          className="flex items-center h-24"
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleClick(2)}>
          <div
          
            className={`w-2 h-16 p-0 transition-all flex justify-between duration-300 ease-in-out ${
              hoveredIndex === 2 && activeIndex !== 2
                ? "bg-white h-4 rounded-r-lg"
                : ""
            } ${activeIndex === 2 ? "bg-white rounded-r-3xl" : ""}`}></div>
          <img
            src={profileIcon}
            alt=""
            className="transition-transform duration-300 ease-in-out transform hover:scale-105 ml-3 bg-clip h-16 w-16 rounded-full hover:rounded-2xl"
          />
          { activeIndex!==2 && hoveredIndex == 2 && (
          <div className="transition-transform duration-300 ease-in-out transform absolute felx justify-center ml-14 translate-y-[300px] hover:scale-105 items-center bg-white p-2 rounded-lg shadow-md left-12 -top-4 whitespace-nowrap">
            <p className="text-sm inline-block">add server</p>
            <div className="absolute w-4 h-4 bg-white top-2 left-[-8px] transform rotate-45"></div>
          </div>
          )}
          
        </div>
      
        <div
          className="flex items-center h-24"
          onMouseEnter={() => setHoveredIndex(3)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleClick(3)}>
          <div
            className={`w-2 h-16 p-0 transition-all duration-300 ease-in-out ${
              hoveredIndex === 3 && activeIndex !== 3
                ? "bg-white h-4 rounded-r-lg"
                : ""
            } ${activeIndex === 3 ? "bg-white rounded-r-3xl" : ""}`}></div>
          <img
            src={profileIcon}
            alt=""
            className="transition-transform duration-300 ease-in-out transform hover:scale-105 ml-3 bg-clip h-16 w-16 rounded-full hover:rounded-2xl"
          />
        
        </div>
      </nav>
    
    </aside>
    {isAddingServerOpen && <AddingServer/>}
   </div>

  );
};

export default SideNav;
{
  /* <div
className="relative"
onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)}
>
<img
  src={profileIcon}
  alt=""
  className="transition-transform duration-300 ease-in-out transform hover:scale-105 ml-3 bg-clip h-16 w-16 rounded-full hover:rounded-2xl"
/>
{isHovered && (
  <div className="absolute translate-x-12 translate-y-5 bg-white p-2 rounded-lg shadow-md left-12 -top-4 whitespace-nowrap">
    <p className="text-sm inline-block">add server</p>
    <div className="absolute w-4 h-4 bg-white top-2 left-[-8px] transform rotate-45"></div>
  </div>
)}
</div> */
}