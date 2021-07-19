import Image from 'next/image';
import { useState } from 'react';

const Tech = () => {
  const [step, setStep] = useState(1);

  return (
    <section
      id='tech'
      data-testid='tech'
      className='text-gray-300 font-body bg-normal-bg pb-5'
    >
      <div className='container px-5 py-24 mx-auto flex flex-wrap flex-col'>
        <div className='flex flex-wrap w-full mb-20'>
          <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-300'>
              How It Works
            </h1>
            <div className='h-1 w-20 bg-indigo-300 rounded'></div>
          </div>
        </div>
        <div className='flex mx-auto flex-wrap mb-20'>
          <button
            onClick={() => setStep(1)}
            className={`transition duration-150 ease-in-out cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider rounded-t ${
              step === 1
                ? 'border-indigo-500 text-indigo-700 bg-gray-100'
                : 'hover:text-gray-600'
            }`}
          >
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-5 h-5 mr-3'
              viewBox='0 0 24 24'
            >
              <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
            </svg>
            STEP 1
          </button>
          <button
            onClick={() => setStep(2)}
            className={`transition duration-150 ease-in-out cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider rounded-t ${
              step === 2
                ? 'border-indigo-500 text-indigo-700 bg-gray-100'
                : 'hover:text-gray-600'
            }`}
          >
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-5 h-5 mr-3'
              viewBox='0 0 24 24'
            >
              <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
            </svg>
            STEP 2
          </button>
          <button
            onClick={() => setStep(3)}
            className={`transition duration-150 ease-in-out cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider rounded-t ${
              step === 3
                ? 'border-indigo-500 text-indigo-700 bg-gray-100'
                : 'hover:text-gray-600'
            }`}
          >
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-5 h-5 mr-3'
              viewBox='0 0 24 24'
            >
              <circle cx='12' cy='5' r='3'></circle>
              <path d='M12 22V8M5 12H2a10 10 0 0020 0h-3'></path>
            </svg>
            STEP 3
          </button>
          <button
            onClick={() => setStep(4)}
            className={`transition duration-150 ease-in-out cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider rounded-t ${
              step === 4
                ? 'border-indigo-500 text-indigo-700 bg-gray-100'
                : 'hover:text-gray-600'
            }`}
          >
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-5 h-5 mr-3'
              viewBox='0 0 24 24'
            >
              <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
              <circle cx='12' cy='7' r='4'></circle>
            </svg>
            STEP 4
          </button>
        </div>
        {step === 1 && (
          <div>
            <div className='xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 overflow-hidden rounded'>
              <Image
                src='/tech1.webp'
                height={400}
                width={600}
                className='rounded object-cover object-center'
              />
            </div>
            <div className='flex flex-col text-center w-full'>
              <h1 className='text-xl font-medium title-font mb-4 text-gray-300'>
                STEP 1: Web Scraping
              </h1>
              <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                Our advanced web scraping technology is contantly scanning the
                most widely used stock exchanges in the world, such as London,
                New York, Bombay, and NASDAQ. This data is then fed into a
                global database, updated every 20 seconds.
              </p>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <div className='xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 overflow-hidden rounded'>
              <Image
                src='/tech2.webp'
                height={400}
                width={600}
                className='rounded object-cover object-center'
              />
            </div>
            <div className='flex flex-col text-center w-full'>
              <h1 className='text-xl font-medium title-font mb-4 text-gray-300'>
                STEP 2: Modeling
              </h1>
              <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                A one of a kind, sophisticated A.I., built from the ground up,
                monitors for database changes. It uses these changes to update
                advanced models of every business within its records. If a new
                business is monitored, a new model is created.
              </p>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <div className='xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 overflow-hidden rounded'>
              <Image
                src='/tech3.webp'
                height={400}
                width={600}
                className='rounded object-cover object-center'
              />
            </div>
            <div className='flex flex-col text-center w-full'>
              <h1 className='text-xl font-medium title-font mb-4 text-gray-300'>
                STEP 3: AI Data Analysis
              </h1>
              <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                The A.I then uses advanced A/B testing to compare models against
                one another, to create a near perfect model representation of
                the global stockmarket, with the ability to accurately predict
                future changes in stocketmarket behaviour.
              </p>
            </div>
          </div>
        )}
        {step === 4 && (
          <div>
            <div className='xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 overflow-hidden rounded'>
              <Image
                src='/tech4.webp'
                height={400}
                width={600}
                className='rounded object-cover object-center'
              />
            </div>
            <div className='flex flex-col text-center w-full'>
              <h1 className='text-xl font-medium title-font mb-4 text-gray-300'>
                STEP 4: Re-invest or Cash Out
              </h1>
              <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                These changes and future predictions are then monitored, through
                further A/B testing, to ascertain whether it is more financially
                beneficial to re-invest the money in another business, or cash
                out at the predicted high point.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tech;
