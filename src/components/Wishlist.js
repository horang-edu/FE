import React, { useEffect, useState } from "react";
import axios from "axios";
import { ReactComponent as DeleteButton } from "../assets/delete.svg";
import { fetchWishlist, deleteWishlistItem } from "../apis/mystudyroom";
import { getCookie } from "../utils/cookie";
import { Link } from "react-router-dom";
function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getCookie("token")
        const response = await axios.get("http://3.34.10.94:8080/api/video/zzim/list", {
          headers: {
            Authorization: `${token}`  // 토큰을 Authorization 헤더에 추가
          }
        });
        setWishlist(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);

      }
    };

    fetchData();
  }, []);

  const handleDeleteWishlist = async (id) => {
    try {
      await deleteWishlistItem(id);
      const updatedWishlist = wishlist.filter((item) => item.id !== id);
      setWishlist(updatedWishlist);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex ">
        <div className="text-[#6F3A22] font-noto-sans font-semibold text-xl leading-118 mb-[3.7625rem]">찜 목록</div>
      </div>
      <div className="task-layout">
        {Array.isArray(wishlist) && wishlist.length === 0 ? (
          <div className="text-lg text-gray">찜한 리스트가 없습니다</div>
        ) : (
          Array.isArray(wishlist) && wishlist.map((wish, index) => (
            <div className="task-text" key={index}>
              <div className="task-title flex items-center">
                {/* <div className="text-lg">{wish.topic}</div> */}
                <Link to={`/video/${wish}`} className="text-lg">
                  강의 {wish}
                </Link>
                {/* <div className="text-base">{wish.checkBox}</div> */}
              </div>
              {/* <DeleteButton onClick={() => handleDeleteWishlist(wish.id)} /> */}
            </div>
          ))
        )}
      </div>
      <div>
        {/* <input
          type="text"
          value={newWishlist}
          onChange={(e) => setNewWishlist(e.target.value)}

        />
        <button onClick={handleAddWishlist}>과제 추가</button> */}
      </div>
    </div>
  );
}

export default Wishlist;
