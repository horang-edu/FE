import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCookie } from "../../utils/cookie";

function Question() {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const token = getCookie();
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://3.34.10.94:8080/api/post/${id}`);
        const data = await response.json();
        if (response.ok) {
          setPosts([data.data]); // Set posts array with the fetched post
        } else {
          console.error("Failed to fetch post:", data.message);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  return (
    <div className="py-[2.375rem] flex flex-col">
      {posts.length === 0 ? (
        <div className="text-gray">질문한 게시물이 없습니다.</div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="flex flex-row mb-[1.625rem]">
            <div className="text-16 font-medium">•</div>
            <div className="text-16 w-[49.5625rem] px-3.5">{post.title}</div>
            <div className="text-gray">{post.created}</div>
          </div>
        ))
      )}
    </div>
  );
}

export default Question;
