import Image from 'next/image';

const Services = () => {
  return (
    <section
      id='services'
      data-testid='services'
      className='text-gray-700 body-font bg-white'
    >
      <div className='container px-5 pt-24 pb-40 mx-auto'>
        <div className='flex flex-wrap w-full mb-20'>
          <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
              What We Do
            </h1>
            <div className='h-1 w-20 bg-indigo-500 rounded'></div>
          </div>
        </div>
        <div className='flex flex-wrap -m-4'>
          <div className='xl:w-1/4 md:w-1/2 p-4'>
            <div className='bg-gray-100 p-6 rounded-lg'>
              <div className='relative h-40 rounded w-full overflow-hidden mb-6'>
                <Image
                  src='/invest1.webp'
                  layout='fill'
                  className='object-cover object-center'
                />
              </div>
              <h2 className='tracking-widest text-indigo-700 text-xs font-medium title-font'>
                ISA
              </h2>
              <h3 className='text-lg text-gray-900 font-medium title-font mb-4 tracking-tight'>
                ISA & Junior ISA
              </h3>
              <p className='leading-relaxed text-base mb-4 2xl:pt-0 xl:pt-7'>
                Tax-free interest payments, so you could get more for your
                money.
              </p>
              <p className='leading-relaxed text-base'>
                Junior ISAs let you save and invest on behalf of a child under
                18. With no tax on the earnings, the money you put away can grow
                even faster.
              </p>
            </div>
          </div>
          <div className='xl:w-1/4 md:w-1/2 p-4'>
            <div className='bg-gray-100 p-6 rounded-lg'>
              <div className='relative h-40 rounded w-full overflow-hidden mb-6'>
                <Image
                  src='/invest4.webp'
                  layout='fill'
                  className='object-cover object-center'
                />
              </div>
              <h2 className='tracking-widest text-indigo-700 text-xs font-medium title-font'>
                Portfolios
              </h2>
              <h3 className='text-lg text-gray-900 font-medium title-font mb-4 tracking-tight'>
                Growth & Income Portfolios
              </h3>
              <p className='leading-relaxed text-base mb-4'>
                A dual strategy for both capital appreciation and current
                income.
              </p>
              <p className='leading-relaxed text-base'>
                Generated via dividends or interest payments, portfolios offer a
                choice of actively managed investments or low-cost tracker
                funds.
              </p>
            </div>
          </div>
          <div className='xl:w-1/4 md:w-1/2 p-4'>
            <div className='bg-gray-100 p-6 rounded-lg'>
              <div className='relative h-40 rounded w-full overflow-hidden mb-6'>
                <Image
                  src='/invest3.webp'
                  layout='fill'
                  className='object-cover object-center'
                />
              </div>
              <h2 className='tracking-widest text-indigo-700 text-xs font-medium title-font'>
                Stockbroking
              </h2>
              <h3 className='text-lg text-gray-900 font-medium title-font mb-4 tracking-tight'>
                Discretionary Fund Management
              </h3>
              <p className='leading-relaxed text-base mb-4'>
                As your DFM, we manage an investment portfolio on your behalf.
              </p>

              <p className='leading-relaxed text-base'>
                We take into account how much you have to invest, the level of
                risk you are prepared to take, your financial goals, and your
                tax position.
              </p>
            </div>
          </div>
          <div className='xl:w-1/4 md:w-1/2 p-4'>
            <div className='bg-gray-100 p-6 rounded-lg'>
              <div className='relative h-40 rounded w-full overflow-hidden mb-6'>
                <Image
                  src='/invest2.webp'
                  layout='fill'
                  className='object-cover object-center'
                />
              </div>
              <h2 className='tracking-widest text-indigo-700 text-xs font-medium title-font'>
                Investments
              </h2>
              <h3 className='text-lg text-gray-900 font-medium title-font mb-4 tracking-tight'>
                Offshore Investments
              </h3>
              <p className='leading-relaxed text-base mb-4 2xl:pt-0 xl:pt-7'>
                We also offer services for funds domiciled in offshore
                countries.
              </p>
              <p className='leading-relaxed text-base'>
                This allows for tax-free income, reinvestment of gains, tax-free
                distributions, and reduced operating costs and management fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
