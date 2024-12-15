import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);

      });
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="btn bg-cyan-500 text-white font-semibold py-3 px-6 rounded-lg w-full shadow-lg transition-transform duration-300 ease-in-out hover:bg-cyan-600 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300"
      >
        <span className="flex items-center justify-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12c0 4.855 3.152 8.933 7.503 10.355V15.36H5.93V12h2.573V9.575C8.503 6.927 9.927 5.5 12.253 5.5c1.14 0 2.227.088 2.573.127v3.037h-1.82c-1.468 0-1.755.697-1.755 1.716V12h3.148l-.513 3.36h-2.635v6.995C19.847 20.933 23 16.855 23 12z"
            />
          </svg>
          <span>Sign in with Google</span>
        </span>
      </button>
    </div>
  );
};

export default SocialLogin;

// abc
