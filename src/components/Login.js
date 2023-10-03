import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="h-screen bg-gray-900">
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <form className="w-1/3 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80">
        <h1 className="font-bold text-4xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 px-6 my-4 w-full rounded-md bg-[#333] text-[#8c8c8c]"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 px-6 my-4 w-full rounded-md bg-[#333] text-[#8c8c8c]"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 px-6 my-2 w-full rounded-md bg-[#333] text-[#8c8c8c]"
        />
        <button className="p-4 my-10 w-full bg-red-700 rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-[#737373] mx-[4px]">
          {isSignInForm ? "New to Netflix?" : "Already on Netflix, "}
          <span
            className="text-white cursor-pointer hover:underline	"
            onClick={toggleSignInForm}>
            {isSignInForm ? "Sign up now." : "Sign In now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
