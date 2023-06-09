import { Icon } from '@iconify/react';
import Head from 'next/head';
import React, { useState } from 'react';
import Div from '../components/Div';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import SectionHeading from '../components/SectionHeading';
import Spacing from '../components/Spacing';
import ContactInfoWidget from '../components/Widget/ContactInfoWidget';
import axios from 'axios';


export default function Contact() {


  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { fullName, email, projectType, mobile, message };

    console.log(formData)
    

    axios.post('/api/send_mail', {
      fullName,
      receiver:email,
      projectType,
      mobile,
      message,
    })
      .then((response) => {
        console.log(response.data);
        alert('Message sent successfully');
      })
      .catch((error) => {
        console.log(error);
        alert('An error occurred. Please try again later.');
      });


  }


  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by natal nine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          title="Contact Us"
          bgSrc="/images/contact_hero_bg.jpeg"
          pageLinkText="Contact"
        />
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-6">
              <SectionHeading
                title="Looking forward to partner your growth ?"
                subtitle="Getting Touch"
              />
              <Spacing lg="55" md="30" />
              <ContactInfoWidget withIcon />
              <Spacing lg="0" md="50" />
            </Div>
            <Div className="col-lg-6">
              <form action="#" className="row" onSubmit={handleSubmit}>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Full Name*</label>
                  <input type="text" className="cs-form_field" value={fullName} onChange={(e) => setFullName(e.target.value)} />

                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Email*</label>
                  <input type="text" className="cs-form_field" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Project Type*</label>
                  <input type="text" className="cs-form_field" value={projectType} onChange={(e) => setProjectType(e.target.value)} />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Mobile*</label>
                  <input type="text" className="cs-form_field" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-12">
                  <label className="cs-primary_color">Message*</label>
                  <textarea cols="30" rows="7" className="cs-form_field" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                  <Spacing lg="25" md="25" />
                </Div>
                <Div className="col-sm-12">
                  <button className="cs-btn cs-style1" type="submit" disabled={!fullName || !email || !projectType || !mobile || !message}
                  >
                    <span>Send Message</span>
                    <Icon icon="bi:arrow-right" />
                  </button>
                </Div>
              </form>
            </Div>
          </Div>
        </Div>
        <Spacing lg="150" md="80" />
        <Div className="cs-google_map">


          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26766.320935182255!2d77.19933597746798!3d8.309598278932361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b045516f27e1797%3A0x9eaf4bffb1fa19c1!2sMarthandam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1681044397227!5m2!1sen!2sin"
            allowFullScreen
            title="Google Map"
          />
        </Div>
        <Spacing lg="50" md="40" />
      </Layout>
    </>
  );
}
