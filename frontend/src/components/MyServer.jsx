import React, { useState, useRef, useEffect, useParams } from "react";
import {
  Send,
  Menu,
  Search,
  Inbox,
  PlusCircleIcon,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import axios from "axios";
import io from "socket.io-client";
import { getChat } from "../API/ChatApi";


const socket = io("http://localhost:5000");
const MyServer = ({server,username}) => {
  const emojis = [
    "😊",
    "😂",
    "😎",
    "😍",
    "🤔",
    "🙄",
    "😜",
    "🤩",
    "😡",
    "😢",
    "🎉",
    "❤️",
    "👍",
    "🔥",
  ];

  const [currentEmoji, setCurrentEmoji] = useState("😊");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [emoji, setEmoji] = useState(emojis[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const sidebarRef = useRef(null);
  const textareaRef = useRef(null);
  const [messageToSend, setMessageToSend] = useState("");
  const [messages, setMessages] = useState([]);
  const chatID = server.serverChannels[0].channelChat.chat
      
  const endOfMessagesRef = useRef(null);
  const [emojiPicker, setEmojiPicker] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(server.serverChannels[0].channelChat.chat)
        const chatID = server.serverChannels[0].channelChat.chat
        
        const response = await getChat(chatID);
        setMessages(response.messages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Listen for incoming messages
    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        sidebarOpen
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        15 * 24
      )}px`;
    }
  }, [message]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      try {
        e.preventDefault();

        const data = {chatID:chatID, username:username.username, message: message };
        socket.emit("sendMessage", data);

        
        setMessageToSend("");

      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleEmojiMouseEnter = () => {
    setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
  };

  const handleEmojiMouseLeave = () => {};

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - hidden by default on small screens */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 transform bg-[#2B2D31] ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-72 bg-gray-800  text-white p-4 transition duration-200 ease-in-out lg:relative lg:translate-x-0 z-20`}
      >
        <div className="mb-4 ">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between w-full py-2 px-3 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
          >
            <span className="font-bold h-10 font-">{server.serverName}</span>
            {dropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {dropdownOpen && dropDown(server)}
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-grow bg-[#313338]">
        {/* Header */}
        <header className="shadow p-4 flex items-center justify-between bg-[#313338]">
          <div className="flex items-center space-x-4">
            <button
              className="lg:hidden text-slate-200"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu size={24} />
            </button>
            <h1 className="text-xl text-slate-200 font-bold"># general</h1>
          </div>
          <div className="flex items-center space-x-4">
            {/* Search bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#1e1f22] text-slate-200 pl-8 pr-4 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-slate-400"
                size={16}
              />
            </div>
            {/* Inbox icon */}
            <button className="text-slate-200 hover:text-slate-100">
              <Inbox size={20} />
            </button>
            {/* Logo */}
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              L
            </div>
          </div>
        </header>

        {/* Chat area */}
        <div className="flex-grow overflow-y-auto p-4">
          {/* Messages would go here */}
          <div
            className="flex flex-col flex-auto  overflow-auto custom-scrollbar"
            style={{ borderRadius: "20px" }}
          >
            <div className="flex flex-col ">
              {messages.length > 0 ? (
                messages.map((msg) => (
                  <div key={msg.id} className="flex flex-col mb-1 ">
                    <div className="flex flex-col h-full">
                      <div className="grid grid-cols-12 gap-y-2">
                        <div className="col-start-1 col-end-12 p-2 lg:p-2 rounded-lg">
                          <div className="flex flex-row py-2 ">
                            <div className="flex items-center justify-center my-2 h-16 w-16 lg:text-2xl rounded-full bg-indigo-500 flex-shrink-0">
                              A
                            </div>
                            <div className="relative ml-3 text-2xl   px-4 shadow rounded-xl">
                              <div className="flex">
                                <div className="font-semibold tracking-wider text-white m-1 ">
                                  {msg.username}
                                </div>
                                <div className="flex item-center justify-center  text-lg lg:text-2xl text-white m-1 text-center">
                                  {msg.createdAt}
                                </div>
                              </div>
                              <div className="text-gray-200 text-xl py-2 tracking-wider">
                                {msg.message}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-white">No messages yet</p>
              )}
              <div ref={endOfMessagesRef} />
            </div>
          </div>
        </div>

        {/*  */}
        {/* Message input */}
        <div className="p-4 bg-[#313338]">
          <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden bg-[#383a40]">
            <button>
              <PlusCircleIcon size={28} color="gray" className="ml-4" />
            </button>
            <textarea
              ref={textareaRef}
              value={message}
              onChange={handleMessageChange}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-grow p-2 bg-transparent text-slate-200 focus:outline-none resize-none overflow-y-auto"
              rows="1"
              style={{ maxHeight: "360px" }}
            />
            <div
              className="relative p-2 cursor-pointer text-slate-400 hover:text-blue-500 transition duration-200 ease-in-out transform hover:translate-y-[-3px]"
              onMouseEnter={handleEmojiMouseEnter}
              onMouseLeave={handleEmojiMouseLeave}
            >
              <span className="text-2xl">{emoji}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const dropDown = (server) => {
    {server.serverChannels.map((channel)=>{
      return (
        <div className="bg-[#111214] rounded-md ">
        <ul className="mt-2 pl-3 h-10 flex">
          <li className="mb-2  hover:text-gray-300 cursor-pointer items-center ">
            {channel.channelName}
          </li>
        </ul>
        <hr className="w-[99%] " />
        <ul className="mt-2 pl-3">
          <li className="mb-2 hover:text-gray-300 cursor-pointer">Channel 1</li>
          <li className="mb-2 hover:text-gray-300 cursor-pointer">Channel 2</li>
          <li className="mb-2 hover:text-gray-300 cursor-pointer">Channel 3</li>
        </ul>
      </div>
      )
    })}

};

export default MyServer;
