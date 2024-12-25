import React, { useState } from "react";
import "../index.css";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";
import { createUserAndServer } from "../API/UserApi";
import axios from "axios";

export default function SignUpCard() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("a");
  const [loading,setLoading] = useState(false)

  const renderDays = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(
        <option key={i} value={i < 10 ? "0" + i : i}>
          {i}
        </option>
      );
    }
    return days;
  };

  const renderYears = () => {
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 100; i--) {
      years.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return years;
  };

  const handleSignUpForm = async (e) => {
    try {
      
      e.preventDefault();

      const data = {
        email: email,
        username: username,
        displayName: displayName,
        gender: "Male",
        DOB: `${day}/${month}/${year}`,
      };

      // register user in firebase
      await doCreateUserWithEmailAndPassword(email, password);
      // Add user in mongodb data base
      const response = await createUserAndServer(data);

      console.log(response);
      navigate("/login");
    } catch (error) {
      setLoading(false)
      console.log(error);
      return;
    }
    // Navigate to home
  };

  return (
    <div className="my-2 h-screen w-screen  flex flex-wrap justify-center items-center">
      {/* Create account */}
      <div className="bg-slate-800 max-w-[800px] w-[70vh] xl:w-[90vh] m-2   p-4  flex flex-col flex-wrap justify-center text-white rounded:sm lg:rounded-xl shadow-2xl ">
        <h1 className=" text-xl  font-bold text-center font-sans">
          Create an account
        </h1>

        {/*Sign up  Form  */}
        <form onSubmit={handleSignUpForm} className="m-2  space-y-2  ">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="lg:text-lg text-sm  font-mono font-semibold  tracking-wide "
            >
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="my-1 lg:my-3 w-full bg-slate-900 text-sm lg:text-md p-2    rounded-md focus:outline-none "
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Display Name */}
          <div>
            <label
              htmlFor="displayName"
              className="lg:text-lg text-sm  font-mono font-semibold  tracking-wide "
            >
              DISPLAY NAME
            </label>
            <input
              type="displayName"
              name="displayName"
              id="displayName"
              required
              className="my-1 lg:my-3 w-full bg-slate-900 text-sm lg:text-md p-2    rounded-md focus:outline-none "
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="username"
              className="lg:text-lg text-sm  font-mono font-semibold  tracking-wide "
            >
              USERNAME
            </label>
            <input
              type="username"
              name="username"
              id="username"
              required
              className="my-1 lg:my-3 w-full bg-slate-900 text-sm lg:text-md p-2    rounded-md focus:outline-none "
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="lg:text-lg text-sm  font-mono font-semibold  tracking-wide "
            >
              PASSWORD
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="my-1 lg:my-3 w-full bg-slate-900 text-sm lg:text-md p-2    rounded-md focus:outline-none "
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="DOB"
              className="lg:text-lg text-sm  font-mono font-semibold  tracking-wide "
            >
              DATE OF BIRTH
            </label>
            <div>
              <select
                name="month"
                id="month"
                required
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="m-1 lg:m-4 ml-0 w-[32.67968940%] bg-slate-900 text-sm lg:text-md p-2    rounded-md focus:outline-none hide-scrollbar"
              >
                <option value="" disabled>
                  Month
                </option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <select
                name="day"
                id="day"
                required
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="m-1 lg:m-4 w-[29%] bg-slate-900 text-sm lg:text-md  p-2    rounded-md focus:outline-none hide-scrollbar"
              >
                <option value="" disabled>
                  Day
                </option>
                {renderDays()}
              </select>
              <select
                name="year"
                id="year"
                required
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className=" w-[29%] bg-slate-900 text-sm lg:text-md p-2   rounded-md focus:outline-none hide-scrollbar"
              >
                <option value="" disabled>
                  Year
                </option>
                {renderYears()}
              </select>
            </div>
          </div>

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
              className="bg-blue-500 w-full lg:text-lg text-sm  font-bold p-3 rounded-lg hover:bg-blue-600 fouce:outline-none"
            >
              Create Account
            </button>}
            
           
            </div>
          </div>
          <div>
            {/* Navigaet to login */}
            <a onClick={() => navigate("/login")}>
              <p className=" text-blue-400   font-semibold font-sans hover:cursor:pointer"
              >
                Already have an account?
              </p>
            </a>
          </div>
          <div className="text-4xl text-red text-center my-2">{Error}</div>
        </form>
      </div>
    </div>
  );
}
