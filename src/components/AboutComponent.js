import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck,faPlay } from '@fortawesome/free-solid-svg-icons';
import useOnScreen from '../hook/useOnScreen'; 
import image1 from '../assets/Images/About/about.jpg';
import image2 from '../assets/Images/About/abouttwo.jpg';
import hands from '../assets/Images/Hero/image 3.jpg'



const AboutComponent = () => {
  const [ref, visible] = useOnScreen({ threshold: 0.1 });

  return (

    <div ref={ref} className={`flex flex-col md:flex-row items-center  px-10 md:p-12 gap-x-20 max-w-screen-2xl mx-auto mt-20 mb-20 ${visible ? 'animate-slideFadeIn' : ''}`}>
           <div className="md:w-[36rem] flex flex-col items-center md:items-start relative  animate-slideFadeIn">
           <div className="absolute h-1/2  w-1/5 top-1/4 inset-0 bg-secondary rounded-lg transform -translate-x-10 -translate-y-0 z-0 "></div>

        <div className="relative w-full">
          <img
            src={image1}
            alt="Main portrait"
            ref={ref}
            className={`rounded-lg shadow-lg w-full animate-slideFadeIn"${visible ? 'animate-slideFadeIn' : ''}`}/>
   <div className="absolute top-4 right-4 flex items-center justify-center">
  {/* Outer Circle */}
  <div className="absolute border-2 border-secondary border-dashed rounded-full w-28 h-28 animate-heartbeat"></div>
  {/* Middle Circle */}
  <div className="absolute bg-gray-500 opacity-50 rounded-full w-24 h-24 animate-heartbeat"></div>
  {/* Inner Circle with Button */}
  <div className="absolute bg-secondary border-2 border-white rounded-full w-16 h-16 flex items-center justify-center animate-heartbeat">
    <button className="text-white text-lg font-bold">
      {/* <FontAwesomeIcon icon={faPlay} /> */}
    </button>
  </div>
</div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform translate-x-1/4 translate-y-1/4 w-1/2">
          <img
            src={image2}
            alt="Secondary portrait"
            className="rounded-lg shadow-lg animate-slideFadeIn"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:ml-20 font-poppins">
        <h2 className="text-primary text-moto text-justify">WHY WE SERVE?</h2>
        <h3 className="text-primary text-title font-bold text-2xl mt-2 text-start">
          Africa-centred experiential learning for leaders and institutions.
        </h3>
        <p className="text-gray-500 mt-8 text-start">
        At Eleos Groups, we empower communities through financial literacy, bridging knowledge gaps and providing tools for building wealth. Our initiatives span the DMV area (USA) and Africa, fostering financial independence and access to opportunities.
        </p>
        
        <button className="mt-10   border border-secondary text-secondary px-10 py-2 hover:bg-secondary rounded  hover:text-white hover:border-none text-button-text-sm md:text-button-text">
         LEARN MORE
        </button>
      </div>
      </div>
   
  );
};

export default AboutComponent;
