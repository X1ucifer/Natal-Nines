import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const testimonialData = [
    {
      testimonialThumb: '/avatar.jpg',
      testimonialText:'Working with Natal Nine, has been a game-changer for my eCommerce business. Their IT solutions have significantly improved our websites performance, and their teams support has been excellent. Theyre always available to address any concerns we have promptly. I highly recommend their services to anyone looking for reliable and effective IT solutions.',
      avatarName: 'Shijok',
      avatarDesignation: 'MANAGER AT SPOTD2D',
      ratings: '4',
    },
    {
      testimonialThumb: '/avatar.jpg',
      testimonialText:
        'Natal Nine has transformed the way we deliver online training. Their LMS platform is user-friendly and has all the features we need to manage our e-learning programs. Our learners love the interactive courses, and our trainers appreciate the real-time tracking and reporting. We highly recommend Natal Nine to any organisation looking to enhance their training programs.',
      avatarName: 'Royal',
      avatarDesignation: 'Spyberrys',
      ratings: '5',
    },
    {
      testimonialThumb: '/avatar.jpg',
      testimonialText:
        'Natal Nine IT Solutions helped us develop a robust and scalable software application that has been instrumental in the growth of our business. The team is highly skilled and professional, and their attention to detail is exceptional. I would highly recommend Natal Nine IT Solutions to anyone looking for top-quality IT solutions',
      avatarName: 'Aleena',
      avatarDesignation: 'Exaland',
      ratings: '4.5',
    },
    {
      testimonialThumb: '/avatar.jpg',
      testimonialText:
        'Working with Natal Nine IT Solutions was an absolute pleasure. Their team of developers is highly knowledgeable, and they were able to quickly and efficiently develop the software we needed. Their customer service is outstanding, and they always went above and beyond to make sure we were completely satisfied with their work. I would highly recommend Natal Nine IT Solutions to anyone looking for a reliable IT partner.',
      avatarName: 'Magesh',
      avatarDesignation: '',
      ratings: '3.5',
    },
  ];
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        {/* <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div> */}
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={slider2 => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={item.testimonialThumb} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={slider1 => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
