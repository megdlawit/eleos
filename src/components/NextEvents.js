import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck,faPlay,faMapMarkerAlt,faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import useOnScreen from '../hook/useOnScreen'; 
import image1 from '../assets/Images/events/clap.jpg';
import image2 from '../assets/Images/events/venue.jpg';
import image3 from '../assets/Images/events/mic.jpg';



const NextEvents = () => {
  const [ref, visible] = useOnScreen({ threshold: 0.1 });

  return (
    <div className="px-10 md:p-12 max-w-screen-2xl mx-auto mt-20 mb-20">
      {/* Top Section: Left and Right Sections */}
      <div
        ref={ref}
        className={`flex flex-col md:flex-row items-center gap-x-20 ${visible ? "animate-slideFadeIn" : ""}`}
      >
        {/* Right Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-20 font-poppins">
          <h2 className="text-secondary text-moto text-justify uppercase">coming soon</h2>
          <h3 className="text-primary text-title font-bold text-2xl mt-2 text-start">
            Executive Excellence Program in Collaboration with Howard University
          </h3>
          <p className="text-gray-500 mt-8 text-start">
            Lorem ipsum dolor sit amet consectetur. Pharetra ultrices faucibus volutpat ut. Velit elementum tortor
            vulputate porttitor. Rhoncus laoreet dignissim cum tristique nec integer eu
          </p>
          <ul className="mt-6 space-y-2">
            <li className="flex items-start">
              <span className="flex items-center justify-start bg-secondary p-1 text-white font-bold text-normal rounded-full mr-3">
                {/* <FontAwesomeIcon icon={faCheck} /> */}
              </span>
              <span className="text-gray-500 text-start">
                Lorem ipsum dolor sit amet consectetur. Dictumst. sit amet consectetur
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center bg-secondary p-1 text-white font-bold text-normal rounded-full mr-3">
                {/* <FontAwesomeIcon icon={faCheck} /> */}
              </span>
              <span className="text-gray-500 text-start">
                Lorem ipsum dolor sit amet consectetur. Dictumst. sit amet consectetur
              </span>
            </li>
          </ul>
          {/* <button className="mt-10 border border-secondary text-secondary px-10 py-2 hover:bg-secondary rounded hover:text-white hover:border-none text-button-text-normal md:text-button-text">
            LEARN MORE
          </button> */}
        </div>

        {/* Left Section: Image Grid */}
        <div className="md:w-[50rem] flex flex-col md:flex-row items-center md:items-start relative gap-x-10 mt-10">
          {/* First Column: The First Two Images */}
          <div className="flex flex-col  items-center md:items-start relative space-y-10 w-full md:w-[80%]">
            <div className="relative w-[20rem] h-[14rem]">
              <img
                src={image3}
                alt="Main portrait"
                className={`w-full h-full object-cover rounded-lg shadow-lg animate-slideFadeIn ${
                  visible ? "animate-slideFadeIn" : ""
                }`}
              />
            </div>
            <div className="w-[20rem] h-[14rem]">
              <img
                src={image2}
                alt="Secondary portrait"
                className="w-full h-full object-cover  rounded-lg shadow-lg animate-slideFadeIn"
              />
            </div>
          </div>

          {/* Second Column: The Third Image */}
          <div className="w-full md:w-full h-[30rem] flex justify-center">
  <img
    src={image1}
    alt="Third portrait"
    className="w-full h-full object-cover rounded-lg shadow-lg animate-slideFadeIn"
  />
</div>

        </div>
      </div>

      {/* Bottom Section: Cards */}
      <div className=" absolute -mt-10 ml-20 flex flex-col md:flex-row gap-y-4 md:gap-y-0 md:gap-x-4 z-10">
        {/* Where Card */}
        <div className="flex items-center space-x-4 bg-white shadow-lg rounded-[2rem] w-[25rem] h-[10rem]">
          <div className="p-4 text-secondary rounded-full">
            {/* <FontAwesomeIcon icon={faMapMarkerAlt} className="text-5xl" /> */}
          </div>
          <div>
            <h4 className="text-title font-semibold text-gray-800 text-start">Where</h4>
            <p className="text-gray-500 text-moto-sm">123 Event Venue, City, Country</p>
          </div>
        </div>

        {/* When Card */}
        <div className="flex items-center space-x-4 bg-white shadow-lg rounded-[2rem] w-[25rem] h-[10rem]">
          <div className="p-4 text-secondary rounded-full">
            {/* <FontAwesomeIcon icon={faCalendarAlt} className="text-5xl" /> */}
          </div>
          <div>
            <h4 className="text-title font-semibold text-gray-800 text-start">When</h4>
            <p className="text-gray-500 text-moto-sm">January 25th, 2025 | 10:00 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextEvents;

