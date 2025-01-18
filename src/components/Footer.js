import React from "react";
import bg from '../assets/Images/services/footer.jpg';
import logo from '../assets/Images/logo.png'; // Replace with the actual logo path
import useOnScreen from '../hook/useOnScreen';

function Footer() {
  const [ref, visible] = useOnScreen({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`font-poppins ${visible ? 'animate-cardFadeIn' : 'opacity-0'}`}
    >
      {/* Main Content with Shared Background */}
      <div 
        className="flex flex-col justify-center items-center bg-cover bg-center relative mx-auto font-poppins animate-cardFadeIn py-12"
        style={{ backgroundImage: `url(${bg})`, marginTop: '10em', minHeight: '80vh' }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-primary opacity-60"></div>

        {/* Main Content */}
        <div className="col relative z-10">
          <div className="flex justify-center items-center py-4 mb-20">
            <img src={logo} alt="Logo" className="h-[8.56rem] w-[9.56rem] mr-4" />
            <div className="h-[8.56rem] w-[2px] bg-white mx-4"></div>
            <h2 className="text-blue-100 text-subtitle font-semibold text-lg">
              ELEOS GROUPS LLC
            </h2>
          </div>

          <div className="max-w-8xl text-center p-15">
            <h1 className="text-big md:text-big font-extralight tracking-wide text-white">
              Let's Work Together!
            </h1>
            <p className="text-normal md:text-normal text-white mb-8 w-[47.31rem] mx-auto font-extralight mt-10">
              Lorem ipsum dolor sit amet consectetur. Libero risus faucibus et sed amet tellus.
            </p>
            <button className="mt-10 border border-white text-white px-10 py-2 hover:bg-white hover:text-primary hover:border-none text-button-text-sm md:text-button-text">
              Contact Us
            </button>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="col relative z-10 mt-20 py-8 text-white text-center">
          <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            {/* Address Section */}
            <div>
              <p>5622 Columbia Pike Ste 202</p>
              <p>Falls Church VA 22041</p>
            </div>

            <div>
              <p>+1 (202) 492-3417</p>
              <p>info@eleosgroups.net</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-white hover:text-blue-300">
                  <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
                </a>
                <a href="#" className="text-white hover:text-blue-300">
                  <i className="fab fa-instagram"></i> {/* Instagram Icon */}
                </a>
                <a href="#" className="text-white hover:text-blue-300">
                  <i className="fab fa-facebook"></i> {/* Facebook Icon */}
                </a>
              </div>
            </div>
          </div>
          <div>
              <div className="h-[1px] w-full bg-white my-4"></div>
              <p>Copyright © 2022 Eleos Groups LLC</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
