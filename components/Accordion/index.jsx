import React from 'react'
import { useState } from 'react'
import Div from '../Div'

export default function Accordion() {
  const [selected, setSelected] = useState(0)
  const handelToggle = (index) => {
    if (selected === index) {
      return setSelected(null)
    }
    setSelected(index)
  }
  const accordionData = [
    {
      question: 'What services do you offer?',
      answer: 'Android & iOS app development, Web development, Blockchain Development, Wordpress Development, Digital Marketing/Graphic Designing/Social Media Management, SEO, Cloud & Devops Operation, Project Maintenance.'
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'At our IT solutions company, we understand that every project is unique, and therefore the timeline for completion can vary.The duration of a project is dependent on various factors, such as the complexity of the project, the size, the technology and platforms involved, and the clients specific requirements.Our team of experts works closely with clients to understand their goals, challenges, and timeline constraints, and then develops a realistic timeline for project completion.We ensure that our projects are delivered within the agreed- upon timeline without compromising on quality, functionality, or security.'
    },
{
  question: 'What platforms and technologies do you work with ?',
    answer: 'Android & iOS app development, Web development, Blockchain Development, WordPress Development, Digital Marketing / Graphic Designing / Social Media Management, SEO, Cloud & DevOps.'
},
{
  question: 'What is your experience in the IT industry?',
    answer: 'As an IT solutions company, we bring over 10 years of industry experience to the table. We have worked with a diverse range of clients, spanning various sectors and industries, and have delivered customized IT solutions that meet their unique requirements. Our team of experts has a deep understanding of the latest technologies and trends in the industry, and we are committed to leveraging our expertise to provide our clients with cutting-edge solutions that drive their business growth. We take pride in our ability to deliver exceptional value to our clients, and we look forward to leveraging our experience to help your business succeed.'
},
{
  question: 'Do you offer customised solutions?',
    answer: 'Yes, at Natal Nine, We offer customised solutions tailored to meet the unique needs of your business. We understand that every company is different and requires a bespoke approach to digital solutions.Thats why we work closely with our clients to understand their goals, requirements, and challenges, and then develop a customised solution that fits their needs.'
},
  ]
return (
  <Div className="cs-accordians cs-style1">
    {accordionData.map((item, index) => (
      <Div className={`cs-accordian ${selected === index ? 'active' : ''}`} key={index}>
        <Div className="cs-accordian_head" onClick={() => handelToggle(index)}>
          <h2 className="cs-accordian_title">{item.question}</h2>
          <span className="cs-accordian_toggle cs-accent_color">
            <svg width={15} height={8} viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
            </svg>
          </span>
        </Div>
        <Div className='cs-accordian_body'>
          <Div className="cs-accordian_body_in">{item.answer}</Div>
        </Div>
      </Div>
    ))}
  </Div>
)
}
