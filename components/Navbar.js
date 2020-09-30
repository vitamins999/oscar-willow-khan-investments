import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const handleScroll = () => {
    if (window.scrollY > 120) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  const handleCurrentPosition = () => {
    if (window.scrollY >= 0 && window.scrollY <= 670) {
      setCurrentSection('home');
    } else if (window.scrollY > 670 && window.scrollY <= 1550) {
      setCurrentSection('services');
    } else if (window.scrollY > 1550 && window.scrollY <= 2300) {
      setCurrentSection('tech');
    } else if (window.scrollY > 2300 && window.scrollY <= 3025) {
      setCurrentSection('team');
    } else if (window.scrollY > 3025 && window.scrollY <= 3550) {
      setCurrentSection('testimonials');
    } else if (window.scrollY > 3550 && window.scrollY <= 4600) {
      setCurrentSection('prices');
    } else {
      setCurrentSection(null);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolling]);

  useEffect(() => {
    window.addEventListener('scroll', handleCurrentPosition);

    return () => {
      window.removeEventListener('scroll', handleCurrentPosition);
    };
  }, [currentSection]);

  return (
    <header className='text-gray-300 font-body relative z-10'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
        className={`fixed transition bg-normal-bg md:bg-transparent duration-200 w-screen px-24 flex flex-wrap p-5 flex-col md:flex-row items-center ${
          isScrolling ? 'md:bg-normal-bg' : null
        }`}
      >
        <p className='flex title-font font-medium items-center text-gray-300 mb-4 md:mb-0'>
          <img className='w-8' src='/favicon.png' alt='logo' />
          <span className='ml-3 text-lg sm:text-xl tracking-wide'>
            Oscar, Willow & Khan
          </span>
        </p>
        <nav className='md:ml-auto flex flex-wrap items-center justify-center text-sm sm:text-base'>
          <Link
            to='home'
            smooth={true}
            duration={1000}
            className={`mr-5 hover:text-gray-500 transition duration-200 ease-in-out cursor-pointer ${
              currentSection === 'home' ? 'border-b border-indigo-500' : null
            }`}
          >
            Home
          </Link>
          <Link
            to='services'
            smooth={true}
            duration={1000}
            className={`mr-5 hover:text-gray-500 transition duration-200 ease-in-out cursor-pointer ${
              currentSection === 'services'
                ? 'border-b border-indigo-500'
                : null
            }`}
          >
            What We Do
          </Link>
          <Link
            to='tech'
            smooth={true}
            duration={1000}
            className={`mr-5 hover:text-gray-500 transition duration-200 ease-in-out cursor-pointer ${
              currentSection === 'tech' ? 'border-b border-indigo-500' : null
            }`}
          >
            How It Works
          </Link>
          <Link
            to='team'
            smooth={true}
            duration={1000}
            className={`mr-5 hover:text-gray-500 transition duration-200 ease-in-out cursor-pointer ${
              currentSection === 'team' ? 'border-b border-indigo-500' : null
            }`}
          >
            Who We Are
          </Link>
          <Link
            to='testimonials'
            smooth={true}
            duration={1000}
            className={`mr-5 hover:text-gray-500 transition duration-200 ease-in-out cursor-pointer ${
              currentSection === 'testimonials'
                ? 'border-b border-indigo-500'
                : null
            }`}
          >
            Testimonials
          </Link>
          <Link
            to='pricing'
            smooth={true}
            duration={1000}
            className={`mr-5 hover:text-gray-500 transition duration-200 ease-in-out cursor-pointer ${
              currentSection === 'prices' ? 'border-b border-indigo-500' : null
            }`}
          >
            Prices
          </Link>
          <Link
            to='contact'
            smooth={true}
            duration={1000}
            className='mr-5 hover:text-gray-500 hover:border-gray-500 transition duration-200 ease-in-out border-2 py-2 px-6 rounded-full cursor-pointer hidden sm:block'
          >
            Contact Us
          </Link>
        </nav>
      </motion.div>
    </header>
  );
};

export default NavBar;
