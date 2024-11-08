import { type } from "@testing-library/user-event/dist/type";
import Navigation from "../navigation/navigation";
import React, { useState, useEffect } from "react";

const LoadingSkeleton = () => {
  const shimmerCards = Array.from({ length: 6 }, (_, index) => (
    <div
      key={index}
      className="transition-transform transform bg-gray-200 animate-pulse hover:scale-105 mt-20 border border-gray-200 rounded-lg shadow"
    >
      <div className="flex flex-row p-5">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="ml-4">
          <div className="w-20 h-4 bg-gray-300 rounded-full"></div>
        </div>
      </div>
      <div className="pl-5">
        <div className="mt-2 h-28 w-full bg-gray-300 rounded-lg"></div>
        <div className="mt-2 pt-2 pb-2 mb-2 pd-2">
          <div className="w-3/4 h-4 bg-gray-300 rounded-full"></div>
          <div className="mt-2 h-4 bg-gray-300 rounded-full"></div>
          <div className="mt-2 w-1/4 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container w-full mx-auto mt-10">
      <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {shimmerCards}
      </div>
    </div>
  );
};

const Opportunities = () => {
  const [scheme, setScheme] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ngo, setNgo] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          "https://sehyogini.onrender.com/api/getSchemes"
        );
        const responseData = await response.json();
        setScheme(responseData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchdata();
  }, []);
  useEffect(() => {
    const fetchdata1 = async () => {
      try {
        const response = await fetch(
          "https://sehyogini.onrender.com/api/getWorkshop"
        );
        const responseData = await response.json();
        setNgo(responseData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchdata1();
  }, []);

  return (
    <div>
      <Navigation />
      {console.log(ngo)};
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <div className="container w-full mx-auto mt-10">
          <div className="header mt-24">
            <h1
              class="mt-10
           text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl "
            >
              Government{" "}
              <mark class="px-2 text-white bg-theme rounded ">Schemes</mark> for
               Mother Community
            </h1>
          </div>
          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
            {scheme.map((data, index) => (
              <div
                key={index}
                className="transition-transform transform hover:scale-105 mt-20 bg-white border border-gray-200 rounded-lg shadow "
              >
                <div className="flex flex-row p-5">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8zti9Gycb7BjG2xS8Asf08K0m_ry_daVFjbc7NIbNg&s"
                    alt="Ministry Emblem"
                    className="w-10 h-10"
                  />
                  <div className="ml-4">
                    <h2 className="text-md font-semibold">
                      {data.ministry_name}
                    </h2>
                  </div>
                </div>
                <div className="pl-5">
                  <img
                    src={data.icon}
                    alt="Scheme Icon"
                    className="mt-2 h-28 w-full object-contain"
                  />
                  <div className="mt-2 pt-2 pb-2 mb-2 pd-2">
                    <a href="#">
                      <h5 className="pt-2 pb-2 mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                        {data.scheme_name}
                      </h5>
                    </a>
                    <p className="pt-2 pb-2 pd-2 mb-3 font-normal text-gray-700 ">
                      {data.scheme_description}
                    </p>
                    <a
                      href={data.url}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-theme rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                      Details
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h1
            class="mt-20
           text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl "
          >
            NGO <mark class="px-2 text-white bg-theme rounded ">Workshops</mark>{" "}
            for Mother Community
          </h1>
          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
            {ngo.map((data, index) => (
              <div
                key={index}
                className="transition-transform transform hover:scale-105 mt-20 bg-white border border-gray-200 rounded-lg shadow "
              >
                <div className="flex flex-row p-5">
                  <img
                    src="https://thelifeofasinglemom.com/wp-content/uploads/2022/02/Logo_graytag.png"
                    alt="Ministry Emblem"
                    className="w-10 h-10"
                  />
                  <div className="ml-4">
                    <h2 className="text-md font-semibold">
                      {data.organization}
                    </h2>
                  </div>
                </div>
                <div className="pl-5">
                  <img
                    src={data.icon}
                    alt="Scheme Icon"
                    className="mt-2 h-28 w-full object-contain"
                  />
                  <div className="mt-2 pt-2 pb-2 mb-2 pd-2">
                    <a href="#">
                      <h5 className="pt-2 pb-2 mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                        {data.scheme_name}
                      </h5>
                    </a>
                    <p className="pt-2 pb-2 pd-2 mb-3 font-normal text-gray-700 ">
                      {data.workshop_description}
                    </p>
                    <a
                      href={data.url}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-theme rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                    >
                      Details
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Opportunities;
