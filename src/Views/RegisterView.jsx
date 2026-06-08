import { Link } from "react-router-dom";

const RegisterView = () => {
  return (
    <div className="flex flex-1 my-5 justify-center">
      <div className="w-full max-w-xs">
        <div className=" card bg-base-100 border border-info-content">
          <div className="card-body px-8 py-6">
            {/* Logo */}
            <div className="text-center">
              <h1 className="text-5xl  font-logo">JustGram</h1>
              <p className="font-semibold mt-3 leading-7">
                Sign up to see photos and videos from your friends.
              </p>
            </div>
            <div className="divider"></div>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full bg-base-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full bg-base-300"
            />
            <input
              type="text"
              placeholder="Fullname"
              className="input input-bordered w-full bg-base-300"
            />
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered w-full bg-base-300"
            />
            <button className="btn btn-info w-full mt-4">Sign Up</button>
          </div>
          <div className="divider">OR</div>
          <div className="card bg-base-100 my-3">
            <div className="card-body py-4 text-center text-sm">
              Have an account?{""}
              <Link to={"/login"} className="link link-info no-underline font-semibold cursor-pointer">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterView;
