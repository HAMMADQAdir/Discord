import React from "react";
import icon from "./hoq.jpg";
import "@fortawesome/fontawesome-free";

const AddingServer = () => {
  return (
    <div className="h-full w-full flex justify-center items-center ">
       
      <div className="bg-[#313338] h-[610px] w-[500px] flex flex-col">
       
        <div className="flex-col flex items-center p-4">
          <h1 className="text-3xl font-bold text-white">Create Your Server</h1>
          <p className="text-[#A9ADB4]">
            Your server is where you and your friends hang out
          </p>
        </div>

        <div className="flex-grow overflow-y-scroll">
          <div className="flex-col flex items-center">
            <div className="m-3 h-[80px] w-[450px] border-gray-500 border-4 rounded-xl flex items-center hover:bg-[#393C41]">
              <img
                src={icon}
                className="h-[50px] w-[50px] rounded-full m-4"
                alt=""
              />
              <p className="text-xl text-white font-medium">Create Your Own</p>
            </div>

         
            
            <p className="text-left font-medium text-[#A9ADB4] ml-6">
              Start from a template
            </p>
            
            <div className="m-3 h-[80px] w-[450px] border-gray-500 border-4 rounded-xl flex items-center hover:bg-[#393C41]">
              <img
                src={icon}
                className="h-[50px] w-[50px] rounded-full m-4"
                alt=""
              />
              <p className="text-xl text-white font-medium">Choose this</p>
            </div>

            <div className="m-3 h-[80px] w-[450px] border-gray-500 border-4 rounded-xl flex items-center hover:bg-[#393C41]">
              <img
                src={icon}
                className="h-[50px] w-[50px] rounded-full m-4"
                alt=""
              />
              <p className="text-xl text-white font-medium">Choose this</p>
            </div>

            <div className="m-3 h-[80px] w-[450px] border-gray-500 border-4 rounded-xl flex items-center hover:bg-[#393C41]">
              <img
                src={icon}
                className="h-[50px] w-[50px] rounded-full m-4"
                alt=""
              />
              <p className="text-xl text-white font-medium">Choose this</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="font-extrabold text-2xl mb-1">Having An Invite Already?</h1>
          <button className="w-[450px] bg-[#6D6F78] p-2 rounded-md text-md text-white mb-2">
            Join a Server
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddingServer;
