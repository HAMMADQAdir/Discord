import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import emoji from "../assets/emoji.png";
import EmojiPicker from "emoji-picker-react";
import io from "socket.io-client";
import { AiOutlineClose } from "react-icons/ai";

const socket = io("http://localhost:5000");
export default function Chats() {
  const { username } = useParams();
  const [messageToSend, setMessageToSend] = useState("");
  const [messages, setMessages] = useState([]);
  const endOfMessagesRef = useRef(null);
  const [emojiPicker, setEmojiPicker] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL =
          "http://127.0.0.1:5000/api/chats/getChats/66cc9c1bda227ccf77f334e5";
        const response = await axios.get(URL);
        setMessages(response.data.messages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Scroll to bottom when messages update

    document.body.style.overflowY = "hidden";
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    // Listen for incoming messages
    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  // set emoji
  const handleEmojiClick = (event) => {
    if (event && event.emoji) {
      setMessageToSend((prevMessage) => prevMessage + event.emoji);
      setEmojiPicker(false); // Hide the emoji picker after selection
    } else {
      console.warn(
        "Emoji object is undefined or does not have 'emoji' property"
      );
    }
  };

  const handleInputChange = (e) => {
    setMessageToSend(e.target.value);
  };

  const sendMessages = async (e) => {
    try {
      e.preventDefault();
      // const URL =
      //   "http://127.0.0.1:5000/api/chats/sendChats/66cc9c1bda227ccf77f334e5";
      const data = { username, message: messageToSend };
      socket.emit("sendMessage", data);
      // await axios.post(URL, data);
      setMessages((prevMessages) => [...prevMessages, data]);
      setMessageToSend("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="border-gray-200 p-3 bg-white dark:bg-zinc-800 dark:border-zinc-900">
        <div className="flex flex-wrap items-center justify-between mx-6 p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-16"
              alt="Flowbite Logo"
            />
            <span className="self-center text-5xl font-bold tracking-wider whitespace-nowrap dark:text-white">
              Discord
            </span>
          </a>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col text-4xl font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 md:p-0 text-white bg-blue-700 rounded md:bg-transparent dark:bg-blue-600 md:dark:bg-transparent"
                >
                  shopMerc
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  All
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Online
                </a>
              </li>
              <li className="px-4 py-2 bg-green-600 rounded-lg">
                <button className="block py-2 px-4 md:p-0 text-4xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Add Friend
                </button>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </nav>

      <div className="flex h-[110rem] antialiased text-gray-800 bg-white dark:bg-zinc-800">
        <div className="flex flex-col w-full ">
          <div
            className="flex flex-col flex-auto p-6 bg-stone-700 overflow-auto custom-scrollbar"
            style={{ borderRadius: "20px", marginBottom: "72px" }}
          >
            <div className="flex flex-col ">
              {messages.length > 0 ? (
                messages.map((msg) => (
                  <div key={msg.id} className="flex flex-col mb-1 ">
                    <div className="flex flex-col h-full">
                      <div className="grid grid-cols-12 gap-y-2">
                        <div className="col-start-1 col-end-12 p-2 lg:p-2 rounded-lg">
                          <div className="flex flex-row py-2 ">
                            <div className="flex items-center justify-center my-2 h-20 w-20 lg:text-4xl rounded-full bg-indigo-500 flex-shrink-0">
                              A
                            </div>
                            <div className="relative ml-3 text-2xl xl:text-5xl  px-4 shadow rounded-xl">
                              <div className="flex">
                                <div className="font-semibold tracking-wider text-white m-1 ">
                                  {msg.username}
                                </div>
                                <div className="flex item-center justify-center  text-xl lg:text-4xl text-white m-1 text-center">
                                  {/* {msg.createdAt} */}
                                </div>
                              </div>
                              <div className="text-gray-200 text-xl lg:text-5xl py-2 tracking-wider">
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
          <div className="h-[5%]"></div>
          <form
            onSubmit={sendMessages}
            className="fixed bottom-0 left-0 right-0 p-4 rounded-xl bg-white dark:bg-zinc-800"
            style={{ borderRadius: "16px", zIndex: 10 }}
          >
            <div className="flex flex-row p-2 lg:p-4 items-center h-20 lg:h-32 rounded-xl w-full">
              <div
                className="flex-1 flex flex-row justofy-center items-center rounded-lg h-full bg-white"
                style={{ borderRadius: "16px" }}
              >
                {emojiPicker ? (
                  <div className="emoji-picker-container fixed bottom-0  p-4 rounded-xl ">
                    <AiOutlineClose />
                    <EmojiPicker
                      onEmojiClick={handleEmojiClick}
                      style={{ width: "30vh", height: "30vh" }}
                    />
                  </div>
                ) : (
                  <img
                    onClick={() => setEmojiPicker(true)}
                    src={emoji}
                    className="h-[80%] p-2 pl-4 hover:cursor-pointer"
                  />
                )}
                <input
                  type="text"
                  value={messageToSend}
                  onChange={handleInputChange}
                  className=" p-2 rounded-lg w-full h-full text-4xl outline-none"
                  placeholder="Type a message..."
                />
              </div>

              <button
                type="submit"
                className="h-full  ml-2 p-4 bg-blue-600 text-white rounded-lg text-xl lg:text-4xl font-semibold"
                style={{ borderRadius: "16px" }}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
