import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/common/layout/Layout";
import Practice from "../pages/Practice";
import Study from "../pages/Study";
import Login from "../components/login/Login";
import EmailLogin from "../components/login/EmailLogin";
import LoginLayout from "../components/common/layout/LoginLayout";
import Video from "../pages/Video";
import Community from "../pages/Community";
import SignUP from "../pages/SignUP";
import Dictionary from "../components/dictionary/Dictionary";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/study" element={<Study />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/community" element={<Community />} />
          <Route path="/dictionary" element={<Dictionary />} />
        </Route>
        <Route element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/emailLogin" element={<EmailLogin />} />
          <Route path="/signup" element={<SignUP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
