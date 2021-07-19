import Image from 'next/image';

const Team = () => {
  return (
    <section
      id='team'
      data-testid='team'
      className='text-gray-700 body-font bg-white'
    >
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap w-full mb-20'>
          <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
              Who We Are
            </h1>
            <div className='h-1 w-20 bg-indigo-500 rounded'></div>
          </div>
        </div>
        <div className='flex flex-wrap -m-2'>
          <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
            <div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
              <div className='relative w-16 h-16 bg-gray-100 flex-shrink-0 rounded-full mr-4'>
                <Image
                  src='/team/man8.webp'
                  layout='fill'
                  className='object-cover object-center rounded-full'
                />
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 title-font font-semibold'>
                  Holden Oscar
                </h2>
                <p className='text-gray-700'>Partner & Founder</p>
              </div>
            </div>
          </div>
          <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
            <div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
              <div className='relative w-16 h-16 bg-gray-100 flex-shrink-0 rounded-full mr-4'>
                <Image
                  src='/team/man1.webp'
                  layout='fill'
                  className='object-cover object-center rounded-full'
                />
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 title-font font-semibold'>
                  James Willow
                </h2>
                <p className='text-gray-700'>Partner & Founder</p>
              </div>
            </div>
          </div>
          <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
            <div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
              <div className='relative w-16 h-16 bg-gray-100 flex-shrink-0 rounded-full mr-4'>
                <Image
                  src='/team/woman1.webp'
                  layout='fill'
                  className='object-cover object-center rounded-full'
                />
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 title-font font-semibold'>
                  Amanda Khan
                </h2>
                <p className='text-gray-700'>Partner & Founder</p>
              </div>
            </div>
          </div>
          <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
            <div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
              <div className='relative w-16 h-16 bg-gray-100 flex-shrink-0 rounded-full mr-4'>
                <Image
                  src='/team/man3.webp'
                  layout='fill'
                  className='object-cover object-center rounded-full'
                />
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 title-font font-semibold'>
                  John Chase
                </h2>
                <p className='text-gray-700'>Senior Developer</p>
              </div>
            </div>
          </div>
          <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
            <div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
              <div className='relative w-16 h-16 bg-gray-100 flex-shrink-0 rounded-full mr-4'>
                <Image
                  src='/team/man5.webp'
                  layout='fill'
                  className='object-cover object-center rounded-full'
                />
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 title-font font-semibold'>
                  Bill Martins
                </h2>
                <p className='text-gray-700'>Software Engineer</p>
              </div>
            </div>
          </div>
          <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
            <div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
              <div className='relative w-16 h-16 bg-gray-100 flex-shrink-0 rounded-full mr-4'>
                <Image
                  src='/team/man6.webp'
                  layout='fill'
                  className='object-cover object-center rounded-full'
                />
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 title-font font-semibold'>
                  Boris Sykes
                </h2>
                <p className='text-gray-700'>Senior Data Analyst</p>
              </div>
            </div>
          </div>
          <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
            <div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
              <div className='relative w-16 h-16 bg-gray-100 flex-shrink-0 rounded-full mr-4'>
                <Image
                  src='/team/woman2.webp'
                  layout='fill'
                  className='object-cover object-center rounded-full'
                />
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 title-font font-semibold'>
                  Cordelia Banks
                </h2>
                <p className='text-gray-700'>Senior Investment Consultant</p>
              </div>
            </div>
          </div>
          <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
            <div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
              <div className='relative w-16 h-16 bg-gray-100 flex-shrink-0 rounded-full mr-4'>
                <Image
                  src='/team/man2.webp'
                  layout='fill'
                  className='object-cover object-center rounded-full'
                />
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 title-font font-semibold'>
                  Bruce Williams
                </h2>
                <p className='text-gray-700'>Public Relations</p>
              </div>
            </div>
          </div>
          <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
            <div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
              <div className='relative w-16 h-16 bg-gray-100 flex-shrink-0 rounded-full mr-4'>
                <Image
                  src='/team/man9.webp'
                  layout='fill'
                  className='object-cover object-center rounded-full'
                />
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 title-font font-semibold'>
                  Stephen Cohen
                </h2>
                <p className='text-gray-700'>Head of Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
