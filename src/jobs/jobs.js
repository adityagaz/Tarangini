import React from "react";
import { useState, useEffect } from "react";
import "../navigation/navigation";
import Navigation from "../navigation/navigation";
const jobList = [
  {
    id: 1,
    jobType: "Frontend Developer",
    company: "ABC Tech",
    salary: "$80,000 - $100,000",
  },
  {
    id: 2,
    jobType: "UX/UI Designer",
    company: "XYZ Design",
    salary: "$70,000 - $90,000",
  },
  {
    id: 3,
    jobType: "UX/UI Designer",
    company: "XYZ Design",
    salary: "$70,000 - $90,000",
  },
  {
    id: 4,
    jobType: "UX/UI Designer",
    company: "XYZ Design",
    salary: "$70,000 - $90,000",
  },
];

const Jobs = () => {
  const [Variant, setVariant] = useState("");
  const [data, setData] = useState();
  const [jobTitle, setJobTitle] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [stipend, setStipend] = useState("");
  const loggeduserid = localStorage.getItem("userid");

  const user = async () => {
    try {
      const response = await fetch(
        `https://sehyogini.onrender.com/api/getUserByID/${loggeduserid}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const userData = await response.json();
      if (userData) {
        setVariant(userData.user.acctype);
      } else {
        console.log("Empty response received");
      }
    } catch (err) {
      console.log("Error fetching user details:", err);
    }
  };

  user();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sehyogini.onrender.com/api/getJobs/65f626358effaff0c2dcb65d"
        );
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <>
      <Navigation />
      {Variant == "user" && (
        <div className="mt-24 ml-10 mr-10">
          <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Job Openings</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <h1 className="flex mt-10 text-3xl font-bold text-gray-800 mb-2">
                  TECH
                </h1>
                {data.technology.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md mb-10"
                  >
                    <div className="p-4">
                      <h2 className="text-xl font-semibold mb-2">
                        {job.jobType}
                      </h2>
                      <p className="text-gray-700 mb-2">
                        <span style={{ fontWeight: "bold" }}>Company: </span>
                        {job.company}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <span style={{ fontWeight: "bold" }}>Experience:</span>{" "}
                        {job.details.experience}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <span style={{ fontWeight: "bold" }}>Education:</span>{" "}
                        {job.details.education}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <span style={{ fontWeight: "bold" }}>Location:</span>{" "}
                        {job.details.location}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <span style={{ fontWeight: "bold" }}>Salary:</span>{" "}
                        Negotiable
                      </p>
                      <button className="bg-theme hover:bg-theme/90 text-white font-bold py-2 px-4 rounded">
                        Apply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="flex mt-10 text-3xl font-bold text-gray-800 mb-2">
                  FREELANCE
                </h1>
                {data.freelance.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md mb-10"
                  >
                    <div className="p-4">
                      <h2 className="text-xl font-semibold mb-2">
                        {job.jobType}
                      </h2>
                      <p className="text-gray-700 mb-2">
                        <span style={{ fontWeight: "bold" }}>Company: </span>
                        {job.company}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <span style={{ fontWeight: "bold" }}>Experience:</span>{" "}
                        {job.details.experience}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <span style={{ fontWeight: "bold" }}>Education:</span>{" "}
                        {job.details.education}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <span style={{ fontWeight: "bold" }}>Location:</span>{" "}
                        {job.details.location}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <span style={{ fontWeight: "bold" }}>Salary:</span>{" "}
                        Negotiable
                      </p>
                      <button className="bg-theme hover:bg-theme/90 text-white font-bold py-2 px-4 rounded">
                        Apply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="flex mt-10 text-3xl font-bold text-gray-800 mb-2">
                  CAREGIVING
                </h1>
                {data.caregiving.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md mb-10"
                  >
                    <div className="p-4">
                      <h2 className="text-xl font-semibold mb-2">
                        {job.jobType}
                      </h2>
                      <p className="text-gray-700 mb-2">
                        <span style={{ fontWeight: "bold" }}>Company: </span>
                        {job.company}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <span style={{ fontWeight: "bold" }}>Experience:</span>{" "}
                        {job.details.experience}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <span style={{ fontWeight: "bold" }}>Education:</span>{" "}
                        {job.details.education}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <span style={{ fontWeight: "bold" }}>Location:</span>{" "}
                        {job.details.location}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <span style={{ fontWeight: "bold" }}>Salary:</span>{" "}
                        Negotiable
                      </p>
                      <button className="bg-theme hover:bg-theme/90 text-white font-bold py-2 px-4 rounded">
                        Apply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {Variant == "recruiter" && (
        <div className="mt-24">
          <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Post a Job Opening</h1>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="jobTitle"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  className="border rounded-md py-2 px-3 w-full"
                  placeholder=""
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="postedBy"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Posted By
                </label>
                <input
                  type="text"
                  id="postedBy"
                  className="border rounded-md py-2 px-3 w-full"
                  placeholder=""
                  value={postedBy}
                  onChange={(e) => setPostedBy(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="jobCategory"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Job Category
                </label>
                <input
                  type="text"
                  id="jobCategory"
                  className="border rounded-md py-2 px-3 w-full"
                  placeholder=""
                  value={jobCategory}
                  onChange={(e) => setJobCategory(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  className="border rounded-md py-2 px-3 w-full"
                  rows="4"
                  placeholder=""
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="border rounded-md py-2 px-3 w-full"
                  placeholder=""
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="stipend"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Stipend
                </label>
                <input
                  type="text"
                  id="stipend"
                  className="border rounded-md py-2 px-3 w-full"
                  placeholder=""
                  value={stipend}
                  onChange={(e) => setStipend(e.target.value)}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Post Job
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Jobs;
