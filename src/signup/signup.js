import React, { useEffect, useState } from "react";
import logoDark from "../images/maitriyee.svg";
import { Link } from "react-router-dom";
import Navigation from "../navigation/navigation";
import SignIn from "../signin/signin";
const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [employementStatus, setEmployementStatus] = useState("No");
  const [lookingFor, setLookingFor] = useState("");
  const [levelOfEducation, setLevelOfEducation] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [userRecuiter, setuserRecuiter] = useState("");
  const [organization, setorganization] = useState("");
  const [organizationid, setorganizationid] = useState("");
  const [whatudo, setwhatudo] = useState("");

  const signup = async () => {
    try {
      let body = {
        name: name,
        phone: phone,
        email: email,
        dob: dob,
        password: password,
        gender: gender,
        city: city,
        acctype: userRecuiter,
        state: state,
        profilePic: "samplePic",
        details: {
          employementsStatus: employementStatus,
          lookingFor: lookingFor,
          levelOfEducation: levelOfEducation,
          companyName: company,
          companyRole: role,
          organisationID: organizationid,
        },
      };
      const response = await fetch(
        "https://sehyogini.onrender.com/api/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const data = await response.json();
      console.log(data);
      window.location.href = "/signin";
    } catch (err) {
      console.log("error registering the user!", err);
    }
  };

  return (
    <div className="bg-theme p-8 ">
      <div className="flex flex-col">
        <div className="flex justify-start items-start">
          <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
        </div>
        <div className="flex justify-center items-center">
          <img src={logoDark} alt="head " className="w-40 mt-1 mb-10" />
        </div>
      </div>
      <div className="container mx-auto justify-center items-center flex">
        <div className="bg-white rounded-md p-8 w-[70%]">
          <div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border rounded-md py-2 px-3 w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border rounded-md py-2 px-3 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border rounded-md py-2 px-3 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-gray-700 font-semibold mb-2"
              >
                Gender
              </label>
              <input
                type="text"
                id="gender"
                className="border rounded-md py-2 px-3 w-full"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-semibold mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="border rounded-md py-2 px-3 w-full"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="dob"
                className="block text-gray-700 font-semibold mb-2"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="border rounded-md py-2 px-3 w-full"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-gray-700 font-semibold mb-2"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="border rounded-md py-2 px-3 w-full"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="state"
                className="block text-gray-700 font-semibold mb-2"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                className="border rounded-md py-2 px-3 w-full"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="user/recuiter"
                className="block text-gray-700 font-semibold mb-2"
              >
                User/Recuiter
              </label>
              <select
                id="userRecuiter"
                className="border rounded-md py-2 px-3 w-full"
                value={userRecuiter}
                onChange={(e) => setuserRecuiter(e.target.value)}
                required
              >
                <option value="user">User</option>
                <option value="recuiter">Recuiter</option>
              </select>
            </div>

            {userRecuiter !== "recuiter" && (
              <div className="mb-4">
                <label
                  htmlFor="employementStatus"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Employment Status
                </label>
                <select
                  id="employementStatus"
                  className="border rounded-md py-2 px-3 w-full"
                  value={employementStatus}
                  onChange={(e) => setEmployementStatus(e.target.value)}
                  required
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
            )}

            {employementStatus === "Yes" && (
              <div className="mb-4">
                <label
                  htmlFor="Role"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  className="border rounded-md py-2 px-3 w-full"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
            )}

            {employementStatus === "Yes" && (
              <div className="mb-4">
                <label
                  htmlFor="Company"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="border rounded-md py-2 px-3 w-full"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            )}

            {userRecuiter !== "recuiter" && (
              <div className="mb-4">
                <label
                  htmlFor="lookingfor"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Looking For
                </label>
                <select
                  id="lookingfor"
                  className="border rounded-md py-2 px-3 w-full"
                  value={lookingFor}
                  onChange={(e) => setLookingFor(e.target.value)}
                  required
                >
                  <option value="Mentorship">Mentorship</option>
                  <option value="Parenting">Parenting</option>
                  <option value="Financeliteracy">Finance literacy</option>
                  <option value="CareerDevelopment">Career Development</option>
                  <option value="FinancialLiteracy">Financial Literacy</option>
                </select>
              </div>
            )}

            {userRecuiter === "recuiter" && (
              <div className="mb-4">
                <label
                  htmlFor="organizationname"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Organization
                </label>
                <input
                  type="text"
                  id="oraganization"
                  className="border rounded-md py-2 px-3 w-full"
                  value={organization}
                  onChange={(e) => setorganization(e.target.value)}
                />
              </div>
            )}

            {userRecuiter === "recuiter" && (
              <div className="mb-4">
                <label
                  htmlFor="organizationid"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Organization ID
                </label>
                <input
                  type="text"
                  id="oraganizationid"
                  className="border rounded-md py-2 px-3 w-full"
                  value={organizationid}
                  onChange={(e) => setorganizationid(e.target.value)}
                />
              </div>
            )}

            {userRecuiter === "recuiter" && (
              <div className="mb-4">
                <label
                  htmlFor="whatudo"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  What you do
                </label>
                <input
                  type="text"
                  id="whatudo"
                  className="border rounded-md py-2 px-3 w-full"
                  value={whatudo}
                  onChange={(e) => setwhatudo(e.target.value)}
                />
              </div>
            )}

            {userRecuiter !== "recuiter" && (
              <div className="mb-4">
                <label
                  htmlFor="levelOfEducation"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Level of Education
                </label>
                <input
                  type="text"
                  id="levelOfEducation"
                  className="border rounded-md py-2 px-3 w-full"
                  value={levelOfEducation}
                  onChange={(e) => setLevelOfEducation(e.target.value)}
                />
              </div>
            )}
            <div>
              <button
                type="submit"
                className="bg-theme hover:bg-theme/80 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  signup();
                  <Link>to={<SignIn />}</Link>;
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
