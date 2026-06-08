import { FaBookmark, FaCog, FaTh } from "react-icons/fa";
const DetailUserView = () => {
  return (
    <main className="flex-1 flex justify-center pb-16 md:pb-0">
      <div className="flex justify-center bg-base-100 min-h-screen">
        <div className="w-full max-w-4xl px-4">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-8 py-10">
            {/* Avatar */}
            <div className="flex justify-center md:w-1/3">
              <div className="avatar">
                <div className="w-36 rounded-full">
                  <img src="https://i.pravatar.cc/300?img+=1" alt="" />
                </div>
              </div>
            </div>
            {/* User Info */}
            <div className="flex-1 space-y-4">
              {/* Username */}
              <div className="flex items-center gap-4 flex-wrap">
                <h2 className="text-xl font-light">Fullname</h2>
                <button className="btn btn-sm btn-primary">Follow</button>
                <FaCog className="text-xl cursor-pointer" />
              </div>
              {/* Stats */}
              <div className="flex gap-6 text-sm">
                <p>
                  <span className="font-bold">24</span> Posts
                </p>
                <p>
                  <span className="font-bold">1.2K</span> Followers
                </p>
                <p>
                  <span className="font-bold">500</span> Following
                </p>
              </div>
              {/* Biodata */}
              <div className="text-sm">
                <p className="font-semibold">Username</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                  alias quod molestias! Ducimus quasi quo enim dicta facilis hic
                  illo atque maiores provident. Ipsam impedit odit, perferendis
                  officia rem.
                </p>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          {/* Tab Menu  */}
          <div className="flex justify-center gap-10 text-sm uppercase tracking-widest">
            <button className="py-3 flex items-center gap-2 border-b-2 border-white">
              <FaTh /> Posts 
            </button>
            <button className="py-3 flex items-center gap-2 border-b-2 border-gray-400">
              <FaBookmark /> Bookmarks 
            </button>
          </div>
          {/* Post Grid */}
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-1 mt-4">
            {[...Array(12)].map((_, i) => (
              <img
                key={i} 
                src={`https://i.pravatar.cc/300?img=${i + 1}`}
                alt={`Post ${i + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailUserView;
