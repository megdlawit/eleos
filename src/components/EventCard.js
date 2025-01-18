import React, { useState, useEffect } from "react";
import bg from '../assets/Images/events/eventhero.png';
import useOnScreen from '../hook/useOnScreen';

function EventCard() {
  const [ref, visible] = useOnScreen({ threshold: 0.1 });
  const [timeLeft, setTimeLeft] = useState(360000); // Initial time (100 hours in seconds)
  
  useEffect(() => {
    if (timeLeft === 0) return;
    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    
    return () => clearInterval(timerId); // Clean up the interval on component unmount
  }, [timeLeft]);

  // Convert timeLeft (in seconds) to Days:Hours:Minutes:Seconds format
  const formatTime = (time) => {
    const days = Math.floor(time / 86400); // 86400 seconds in a day
    const hours = Math.floor((time % 86400) / 3600); // 3600 seconds in an hour
    const minutes = Math.floor((time % 3600) / 60); // 60 seconds in a minute
    const seconds = time % 60; // Remaining seconds

    return (
      <div className="flex space-x-20">
        <div className="flex flex-col items-center">
          <div className=" font-bold text-secondary text-header">
            {days.toString().padStart(2, "0")}
          </div>
          <div className="text-grey-800 text-normal mt-5">DAYS</div>
        </div>
        <div className="flex flex-col items-center">
          <div className=" font-bold text-secondary text-header">
            {hours.toString().padStart(2, "0")}
          </div>
          <div className="text-grey-800 text-normal mt-5">HOURS</div>
        </div>
        <div className="flex flex-col items-center">
          <div className=" font-bold text-secondary text-header">
            {minutes.toString().padStart(2, "0")}
          </div>
          <div className="text-grey-800 text-normal mt-5">MINUTES</div>
        </div>
        <div className="flex flex-col items-center text-big">
          <div className=" font-bold text-secondary text-header">
            {seconds.toString().padStart(2, "0")}
          </div>
          <div className="text-grey-800 text-normal mt-5">SECONDS</div>
        </div>
      </div>
    );
  };


  return (
    <div
      ref={ref}
      className={`font-lato ${visible ? 'animate-cardFadeIn' : 'opacity-0'}`}
    >
      <div 
        className="flex justify-center items-center w-full h-[55em] relative mx-auto font-lato mb-10 animate-cardFadeIn overflow-hidden"
        
      >
        {/* Background Image with clip-path */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${bg})`,
            clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 80%, 50% 100%, 0 100%)',
           
          }}
        ></div>

        {/* Timer Overlay */}
       

        {/* Content */}
        <div className="relative max-w-8xl mx-auto flex items-center md:text-left space-x-10 z-10">
          {/* Left Column */}
          <div className="flex-1">
            <h1 className="text-big md:text-big text-white w-[45rem] font-semibold uppercase" style={{ marginLeft: '-2em' }}>
              Mark your calendar, experience what's next.
            </h1>
          </div>

          {/* Vertical Line */}
          <div
            className="h-[400px] w-[2px] bg-white opacity-80"
            style={{ zIndex: 10 }}
          ></div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col items-center md:items-start space-y-6">
            <p className="text-heading md:text-heading font-semibold text-white">
              Upcoming Event
            </p>
            <p className="text-heading md:text-heading font-semibold text-white mb-3">
              Executive Excellence Program
            </p>
            <p className="text-normal md:text-normal text-white mb-8 max-w-lg font-light">
              Lorem ipsum dolor sit amet consectetur. Pharetra ultrices faucibus volutpat ut. Velit elementum tortor vulputate porttitor. Rhoncus laoreet dignissim cum tristique nec integer eu
            </p>
            <button className="mt-10  bg-secondary text-white px-10 py-2 hover:bg-primary hover:text-white hover:border-none text-button-text-sm md:text-button-text">
              REGISTER NOW
            </button>
          </div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center z-20 " style={{marginTop:'45em', marginLeft:'50em'}}>
          <div className="text-secondary text-big font-bold ">
            {formatTime(timeLeft)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
