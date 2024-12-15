import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Context/AuthContext/AuthContext";
import logo from "../../assets/images/jop-portal.png";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("successful sign out");
      })
      .catch((error) => {
        console.log("failed to sign out");
      });
  };

  const links = (
    <>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-rose-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl text-rose-700">Job Portal</a>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button onClick={handleSignOut} className="px-7 py-[13px] rounded-lg font-semibold text-sm bg-rose-700 text-white">
                Sign out
              </button>
            </>
          ) : (
            <>
            <div className="lg:flex gap-4 items-center">
            <Link to="/register" className="px-6 py-3 rounded-lg font-semibold text-sm border border-rose-700 bg-rose-200 text-rose-800">Register</Link>
              <Link to="/signIn" className="px-7 py-[13px] rounded-lg font-semibold text-sm bg-rose-700 text-white">
                Sign In
              </Link>
            </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
