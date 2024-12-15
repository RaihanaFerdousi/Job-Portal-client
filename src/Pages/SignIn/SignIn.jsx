import React, { useContext } from "react";
import Lottie from "lottie-react";
import charyBlosomTree from "../../assets/Lottie/blossom-tree.json";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log("sign in", result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 6 characters long, include one uppercase letter, and one number."
      );
      return;
    }
  };

  return (
    <div className="hero min-h-screen flex flex-col lg:flex-row items-center justify-center p-4">
      <div className="hero-content flex flex-col lg:flex-row items-center w-full max-w-7xl gap-8 lg:gap-12">
        {/* Left Animation */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <Lottie
            animationData={charyBlosomTree}
            loop={true}
            className="w-2/3 sm:w-3/4 lg:w-2/3 max-w-sm transform scale-105 hover:scale-110 transition duration-500"
          />
        </div>

        {/* Login Form */}
        <div className="card w-full max-w-md p-8 sm:p-10 lg:p-12 bg-white rounded-xl shadow-2xl border-t-4 border-red-600">
          <form onSubmit={handleSignIn} className="card-body">
            <h1 className="text-4xl text-center font-extrabold text-red-700 mb-8">Welcome Back</h1>

            {/* Email Input */}
            <div className="form-control mb-6">
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="input input-bordered border-gray-300 focus:border-red-600 focus:ring focus:ring-red-300 shadow-sm rounded-md"
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-control mb-6">
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered border-gray-300 focus:border-red-600 focus:ring focus:ring-red-300 shadow-sm rounded-md"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="form-control">
              <button
                type="submit"
                className="btn bg-red-600 text-white font-semibold hover:bg-red-700 transition duration-300 rounded-lg py-2 text-lg shadow-md"
              >
                Login
              </button>
            </div>

            {/* Sign-Up Link */}
            <div className="text-center mt-8 text-gray-700">
              <p>
                Don't have an account?{' '}
                <Link to="/signUp" className="text-red-700 font-semibold hover:underline">
                  Sign Up Here
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Right Animation */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <Lottie
            animationData={charyBlosomTree}
            loop={true}
            className="w-2/3 sm:w-3/4 lg:w-2/3 max-w-sm transform scale-105 hover:scale-110 transition duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
