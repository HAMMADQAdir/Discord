import React, { useState } from "react";
import QR from "../assets/QR.png";
import { useNavigate } from "react-router-dom";
import { doSignInWithEmailAndPassword,doSignInWithGoogle } from "../firebase/auth";
import axios from "axios";

export default function LoginCard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");

  const handleLoginForm =async (e) => {
    try {     
      e.preventDefault();  // Prevents the default form submission behavior
      const userCredential = await doSignInWithEmailAndPassword(email,passowrd)

      //get username
      const URL = `http://127.0.0.1:5000/api/user/getUser/${email}`
      
      await axios
        .get(URL)
        .then((response) => {
          console.log(response.data)
          navigate(`/${response.data.username}/home`);
           // Handle the response data
        })
        .catch((error) => {
          console.error("Error fetching data:", error); // Handle errors
        });

     
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
    <div className="flex justify-center bg-slate-800 w-[80%] ">
      <div className="flex w-full justify-center flex-col m-4 text-white text-center">
        <h1 className="text-lg lg:text-4xl p-1 font-semibold">Welcome Back!</h1>
        <h2 className="text-sm lg:text-3xl p-1 text-slate-200">
          We're so excited to see you again!
        </h2>
        <form className="m-4 lg:m-8 space-y-4 text-start text:sm lg:text-3xl " onSubmit={handleLoginForm}>
          <div>
            <label
              htmlFor="email-address"
              className=" font-mono font-semibold  tracking-wide "
            >
              EMAIL OR PHONE NUMBER
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="my-2 lg:my-4 w-full  bg-slate-900 rounded-md text-sm lg:text-2xl p-2 lg:p-4 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className=" font-mono font-semibold  tracking-wide"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              name="passowrd"
              className="my-2 lg:my-4 w-full  bg-slate-900 rounded-md text-sm lg:text-2xl p-2 lg:p-4 focus:outline-none"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p className="text-blue-400 lg:text-2xl ">forgot your passowrd?</p>
          </div>
          <div>
            <button
              type="submit"
              className="w-full my-2 lg:my-8 bg-blue-500 text-lg lg:text-3xl py-3 font-bold rounded-lg hover:bg-blue-600"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
      <div className=" hidden lg:block m-4 mt-12 mb-12 flex flex-wrap flex-col justify-center w-1/2 text-center">
        <img src={QR} alt="" className="mx-auto w-[70%]" />
        <h1 className=" m-2 mt-12 text-xl lg:text-5xl font-bold text-white ">
          Log in with QR
        </h1>
        <p className="m-4 text-lg lg:text-3xl text-white ">
          Scan this with the Discord mobile app to log in instantly
        </p>
      </div>
    </div>
  );
}
