import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Chats() {
  const [messageToSend,setMessageToSend] = useState('')
  const [messages, setMessages] = useState([]);

  // getmessages
  useEffect(async () => {
    try {
      const URL =
        "http://127.0.0.1:5000/api/chats/getChats/66cc9c1bda227ccf77f334e5";
      await axios
        .get(URL)
        .then((response) => {
          setMessages(response.data.messages);
          console.log(response.data.messages); // Handle the response data
        })
        .catch((error) => {
          console.error("Error fetching data:", error); // Handle errors
        });
    } catch (error) {
      console.log(error);
      return error;
    }
  }, []);


  // handle input change
  const handleInputChange = (e) => {
    setMessageToSend(e.target.value)
  };


  const sendMessages = async (e) => {
    try {
      e.preventDefault(); // Prevent the form from submitting the traditional way
      const URL = "http://127.0.0.1:5000/api/chats/sendChats/66cc9c1bda227ccf77f334e5"
      const data = {
        "username":"aabid",
        "message":messageToSend
      }
      const response =await axios.post(URL,data)


      // Handle the response (e.g., display a success message)
      console.log('Data successfully posted:', response.data);

      // Optionally, you can update the local messages state with the new message
      setMessages([...messages, data]);
      setMessageToSend(""); // Clear the input field
    } catch (error) {
      console.log(error);
      return error;
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
                <button
                  href="#"
                  className="block py-2 px-4 md:p-0 text-4xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
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
      <div class="flex h-screen antialiased text-gray-800 bg-white dark:bg-zinc-800">
        <div class="flex flex-row h-full w-full overflow-x-hidden">
          {/* <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
            <div class="flex flex-row items-center justify-center h-12 w-full">
              <div class="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
              </div>
              <div class="ml-2 font-bold text-2xl">QuickChat</div>
            </div>
            <div class="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
              <div class="h-20 w-20 rounded-full border overflow-hidden">
                <img
                  src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                  alt="Avatar"
                  class="h-full w-full"
                />
              </div>
              <div class="text-sm font-semibold mt-2">Aminos Co.</div>
              <div class="text-xs text-gray-500">Lead UI/UX Designer</div>
              <div class="flex flex-row items-center mt-3">
                <div class="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
                  <div class="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
                </div>
                <div class="leading-none ml-1 text-xs">Active</div>
              </div>
            </div>
            <div class="flex flex-col mt-8">
              <div class="flex flex-row items-center justify-between text-xs">
                <span class="font-bold">Active Conversations</span>
                <span class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                  4
                </span>
              </div>
              <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                  <div class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                    H
                  </div>
                  <div class="ml-2 text-sm font-semibold">Henry Boyd</div>
                </button>
                <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                  <div class="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
                    M
                  </div>
                  <div class="ml-2 text-sm font-semibold">Marta Curtis</div>
                  <div class="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
                    2
                  </div>
                </button>
                <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                  <div class="flex items-center justify-center h-8 w-8 bg-orange-200 rounded-full">
                    P
                  </div>
                  <div class="ml-2 text-sm font-semibold">Philip Tucker</div>
                </button>
                <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                  <div class="flex items-center justify-center h-8 w-8 bg-pink-200 rounded-full">
                    C
                  </div>
                  <div class="ml-2 text-sm font-semibold">Christine Reid</div>
                </button>
                <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                  <div class="flex items-center justify-center h-8 w-8 bg-purple-200 rounded-full">
                    J
                  </div>
                  <div class="ml-2 text-sm font-semibold">Jerry Guzman</div>
                </button>
              </div>
              <div class="flex flex-row items-center justify-between text-xs mt-6">
                <span class="font-bold">Archivied</span>
                <span class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                  7
                </span>
              </div>
              <div class="flex flex-col space-y-1 mt-4 -mx-2">
                <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                  <div class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                    H
                  </div>
                  <div class="ml-2 text-sm font-semibold">Henry Boyd</div>
                </button>
              </div>
            </div>
          </div> */}
          <div class="flex flex-col flex-auto h-full p-6">
            <div class="flex flex-col flex-auto flex-shrink-0  bg-stone-700 h-full p-4 overflow-auto custom-scrollbar" style={{"borderRadius":"20px"}}>
              {/* {messages.length>0:} */}
              {messages.map((msg) => (
                <div key={msg.id} class="flex flex-col   mb-1">
                  <div class="flex flex-col h-full">
                    <div class="grid grid-cols-12 gap-y-2">
                      <div class="col-start-1 col-end-12 p-3 rounded-lg">
                        <div class="flex flex-row items-center">
                          <div class="flex items-center justify-center h-20 w-20 text-4xl rounded-full bg-indigo-500 flex-shrink-0">
                            A
                          </div>
                          <div class="relative ml-3 text-5xl  py-2 px-4 shadow rounded-xl">
                            <div className="flex ">
                              <div className="font-semibold tracking-wider text-white m-1">
                                {msg.username}
                              </div>
                              <div className=" flex item-center justify-center text-4xl text-white m-1 text-center">
                                {msg.createdAt}
                              </div>
                            </div>
                            <div className="text-gray-300 text-4xl">
                              {msg.message}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div class="flex flex-col h-full overflow-x-auto mb-4">
                <div class="flex flex-col h-full">
                  <div class="grid grid-cols-12 gap-y-2">
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div class="flex items-center justify-center h-20 w-20 text-4xl rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div class="relative ml-3 text-3xl bg-white py-2 px-4 shadow rounded-xl">
                          <div>Hey How are you today?</div>
                        </div>
                      </div>
                    </div>

                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div class="flex items-center justify-center h-20 w-20 text-4xl rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                          <div class="flex flex-row items-center">
                            <button class="flex items-center justify-center bg-indigo-600 hover:bg-indigo-800 rounded-full h-8 w-10">
                              <svg
                                class="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                ></path>
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                            </button>
                            <div class="flex flex-row items-center space-x-px ml-4">
                              <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-4 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-12 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-6 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-5 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-4 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-3 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-1 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-1 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-4 w-1 bg-gray-500 rounded-lg"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <form action="" onSubmit={sendMessages}>

              <div class="flex flex-row items-center h-32 rounded-xl  w-full px-4 fixed bottom-0 left-0 right-0 dark:bg-gray-800 bg-blue-800">
                <div>
                  <button class="flex items-center justify-center text-gray-400 hover:text-gray-600">
                    <svg
                      class="w-16 h-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div class="flex-grow ml-4">
                  <div class="relative w-full">
                  
                    <input
                      onChange={handleInputChange}
                      type="text"
                      class="flex w-full bg-gray-600 text-white text-4xl rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-20"
                    />
                    <button class="absolute flex items-center justify-center mx-4 h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                      <svg
                        class="w-16 h-16 "
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="ml-4">
                  <button
                    class="flex items-center text-3xl justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                    type="submit"
                  >
                    <span> Send</span>
                    <span class="ml-2">
                      <svg
                        class="w-10 h-16 transform rotate-45 -mt-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
