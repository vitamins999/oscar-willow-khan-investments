const Services = () => {
  return (
    <section id='services' className='text-gray-700 body-font bg-white'>
      <div className='container px-5 py-24 mx-auto'>
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
              <img
                className='h-40 rounded w-full object-cover object-center mb-6'
                src='/investment1.webp'
                alt='content'
              />
              <h2 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                ISA
              </h2>
              <h3 className='text-lg text-gray-900 font-medium title-font mb-4'>
                ISA & Junior ISA
              </h3>
              <p className='leading-relaxed text-base mb-4'>
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
              <img
                className='h-40 rounded w-full object-cover object-center mb-6'
                src='/investment4.webp'
                alt='content'
              />
              <h2 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                Portfolios
              </h2>
              <h3 className='text-lg text-gray-900 font-medium title-font mb-4'>
                Growth & Income Portfolios
              </h3>
              <p className='leading-relaxed text-base'>
                A dual strategy for both capital appreciation and current
                income, generated through dividends or interest payments, with a
                choice of actively managed investments or low-cost tracker
                funds.
              </p>
            </div>
          </div>
          <div className='xl:w-1/4 md:w-1/2 p-4'>
            <div className='bg-gray-100 p-6 rounded-lg'>
              <img
                className='h-40 rounded w-full object-cover object-center mb-6'
                src='/investment3.webp'
                alt='content'
              />
              <h2 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                Stockbroking
              </h2>
              <h3 className='text-lg text-gray-900 font-medium title-font mb-4'>
                Discretionary Fund Management
              </h3>
              <p className='leading-relaxed text-base'>
                As your DFM (Discretionary Fund Manager), we manage an
                investment portfolio on your behalf, taking into account how
                much you have to invest, the level of risk you are prepared to
                take, your financial goals, and your tax position.
              </p>
            </div>
          </div>
          <div className='xl:w-1/4 md:w-1/2 p-4'>
            <div className='bg-gray-100 p-6 rounded-lg'>
              <img
                className='h-40 rounded w-full object-cover object-center mb-6'
                src='/investment2.webp'
                alt='content'
              />
              <h2 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                Investments
              </h2>
              <h3 className='text-lg text-gray-900 font-medium title-font mb-4'>
                Offshore Investments
              </h3>
              <p className='leading-relaxed text-base mb-4'>
                We also offer funds domiciled in offshore countries, to allow
                for tax-free income. This enables the fund to reinvest any
                gains.
              </p>
              <p className='leading-relaxed text-base'>
                They also include tax-free distributions, significantly reduced
                operating costs and management fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
