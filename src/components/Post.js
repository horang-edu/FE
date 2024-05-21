import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { getCookie } from "../utils/cookie";
import { ReactComponent as Back } from "../assets/svg/back.svg"

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [user, setUser] = useState("");
    const nav = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://3.34.10.94:8080/api/post/${id}`);
                if (response.data.statusCode === "OK") {
                    setPost(response.data.data);
                    setTitle(response.data.data.title);
                    setContent(response.data.data.content);
                    console.log(response.data.data);

                }
            } catch (error) {
                console.error("Failed to fetch post:", error);
            }
        };

        const fetchUser = async () => {
            try {
                const token = await getCookie("token");
                if (token) {
                    const response = await axios.get(`http://3.34.10.94:8080/api/user`, {
                        headers: {
                            Authorization: `${token}`,
                        },
                    });
                    if (response.data.statusCode === "OK") {
                        setUser(response.data.data);
                        console.log(response.data.data.name);
                        console.log(response.data.data.email);
                    }
                } else {
                    console.error("Token is null");
                }
            } catch (error) {
                console.error("Failed to fetch user:", error);
            }
        };

        fetchPost();
        fetchUser();
    }, [id]);

    const handleEdit = async () => {
        const postRequestDto = {
            title,
            content,
        };

        try {
            const token = getCookie("token");
            if (token) {
                const response = await axios.patch(
                    `http://3.34.10.94:8080/api/post/${id}`,
                    postRequestDto,
                    {
                        headers: {
                            Authorization: `${token}`,
                        },
                    }
                );
                if (response.data.statusCode === 200) {
                    setPost({ ...post, title, content });
                    setIsEditing(false);
                    alert("수정이 완료되었습니다.");
                } else {
                    console.error("Failed to update post:", response.data.message);
                }
            } else {
                console.error("Token is null");
            }
        } catch (error) {
            console.error("Failed to update post:", error);
            alert("권한이 없습니다.")
        }
    };

    const handleDelete = async () => {
        try {
            const token = getCookie("token");
            if (token) {
                const response = await axios.delete(`http://3.34.10.94:8080/api/post/${id}`, {
                    headers: {
                        Authorization: `${token}`,
                    },
                });
                if (response.data.statusCode === 200) {
                    alert("삭제되었습니다.");
                    nav('/');
                } else {
                    console.error("Failed to delete post:", response.data.message);

                }
            } else {
                console.error("Token is null");
            }
        } catch (error) {
            console.error("Failed to delete post:", error);
            alert("권한이 없습니다.");
        }
    };

    if (!post) return <div>Loading...</div>;

    const isAuthor = post.email === user.email;

    return (
        <div className="mt-[25px] flex flex-col items-center min-h-screen">
            {
                isEditing ? (
                    <div className="w-[1100px] h-[772px] flex flex-col  bg-white shadow-lg rounded-lg p-[50px]">
                        <div className="flex flex-row justify-between items-center mb-[35px]">
                            <input
                                type="text"
                                className="w-full bg-[#F99363] bg-text-[#6F3A22] text-xl font-bold mb-2"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <div className="flex mt-4">
                                <button className="w-[82px] h-[57px] rounded-3xl mr-2 px-4 py-2 bg-[#FFF1EA] text-[#6F3A22]" onClick={handleEdit}>Save</button>
                                <button className="w-[82px] h-[57px] rounded-3xl px-4 py-2 bg-[#FFD7C3] text-[#6F3A22]" onClick={() => setIsEditing(false)}>Cancel</button>
                            </div>
                        </div>
                        <div className="h-[407px] bg-[#FFF8EF] flex flex-col p-[35px] rounded-lg">
                            <textarea
                                className="bg-[#F99363] text-2xl font-bold  bg-gray-100 rounded-lg mb-4 flex-1 p-2"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="w-[1100px] h-[772px] flex flex-col bg-white shadow-lg rounded-lg p-[50px]">
                        <div className="flex flex-row justify-between items-center mb-[35px]">
                            <div className="flex justify-center items-center flex-row">
                                <div className="pr-2" onClick={() => nav("/community")} ><Back /></div>
                                <div className="justify-center items-center text-[#6F3A22] text-xl font-bold mb-2">{post.title}</div>
                            </div>
                            {isAuthor && (
                                <div className="flex mt-4">
                                    <button className="w-[82px] h-[57px] rounded-3xl mr-2 px-4 py-2 bg-[#FFF1EA] text-[#6F3A22]" onClick={() => setIsEditing(true)}>수정</button>
                                    <button className="w-[82px] h-[57px] rounded-3xl px-4 py-2 bg-[#FFD7C3] text-[#6F3A22]" onClick={handleDelete}>삭제</button>
                                </div>
                            )}
                        </div>
                        <div className="h-[407px] bg-[#FFF8EF] flex flex-col p-[35px] rounded-lg">
                            <div>
                                <div className="text-2xl font-bold  bg-gray-100 rounded-lg mb-4">{post.content}</div>
                            </div>
                            <div className="mt-auto">
                                <span className="post-author text-gray-500 pr-2">작성자: {post.userName}</span>
                                <span className="post-date text-gray-500 pr-2">작성 시간: {new Date(post.created).toLocaleString()}</span>
                                <span className="post-views text-gray-500">조회수: {post.views}</span>
                            </div>
                        </div>
                        <div className="relative mt-[20px] w-full h-[110px] bg-[#FFF8EF] flex flex-col p-[35px] rounded-lg">
                            <input className="w-full h-full bg-transparent flex-1 p-2" type="text" />
                            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[82px] h-[57px] rounded-3xl bg-[#F99363] text-[#6F3A22]">등록</button>
                        </div>
                    </div>
                )
            }
        </ div >
    );
}

export default Post;
