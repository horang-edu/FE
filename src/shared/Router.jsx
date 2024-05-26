import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/common/layout/Layout";
import Practice from "../pages/Practice";
import Study from "../pages/Study";
import Chat from "../components/chat/Chat";
import Learning from "../pages/Learning";
import Quiz from "../pages/Quiz";
import Login from "../components/login/Login";
import EmailLogin from "../components/login/EmailLogin";
import LoginLayout from "../components/common/layout/LoginLayout";
import Video from "../pages/Video";
import Community from "../pages/Community";
import SignUP from "../pages/SignUP";
import Dictionary from "../components/dictionary/Dictionary";
import Post from "../components/Post";
import Teacher from "../pages/Teacher";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Chat />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/study" element={<Study />} />
          {/* <Route path="/chat" element={<Chat />} /> */}
          <Route path="/learning" element={<Learning />} />
          <Route path="/quiz" element={< Quiz />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/community" element={<Community />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/teacher" element={<Teacher />} />
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
