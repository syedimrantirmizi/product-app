import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const getData = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user.uid;
        localStorage.setItem("uid", user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };
  return (
    <>
      <div className="flex items-center justify-center p-12 md:dark:bg-gray-900 h-screen">
        <div className="mx-auto w-full max-w-[550px] bg-white md:dark:bg-gray-900">
          <div className="flex justify-center">
            <div
              onClick={() => navigate("/")}
              className="cursor-pointer select-none text-center mb-10 text-5xl font-medium text-[#07074D] md:dark:text-white flex items-center justify-around w-[400px]"
            >
              <img
                src="/TheHouse.jpg"
                className="object-contain h-[100px]"
                alt=""
              />
              <p className="w-full">The House</p>
            </div>
          </div>
          <p className="text-center mb-3 block text-3xl font-medium text-[#07074D] md:dark:text-gray-400">
            Log in
          </p>
          <form onSubmit={getData}>
            <div className="mb-5">
              <p
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D] md:dark:text-gray-400"
              >
                Email Address
              </p>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <p
                htmlFor="password"
                className="mb-3 block text-base font-medium text-[#07074D] md:dark:text-gray-400"
              >
                Password
              </p>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div>
              <button
                type="submit"
                className="hover:shadow-htmlForm w-full rounded-md bg-blue-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Login
              </button>
            </div>
            <div>
              <p
                onClick={() => {
                  navigate("/signin");
                }}
                className="mt-3 block text-base font-medium text-[#07074D] text-right md:dark:text-gray-400 cursor-pointer select-none hover:underline"
              >
                Dont have an account?
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
