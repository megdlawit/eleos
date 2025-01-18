import React from "react";
import bg from '../assets/Images/services/events.jpg';
import useOnScreen from '../hook/useOnScreen';


function EventsComponent() {
   const [ref, visible] = useOnScreen({ threshold: 0.1 });
  return (
   <div
   ref={ref}
   className={`font-poppins ${
     visible ? 'animate-cardFadeIn' : 'opacity-0'
   }`}
  
 >
    <div 
      className=" flex justify-center items-center bg-cover bg-center relative  w-[85.25rem] h-[30.69rem]  mx-auto rounded-[3.81rem] font-poppins mb-10 animate-cardFadeIn"
      style={{ backgroundImage: `url(${bg})` , }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary  to-transparent opacity-80  rounded-[3.81rem]"></div>
      <div className="relative  max-w-8xl text-center">
        <h1 className="text-heading md:text-heading font-light text-white  ">
          Elevate Your Leadership!
        </h1>

        <p className="text-heading md:heading  font-semibold text-white mb-6 w-[75.06rem]">
        Executive Excellence Program in Collaboration with Howard University
                </p>
        <p className="text-normal md:text-normal text-white mb-8 w-[47.31rem] mx-auto font-extralight">
          Certificate Program By Howard University, Tailored For C-Suite Leaders To Enhance
          Strategic Decision-Making, Leadership, And Innovation.
        </p>
       
        <button className="mt-10   border border-white text-white px-10 py-2 hover:bg-white  hover:text-primary hover:border-none text-button-text-sm md:text-button-text">
         LEARN MORE
        </button>
      </div>
    </div>
    </div>
  );
}

export default EventsComponent;
