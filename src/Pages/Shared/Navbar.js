import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useRole from "../../hooks/useRole";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [role] = useRole(user?.email);
  console.log("role form navbar", role);
  const handleLogout = () => {
    console.log("out");
    logOut()
      .then(() => {})
      .catch(() => {});
    toast.error("User logged out");
  };
  return (
    <div className="navbar bg-base-100 shadow-2xl">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Flipphoe
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li className="lg:block hidden">
            <Link to="/">Home</Link>
          </li>
          <li className="lg:block hidden">
            <Link to="/blogs">BLogs</Link>
          </li>
          <li className="lg:block hidden">
            <Link to="/products">Products</Link>
          </li>
          <li className="lg:block hidden">
            <Link to="/">Item 1</Link>
          </li>
          <li className="lg:block hidden">
            <Link to="/sdf">Item 1</Link>
          </li>
          <li>
            {role === "seller" && <Link to={"/addproducts"}>addproducts</Link>}
          </li>
          <li>
            {role === "seller" && <Link to={"/myproducts"}>myproducts</Link>}
          </li>
          <li>{role === "buyer" && "my orders"}</li>
          <li>{role === "admin" && "all sellers"}</li>
          <li className="lg:block hidden">
            {user ? (
              <>
                <div>
                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Log out"
                    title="Log out"
                  >
                    Log out
                  </button>
                </div>
                <div></div>
              </>
            ) : (
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  to="/login"
                >
                  Login
                </Link>

                <div className="hidden sm:flex">
                  <Link
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-indigo-600"
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
          </li>

          <li tabIndex={0}>
            <Link className="lg:hidden">
              Menu
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="p-2 bg-base-100">
              <li>
                <Link>Submenu 1</Link>
              </li>
              <li>
                <Link>Submenu 2</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
