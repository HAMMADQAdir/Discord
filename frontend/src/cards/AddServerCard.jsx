import React, { useState } from "react";
import QR from "../assets/QR.png";
import { useNavigate } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../firebase/auth";
import axios from "axios";
import { getUserWithEmail } from "../API/UserApi";
import { joinServerUsingCode } from "../API/ServerApi";
import icon from "../assets/icons8-discord-1500.png";
import { createServer } from "../API/ServerApi";

export default function AddServer({sendCloseRequest, username }) {
  const [inviteLink, setInviteLink] = useState(false);
  const [iscreateServer, setIsCreateServer] = useState(false);
  const [serverName, setServerName] = useState("");
  const navigate = useNavigate();
  const [joiningCode, setJoiningCode] = useState("");
  const [passowrd, setPassword] = useState("");

  // Join sefver using invite link
  const handleJoiningServer = async (e) => {
    try {
      e.preventDefault()
      const response = await joinServerUsingCode(username, joiningCode);
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
      return;
    }
  };

  // Create server
  const handleCreateServer = async (e) => {
    try {
      e.preventDefault()
      const serverData = {"username":username, "serverName":serverName}
      const response = await createServer(username);
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    doSignInWithGoogle().catch((err) => {
      console.log(err);
    });
  };


  const sendCloseRequestToSidenav = () => {
    // Send data to parent via the callback
    sendCloseRequest(false);
  };

  return (
    <>
      <div className="  flex justify-center items-center">
        <div className="flex justify-center bg-[#302c2c] w-[80%] min-w-[500px] max-w-[700px] h-[30rem] rounded-xl ">
          {inviteLink == false && iscreateServer == false ? (
            <div className="flex w-full justify-center flex-col  text-white text-center space-y-2">
              <div className="m-2 flex flex-row justify-between ">
                <div></div>

                {/* Create Your Server Headings */}
                <div className="flex flex-col ">
                  <h1 className="text-3xl  p-1 font-bold">
                    Create Your Server!
                  </h1>
                  <h2 className="text-sm  p-1 text-slate-200">
                    Your server is where you and your freinds hang out.
                  </h2>
                </div>
                <button className=" m-2 top-2 right-2 text-gray-600 hover:text-gray-900" onClick={sendCloseRequestToSidenav}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Option starts here */}
              <div
                className="flex flex-col  space-y-4 px-4 overflow-y-auto custom-scrollbar "
                onClick={() => setIsCreateServer(true)}
              >
                {/* Create my own  */}
                <div
                  className="flex flex-row p-2  justify-between border border-2 border-zinc-500 hover:cursor-pointer hover:bg-zinc-700 "
                  style={{ borderRadius: "8px" }}
                >
                  <div className="flex justify-center items-center space-x-2">
                    <img
                      src={icon}
                      alt=""
                      className="h-12 w-12 rounded-full "
                    />
                    <h2 className="text-xl font-semibold "> Create My own </h2>
                  </div>

                  {/* Icon  */}
                  <div className="flex items-center justify-center text-3xl font-semibold text-zinc-400">
                    &gt;
                  </div>
                </div>

                {/* Start of templates */}
                <div className="flex font-semibold text-zinc-400 p ">
                  <p>START FROM A TEMPLATE</p>
                </div>

                {/* Gaming */}
                <div
                  className="flex flex-row p-2 justify-between border border-2 border-zinc-500 hover:cursor-pointer hover:bg-zinc-700  "
                  onClick={() => setIsCreateServer(true)}
                  style={{ borderRadius: "8px" }}
                >
                  <div className="flex justify-center items-center space-x-2">
                    <img
                      src={icon}
                      alt=""
                      className="h-12 w-12 rounded-full "
                    />
                    <h2 className="text-xl font-semibold "> Create My own </h2>
                  </div>

                  {/* Icon  */}
                  <div className="flex items-center justify-center text-3xl font-semibold text-zinc-400">
                    &gt;
                  </div>
                </div>

                {/* Study */}
                <div
                  className="flex flex-row  p-2 justify-between border border-2 border-zinc-500  hover:cursor-pointer hover:bg-zinc-700 "
                  onClick={() => setIsCreateServer(true)}
                  style={{ borderRadius: "8px" }}
                >
                  <div className="flex justify-center items-center space-x-2">
                    <img
                      src={icon}
                      alt=""
                      className="h-12 w-12 rounded-full "
                    />
                    <h2 className="text-xl font-semibold "> Create My own </h2>
                  </div>

                  {/* Icon  */}
                  <div className="flex items-center justify-center text-3xl font-semibold text-zinc-400">
                    &gt;
                  </div>
                </div>

                {/* Jobs */}
                <div
                  className="flex flex-row p-2 justify-between border border-2 border-zinc-500 hover:cursor-pointer hover:bg-zinc-700 "
                  onClick={() => setIsCreateServer(true)}
                  style={{ borderRadius: "8px" }}
                >
                  <div className="flex justify-center items-center space-x-2">
                    <img
                      src={icon}
                      alt=""
                      className="h-12 w-12 rounded-full "
                    />
                    <h2 className="text-xl font-semibold "> Create My own </h2>
                  </div>

                  {/* Icon  */}
                  <div className="flex items-center justify-center text-3xl font-semibold text-zinc-400">
                    &gt;
                  </div>
                </div>

                {/* ANIME */}
                <div
                  className="flex flex-row p-2 justify-between border border-2 border-zinc-500 hover:cursor-pointer hover:bg-zinc-700 "
                  onClick={() => setIsCreateServer(true)}
                  style={{ borderRadius: "8px" }}
                >
                  <div className="flex justify-center items-center space-x-2">
                    <img
                      src={icon}
                      alt=""
                      className="h-12 w-12 rounded-full "
                    />
                    <h2 className="text-xl font-semibold "> Create My own </h2>
                  </div>

                  {/* Icon  */}
                  <div className="flex items-center justify-center text-3xl font-semibold text-zinc-400">
                    &gt;
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center  p-2 space-y-2">
                <h1 className="text-2xl font-semibold  ">
                  Hace an invite already?
                </h1>
                <button
                  onClick={() => setInviteLink(true)}
                  className="text-lg bg-zinc-600 m-2 p-1 front-semibold rounded  hover:bg-zinc-700"
                >
                  Join a Server
                </button>
              </div>
            </div>
          ) : (
            // Join usig invite link
            <>
              {iscreateServer == true ? (
                // Create server
                <div className="flex justify-center bg-[#302c2c] w-[80%] min-w-[500px] max-w-[700px] h-[30rem] rounded-xl">
                  <div className="flex w-full p-0 justify-center flex-col mx-2 text-white text-center">
                    <h1 className="text-3xl  p-1 font-bold">
                      Customize Your Server!
                    </h1>
                    <h2 className="text-sm  p-1 text-slate-200">
                      Give your server a personality with a name and an icon
                    </h2>
                    <form
                      className="m-4  space-y-4 text-start text:sm  "
                      onSubmit={handleCreateServer}
                    >
                      {/* Server Icon */}
                      <div class="flex flex-col items-center space-y-2 ">
                        {/* <!-- Hidden File Input --> */}
                        <input type="file" id="upload-photo" class="hidden" />

                        {/* <!-- Label as Button for File Input --> */}
                        <label
                          for="upload-photo"
                          class="relative flex flex-col items-center justify-center m-2 w-24 h-24 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 border border-zinc-300 border-dashed "
                        >
                          {/* <!-- Camera Icon --> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-8 w-8 text-gray-500 dark:text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 4a1 1 0 000 2h3.382a1 1 0 00.894-.553L17 4m-1.618 2H8.618M10 12a2 2 0 114 0 2 2 0 01-4 0z"
                            />
                          </svg>
                          {/* <!-- Text Below Button --> */}
                          <p class="text-sm font-semibold text-gray-500 dark:text-gray-300">
                            Upload
                          </p>
                        </label>
                      </div>
                      <div>
                        <label className=" font-semibold  text-slate-100 tracking-wide ">
                          SERVER NAME
                        </label>
                        <input
                          required
                          className="my-2  w-full  bg-slate-900 rounded-md text-xl  p-2 lg:p-4 focus:outline-none"
                          onChange={(e) => setServerName(e.target.value)}
                        />
                        <p>
                          By creating a server, you agree to Discord's{" "}
                          <strong className="text-blue-300">
                            Commutiny Guidelines
                          </strong>
                        </p>
                      </div>

                      <div className="flex p-2 flex-row overflow-auto justify-between">
                        <button
                          className="  my-2   text-lg tracking-wider xl:text-xl py-3 font-semibold rounded-lg hover:underline"
                          onClick={() => setIsCreateServer(false)}
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className=" my-2 p-2  bg-blue-500 text-xl tracking-wider lg:text-2xl py-3 font-bold rounded-lg hover:bg-blue-600"
                        >
                          Create
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                //   Join server using invite link
                <div className="flex justify-center bg-[#302c2c] w-[80%] min-w-[500px] max-w-[700px] h-[30rem] rounded-xl">
                  <div className="flex w-full p-0 justify-center flex-col mx-2 text-white text-center">
                    <h1 className="text-3xl  p-1 font-bold">Join a Server!</h1>
                    <h2 className="text-sm  p-1 text-slate-200">
                      Enter an invite below to join an existing server
                    </h2>
                    <form
                      className="m-4  space-y-4 text-start text:sm  "
                      onSubmit={handleJoiningServer}
                    >
                      <div>
                        <label className=" font-semibold  text-slate-100 tracking-wide ">
                          INVITE LINK
                        </label>
                        <input
                          className="my-2  w-full  bg-slate-900 rounded-md text-xl  p-2 lg:p-4 focus:outline-none"
                          onChange={(e) => setJoiningCode(e.target.value)}
                        />
                      </div>
                      <div className="">
                        <p className="font-semibold  text-slate-100 py-1  ">
                          {" "}
                          INVITES SHOULD LOOK LIKE{" "}
                        </p>
                        <p className="   ">hTKzmak</p>
                        <p className="   ">https://discord.gg/hTKzmak</p>
                        <p className="   ">https://discord.gg/cool-people</p>
                      </div>
                      <div className="m-2 flex flex-row overflow-auto justify-between">
                        <button
                          className="  my-2   text-lg tracking-wider xl:text-xl py-3 font-semibold rounded-lg hover:underline"
                          onClick={() => setInviteLink(false)}
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className=" my-2 p-2  bg-blue-500 text-xl tracking-wider lg:text-2xl py-3 font-bold rounded-lg hover:bg-blue-600"
                        >
                          Join Server
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
