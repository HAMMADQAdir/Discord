import React, { useEffect, useState } from "react";
import icon from "../LandingPage/icons8-discord-480.png";
import profileIcon from "../LandingPage/hoq.jpg";
import { CgAddR } from "react-icons/cg";
import AddingServer from "./addingServer";
import MyServer from "../MyServer";
import { useParams } from "react-router";
import { getUser } from "../../API/UserApi";
import { getServer } from "../../API/ServerApi";
import AddServer from "../../cards/AddServerCard";

const SideNav = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMyServerOpen, setIsmyServerOpen] = useState(false);
  const [myServers, setMyservers] = useState([]);
  const [activeServer, setActiveServer] = useState({});
  const [showJoinServerCard,setShowJoinServerCard] = useState(false)
  const username = useParams();

  useEffect(() => {
    // Define the async function inside useEffect
    const fetchUserServers = async () => {
      try {
        console.log(username);
        // Get user (assuming you have a getUser function)
        const user = await getUser(username.username);

        if (!user) {
          throw new Error("Error getting User");
        }
        console.log("user",user);
        // Set user servers to state if user exists
        setMyservers(user.servers);
      } catch (error) {
        // Log the error, or handle it as needed (e.g., set an error state)
        console.error("Error fetching user servers:", error.message);
      }
    };

    // Call the async function
    fetchUserServers();
  }, [username]); // Add 'username' as a dependency if it's used inside the effect


  // Function to handle click on server
  const handleClick = async (index, serverID) => {
    try {
      console.log(serverID);

      const server = await getServer(serverID);
      setActiveServer(server);
      setActiveIndex(index);
      if (index == 1) setIsmyServerOpen(true);
      else setIsmyServerOpen(false);
      console.log(server);
    } catch (error) {
      console.log(error);
    }
  };

  // Callback function to handle data from child
  const handleCloseButtonRequestFromCreateServerForm = (childData) => {
    setShowJoinServerCard(childData);
  };

  // Flip the value of join server var
  const handleJoinServerClick = ()=>{
    setShowJoinServerCard(true)
  }

  return (
    <>
    
    <div className="flex w-full h-full">
      <aside
        className="fixed top-0 left-0 h-full w-28 bg-orange-400"
        style={{ zIndex: 100000 }}
      >
        <nav className="h-full w-28 bg-[#1E1F22]">
          <div
            className="flex items-center h-24"
            onClick={() => handleClick(0)}
          >
            <div
              className={`w-2 h-16 p-0 ${
                activeIndex === 0 ? "bg-white rounded-r-3xl" : ""
              }`}
            ></div>
            <img
              src={icon}
              alt="discord icon"
              className="h-[70px] w-[70px] p-2 ml-3 bg-white rounded-full hover:rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="flex justify-center mb-6 lg:my-8 items-center">
            <hr className="border-[#2B2D31] border-2 rounded-full w-16 mr-2" />
          </div>
          {myServers.map((serverID) => {

            
            return (
              <div
                className="flex items-center h-24"
                onMouseEnter={() => setHoveredIndex(1)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleClick(1, serverID)}
              >
                <div
                  className={`w-2 h-16 p-0 transition-all duration-300 ease-in-out ${
                    hoveredIndex === 1 && activeIndex !== 1
                      ? "bg-white h-4 rounded-r-lg"
                      : ""
                  } ${activeIndex === 1 ? "bg-white rounded-r-3xl" : ""}`}
                ></div>
                <img
                  alt="My server"
                  className=" text-white transition-transform duration-300 ease-in-out transform hover:scale-105 ml-3 bg-clip h-16 w-16 rounded-full hover:rounded-2xl"
                />
                {hoveredIndex == 1 && (
                  // my server
                  <div className="transition-transform duration-300 ease-in-out transform absolute felx justify-center ml-14 translate-y-[200px] hover:scale-105 items-center bg-[#000000] p-2 rounded-lg shadow-md left-12 -top-4 whitespace-nowrap z-30">
                    <p className="text-xl inline-block text-[#c0c4d2] font-bold">
                      hello
                    {serverID}
                    </p>
                    <div className="absolute w-4 h-4 bg-[#000000] top-2 left-[-8px] transform rotate-45"></div>
                  </div>
                )}
              </div>
            );
          })}
          <div
            className="flex items-center h-24"
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleClick(2)}
          >
            <div
              className={`w-2 h-16 p-0 transition-all flex justify-between duration-300 ease-in-out ${
                hoveredIndex === 2 && activeIndex !== 2
                  ? "bg-white h-4 rounded-r-lg"
                  : ""
              } ${activeIndex === 2 ? "bg-white rounded-r-3xl" : ""}`}
            ></div>

            {/* Profile for server */}
            <img
              src={profileIcon}
              alt=""
              className="transition-transform duration-300 ease-in-out transform hover:scale-105 ml-3 bg-clip h-16 w-16 rounded-full hover:rounded-2xl"
            />

            {/* Add a server */}
            {activeIndex !== 2 && hoveredIndex == 2 && (
              // addin a server
              <div className="transition-transform duration-300 ease-in-out transform absolute felx justify-center ml-14 translate-y-[300px] hover:scale-105 items-center bg-[#000000] p-2 rounded-lg shadow-md left-12 -top-4 whitespace-nowrap z-30">
                <p className="text-xl inline-block text-[#c0c4d2] font-bold">
                  Add a Server
                </p>
                <div className="absolute w-4 h-4 bg-[#000000] top-2 left-[-8px] transform rotate-45"></div>
              </div>
            )}
          </div>

          <div
            className="flex items-center h-24 justify-between"
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleClick(3)}
          >
            <div
              className={`w-2 h-16 p-0 transition-all duration-300 ease-in-out ${
                hoveredIndex === 3 && activeIndex !== 3
                  ? "bg-white h-4 rounded-r-lg"
                  : ""
              } ${activeIndex === 3 ? "bg-white rounded-r-3xl" : ""}`}
            ></div>
            {activeIndex !== 3 && hoveredIndex == 3 && (
              // discover Server
              <div className="transition-transform duration-300 ease-in-out transform absolute felx justify-center ml-14 translate-y-[400px] hover:scale-105 items-center bg-[#000000] p-2 rounded-lg shadow-md left-12 -top-4 whitespace-nowrap z-30">
                <p className="text-xl inline-block text-[#c0c4d2] font-bold">
                  Explore Discoverable Servers
                </p>
                <div className="absolute w-4 h-4 bg-[#000000] top-2 left-[-8px] transform rotate-45"></div>
              </div>
            )}
            <div className="flex items-center text-green-500 rounded-full h-16 p-0 mr-4 w-16 justify-center hover:text-white bg-[#313338] hover:bg-green-600 hover:rounded-3xl cursor-pointer" onClick={handleJoinServerClick}>
              <p className="text-6xl  text-center mb-3 font-light ">+</p>
            </div>
            <div></div>
          </div>
        </nav>
      </aside>

      {/* Join server card appear after clicking join server button  */}
      <div className="flex-grow ml-28">

      {showJoinServerCard && (
        <div className="fixed  inset-0 flex items-center justify-center z-50">
          <div className="transition-transform duration-500 ease-out transform -translate-x-full slide-in  p-6 rounded-lg shadow-lg">
            <AddServer sendCloseRequest = {handleCloseButtonRequestFromCreateServerForm} 
            username={username.username}/>
          </div>
        </div>
      )}
       <style jsx>{`
        .slide-in {
          transform: translateX(-100%);
          animation: slideIn 0.5s forwards;
        }

        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
        {isMyServerOpen && (
          <MyServer server={activeServer} username={username} />
        )}
      </div>
    </div>
    {/* Sliding Component */}
    
    </>
    
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
