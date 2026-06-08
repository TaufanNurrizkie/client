import Logo from "@/assets/image/social-media.png";
import { Link } from "react-router-dom";

const LoginView = () => {
  return (
    <div className="flex w-full max-w-5xl">
      {/* Left Side */}
      <div className="hidden md:flex flex-1 items-center justify-center">
        <img src={Logo} alt="Logo" className="w-96 h-96 mt-3 mx-auto" />
      </div>
      {/* Right Side */}
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-xs">
          {/* Login Form */}
          <div className=" card bg-base-100">
            <div className="card-body px-8 py-10">
              {/* text */}
              <div className="text-center mb-8">
                <h1 className="text-5xl  font-logo">JustGram</h1>
              </div>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-full bg-base-200"
              />
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full bg-base-200 mb-3"
              />

              <button className="btn w-full bg-info">Login</button>
            </div>
          </div>

          <div class="divider">OR</div>

          {/* Register Link */}
          <div className="card bg-base-100 mt-4">
            <div className="card-body py-4 text-center text-sm">
              Don't have an account?
              <Link to={"/register"} className="link link-info">
                <span className="link link-primary font-semibold cursor-pointer">
                  Sign Up
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
