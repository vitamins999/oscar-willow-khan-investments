import Image from 'next/image';

const Testimonials = () => {
  return (
    <section id='testimonials' className='text-gray-300 body-font bg-normal-bg'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap w-full mb-20'>
          <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-300'>
              Testimonials
            </h1>
            <div className='h-1 w-20 bg-indigo-300 rounded'></div>
          </div>
        </div>
        <div className='flex flex-wrap -m-4'>
          <div className='lg:w-1/3 lg:mb-0 mb-6 p-4'>
            <div className='h-full text-center'>
              <div className='relative w-20 h-20 mb-8 rounded-full inline-block border-2 border-gray-200 bg-gray-100'>
                <Image
                  src='/team/woman3.webp'
                  layout='fill'
                  className='object-cover object-center rounded-full'
                />
              </div>
              <p className='leading-relaxed'>
                Needless to say I am extremely satisfied with the results. I
                have gotten at least 50 times the value from Oscar, Willow and
                Khan. I just can't get enough of their incredible service. I
                want to get a T-Shirt with Oscar, Willow and Khan Investments on
                it so I can show it off to everyone.
              </p>
              <span className='inline-block h-1 w-10 rounded bg-indigo-300 mt-6 mb-4'></span>
              <h2 className='text-gray-300 font-medium title-font tracking-wider text-sm'>
                GLORIA SPRINGFIELD
              </h2>
              <p className='text-gray-300'>Solicitor</p>
            </div>
          </div>
          <div className='lg:w-1/3 lg:mb-0 mb-6 p-4'>
            <div className='h-full text-center'>
              <div className='relative w-20 h-20 mb-8 rounded-full inline-block border-2 border-gray-200 bg-gray-100'>
                <Image
                  src='/team/man5.webp'
                  layout='fill'
                  className='object-cover object-center rounded-full'
                />
              </div>
              <p className='leading-relaxed'>
                I would like to personally thank you for your outstanding
                product. Nice work on your investments. Best. Product. Ever!
                Oscar, Willow & Khan's investment service is the most valuable
                business resource we have EVER purchased. I've made so much
                money it's obscene.
              </p>
              <span className='inline-block h-1 w-10 rounded bg-indigo-300 mt-6 mb-4'></span>
              <h2 className='text-gray-300 font-medium title-font tracking-wider text-sm'>
                FRED LODGE
              </h2>
              <p className='text-gray-300'>BT Engineer</p>
            </div>
          </div>
          <div className='lg:w-1/3 lg:mb-0 p-4'>
            <div className='h-full text-center'>
              <div className='relative w-20 h-20 mb-8 rounded-full inline-block border-2 border-gray-200 bg-gray-100'>
                <Image
                  src='/team/man4.webp'
                  layout='fill'
                  className='object-cover object-center rounded-full'
                />
              </div>
              <p className='leading-relaxed'>
                I am so pleased with this product. Since I invested in Oscar,
                Willow & Khan's services, I made over 100,000 pounds profits. We
                have no regrets! Nice work on your investments. It's brilliant
                and has, quite literally, changed my life. Thank you so much!
              </p>
              <span className='inline-block h-1 w-10 rounded bg-indigo-300 mt-6 mb-4'></span>
              <h2 className='text-gray-300 font-medium title-font tracking-wider text-sm'>
                HENRY BJORKVIK
              </h2>
              <p className='text-gray-300'>Self Employed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
