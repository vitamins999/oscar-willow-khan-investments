import Head from 'next/head';
import NavBar from './Navbar';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
        <meta
          name='Description'
          content='Oscar, Willow & Khan Investments.  We specialise in using advanced AI and machine learning to invest in the stockmarket.'
        />
        <title>Oscar, Willow & Khan</title>
      </Head>
      <NavBar />
      <div className='font-body'>{children}</div>
    </>
  );
};

export default Layout;
