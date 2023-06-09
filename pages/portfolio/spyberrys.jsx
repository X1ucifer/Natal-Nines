import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Button from '../../components/Button';
import Cta from '../../components/Cta';
import Div from '../../components/Div';
import Layout from '../../components/Layout';
import PageHeading from '../../components/PageHeading';
import SectionHeading from '../../components/SectionHeading';
import Spacing from '../../components/Spacing';

export default function PortfolioDetails() {
  const router = useRouter();
  const portfolioId = router.query.portfolioId;
  return (
    <>
      <Head>
        <title>Spyberrys | Natalnine </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          title="Spyberrys  "
          bgSrc="/images/service_hero_bg.jpeg"
          pageLinkText={portfolioId}
        />
        <Spacing lg="150" md="80" />
        <Div className="container">
          <img
            src="/images/lmss.jpg"
            alt="Details"
            className="cs-radius_15 w-100"
          />
          <Spacing lg="90" md="40" />
          <Div className="row">
            <Div className="col-lg-6">
              <SectionHeading title="Spyberrys " subtitle="Creative">
                <Spacing lg="40" md="20" />
                <p>
                Spyberrys is a modern Learning Management System that offers a comprehensive platform for schools, universities, and businesses to manage their online learning programs. With Spyberrys, educators can create and deliver engaging content, track student progress, and assess learning outcomes in real-time.

                </p>
                <Spacing lg="10" md="10" />
                <p>
                Our platform provides a user-friendly interface, robust reporting, and analytics tools, and seamless integration with other systems. With Spyberrys, organisations can leverage the power of e-learning to improve their training programs, engage their learners, and drive business success.
                </p>
              </SectionHeading>
            </Div>
            <Div className="col-lg-5 offset-lg-1">
              <Spacing lg="60" md="40" />
              <h2 className="cs-font_30 cs-font_26_sm cs-m0">Project Info -</h2>
              <Spacing lg="50" md="30" />
              <Div className="row">
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Category:
                  </h3>
                  <p className="cs-m0"> Learning Management Portal</p>
                  <Spacing lg="30" md="30" />
                </Div>
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Location:
                  </h3>
                  <p className="cs-m0">Nagercoil </p>
                  <Spacing lg="30" md="30" />
                </Div>
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Technology
                  </h3>
                  <p className="cs-m0">MERN </p>
                  <Spacing lg="30" md="30" />
                </Div>
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Dated:
                  </h3>
                  <p className="cs-m0">December 2022</p>
                  <Spacing lg="30" md="30" />
                </Div>
                {/* <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Client:
                  </h3>
                  <p className="cs-m0">Andreo Bowla</p>
                  <Spacing lg="30" md="30" />
                </Div> */}
              </Div>
            </Div>
          </Div>
          <Spacing lg="65" md="10" />
          <Div className="cs-page_navigation cs-center">
            <Div>
              <Button
                btnLink="/portfolio/exa-land"
                btnText="Prev Project"
                variant="cs-type1"
              />
            </Div>
            <Div>
              <Button
                btnLink="/portfolio/portfolio-spotd2d"
                btnText="Next Project"
              />
            </Div>
          </Div>
        </Div>
        <Spacing lg="145" md="80" />
        <Cta
          title="info@natalnine.com"
          bgSrc="/images/cta_bg_2.jpeg"
          variant="rounded-0"
        />
      </Layout>
    </>
  );
}
