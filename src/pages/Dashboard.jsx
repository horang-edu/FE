import React from "react";
import Todaystask from "../components/Todaystask";
import Wishlist from "../components/Wishlist";
import Progress from "../components/Progress";
import bg from "../assets/img/dashboradimg.png";
function Dashboard() {
  return (
    <div className="reletive w-full h-full bg-gray-100">
      <img src={bg} alt="s" className="absolute right-0 bottom-0" />
      <div className="flex-all-center ">
        <div className="text-indigo-600 font-bold text-2xl pt-20">
          나의 학습방
        </div>
        <div>
          <Progress />
          <Todaystask />
          <Wishlist />
          {/* <BackgroundImg /> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
