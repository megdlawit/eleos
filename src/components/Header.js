import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Images/logo.png'
import { FaLinkedin, FaFacebook } from 'react-icons/fa';

function Header() {
  const [top, setTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top &&  'bg-background-55 backdrop-blur-md shadow-lg'
      }`}
    >
<nav className=" border-t border-transparent shadow-[0_0_15px_rgba(0,0,0,0.2)]">


<div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-10 py-5">
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-12" alt="Eleos-logo" />
          </NavLink>
          <div className="flex md:order-2 space-x-30 md:space-x-5 rtl:space-x-reverse">
            <NavLink
              to="/Contact"
              className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary "
              activeClassName="text-white font-bold"
            >
              <button
                type="button"
              className="inline-block  px-10 py-3 text-white underline decoration-secondary font-bold  rounded hover:bg-secondary transition duration-300 rounded ">
                UPCOMING EVENTS
              </button>

             
            </NavLink>
            {/* <div className="flex px-5 py-3 px-6 py-3  rounded-lg  hover:text-white transition duration-300 gap-x-3">
            
            <NavLink to="https://www.linkedin.com/company/zero-one-zero-one-tech-entrepreneurship" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6  text-center text-gray-100 hover:text-secondary" />
            </NavLink>
            <NavLink to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-6 h-6  text-center text-gray-100 hover:text-secondary" />
            </NavLink>
            </div> */}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
            id="navbar-cta"
          >
            <ul className="flex flex-col text-nav px-5 md:p-0 mt-4 ml-10 border border-gray-100 rounded-lg md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  exact
                  className={({ isActive }) =>
                    isActive
                      ? 'block  text-white underline decoration-secondary font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary'
                      : 'block  text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary'
                  }
                >
                  Home
                </NavLink>
                
              </li>
              <div className="h-5 mt-2 border-l-2 border-gray-200 mx-5"></div>
              <li>
                <NavLink
                  to="/AboutUs"
                  className={({ isActive }) =>
                    isActive
                      ? 'block  text-white underline decoration-secondary font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary'
                      : 'block  text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary'
                  }
                >
                  About
                </NavLink>
              </li>
              <div className="h-5 mt-2 border-l-2 border-gray-200 mx-5"></div>
              <li>
                <NavLink
                  to="/Services"
                  className={({ isActive }) =>
                    isActive
                      ? 'block  text-white underline decoration-secondary font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary'
                      : 'block  text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary'
                  }
                >
                  Services
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;