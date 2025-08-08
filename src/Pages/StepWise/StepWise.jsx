import data from "../../data/index.json"
import ScrollToTop from "../Animation/ScrollTop";
import useScrollAnimation from '../Animation/useScrollAnimation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function StepWise ()
       {
       const journal = process.env.PUBLIC_URL + "/img/journall.pdf";
        const [ref, isVisible] = useScrollAnimation();
        
        
        return (
            <>
                        <ScrollToTop />
          <section className="chic-section" ref={ref}>
              <div className={`chic-container-box section-animation ${isVisible ? 'visible' : ''}`}>
                  <div className="chic-container">
                      <div className="chic-section-container">
                          {data?.StepWise?.map((item, index) => (
                              <div key={index} className="chic-section-card">
                                  <h3 className="chic-section-title">{item.title}</h3>
                                  <p className="chic-desc">{item.description}</p>
                                  <h4 className="feature">Technologies Used:</h4>
                                  <div className="chic-technology">
      {item.technologies.map((tech, index) => (
        <span key={index} className="tech-badge">{tech}</span>
      ))}
    </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
              <div className="other-half-section">
                  <div className="container2">
                      <div className="chic-section-container">
                          {data?.StepWise?.map((item, index) => (
                              <div key={index} className="chic-img-box">
                                 <video class="chic-video" controls>
  <source src={item.src} type="video/mp4" />
</video>
                              </div>
                          ))}
                      </div>
                      <h3 className="feature">Features:</h3>
                      <div className="feature-box">
          
                          {data?.StepWise?.map((item, index) => (
                              item.features.map((feature, featureIndex) => (
                                  <div className="try" key={featureIndex}>
                                      <strong className="feature-title"> {feature.title}</strong> 
                                      <p className="feature-text">{feature.content}</p> 
                                  </div>
                              ))
                          ))}
                      </div>
                  </div>
              </div>
          </section>
   
       
    

    

          <section className="stepWise-section">
             <div className="about-title"> From Development to Real World</div>
                <div className="hero-section-title-specialized"> StepWise is more than an app — it’s a step toward dignity, inclusion, and hope.</div>
                <div className="text-lg"> StepWise was born not only from lines of code, but from  hope  and the desire to make a real difference.
When we met these extraordinary childrens , their smiles, energy, and unique needs deeply moved us. It is with love , and unwavering commitment that we worked on a solution designed especially for them and their families.
Every feature of the application was carefully designed with precision — guided by experts who supported us every step of the way . </div>
<span  className="text-lg">To explore StepWise in depth, you can download our scientific article, written following the IEEE publication standards.</span>
<a href={journal} download className="submit-button">
  Download
</a>

<div className="container">
<Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  initialSlide={2}
  freeMode={true}
  speed={700}
  touchRatio={1.5}
  touchAngle={45}
  coverflowEffect={{
    rotate: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={{ clickable: true }}
  navigation={true}
  modules={[EffectCoverflow, Pagination, Navigation]}
  className="swiper_container"
  breakpoints={{
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }}
>

        <SwiperSlide>
            <div className="slide-content">
          <img src={`${process.env.PUBLIC_URL}/img/docc.jpg`} alt="slide_image" />
          <p className="slide-caption">We were guided by a psychomotor therapist, who helped us understand the real needs of these children.</p>
        </div>
        </SwiperSlide>

         <SwiperSlide>
            <div className="slide-content">
            <img src={`${process.env.PUBLIC_URL}/img/zainouba.jpg`} alt="slide_image" />
          <p className="slide-caption">Zaineb, 10 Years Old, exploring StepWise with focus and joy.</p>
        </div>
        </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
            <img src={`${process.env.PUBLIC_URL}/img/bal.jpeg`} alt="slide_image" />
          <p className="slide-caption">Participating in the Bal de Projet – Best Project in SIM Option</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide-content">
            <img src={`${process.env.PUBLIC_URL}/img/downn.jpg`} alt="slide_image" />
          <p className="slide-caption"> Our visit to  the Association Arc En Ciel to understand real daily needs</p>
          </div>
        </SwiperSlide>
       
          <SwiperSlide>
           <div className="slide-content">
            <img src={`${process.env.PUBLIC_URL}/img/warka.png`} alt="slide_image" />
          <p className="slide-caption"> Our app was validated by a psychomotor therapist, confirming its positive impact on children with Down syndrome.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide-content">
            <img src={`${process.env.PUBLIC_URL}/img/entreprise.png`} alt="slide_image" />
           <p className="slide-caption">Representing StepWise In Curriculum Co-Design For Employment WorkShop</p>
          </div>
        </SwiperSlide>
         <SwiperSlide>
            <div className="slide-content">
          <video src={process.env.PUBLIC_URL + "/img/zaineb.mp4"} controls />
          <p className="slide-caption">Pure joy — Zaineb engaging with StepWise in action.</p>
          </div>
        </SwiperSlide>
         <SwiperSlide>
            <div className="slide-content">
            <img src={`${process.env.PUBLIC_URL}/img/pitch.png`} alt="slide_image" />
          <p className="slide-caption">Pitching In AI ToolBox Event</p>
          </div>
        </SwiperSlide>
 </Swiper>
       
          <div className="swiper-pagination"></div>
        </div>
     
    


          </section>
          </>
      );
      
}
       
    

    
