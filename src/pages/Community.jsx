import React, { useState, useEffect } from "react";
import WriteModal from "../components/WriteModal";
import axios from "axios";

function Community() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState("자유게시판"); // Default category

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://43.200.180.26:8080/api/posts?category=${category}`
        );
        if (response.data.statusCode === "OK") {
          setPosts(response.data.data);
          console.log("Fetched posts:", response.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, [category]); // Fetch posts whenever the category changes

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center gap-8 mt-24">
        <div
          className="flex justify-center items-center w-[11.9375rem] h-[4.1875rem] rounded-[1.25rem] border border-transparent hover:border-[#F99363] bg-[#FFF8EF]"
          onClick={() => handleCategoryChange("자유게시판")}
        >
          <span>자유게시판</span>
        </div>
        <div
          className="flex justify-center items-center w-[11.9375rem] h-[4.1875rem] rounded-[1.25rem] border border-transparent hover:border-[#F99363] bg-[#FFF8EF]"
          onClick={() => handleCategoryChange("학급 공지사항")}
        >
          <span>학급 공지사항</span>
        </div>
        <div
          className="flex justify-center items-center w-[11.9375rem] h-[4.1875rem] rounded-[1.25rem] border border-transparent hover:border-[#F99363] bg-[#FFF8EF]"
          onClick={() => handleCategoryChange("학습 질문")}
        >
          <span>학습 질문</span>
        </div>
        <div
          className="flex justify-center items-center w-[11.9375rem] h-[4.1875rem] rounded-[1.25rem] border border-transparent hover:border-[#F99363] bg-[#FFF8EF]"
          onClick={() => handleCategoryChange("개발일지")}
        >
          <span>개발일지</span>
        </div>
        <div
          onClick={openModal}
          className="flex justify-center items-center w-[11.9375rem] h-[4.1875rem] rounded-[1.25rem] border border-transparent hover:border-[#FFF8EF] bg-[#F99363]"
        >
          <span>글남기기</span>
        </div>
        <WriteModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <div className="mt-14" style={{ maxWidth: "1024px", width: "100%" }}>
        <div className="flex gap-12 mb-14">
          <div className="font-bold text-lg text-gray-500 hover:text-black">
            최신순
          </div>
          <div className="font-bold text-lg text-gray-500 hover:text-black">
            댓글 많은 순
          </div>
        </div>
        {posts.map((post) => (
          <div key={post.id} className="mb-14">
            <div className="font-bold text-lg mb-6">{post.title}</div>
            <div className="text-base text-gray mb-8">{post.content}</div>
            <div className="flex justify-between">
              <div className="flex gap-10">
                <div className="text-sm">{post.userName}</div>
                <div className="text-sm text-gray">
                  {new Date(post.created).toLocaleDateString()}
                </div>
              </div>
              <div className="flex gap-10">
                <div className="text-sm text-gray">댓글</div>
                <div className="text-sm text-gray">조회수 {post.views}</div>
              </div>
            </div>
            <div className="border"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Community;
