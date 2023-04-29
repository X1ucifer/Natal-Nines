import Head from 'next/head';
import CaseStudy from '../components/CaseStudy';
import Cta from '../components/Cta';
import Div from '../components/Div';
import Hero3 from '../components/Hero/Hero3';
import Layout from '../components/Layout';
import LogoList from '../components/LogoList';
import MovingText from '../components/MovingText';
import Portfolio2 from '../components/Portfolio/Portfolio2';
import Portfolio3 from '../components/Portfolio/Portfolio3';
import SectionHeading from '../components/SectionHeading';
import TestimonialSlider from '../components/Slider/TestimonialSlider';
import Spacing from '../components/Spacing';
import Hero from '../components/Hero';

export default function CreativePortfolio() {

  const heroSocialLinks = [

    {
      name: 'Instagram',
      links: 'https://www.instagram.com/natalnine/',
    },
    {
      name: 'Linked-in',
      links: 'https://www.linkedin.com/company/natal-nine/',
    },
  ];
  const portfolioData = [
    {
      title: 'Modern Web Development: Dynamic, Responsive, and Fast.',
      subtitle: 'Web Development',
      btnText: 'See Details',
      btnLink: '/web-application-development',
      imageUrl: '/webdev/2.jpg',
      category: 'Web Development',
    },
    {
      title: 'Building Secure and Decentralized Applications for the Future.',
      subtitle: 'Blockchain Development',
      btnText: 'See Details',
      btnLink: '/blockchain',
      imageUrl: '/images/blockchain.jpg',
      category: 'Blockchain',
    },
    {
      title: 'Building Powerful and User-Friendly Apps for iOS and Android.',
      subtitle: 'Mobile App Development',
      btnText: 'See Details',
      btnLink: '/mobile-application-development',
      imageUrl: '/images/mobileapp.jpg',
      category: 'Mobile App',
    },
    {
      title: 'The Future of Marketing is Digital: Are You Ready?',
      subtitle: 'Digital Marketing',
      btnText: 'See Details',
      btnLink: '/digital-marketing',
      imageUrl: '/images/digitalmarketing.jpg',
      category: 'Digital Marketing',
    },
  ];

  return (
    <>
      <Head>
        <title>Home - NatalNine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Start Hero Section */}
        {/* <Hero3
          title="Arino Creative <br />Portfolio"
          btnLink="contact"
          btnText={`Let's talk`}
          socialLinksHeading="Follow Us"
          heroSocialLinks={heroSocialLinks}
          bgImageUrl="./images/home1.jpg"
        /> */}
        <Hero
          title="Creativity In <br/>Our Blood Line"
          subtitle="We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future."
          btnText="Get a Quote"
          btnLink="/contact"
          scrollDownId="#service"
          socialLinksHeading="Follow Us"
          heroSocialLinks={heroSocialLinks}
          bgImageUrl="/images/bg2.jpg"
        />
        {/* End Hero Section */}



        {/* Start Portfolio Section */}
        <Spacing lg="150" md="80" />
        {portfolioData.map((item, index) =>
          index % 2 === 0 ? (
            <Div key={index}>
              <Portfolio2
                title={item.title}
                subtitle={item.subtitle}
                btnText={item.btnText}
                btnLink={item.btnLink}
                imageUrl={item.imageUrl}
                category={item.category}
              />
              <Spacing lg="100" md="70" />
            </Div>
          ) : (
            <Div key={index}>
              <Portfolio3
                title={item.title}
                subtitle={item.subtitle}
                btnText={item.btnText}
                btnLink={item.btnLink}
                imageUrl={item.imageUrl}
                category={item.category}
              />
              <Spacing lg="100" md="70" />
            </Div>
          ),
        )}
        {/* End Portfolio Section */}

        <Spacing lg="125" md="70" />
        <MovingText text="Moving businesses forward with innovation and technology." />
        <Spacing lg="105" md="70" />

        {/* Start Case Study Section */}
        <Spacing lg="45" md="10" />
        <Div className="container">
          <SectionHeading
            title="Natal Nine IT Solutions"
            subtitle="why us?"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <CaseStudy
          title="Natal Nine IT Solutions<br />  has a team of experienced professionals  <br /> with expertise in various areas of IT solutions. "
          bgUrl="/images/case_study_2.jpeg"
          href="#"
          variant="cs-style2"
        />
        <CaseStudy
          title="Natal Nine IT Solutions, we believe in putting our clients first. Our team takes a customer-centric approach, working closely with clients to understand their goals and develop solutions that align with their business objectives."
          bgUrl="/images/case_study_1.jpeg"
          href="#"
        />
        <Spacing lg="150" md="80" />
        {/* End Case Study Section */}

        {/* Start Testimonial Section */}
        <TestimonialSlider />
        {/* End Testimonial Section */}

        {/* Start MovingText Section */}
        <Spacing lg="125" md="70" />
        {/* <MovingText text="Moving businesses forward with innovation and technology." /> */}
        {/* End MovingText Section */}

        {/* Start LogoList Section */}
        {/* <Div className="container">
          <LogoList />
        </Div> */}
        {/* <Spacing lg="150" md="80" /> */}
        {/* End LogoList Section */}

        {/* Start CTA Section */}
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg_3.jpeg"
          />
        </Div>
        {/* End CTA Section */}
      </Layout>
    </>
  );
}
