import React, { useEffect, useState } from "react";
import axios from "axios";
import { ReactComponent as DeleteButton } from "../assets/delete.svg";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [newWishlist, setNewWishlist] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://13.209.68.120:8080/api/dibs");
        setWishlist(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [newWishlist]);

  const handleAddWishlist = async () => {
    try {
      await axios.post("http://13.209.68.120:8080/api/dibs", {
        topic: newWishlist,
      });
      setWishlist([...wishlist, { topic: newWishlist }]);
      setNewWishlist("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteWishlist = async (id) => {
    try {
      await axios.delete(`http://13.209.68.120:8080/api/dibs/${id}`);
      const updatedWishlist = wishlist.filter((item) => item.id !== id);
      setWishlist(updatedWishlist);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex ">
        <div className="text-black font-noto-sans font-semibold text-xl leading-118">
          찜 목록
        </div>
      </div>
      <div className="task-layout">
        {wishlist.map((wish, index) => (
          <div className="task-text" key={index}>
            <div className="task-title flex items-center">
              <div className="text-lg">{wish.topic}</div>
              <div className="text-base">{wish.checkBox}</div>
            </div>
            <DeleteButton onClick={() => handleDeleteWishlist(wish.id)} />
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newWishlist}
          onChange={(e) => setNewWishlist(e.target.value)}
        />
        <button onClick={handleAddWishlist}>과제 추가</button>
      </div>
    </div>
  );
}

export default Wishlist;
