import React from 'react';
import useOnScreen from '../hook/useOnScreen';
import consulting from '../assets/Images/services/consult.jpg';
import training from '../assets/Images/services/train.jpg';
import mentoring from '../assets/Images/services/coach.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ServiceComponent = () => {
  const [ref, visible] = useOnScreen({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`py-16 font-poppins ${
        visible ? 'animate-cardFadeIn' : 'opacity-0'
      }`}
      style={{ height: '90vh' }}
    >
      <h2 className="text-primary text-moto mb-2">WHAT WE SERVE</h2>
      <h3
        className="text-primary text-title font-bold mb-10 mx-auto text-center"
        style={{ width: '25em', marginBottom: '5em' }}
      >
        Partnering With You To Solve Challenges, Build Skills, And Achieve Your Goals
      </h3>
      <div className="flex justify-center gap-20 mt-26">
        {[consulting, training, mentoring].map((image, index) => (
          <div key={index} className={`relative max-w-xs ${visible ? 'animate-cardFadeIn' : 'opacity-0'}`}>
            <div
              className="absolute -top-20 bg-primary rounded-xl shadow-lg w-[110%] h-full"
              style={{ left: '50%', transform: 'translateX(-50%)' }}
            ></div>
            <div className="relative bg-primary rounded-xl shadow-lg p-2 group hover:bg-white hover:translate-x-10 transition-all duration-500">
              <img src={image} alt="Service" className="rounded-t-lg mb-4 w-full" />
              <h4 className="text-grey-300 text-sm font-medium text-left px-2 group-hover:text-grey-500">
                {index === 0 ? 'CONSULTING' : index === 1 ? 'TRAINING' : 'COACHING & MENTORING'}
              </h4>
              <p className="text-white text-start py-2 ml-2 group-hover:text-grey-500">
                {index === 0
                  ? 'Expert advice to address challenges and improve outcomes.'
                  : index === 1
                  ? 'Structured sessions to develop skills and knowledge.'
                  : 'Personalized guidance for growth and success.'}
              </p>
              <a href="/more" className="flex items-center text-white mt-4 ml-2 group-hover:text-primary">
                {/* <FontAwesomeIcon
                  icon={faArrowRight}
                  className="mr-2 transform group-hover:translate-x-2 transition-transform duration-500"
                /> */}
                <span className="transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 px-2 underline">
                  Learn more
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceComponent;
