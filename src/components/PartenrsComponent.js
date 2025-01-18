import React from 'react';
import useOnScreen from '../hook/useOnScreen';
import nana from '../assets/Images/services/nanna .png';
import zero from '../assets/Images/services/0101.png';
import howard from '../assets/Images/services/howard.png';
import hadip from '../assets/Images/services/hadip.jpg';
import Africa from '../assets/Images/services/africa.jpg';


const PartnersComponent = () => {
  const [ref, visible] = useOnScreen({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`py-16 font-poppins ${
        visible ? 'animate-cardFadeIn' : 'opacity-0'
      }`}
      style={{ height: '20vh' }}
    >
      <section class="py-24 ">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 animate-cardFadeIn">

    <div className="grid grid-cols-2 justify-center items-center gap-12 md:grid-cols-3 xl:grid-cols-none xl:flex xl:justify-between">
     
      <a href="#" class="flex justify-center items-center">
        <img src={nana} alt="Client 1" class="h-20" />
      </a>
   
      <a href="#" class="flex justify-center items-center">
        <img src={zero} alt="Client 2" class="h-20" />
      </a>
    
      <a href="#" class="flex justify-center items-center">
        <img src={howard} alt="Client 3" class="h-20" />
      </a>
      <a href="#" class="flex justify-center items-center">
        <img src={hadip} alt="Client 1" class="h-20" />
      </a>
   
      <a href="#" class="flex justify-center items-center">
        <img src={Africa} alt="Client 2" class="h-20" />
      </a>
    
     
    </div>
  </div>
</section>
    </div>
  );
};

export default PartnersComponent;
