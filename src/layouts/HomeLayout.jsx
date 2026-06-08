import link from "daisyui/components/link";
import {
  FaHome,
  FaPlusSquare,
  FaSearch,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="flex min-h-screen bg-base-200">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 px-6 py-6 flex-col justify-between sticky top-0 h-screen overflow-hidden shadow-md shadow-info">
        <div className="">
          <h1 className="text-5xl font-logo mb-10">JustGram</h1>
          <ul className="menu gap-3 text-base">
            <li>
              <Link to={"/"} href="">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to={"/search"} href="">
                <FaSearch /> Search
              </Link>
            </li>
            <li>
              <Link to={"/create"} href="">
                <FaPlusSquare /> Create
              </Link>
            </li>
            <li>
              <Link to={"/profile"} href="">
                <FaUserCircle /> Profile
              </Link>
            </li>
          </ul>
        </div>
        <button className="btn btn-outline btn-sm">Log Out</button>
      </aside>
      <aside className="hidden md:flex lg:hidden w-20 shadow-md shadow-info flex-col items-center py-6 gap-8 sticky top-0 h-screen overflow-hidden">
        <Link to={"/"}>
          <FaHome className="text-2xl cursor-pointer" />
        </Link>
        <Link to={"/search"}>
          <FaSearch className="text-2xl cursor-pointer" />
        </Link>
        <Link to={"/create"}>
          <FaPlusSquare className="text-2xl cursor-pointer" />
        </Link>
        <Link to={"/profile"}>
          <FaUserCircle className="text-2xl cursor-pointer" />
        </Link>
        <Link to={"/login"}>
          <FaSignOutAlt className="text-2xl cursor-pointer" />
        </Link>
      </aside>
      {/* Main Content */}
      <Outlet />
      <nav className="fixed bottom-0 left-0 right-0 bg-base-300 flex justify-around py-3 md:hidden">
        <FaHome className="text-2xl cursor-pointer" />
        <FaSearch className="text-2xl cursor-pointer" />
        <FaPlusSquare className="text-2xl cursor-pointer" />
        <FaUserCircle className="text-2xl cursor-pointer" />
        <FaSignOutAlt className="text-2xl text-error cursor-pointer" />
      </nav>
    </div>
  );
};

export default HomeLayout;
