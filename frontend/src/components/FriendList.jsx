import React from "react";
import No_freind from "../assets/No_friend.png"

export default function FriendList() {
  const friends = [

  ];

  return (
    <div className="grid grid-cols-10 md:grid-cols-10 border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="col-span-10 border-b border-b-black border-b-4">
        {/* Navbar */}
        <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-wrap items-center justify-between mx-6 p-4">
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
              Friends
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
      <a
        href="#"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-12"
          alt="Flowbite Logo"
        />
        <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
          Flowbite
        </span>
      </a>
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
      <div className="col-span-10 xl:col-span-6 flex flex-col space-y-8 py-4 h-screen border-r-black border-r-2">
        {/* Friend list */}
        {friends.length > 0 ? (
          friends.map((friend, index) => (
            <div key={index} className="flex items-center space-x-4 space-y-6 p-6 px-8">
              <img
                className="h-36 w-36 rounded-full"
                src={friend.imgSrc}
                alt={friend.name}
              />
              <div className="flex flex-col space-x-4 space-y-6 px-4">
                <span className="px-2 text-white text-5xl font-semibold">{friend.name}</span>
                <span className="px-2 text-slate-300 text-3xl tracking-wider">Online 2 min ago</span>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <img
              src={No_freind}
              alt="No friends"
              className="h-[10rem] w-[20rem] xl:h-[50rem] xl:w-[60rem] mb-4"
            />
            <span className="text-sm xl:text-5xl text-gray-600 dark:text-gray-300">
              No one's here to play with Wampus
            </span>
          </div>
        )}
      </div>
      <div className="col-span-10 xl:col-span-4 flex flex-col space-y-8 p-6  h-screen">
        <h1 className="text-white text-5xl font-bold tracking-wider">Active Now</h1>
        {/* Friend list */}
        {friends.length > 0 ? (
          friends.map((friend, index) => (
            <div key={index} className="flex items-center space-x-4 space-y-6 p-6 px-8">
              <img
                className="h-36 w-36 rounded-full"
                src={friend.imgSrc}
                alt={friend.name}
              />
              <div className="flex flex-col space-x-4 space-y-6 px-4">
                <span className="px-2 text-white text-5xl font-semibold">{friend.name}</span>
                <span className="px-2 text-slate-300 text-3xl tracking-wider">Online 2 min ago</span>
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
    </div>
  );
}
