import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [isValid, setIsValid] = useState();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidData(password.current.value);
    if (isSignInForm) {
      // LogIn/SignIn
      setIsValid(message);
      if (message) {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/browse");
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setIsValid(errorCode + " - " + errorMessage);
          });
      }
    } else {
      // SignUp
      if (name.current.value === "") {
        setIsValid("Invalid Name");
        return;
      }
      setIsValid(message);
      if (message === true) {
        // Create a new user
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setIsValid(errorCode + " - " + errorMessage);
          });
      }
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="h-screen bg-gray-900">
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <div
        onSubmit={(e) => e.preventDefault()}
        className="w-1/3 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80">
        <h1 className="font-bold text-4xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 px-6 my-4 w-full rounded-md bg-[#333] text-[#8c8c8c]"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 px-6 my-4 w-full rounded-md bg-[#333] text-[#8c8c8c]"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 px-6 my-2 w-full rounded-md bg-[#333] text-[#8c8c8c]"
        />
        <button
          className="p-4 my-10 w-full bg-red-700 rounded-md"
          onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-800 mx-1 pb-2"> {isValid ? isValid : null}</p>
        <p className="text-[#737373] mx-[4px]">
          {isSignInForm ? "New to Netflix? " : "Already on Netflix, "}
          <span
            className="text-white cursor-pointer hover:underline	"
            onClick={toggleSignInForm}>
            {isSignInForm ? "Sign up now." : "Sign In now."}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
