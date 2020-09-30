import { useState } from 'react';
import { useForm } from 'react-hook-form';

const defaultValues = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const { register, handleSubmit, reset, errors } = useForm({ defaultValues });
  const [name, setName] = useState(false);

  const onSubmit = ({ name }) => {
    setName(name);
    reset({ defaultValues });
  };

  return (
    <section
      id='contact'
      className='text-gray-700 body-font relative bg-normal-bg'
    >
      <div className='container px-5 mx-auto py-10'>
        <h1 className='sm:text-3xl text-2xl text-left font-medium title-font mb-2 text-gray-300'>
          Contact Us
        </h1>
        <div className='h-1 w-20 bg-indigo-300 rounded'></div>
      </div>
      <div className='container px-5 pt-5 pb-24 mx-auto flex sm:flex-no-wrap flex-wrap'>
        <div className='lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.454224706977!2d0.6553887157239779!3d51.54156947964069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8da2664423a4f%3A0xcc4e6367cdaf8830!2sBroadway%2C%20Leigh-on-Sea%2C%20Southend-on-Sea%2C%20Leigh-on-Sea!5e0!3m2!1sen!2suk!4v1600967799069!5m2!1sen!2suk'
            width='100%'
            className='absolute inset-0'
            height='100%'
            frameBorder='0'
            allowFullScreen=''
            aria-hidden='false'
            tabIndex='0'
            loading='lazy'
            title='Google Maps Shop Location'
          ></iframe>

          <div className='bg-white relative flex flex-wrap py-6'>
            <div className='lg:w-1/2 px-6'>
              <h2 className='title-font font-medium text-gray-900 tracking-widest text-sm'>
                ADDRESS
              </h2>
              <p className='leading-relaxed'>313 Leigh Road</p>
              <p className='leading-relaxed'>Leigh-on-Sea</p>
              <p className='leading-relaxed'>Essex</p>
              <p className='leading-relaxed'>United Kingdom</p>
            </div>
            <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
              <h2 className='title-font font-medium text-gray-900 tracking-widest text-sm'>
                EMAIL
              </h2>
              <a
                href='mailto:enquiries@owk-investments.com'
                className='text-blue-500 leading-relaxed'
              >
                enquiries@owk-investments.com
              </a>
              <h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mt-4'>
                PHONE
              </h2>
              <p className='leading-relaxed'>(+44) 01702 313313</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='lg:w-1/3 md:w-1/2 bg-white p-10 rounded-md flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'
        >
          <h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>
            Any questions?
          </h2>
          <p className='leading-relaxed mb-5 text-gray-600'>
            Interested in our services? Don't hesitate to call, email, use this
            contact form, or visit our offices.
          </p>
          <input
            className='bg-white rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2 mb-4'
            placeholder='Name'
            type='text'
            name='name'
            ref={register}
            required
          />
          <input
            className='bg-white rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2 mb-4'
            placeholder='Email'
            type='email'
            name='email'
            ref={register}
            required
          />
          <textarea
            className='bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-blue-500 text-base px-4 py-2 mb-4 resize-none'
            placeholder='Message'
            name='message'
            ref={register}
            required
          ></textarea>
          <button
            type='submit'
            className='transition duration-150 ease-in-out text-gray-200 bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 hover:text-gray-100 rounded text-lg'
          >
            Send
          </button>
          <p
            className={`text-xs mt-3 ${
              !name ? 'text-gray-500' : 'text-indigo-700'
            }`}
          >
            {!name
              ? 'All queries responded to within 24 hours.'
              : `Thanks, ${name}. We'll be in touch!`}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
