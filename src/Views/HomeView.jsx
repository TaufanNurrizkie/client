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
import { Link } from "react-router-dom";

const HomeView = () => {
  return (
    <>
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
                <Link to={"/john_doe"} className="font-semibold text-sm">
                  John Doe
                </Link>
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
    </>
  );
};

export default HomeView;
