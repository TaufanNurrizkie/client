import {
  FaHome,
  FaPlusSquare,
  FaSearch,
  FaUserCircle,
  FaSignOutAlt,
  FaHeart,
  FaRegComment,
  FaPaperPlane,
  FaRegBookmark,
} from "react-icons/fa";
import { FaComment } from "react-icons/fa6";

const HomeView = () => {
  return (
    <div className="flex min-h-screen bg-base-200">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 px-6 py-6 flex-col justify-between sticky top-0 h-screen overflow-hidden shadow-md shadow-info">
        <div className="">
          <h1 className="text-5xl font-logo mb-10">JustGram</h1>
          <ul className="menu gap-3 text-base">
            <li>
              <a href="">
                <FaHome /> Home
              </a>
            </li>
            <li>
              <a href="">
                <FaSearch /> Search
              </a>
            </li>
            <li>
              <a href="">
                <FaPlusSquare /> Create
              </a>
            </li>
            <li>
              <a href="">
                <FaUserCircle /> Profile
              </a>
            </li>
          </ul>
        </div>
        <button className="btn btn-outline btn-sm">Log Out</button>
      </aside>
      <aside className="hidden md:flex lg:hidden w-20 shadow-md shadow-info flex-col items-center py-6 gap-8 sticky top-0 h-screen overflow-hidden">
        <FaHome className="text-2xl cursor-pointer" />
        <FaSearch className="text-2xl cursor-pointer" />
        <FaPlusSquare className="text-2xl cursor-pointer" />
        <FaUserCircle className="text-2xl cursor-pointer" />
        <FaSignOutAlt className="text-2xl cursor-pointer" />
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex justify-center pb-16 md:pb-0">
        <div className="w-full max-w-xl">
          <div className="border-b">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://i.pravatar.cc/150?img=1" alt="" />
                  </div>
                </div>
                <span className="font-semibold text-sm">John Doe</span>
              </div>
              <span className="cursor-pointer">...</span>
            </div>
            {/* Posts */}
            <img
              src="https://picsum.photos/seed/1/600/600"
              alt=""
              className="w-full"
            />

            {/* Action */}
            <div className="flex justify-between px-4 py-3">
              <div className="flex gap-4 text-xl">
                <FaHeart className="cursor-pointer hover:text-red-500 transition" />
                <FaRegComment className="cursor-pointer" />
                <FaPaperPlane className="cursor-pointer " />
              </div>
              <FaRegBookmark className="cursor-pointer text-xl" />
            </div>

            {/* Caption */}
            <div className="px-4 pb-4 text-sm">
              <div className="font-semibold">1500 Likes</div>
              <p className="">
                <span className="font-bold">username</span> Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Est alias quod
                molestias! Ducimus quasi quo enim dicta facilis hic illo atque
                maiores provident. Ipsam impedit odit, perferendis officia rem
                nobis.
              </p>
              <p className="text-xs text-gray-500 mt-1">2 days ago</p>
            </div>
          </div>
        </div>
      </main>
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

export default HomeView;
