import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">
          <h1>Polenia Ginger Beer</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h2>Refresh Your Senses with Polenia Ginger Beer</h2>
          <p>Crafted from eco-friendly ginger, packed with natural flavor.</p>
          <button className="cta-btn">Order Now</button>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Polenia</h2>
        <p>Polenia Ginger Beer is a handcrafted beverage, made with organic ginger, bringing a refreshing taste to your life. We are committed to sustainability and support local farmers.</p>
      </section>

      <section id="features" className="features">
        <h2>Why Choose Polenia?</h2>
        <ul>
          <li>100% Natural Ingredients</li>
          <li>Eco-Friendly Packaging</li>
          <li>Locally Sourced Ginger</li>
          <li>Perfect for Cocktails and Mocktails</li>
        </ul>
      </section>

      <footer id="contact" className="footer">
        <p>&copy; 2025 Polenia Ginger Beer</p>
        <p>Follow us: 
          <a href="https://www.instagram.com/poleniagingerbeer" target="_blank" rel="noopener noreferrer">Instagram</a> | 
          <a href="https://www.facebook.com/poleniagingerbeer" target="_blank" rel="noopener noreferrer">Facebook</a>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
