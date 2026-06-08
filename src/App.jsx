import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./Views/HomeView";
import RegisterView from "./Views/RegisterView";
import DetailUserView from "./Views/DetailUserView";
import LoginView from "./Views/LoginView";
import AuthLayout from "./Layouts/AuthLayout";
import HomeLayout from "./Layouts/HomeLayout";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/:username" element={<DetailUserView />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
