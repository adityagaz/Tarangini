import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { GoComment } from "react-icons/go";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import Navigation from "../navigation/navigation";

const Shimmer = () => (
  <div className="animate-pulse flex flex-col items-center justify-center w-[80%] bg-white shadow-md rounded-lg overflow-hidden">
    <div className="w-full bg-gray-300 h-24 rounded-t-lg"></div>
    <div className="p-6">
      <div className="text-3xl font-bold text-gray-800 mb-2 bg-gray-300 h-8 rounded-full"></div>
      <p className="text-lg text-gray-600 bg-gray-300 h-6 rounded-full"></p>
      <div className="mt-6">
        <div className="flex justify-between items-center bg-gray-300 h-6 rounded-full">
          <span className="text-lg text-gray-600"></span>
          <span className="text-lg font-semibold text-gray-800"></span>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex justify-between items-center bg-gray-300 h-6 rounded-full">
          <span className="text-lg text-gray-600"></span>
          <span className="text-lg font-semibold text-gray-800"></span>
        </div>
        <div className="flex justify-between items-center mt-2 bg-gray-300 h-6 rounded-full">
          <span className="text-lg text-gray-600"></span>
          <span className="text-lg font-semibold text-gray-800"></span>
        </div>
        <div className="flex justify-between items-center mt-2 bg-gray-300 h-6 rounded-full">
          <span className="text-lg text-gray-600"></span>
          <span className="text-lg font-semibold text-gray-800"></span>
        </div>
        <div className="flex justify-between items-center mt-2 bg-gray-300 h-6 rounded-full">
          <span className="text-lg text-gray-600"></span>
          <span className="text-lg font-semibold text-gray-800"></span>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex justify-between items-center bg-gray-300 h-6 rounded-full">
          <span className="text-lg text-gray-600"></span>
          <span className="text-lg font-semibold text-gray-800"></span>
        </div>
        <div className="flex justify-between items-center mt-2 bg-gray-300 h-6 rounded-full">
          <span className="text-lg text-gray-600"></span>
          <span className="text-lg font-semibold text-gray-800"></span>
        </div>
      </div>
    </div>
  </div>
);

const User = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const loggeduserid = localStorage.getItem("userid");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://sehyogini.onrender.com/api/getUserByID/${loggeduserid}`
        );
        const userData = await response.json();
        setUser(userData.user);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <Navigation />
      {isLoading ? (
        <Shimmer />
      ) : (
        <div className="mt-24 bg-gray-100 flex flex-col items-center justify-center">
          <div className="w-[80%] bg-white shadow-md rounded-lg overflow-hidden flex">
            <div className="flex items-center justify-center w-1/4 bg-gray-200">
              <div className="h-24 w-24 flex items-center justify-center bg-gray-300 rounded-full">
                <CgProfile className="h-16 w-16 text-gray-600" />
              </div>
            </div>
            <div className="w-3/4 p-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {user.name}
              </h2>
              <p className="text-lg text-gray-600">UI/UX Designer</p>
              <div className="mt-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-600">Email:</span>
                  <span className="text-lg font-semibold text-gray-800">
                    {user.email}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg text-gray-600">Phone:</span>
                  <span className="text-lg font-semibold text-gray-800">
                    {user.phone}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg text-gray-600">Date of Birth:</span>
                  <span className="text-lg font-semibold text-gray-800">
                    {user.dob}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg text-gray-600">Location:</span>
                  <span className="text-lg font-semibold text-gray-800">
                    {user.city}, {user.state}
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-600">Followers</span>
                  <span className="text-lg font-semibold text-gray-800">0</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg text-gray-600">Following</span>
                  <span className="text-lg font-semibold text-gray-800">0</span>
                </div>
              </div>
            </div>
          </div>
          <h2 className="flex mt-10 text-3xl font-bold text-gray-800 mb-2">
            My Posts
          </h2>

          {user.myposts.map((post, index) => (
            <div className=" mt-10 w-[80%] h-fit mb-10" key={index}>
              <div className="w-full bg-white h-fit rounded-xl p-5 relative">
                <div className="flex flex-row">
                  <div className="flex rounded-full bg-sky-400 w-10 h-10" />
                  <div className="flex flex-row ml-3 mt-2 font-normal text-md ">
                    {post.author}
                  </div>
                </div>
                <div className="flex text-md font-normal pt-3 ml-2">
                  {post.content}
                </div>
                <div className="flex flex-row justify-center items-center mt-8">
                  <div className="mr-auto flex flex-row cursor-pointer">
                    <button>
                      <GoComment className="w-7 h-7" />
                    </button>
                    <div className="ml-2">0</div>
                  </div>
                  <div className="flex flex-row">
                    <button>
                      {post.liked ? (
                        <FcLike className="w-8 h-8  mb-1" />
                      ) : (
                        <FcLikePlaceholder className="w-8 h-8  mb-1" />
                      )}
                    </button>
                    <div className="ml-3 mt-1">0</div>
                  </div>
                </div>
                <div className="flex flex-col">
                  {post.comments.length > 0 ? (
                    post.comments.map((comment, commentIndex) => (
                      <div key={commentIndex} className="flex flex-row mt-5">
                        <div>{comment.name}</div>
                        <p>:</p>
                        <div className="ml-5 flex justify-center items-center">
                          {comment.comment}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex justify-center items-center">
                      No comments
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default User;
