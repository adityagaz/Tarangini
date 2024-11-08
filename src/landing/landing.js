import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import "./landing.css";
import hme from "../images/hme.svg";
import logoDark from "../images/logoDark.svg";
import l2 from "../images/l2.svg";

const handleScroll = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
};
function Landing() {
  return (
    <div className="h-full w-full flex flex-row justify-center items-center bg-theme/30">
      <div className="bg-white rounded-2xl border-2 border-red-300/70 w-full mt-16 ml-8 mr-8 flex-grow p-3 mb-20">
        <nav className="flex items-center justify-between bg-white p-4 text-black rounded-2xl">
          <div className="ml-4 flex items-center">
            <img src={l2} alt="head" className="h-14 mr-2" />
          </div>
          <div className="flex items-center">
            <button className="mr-4 bg-white hover:bg-red-400 text-black py-1 px-3 rounded-2xl font-['Poppins']">
              Home
            </button>
            <button
              className="mr-4 bg-white hover:bg-red-400 text-black py-1 px-3 rounded-2xl font-['Poppins']"
              onClick={handleScroll}
            >
              About Us
            </button>
            <Link to="/signup">
              <button className="bg-theme mr-4 hover:bg-theme/80 text-white py-1 px-3 rounded-2xl font-['Poppins']">
                Join Our Community
              </button>
            </Link>
            <Link to="/signin">
              <button className="bg-theme mr-4 hover:bg-theme/80 text-white py-1 px-3 rounded-2xl font-['Poppins']">
                Login
              </button>
            </Link>
          </div>
        </nav>
        <div className="w-full">
          <img src={hme} alt="Logo" className="float-right mr-16 mt-16" />
        </div>
        <div className="ml-24 mt-20">
          <div>
            <h1 className="text-6xl font-['Poppins'] font-extra-bold leading-relaxed">
              Empower 
            </h1>
            <h1 className="text-6xl font-['Poppins'] font-extra-bold leading-relaxed">
              Mothers Today
            </h1>
            <h3 className="font-['Poppins'] ml-2 text-gray-500">
              Join Maitri
Mandram, the hub for job resources, mentorship, and
              childcare solutions tailored for single moms in Chennai
            </h3>
            <Link to="/signup">
              <button className="bg-theme text-white font-['Poppins'] rounded-2xl p-4 ml-4 mt-16">
                Join Community
              </button>
            </Link>
          </div>
          <div className="mt-80 mb-32 flex flex-row">
            <img src={l2} alt="" className="mr-3" />
            <div className="flex flex-col ml-32">
              <div className="text-6xl font-bold leading-relaxed">About Us</div>
              <div className="w-64">

              </div>
              <div className="w-4/5">
                Introducing Maitri
Mandram, a community empowerment platform for
                single mothers based in Chennai, TN. Our digital platform is
                designed to connect single mothers with essential resources,
                support networks, and job opportunities. With features like
                mentorship programs, childcare services, and skill-building
                modules tailored to their unique needs, Sehiyogini is dedicated
                to empowering single mothers to thrive in both their personal
                and professional lives. Join us in creating a supportive and
                empowering community for single mothers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
