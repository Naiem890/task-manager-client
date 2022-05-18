import React from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import loginImage from "./../../image/login.svg";

const Login = () => {
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  if (loading || loading1) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate("/");
  }
  console.log(error);
  return (
    <div className="grid place-content-center text-center min-h-screen -mt-7">
      <img src={loginImage} alt="" className="max-w-sm mx-auto" />
      <h2 className="text-2xl font-semibold  my-6 mb-10">
        Log In To Our <br /> Task Management System
      </h2>
      <div>
        <p className="text-red-500 mb-4">
          {error || error1 ? `${error1 || error}` : ""}
        </p>
        <button
          type="button"
          onClick={() => signInWithGoogle()}
          class="text-white  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        >
          <svg
            class="w-4 h-4 mr-2 -ml-1"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
