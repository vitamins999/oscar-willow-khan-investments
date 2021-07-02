import { Link } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {
  let anim = useAnimation;

  const textVariant = {
    hidden: {
      translateY: 0,
    },
    show: {
      translateY: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      translateY: 100,
    },
    show: {
      translateY: -5,
    },
  };

  return (
    <>
      <section
        id='home'
        className='h-screen w-full text-gray-300 font-body bg-hero-image bg-no-repeat bg-center bg-cover'
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
          className='container mx-auto flex px-5 pb-24 pt-72 md:flex-row flex-col items-center'
        >
          <div className=' max-w-4xl lg:w-2/3 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <div className='title-font sm:text-4xl lg:text-3xl xl:text-5xl mb-10 font-medium text-gray-300 leading-loose'>
              <h1 className=' leading-normal'>Making Your Money</h1>
              <h1> Make You Rich</h1>
            </div>
            <p className='mb-5 leading-relaxed'>
              <span className='font-semibold text-gray-400 italic'>
                Oscar, Willow & Khan
              </span>{' '}
              is not just any investment firm. We specialise in using{' '}
              <span className='font-semibold'>
                the most advanced AI and machine learning technology in the
                world
              </span>{' '}
              to invest only in the ventures guaranteed* to make you money. Put
              your portfolio in our hands, and live the life you deserve.
            </p>
            <p className='text-xs italic mb-5'>
              *all financial investments carry a potential risk to the
              investment
            </p>
            <div className='flex justify-center'>
              <Link
                to='services'
                smooth={true}
                duration={1000}
                className='cursor-pointer transition duration-150 ease-in-out inline-flex text-gray-300 bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 hover:text-gray-100 rounded text-lg'
              >
                Tell me more
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
      <motion.div
        initial={{ translateY: 0 }}
        animate={{ translateY: -1200 }}
        transition={{ delay: 4, duration: 1.5, type: 'spring', stiffness: 100 }}
        className='text-white font-body text-6xl bg-black fixed top-0 left-0 z-30 w-full h-full flex items-center justify-center'
      >
        <motion.div variants={textVariant} initial='hidden' animate='show'>
          <h1 className='bg-black overflow-hidden'>
            <motion.span variants={item} className='inline-block'>
              Advanced technology
            </motion.span>
          </h1>
          <h1 className='bg-black overflow-hidden'>
            <motion.span variants={item} className='inline-block'>
              making you
            </motion.span>
          </h1>
          <h1 className='bg-black overflow-hidden'>
            <motion.span variants={item} className='inline-block'>
              money.
            </motion.span>
          </h1>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ translateY: 0 }}
        animate={{ translateY: -1200 }}
        transition={{
          delay: 4.05,
          duration: 1.4,
          type: 'spring',
          stiffness: 100,
        }}
        className='bg-gray-500 fixed top-0 left-0 w-full h-full z-20'
      ></motion.div>
    </>
  );
};

export default Hero;
