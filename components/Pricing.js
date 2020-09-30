import { useState } from 'react';

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section
      id='pricing'
      className='text-gray-700 body-font overflow-hidden bg-white'
    >
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h1 className='sm:text-3xl text-2xl text-left font-medium title-font mb-2 text-gray-900'>
            Prices
          </h1>
          <div className='h-1 w-20 bg-indigo-500 rounded'></div>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base mt-10'>
            Simple, affordable plans. Available both monthy and annually.
          </p>
          <div className='flex mx-auto border-2 border-indigo-700 rounded overflow-hidden mt-6'>
            <button
              onClick={() => setIsMonthly(true)}
              className={`py-1 px-4 focus:outline-none ${
                isMonthly ? 'bg-indigo-700 text-white' : 'hover:bg-indigo-200'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsMonthly(false)}
              className={`py-1 px-4 focus:outline-none ${
                !isMonthly ? 'bg-indigo-700 text-white' : 'hover:bg-indigo-200'
              }`}
            >
              Annually
            </button>
          </div>
        </div>
        <div className='flex flex-wrap -m-4'>
          <div className='p-4 xl:w-1/4 md:w-1/2 w-full'>
            <div className='h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden hover:border-indigo-500 transition duration-150'>
              <h2 className='text-sm tracking-widest title-font mb-1 font-medium'>
                STARTER
              </h2>
              <h1 className='text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none'>
                Free
              </h1>
              <p className='flex items-center text-gray-700 mb-2'>
                <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                25% Commission
              </p>
              <p className='flex items-center text-gray-700 mb-2'>
                <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                24/7 Customer Support
              </p>
              <p className='flex items-center text-gray-700 mb-6'>
                <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Online Portal To Check Investments
              </p>
              <button className='flex items-center mt-auto text-white bg-gray-700 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-600 rounded'>
                Buy Now
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-4 h-4 ml-auto'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </button>
              <p className='text-xs text-gray-700 mt-3'>
                30 Day Money Back/Investment Back Guarantee
              </p>
            </div>
          </div>
          <div className='p-4 xl:w-1/4 md:w-1/2 w-full'>
            <div className='h-full p-6 rounded-lg border-2 border-indigo-700 flex flex-col relative overflow-hidden'>
              <span className='bg-indigo-700 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl'>
                POPULAR
              </span>
              <h2 className='text-sm tracking-widest title-font mb-1 font-medium'>
                PRO
              </h2>
              <h1 className='text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200'>
                {isMonthly ? <span>£38</span> : <span>£395</span>}
                {isMonthly ? (
                  <span className='text-lg ml-1 font-normal text-gray-700'>
                    /mo
                  </span>
                ) : (
                  <span className='text-lg ml-1 font-normal text-gray-700'>
                    /yr
                  </span>
                )}
              </h1>
              <p className='flex items-center text-gray-700 mb-2'>
                <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                10% Commission
              </p>
              <p className='flex items-center text-gray-700 mb-2'>
                <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                24/7 Customer Support
              </p>
              <p className='flex items-center text-gray-700 mb-2'>
                <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Legal Support
              </p>
              <p className='flex items-center text-gray-700 mb-6'>
                <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Online Portal To Check Investments
              </p>
              <button className='flex items-center mt-auto text-white bg-indigo-700 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-800 rounded'>
                Buy Now
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-4 h-4 ml-auto'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </button>
              <p className='text-xs text-gray-700 mt-3'>
                30 Day Money Back/Investment Back Guarantee
              </p>
            </div>
          </div>
          <div className='p-4 xl:w-1/4 md:w-1/2 w-full'>
            <div className='h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden hover:border-indigo-500 transition duration-150'>
              <h2 className='text-sm tracking-widest title-font mb-1 font-medium'>
                BUSINESS
              </h2>
              <h1 className='text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200'>
                {isMonthly ? <span>£56</span> : <span>£575</span>}
                {isMonthly ? (
                  <span className='text-lg ml-1 font-normal text-gray-700'>
                    /mo
                  </span>
                ) : (
                  <span className='text-lg ml-1 font-normal text-gray-700'>
                    /yr
                  </span>
                )}
              </h1>
              <p className='flex items-center text-gray-700 mb-2'>
                <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                5% Commission
              </p>
              <p className='flex items-center text-gray-700 mb-2'>
                <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                24/7 Customer Support
              </p>
              <p className='flex items-center text-gray-700 mb-2'>
                <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Legal Support
              </p>
              <p className='flex items-center text-gray-700 mb-2'>
                <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Offshore Investments
              </p>
              <p className='flex items-center text-gray-700 mb-6'>
                <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Online Portal To Check Investments
              </p>
              <button className='flex items-center mt-auto text-white bg-gray-700 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-600 rounded'>
                Buy Now
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-4 h-4 ml-auto'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </button>
              <p className='text-xs text-gray-700 mt-3'>
                30 Day Money Back/Investment Back Guarantee
              </p>
            </div>
          </div>
          <div className='p-4 xl:w-1/4 md:w-1/2 w-full'>
            <div className='h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden hover:border-indigo-500 transition duration-150'>
              <h2 className='text-sm tracking-widest title-font mb-1 font-medium'>
                DIAMOND
              </h2>
              <h1 className='text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200'>
                {isMonthly ? <span>£72</span> : <span>£825</span>}
                {isMonthly ? (
                  <span className='text-lg ml-1 font-normal text-gray-700'>
                    /mo
                  </span>
                ) : (
                  <span className='text-lg ml-1 font-normal text-gray-700'>
                    /yr
                  </span>
                )}
              </h1>
              <p className='flex items-center text-gray-700 mb-2'>
                <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                2.5% Commission
              </p>
              <p className='flex items-center text-gray-700 mb-2'>
                <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                24/7 Customer Support
              </p>
              <p className='flex items-center text-gray-700 mb-2'>
                <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Legal Support
              </p>
              <p className='flex items-center text-gray-700 mb-2'>
                <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Offshore Investments
              </p>
              <p className='flex items-center text-gray-700 mb-6'>
                <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Online Portal To Check Investments
              </p>
              <button className='flex items-center mt-auto text-white bg-gray-700 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-600 rounded'>
                Buy Now
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-4 h-4 ml-auto'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </button>
              <p className='text-xs text-gray-700 mt-3'>
                30 Day Money Back/Investment Back Guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
