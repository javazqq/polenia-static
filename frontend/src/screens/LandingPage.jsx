import React from 'react';
import { Container, Row, Col, Button, } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { GiHerbsBundle, GiMartini } from 'react-icons/gi';
import { BsRecycle } from 'react-icons/bs';
import { FaHandsHelping } from 'react-icons/fa';
import './LandingPage.css';


const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="hero d-flex align-items-center text-center">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <h1 className="display-4 fw-bold">Refresh Your Senses</h1>
              <p className="lead">Polenia Ginger Beer – Crafted from agroecological ginger, packed with natural flavor.</p>
              <Button variant="success" size="lg" className="mt-3 hero-cta-btn" href="#about">Know More →</Button>
            </Col>
          </Row>
        </Container>

        <div>
<svg className="waves" xmlns="http://www.w3.org/2000/svg"
viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g className="parallax">
<use href="#gentle-wave" x="48" y="0" fill="rgba(255, 183, 77, 0.7)" />  
<use href="#gentle-wave" x="48" y="3" fill="rgba(255, 138, 128, 0.5)" />  
<use href="#gentle-wave" x="48" y="5" fill="rgba(244, 143, 177, 0.5)" />  
<use href="#gentle-wave" x="48" y="7" fill="rgba(206, 147, 216, 0.4)" /> 

</g>
</svg>
</div>
        
      </section>
      

      <section className="cta-uno-section">
  <div className="cta-uno-content">
    <h2 className="mb-4">Join the Polenia Community</h2>
    <p className="lead">Subscribe to our newsletter for exclusive offers and updates.</p>
    <div className='text-end mt-3'>

      <Button variant="primary" size="lg" className="cta-btn">Subscribe Now</Button>
    </div>
  </div>
</section>

<section className="image-buttons-section">
  <div className="image-buttons-container">
    <div className="image-button" onClick={() => console.log("Clicked 1")}>
      <img src="/images/ginger1.JPG" alt="Option 1" />
      <div className="overlay">Option 1</div>
    </div>
    <div className="image-button" onClick={() => console.log("Clicked 2")}>
      <img src="/images/ginger1.JPG" alt="Option 2" />
      <div className="overlay">Option 2</div>
    </div>
    <div className="image-button" onClick={() => console.log("Clicked 3")}>
      <img src="/images/ginger1.JPG" alt="Option 3" />
      <div className="overlay">Option 3</div>
    </div>
  </div>
</section>


      <section id="about" className="about py-5 bg-light text-center">
        <Container>
          <h2 className="mb-4 py-5">About Polenia</h2>
          <p className="lead">Handcrafted with organic ginger and bottled sustainably, Polenia is more than a beverage – it's a commitment to flavor, health, and the planet.</p>
        </Container>
      </section>

      <section id="features" className="features py-5 text-center">
  <Container>
    <h2 className="mb-4">Why Choose Polenia?</h2>
    <Row className="gy-4">
      <Col md={6} lg={3}>
        <div className="feature-box">
          <GiHerbsBundle className="feature-icon" />
          <h5>100% Natural</h5>
          <p>No additives. Just pure fermented flavor.</p>
        </div>
      </Col>
      <Col md={6} lg={3}>
        <div className="feature-box">
          <BsRecycle className="feature-icon" />
          <h5>Eco-Friendly</h5>
          <p>We reuse glass bottles and avoid plastic waste.</p>
        </div>
      </Col>
      <Col md={6} lg={3}>
        <div className="feature-box">
          <FaHandsHelping className="feature-icon" />
          <h5>Local & Ethical</h5>
          <p>We source ginger from small agroecological farms.</p>
        </div>
      </Col>
      <Col md={6} lg={3}>
        <div className="feature-box">
          <GiMartini className="feature-icon" />
          <h5>Versatile</h5>
          <p>Delicious on its own, or as the star in your cocktail.</p>
        </div>
      </Col>
    </Row>
  </Container>
</section>

<section className="logo-carousel py-5">
  <h2 className="text-center mb-4">Our Partners</h2>
  <p className="text-center mb-4">We are proud to collaborate with local businesses and organizations.</p>
      <Swiper
        modules={[Autoplay, Pagination]} // Use the imported modules here
        spaceBetween={50}
        slidesPerView={5}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide><img className='logo-image' src="/images/panconmadrelogo.png" alt="Logo 1" /></SwiperSlide>
        <SwiperSlide><img className='logo-image' src="/images/panconmadrelogo.png" alt="Logo 2" /></SwiperSlide>
        <SwiperSlide><img className='logo-image' src="/images/panconmadrelogo.png" alt="Logo 3" /></SwiperSlide>
        <SwiperSlide><img className='logo-image' src="/images/panconmadrelogo.png" alt="Logo 4" /></SwiperSlide>
        <SwiperSlide><img className='logo-image' src="/images/panconmadrelogo.png" alt="Logo 5" /></SwiperSlide>
        <SwiperSlide><img className='logo-image' src="/images/panconmadrelogo.png" alt="Logo 6" /></SwiperSlide>
      </Swiper>
    </section>

    </div>
  );
};

export default LandingPage;
