import React, { useState } from "react";
import QR from "../assets/QR.png";
import { useNavigate } from "react-router-dom";
import { doSignInWithEmailAndPassword,doSignInWithGoogle } from "../firebase/auth";
import axios from "axios";
import { getUserWithEmail } from "../API/UserApi";
import { joinServerUsingCode } from "../API/ServerApi";

export default function JionServer({username}) {
  const navigate = useNavigate();
  const [joiningCode, setJoiningCode] = useState("");
  const [passowrd, setPassword] = useState("");

  const handleJoiningServer =async (e) => {
    try {     
      const response = await joinServerUsingCode(username,joiningCode)
      console.log(response)
    } catch (error) {
      console.log(error)
      return
    }
   
    
  };

  const onGoogleSignIn =(e)=>{
    e.preventDefault()
    doSignInWithGoogle().catch(err=>{
      console.log(err)
    })
  }

  return (
    <>
    <div className="  flex justify-center items-center">

    <div className="flex justify-center bg-[#302c2c] w-[80%] min-w-[500px] max-w-[700px] h-[30rem] rounded-xl">
      <div className="flex w-full p-0 justify-center flex-col mx-2 text-white text-center">
        <h1 className="text-3xl  p-1 font-bold">Join a Server!</h1>
        <h2 className="text-sm  p-1 text-slate-200">
          Enter an invite below to join an existing server
        </h2>
        <form className="m-4  space-y-4 text-start text:sm  " onSubmit={handleJoiningServer}>
          <div>
            <label
              className=" font-semibold  text-slate-100 tracking-wide "
            >
              INVITE LINK
            </label>
            <input
              required
              className="my-2  w-full  bg-slate-900 rounded-md text-xl  p-2 lg:p-4 focus:outline-none"
              onChange={(e) => setJoiningCode(e.target.value)}
            />
          </div>
          <div className="">

            <p className="font-semibold  text-slate-100 py-1  " > INVITES SHOULD LOOK LIKE </p>
            <p className="   " >hTKzmak</p>
            <p className="   " >https://discord.gg/hTKzmak</p>
            <p className="   " >https://discord.gg/cool-people</p>
          </div>
          <div className="flex flex-row overflow-auto justify-between">
          <button
              className="  my-2   text-lg tracking-wider xl:text-xl py-3 font-semibold rounded-lg hover:underline"
            
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
    </div>
    </>
  );
}
