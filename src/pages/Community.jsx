import React, { useState, useEffect } from "react";
import WriteModal from "../components/WriteModal";
import axios from "axios";
import { getCookie } from "../utils/cookie";
import { Link } from "react-router-dom";

function Community() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState("FREE");
  const [activeCategory, setActiveCategory] = useState("FREE"); // Default category
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Assuming total pages initially 1

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let endpoint = `http://3.34.10.94:8080/api/posts?category=${category}&page=${currentPage}&size=5`;
        const config = {};
        if (category === "CLASS") {
          endpoint = `http://3.34.10.94:8080/api/post/class/list?page=${currentPage}&size=5`;
          const token = getCookie("token");
          if (token) {
            config.headers = { Authorization: `${token}` };
          } else {
            console.error("No token found");
            return;
          }
        } else if (category === "FREE") {
          endpoint = `http://3.34.10.94:8080/api/post/list?page=${currentPage}&size=5&category=FREE`;
        } else if (category === "QUESTION") {
          endpoint = `http://3.34.10.94:8080/api/post/list?page=${currentPage}&size=5&category=QUESTION`;
        } else if (category === "DIARY") {
          endpoint = `http://3.34.10.94:8080/api/post/list?page=${currentPage}&size=5&category=DIARY`;
        }

        const response = await axios.get(endpoint, config);
        if (response.data.statusCode === "OK") {
          setPosts(response.data.data.content);
          setTotalPages(response.data.data.totalPages);
          console.log("Fetched posts:", response.data.data.content);
        }
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, [category, currentPage]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setActiveCategory(newCategory);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="flex justify-center gap-8 mt-24">
        <div
          className={`flex justify-center items-center w-[11.9375rem] h-[4.1875rem] rounded-[1.25rem] border ${
            activeCategory === "FREE"
              ? "border-[#F99363]"
              : "border-transparent"
          } hover:border-[#F99363] bg-[#FFF8EF]`}
          onClick={() => handleCategoryChange("FREE")}
        >
          <span>자유게시판</span>
        </div>
        <div
          className={`flex justify-center items-center w-[11.9375rem] h-[4.1875rem] rounded-[1.25rem] border ${
            activeCategory === "CLASS"
              ? "border-[#F99363]"
              : "border-transparent"
          } hover:border-[#F99363] bg-[#FFF8EF]`}
          onClick={() => handleCategoryChange("CLASS")}
        >
          <span>학급 공지사항</span>
        </div>
        <div
          className={`flex justify-center items-center w-[11.9375rem] h-[4.1875rem] rounded-[1.25rem] border ${
            activeCategory === "QUESTION"
              ? "border-[#F99363]"
              : "border-transparent"
          } hover:border-[#F99363] bg-[#FFF8EF]`}
          onClick={() => handleCategoryChange("QUESTION")}
        >
          <span>학습 질문</span>
        </div>
        <div
          className={`flex justify-center items-center w-[11.9375rem] h-[4.1875rem] rounded-[1.25rem] border ${
            activeCategory === "DIARY"
              ? "border-[#F99363]"
              : "border-transparent"
          } hover:border-[#F99363] bg-[#FFF8EF]`}
          onClick={() => handleCategoryChange("DIARY")}
        >
          <span>개발일지</span>
        </div>
        <div
          onClick={openModal}
          className="flex justify-center items-center w-[11.9375rem] h-[4.1875rem] rounded-[1.25rem] border border-transparent hover:border-[#FFF8EF] bg-[#F99363]"
        >
          <span>글남기기</span>
        </div>
        <WriteModal
          isOpen={isModalOpen}
          onClose={closeModal}
          category={activeCategory}
        />
      </div>
      <div
        className="mt-14 mb-20"
        style={{ maxWidth: "1024px", width: "100%" }}
      >
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
            <Link to={`/post/${post.id}`}>
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
            </Link>
          </div>
        ))}
      </div>
      <footer className="w-[1440px] fixed bottom-0 bg-[#FFF8EF]">
        <div className="flex justify-center gap-4 py-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-2 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-[#F99363] text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default Community;
