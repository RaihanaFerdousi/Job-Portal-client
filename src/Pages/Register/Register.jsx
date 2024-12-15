import Lottie from "lottie-react";
import React, { useContext } from "react";
import regegisterLottieData from "../../assets/Lottie/regester.json";
import AuthContext from "../../Context/AuthContext/AuthContext";
import SocialLogin from "../Shared/SocialLogin";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 6 characters long, include one uppercase letter, and one number."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-screen  flex items-center justify-center py-10">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 max-w-screen-lg px-4">
        <div className="w-[1300px]">
          <Lottie animationData={regegisterLottieData} />
        </div>

        <div className="card bg-white w-full shadow-xl max-w-md rounded-lg p-8 border border-red-500">
          <h1 className="text-4xl font-bold text-red-800 mb-6 text-center">
            Register Now!
          </h1>
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-red-700">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                className="input input-bordered border-red-500 focus:ring-2 focus:ring-red-600 focus:outline-none rounded-lg p-3 text-gray-700"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-red-700">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                className="input input-bordered border-red-500 focus:ring-2 focus:ring-red-600 focus:outline-none rounded-lg p-3 text-gray-700"
                required
              />
              <label className="label mt-2">
                <a href="#" className="text-sm text-red-600 hover:underline">
                  Forgot password?
                </a>
              </label>
            </div>


            <div className="flex w-full flex-col border-opacity-50">
            <button
              type="submit"
              className="btn bg-red-600 text-white font-bold py-2 px-4 rounded-lg w-full shadow-md transition-all duration-300 hover:bg-red-700"
            >
              Register
            </button>
              <div className="divider">OR</div>
              <SocialLogin/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
