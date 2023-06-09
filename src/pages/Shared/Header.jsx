import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {
  const { user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("successfully log out");
      })
      .catch((error) => {});
  };

  return (
    <div className="navbar  text-2xl  text-black font-semibold bg-white z-10 sticky top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl">Yummy Food Zone</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      {user ?  (
        <div className="navbar-end">
          <label tabIndex={0} className=" btn-circle avatar">
            <div className="w-10 rounded-full" title={user?.displayName}>

              <img src={user?.photoURL} className="object-cover" />
            </div>
          </label>
          <div>
            <button className="btn btn-info" onClick={handleLogOut}>
              LogOut
            </button>
          </div>
        </div>
      ) : (
        <div className="navbar-end">
          <Link to="/login">
            <button className="btn btn-secondary">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
