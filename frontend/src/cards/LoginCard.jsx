import React, { useState } from "react";
import QR from "../assets/QR.png";
import { useNavigate } from "react-router-dom";
import { doSignInWithEmailAndPassword,doSignInWithGoogle } from "../firebase/auth";
import { getUserWithEmail } from "../API/UserApi";

export default function LoginCard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");
  const [loading,setLoading] = useState(false)

  const handleLoginForm =async (e) => {
    try {     
      e.preventDefault();  // Prevents the default form submission behavior
      setLoading(true)
      const userCredential = await doSignInWithEmailAndPassword(email,passowrd)

      const response = await getUserWithEmail(email)
      console.log(response.username)

      navigate(`/${response.username}/landing`);
     

     
    } catch (error) {
      setLoading(false)
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

        {/* Greetings */}
        <h1 className="text-lg lg:text-4xl p-1 font-semibold">Welcome Back!</h1>
        <h2 className="text-sm lg:text-3xl p-1 text-slate-200">
          We're so excited to see you again!
        </h2>

        {/* Login Form */}
        <form className="m-4 lg:m-8 space-y-4 text-start text:sm lg:text-3xl " onSubmit={handleLoginForm}>

          {/* Email */}
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
              className="my-2 lg:my-4 w-full  bg-slate-900 rounded-md text-sm text-xl lg:text-4xl p-2 lg:p-4 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
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
              className="my-2 lg:my-4 w-full  bg-slate-900 rounded-md text-sm text-xl lg:text-4xl p-2 lg:p-4 focus:outline-none"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            {/* Handle forgot password */}
            <p className="text-blue-400 text-xl lg:text-4xl ">forgot your passowrd?</p>

          </div>

          {/* Login Button  */}
          <div>

          <div>
            {loading ?<div role="status" className="hidden flex justify-center border-2  rounded-xl p-1">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>: <button
              type="submit"
              className="bg-blue-500 w-full lg:text-xl text-sm  font-bold p-3 rounded-lg hover:bg-blue-600 fouce:outline-none"
            >
              Log In
            </button>}
            
           
            </div>
            
              
              {/* Navigate to signup  */}
            <p className="text-blue-400 text-xl lg:text-4xl hover:cursor-pointer" onClick={()=>navigate('/signup')} >New User? Sign up Here</p>
          </div>

        </form>

      </div>

      {/* Visivle at screen size greater then 2xl */}
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
