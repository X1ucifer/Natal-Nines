import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Cta from '../components/Cta';
import Div from '../components/Div';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import SectionHeading from '../components/SectionHeading';
import Spacing from '../components/Spacing';

export default function CaseStudyDetails() {
  return (
    <>
      <Head>
        <title>Digital Marketing</title>
        <meta name="digitalmarketing" content="digital marketing by natalnines" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          title="Your Digital Marketing Partner"
          bgSrc="/images/contact_hero_bg.jpeg"
          pageLinkText=" "
        />
        {/* <Spacing lg="145" md="80" /> */}
        <Div className="container">
          {/* <SectionHeading
            title="Your Digital Marketing Agency"
            subtitle="NatalNines"
            variant="cs-style1 text-center"
          /> */}
          <Spacing lg="90" md="45" />
          <img
            src="/images/bgimg.jpg"
            alt="Thumb"
            className="w-100 cs-radius_15"
          />
          <Spacing lg="140" md="80" />
          <h2 className="cs-font_38 text-center">WHAT IS SEARCH ENGINE OPTIMIZATION?</h2>
          <Spacing lg="60" md="45" />
          <p className="cs-m0 text-center">
            Search engine optimization is the method of improving your website’s ranking on Search Engines like Google, Yahoo,
            and Bing. It is a marketing practice that uses keyword research to help your business establish a credible online
            image. Ultimately, it will help to bring in more relevant traffic, improve bounce rates, and increase the potential for
            sales conversions.
          </p>
          <Spacing lg="65" md="45" />
          <Div className="row">
            <Div className="col-sm-6">
              <img
                src="/images/audience.jpg"
                alt="Thumb"
                className="w-100 cs-radius_5"
              />
              <Spacing lg="25" md="25" />
            </Div>
            <Div className="col-sm-6">
              <img
                src="/images/audience2.jpg"
                alt="Thumb"
                className="w-100 cs-radius_5"
              />
              <Spacing lg="25" md="25" />
            </Div>
          </Div>
          <Spacing lg="125" md="55" />
        </Div>
        <Div className="cs-gradient_bg_1 cs-shape_wrap_6">
          <Div className="cs-shape_2"></Div>
          <Div className="cs-shape_2"></Div>
          <Div className="container">
            <Spacing lg="145" md="80" />
            <h2 className="cs-font_38 text-center">Why Digital Marketing Matters ?</h2>
            <Spacing lg="90" md="45" />
            <Div className="row align-items-center cs-column_reverse_lg">
              <Div className="col-lg-5">
                <h3 className="cs-font_30 cs-m0">WHY IS SEO IMPORTANT TO MY BUSINESS?</h3>
                <Spacing lg="45" md="30" />
                <p className="cs-m0">
                  Search Engine Optimization (SEO) is important to businesses because it helps them to rank higher on search engines, which can increase their online visibility and drive more traffic to their website. SEO involves optimizing your website and its content for search engines like Google, Bing, and Yahoo, so that they can easily understand what your website is about and match it with relevant search queries. <br />
                  <br />
                  SEO can help you to rank higher on search engines, which can lead to more traffic to your website. This is because users are more likely to click on the top results on search engine results pages (SERPs).
                </p>
              </Div>
              <Div className="col-lg-6 offset-lg-1 text-center">
                <Div className="cs-portfolio_img_in cs-shine_hover_1 rounded-circle">
                  <img
                    src="/images/idea.jpg"
                    alt="Case study"
                    className="w-100"
                  />
                </Div>
                <Spacing lg="0" md="40" />
              </Div>
            </Div>
            <Spacing lg="100" md="80" />
            <Div className="row align-items-center">
              <Div className="col-lg-6 text-center">
                <Div className="cs-portfolio_img_in cs-shine_hover_1 rounded-circle">
                  <img
                    src="/images/benefits.jpg"
                    alt="Case study"
                    className="w-100"
                  />
                </Div>
                <Spacing lg="0" md="40" />
              </Div>
              <Div className="col-lg-5 offset-lg-1">
                <h3 className="cs-font_30 cs-m0">Benefits of SEO for Your Business</h3>
                <Spacing lg="45" md="30" />
                <ol className="cs-m0">
                  <li>Enhance search visibility </li>
                  <li>Build trust with your search results</li>
                  <li>Increase traffic in a cost-effective way</li>
                  <li>Attract more customers</li>
                  <li>Generate measurable results</li>
                  <li>Build a long term presence online</li>
                  <li>Better user engagement</li>
                  <li>Improved brand awareness</li>
                  <li>Long-term strategy</li>
                  <li>Cost-effective advertising</li>


                </ol>
              </Div>
            </Div>
            <Spacing lg="150" md="80" />
          </Div>
        </Div>
        <Div className="cs-gradient_bg_1 cs-shape_wrap_6">
          <Div className="cs-shape_2"></Div>
          <Div className="cs-shape_2"></Div>
          <Div className="container">
            <Spacing lg="145" md="80" />
            <h2 className="cs-font_38 text-center">GOALS & OBJECTIVES</h2>
            <Spacing lg="90" md="45" />
            <Div className="row align-items-center cs-column_reverse_lg">
              <Div className="col-lg-5">
                <h3 className="cs-font_30 cs-m0">CAMPAIGN GOALS</h3>
                <Spacing lg="45" md="30" />
                <p className="cs-m0">
                  Your website rankings on search engines matter. The higher your website ranks, the more visible your online
                  presence will be to consumers, which leads to additional traffic to your website and Google Local Profile. Our
                  goal is to increase rankings and traffic for your online presence by focusing on the keywords you and your
                  dedicated SEO Account Manager select. <br />
                  <br />
                  SEO can help you to rank higher on search engines, which can lead to more traffic to your website. This is because users are more likely to click on the top results on search engine results pages (SERPs).
                </p>
              </Div>
              <Div className="col-lg-6 offset-lg-1 text-center">
                <Div className="cs-portfolio_img_in cs-shine_hover_1 rounded-circle">
                  <img
                    src="/images/campaign.jpg"
                    alt="natalnines campaign"
                    className="w-100"
                  />
                </Div>
                <Spacing lg="0" md="40" />
              </Div>
            </Div>
            <Spacing lg="100" md="80" />
            <Div className="row align-items-center">
              <Div className="col-lg-6 text-center">
                <Div className="cs-portfolio_img_in cs-shine_hover_1 rounded-circle">
                  <img
                    src="/images/ranking.jpg"
                    alt="natalnines ranking"
                    className="w-100"
                  />
                </Div>
                <Spacing lg="0" md="40" />
              </Div>
              <Div className="col-lg-5 offset-lg-1">
                <h3 className="cs-font_30 cs-m0">SEARCH ENGINE RANKINGS</h3>
                <Spacing lg="45" md="30" />
                <p className="cs-m0">
                  Search engines use over 200 known metrics to display the most credible and relevant results. Because every website
                  is different, your campaign will be customized and structured based on your current search engine ranking and
                  marketing goals. Our processes and strategies for each client are customizable, and always reflect the latest updates
                  from major search engines. This ensures that we focus on the areas that benefit your company the most. Below is a
                  brief summary of the tasks that will be included in your campaign.


                </p>
              </Div>
            </Div>
            <Spacing lg="150" md="80" />
          </Div>
        </Div>
        <Spacing lg="140" md="80" />
        <Div className="container text-center">
          <Div className="row col-lg-10 offset-lg-1">
            <h2 className="cs-font_38 cs-m0">PRICING & PACKAGE OPTIONS</h2>
            <Spacing lg="60" md="45" />
            <p className="cs-m0">
              These are the recommend packages we put together based on the information we’ve collected and the audit we ran
              on your site. Going forward with any of these options will allow us enough time to show an increase in rankings and
              credibility over the next few months. Keep in mind that the packages we offer can always be customized to fit your
              individual budget, but obviously the more time we invest into your campaign, the quicker we will see movement, and
              the more competitive we can get when targeting high-traffic keywords.
            </p>
          </Div>
        </Div>
        <Spacing lg="145" md="80" />
        {/* Start CTA Section */}
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
        {/* End CTA Section */}
      </Layout>
    </>
  );
}
