import React, { useState } from "react";
import "../index.css";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";
import axios from "axios";

export default function SignUpCard() {
  const navigate = useNavigate();
  const URLFOESIGNUP = "http://127.0.0.1:5000/api/user/createUser";

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("a");

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
      // register use in firebase
      await doCreateUserWithEmailAndPassword(email, password);
      // Add user in mongodb data base
      await axios.post(URLFOESIGNUP, data);
    } catch (error) {
      setError(error.toString());
      console.log(typeof(error))
      console.log(error);
      return;
    }
    // Navigate to home
    return <Navigate to="/login" />;
  };

  return (
    <div className="my-2  w-screen h-screen flex flex-wrap justify-center content-center">
      <div className="bg-slate-800 w-[90%] 2xl:w-[40%] m-2   p-4  flex flex-col flex-wrap justify-center text-white rounded:sm lg:rounded-xl shadow-2xl ">
        <h1 className="lg:m-4 text-xl lg:text-5xl font-bold text-center font-sans">
          Create an account
        </h1>
        <form
          onSubmit={handleSignUpForm}
          className="m-2 lg:m-8 space-y-2 lg:space-y-4 "
        >
          <div>
            <label
              htmlFor="email"
              className="text-lg lg:text-3xl font-mono font-semibold  tracking-wide "
            >
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="my-4 w-full bg-slate-900 p-2 lg:p-4  lg:text-2xl rounded-md focus:outline-none "
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="displayName"
              className="text-lg lg:text-3xl font-mono font-semibold  tracking-wide "
            >
              DISPLAY NAME
            </label>
            <input
              type="displayName"
              name="displayName"
              id="displayName"
              required
              className="my-4 w-full bg-slate-900 p-2 lg:p-4  lg:text-2xl rounded-md focus:outline-none "
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="username"
              className="text-lg lg:text-3xl font-mono font-semibold  tracking-wide "
            >
              USERNAME
            </label>
            <input
              type="username"
              name="username"
              id="username"
              required
              className="my-4 w-full bg-slate-900 p-2 lg:p-4  lg:text-2xl rounded-md focus:outline-none "
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-lg lg:text-3xl font-mono font-semibold  tracking-wide "
            >
              PASSWORD
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="my-4 w-full bg-slate-900 p-2 lg:p-4  lg:text-2xl rounded-md focus:outline-none "
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="DOB"
              className="text-lg lg:text-3xl font-mono font-semibold  tracking-wide "
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
                className="m-1 lg:m-4 ml-0 w-[32.67968940%] bg-slate-900 p-2 lg:p-4  lg:text-2xl rounded-md focus:outline-none hide-scrollbar"
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
                className="m-1 lg:m-4 w-[29%] bg-slate-900  p-2 lg:p-4  lg:text-2xl rounded-md focus:outline-none hide-scrollbar"
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
                className=" w-[29%] bg-slate-900 p-2 lg:p-4 lg:text-2xl rounded-md focus:outline-none hide-scrollbar"
              >
                <option value="" disabled>
                  Year
                </option>
                {renderYears()}
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 w-full text-lg lg:text-3xl font-bold p-3 rounded-lg hover:bg-blue-600 fouce:outline-none"
            >
              Create Account
            </button>
          </div>
          <div>
            <a href="" onClick={() => navigate("/login")}>
              <p className=" text-blue-400  lg:text-2xl font-semibold font-sans">
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
