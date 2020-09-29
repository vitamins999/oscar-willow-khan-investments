import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Tech from '../components/Tech';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Layout>
      <main className='absolute top-0 bg-normal-bg'>
        <Hero />
        <Services />
        <Tech />
        <Team />
        <Testimonials />
        <Pricing />
        <Contact />
        <Footer />
      </main>
    </Layout>
  );
};

export default Home;
