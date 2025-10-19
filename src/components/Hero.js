import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">안녕하세요, Synthyroider입니다</span>
          </h1>
          <p className="hero-subtitle">
            창의적이고 혁신적인 웹 개발자
          </p>
          <p className="hero-description">
            사용자 경험을 중시하며, 현대적인 웹 기술을 활용해 
            의미 있는 디지털 솔루션을 만들어갑니다.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              프로젝트 보기
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              연락하기
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-card">
            <div className="profile-image">
              <i className="fas fa-user-circle"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
