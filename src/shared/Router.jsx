import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/common/layout/Layout";
import Practice from "../pages/Practice";
import Study from "../pages/Study";
import Chat from "../components/chat/Chat";
import Learning from "../pages/Learning";
import Quiz from "../pages/Quiz";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/study" element={<Study />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/quiz" element={< Quiz/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
