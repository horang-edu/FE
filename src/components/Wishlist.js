import React, { useState } from "react";
import axios from "axios";
import { ReactComponent as DeleteButton } from "../assets/delete.svg";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [newWishlist, setNewWishlist] = useState("");

  const handleClick = async () => {
    try {
      const response = await axios.get("http://54.180.142.251:8080/api/dibs");
      setWishlist(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddTask = async () => {
    try {
      await axios.post("http://54.180.142.251:8080/api/dibs", {
        topic: newWishlist,
      });
      setNewWishlist("");
      handleClick();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`http://54.180.142.251:8080/api/dibs/${id}`);
      const updatedWishlist = wishlist.filter((task) => task.id !== id);
      setWishlist(updatedWishlist);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>불러오기</button>
      <div className="pl-4 text-lg">오늘의 과제</div>
      <div className="task-layout">
        {wishlist.map((wish, index) => (
          <div className="task-text" key={index}>
            <div className="task-title flex items-center">
              <div className="text-lg">{wish.topic}</div>
              <div className="text-base">{wish.checkBox}</div>
            </div>
            <DeleteButton onClick={() => handleDeleteTask(wish.id)} />
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newWishlist}
          onChange={(e) => setNewWishlist(e.target.value)}
        />
        <button onClick={handleAddTask}>과제 추가</button>
      </div>
    </div>
  );
}

export default Wishlist;
