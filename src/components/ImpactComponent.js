import React from 'react';
import useOnScreen from '../hook/useOnScreen'; 
import bg from '../assets/Images/services/bg.jpg';
import women from '../assets/Images/services/women.jpg';
import business from '../assets/Images/services/business.jpg';
import company from '../assets/Images/services/company.jpg';
import enterprise from '../assets/Images/services/enterprise.jpg';

const ImpactComponent = () => {
  const [ref, visible] = useOnScreen({ threshold: 0.1 });

  return (
    <div
    ref={ref}
    className={`bg-cover bg-center bg-no-repeat font-poppins ${
      visible ? 'animate-cardFadeIn' : ''
    }`}
  >      <div className="text-center py-12 px-4">
        <h2 className="text-primary text-moto mb-2 animate-cardFadeIn">WHO WE SERVE?</h2>
        <h3 
          className="text-primary text-title font-bold mb-10 mx-auto text-center animate-cardFadeIn" 
          style={{ width: '25em' }}
        >
          Empowering Leaders, MSMEs, Institutions, Women, And Youth To Succeed
        </h3>
        <div
          className="relative flex justify-center items-center"
          style={{
            height: '70vh',
            position: 'relative',
          }}
        >
             <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bg})`,
              opacity: 0.5, // Adjust the opacity value as needed
              zIndex: -1,
            }}
          ></div>
             
              <div
      ref={ref}
      className={`flex gap-5 flex-wrap justify-center ${
        visible ? 'animate-cardFadeIn' : ''
      }` }style={{ marginTop: '-5em' }}
    >
          <div className="relative group animate-cardFadeIn">
            <img
              src={women}
              alt="Building"
              className="w-62 h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex justify-center items-end">
              <span className="text-white text-moto font-bold mb-4 transition-transform transform translate-y-full group-hover:translate-y-0 duration-500">
              Women & Youth
              </span>
            </div>
          </div>
          <div className="relative group animate-cardFadeIn">
            <img
              src={business}
              alt="Woman"
              className="w-62 h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex justify-center items-end">
              <span className="text-white text-moto font-bold mb-4 transition-transform transform translate-y-full group-hover:translate-y-0 duration-500">
              Micro, Small & Medium Enterprise (MSME's)
              </span>
            </div>
          </div>
          <div className="relative group animate-cardFadeIn">
            <img
              src={company}
              alt="Package"
              className="w-62 h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex justify-center items-end">
              <span className="text-white text-moto font-bold mb-4 transition-transform transform translate-y-full group-hover:translate-y-0 duration-500">
              Public and Private sectors
              </span>
            </div>
          </div>
          <div className="relative group animate-cardFadeIn">
            <img
              src={enterprise}
              alt="Office"
              className="w-62 h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex justify-center items-end">
              <span className="text-white text-moto font-bold mb-4 transition-transform transform translate-y-full group-hover:translate-y-0 duration-500">
              Institutions
              </span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactComponent;
