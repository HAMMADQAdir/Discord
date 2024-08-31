import React from "react";
import shopCard from "../assets/shop_card.png"
import shopImg from "../assets/shop_img.png";

export default function FriendList() {
  const shopMerc = [
    "ninja",
    "loki",
    "gor",
    "ninja",
    "loki",
    "ninja",
    "loki",
  ];

  return (
    <div className="grid grid-cols-12 md:grid-cols-12 border-gray-200 bg-gray-200 dark:bg-gray-700 dark:border-gray-700">
      <div className="col-span-12 border-b border-b-black border-b-4">
        {/* Navbar */}
        <nav className="border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700">
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
      </div>
      <div className="col-span-12  flex flex-col space-y-8 p-8 ">
        <img src={shopImg} alt="" />
      </div>
        
        {/* Friend list */}
        {shopMerc.length > 0 ? (
          shopMerc.map((friend, index) => (
            <div
              key={index}
              href="#"
              class="m-8  col-span-4 flex flex-col flex-wrap justify-center items-center bg-slate-400 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 hover:"
            >
              <img
                class="object-cover  w-full rounded-lg  md:h-auto  md:rounded-none md:rounded-s-lg"
                src={shopCard}
                alt=""
              />
              <div class="flex flex-col w-full justify-between p-4 leading-normal bg-slate-800 rounded-lg">
                <h5 class="mb-2 text-5xl tracking-wider py-4 font-bold tracking-tight text-gray-900 dark:text-white">
                  Straw and Steel Bundle
                </h5>
                <p class="mb-3 py-4 text-4xl font-normal text-gray-200 dark:text-gray-200">
                 $10<span className="text-green-500"> (-8%)</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col  justify-center h-full text-center">
            <span className="text-sm xl:text-5xl text-gray-600 dark:text-gray-300 font-semibold">
              It's quiet for now
            </span>
            <span className="text-sm xl:text-5xl text-gray-600 dark:text-gray-300">
              When a friend starts an activity we will show it here
            </span>
          </div>
        )}

    </div>
  );
}
