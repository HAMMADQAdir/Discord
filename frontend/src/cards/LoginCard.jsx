import React, { useState } from "react";
import QR from "../assets/QR.png";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");
  const handleLoginForm = (e) => {
    try {
      e.preventDefault();
      console.log(email);
      console.log(passowrd);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex bg-slate-800 w-[80%]">
      <div className="flex flex-wrap justify-center flex-col m-4 text-white text-center w-1/2">
        <h1 className="text-4xl p-1 font-semibold">Welcome Back!</h1>
        <h2 className="text-3xl p-1 text-slate-200">
          We're so excited to see you again!
        </h2>
        <form className="m-8 space-y-4 text-start " onSubmit={handleLoginForm}>
          <div>
            <label
              htmlFor="email-address"
              className="text-3xl font-mono font-semibold  tracking-wide "
            >
              EMAIL OR PHONE NUMBER
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="my-4 w-full  bg-slate-900 rounded-md text-2xl p-3 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-3xl font-mono font-semibold  tracking-wide"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              name="passowrd"
              className="my-4 w-full  bg-slate-900 rounded-md text-2xl p-3 focus:outline-none"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p className="text-blue-400 text-2xl ">forgot your passowrd?</p>
          </div>
          <div>
            <button
              type="submit"
              className="w-full my-8 bg-blue-500 text-3xl py-3 font-bold rounded-lg hover:bg-blue-600"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
      <div className="m-4 mt-12 mb-12 flex flex-wrap flex-col justify-center w-1/2 text-center">
        <img src={QR} alt="" className="mx-auto w-[70%]" />
        <h1 className=" m-2 mt-12 text-5xl font-bold text-white ">
          Log in with QR
        </h1>
        <p className="m-4 text-3xl text-white ">
          Scan this with the Discord mobile app to log in instantly
        </p>
      </div>
    </div>
  );
}
