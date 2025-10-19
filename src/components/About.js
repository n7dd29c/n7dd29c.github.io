import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>열정적인 개발자</h3>
            <p>
              웹 개발에 대한 열정을 가지고 있으며, 지속적으로 새로운 기술을 학습하고 
              적용하는 것을 즐깁니다. 사용자 중심의 사고로 문제를 해결하고, 
              깔끔하고 효율적인 코드를 작성하는 것을 추구합니다.
            </p>
            <p>
              팀워크를 중시하며, 협업을 통해 더 나은 결과를 만들어내는 것을 
              믿습니다. 항상 배우는 자세로 임하며, 도전적인 프로젝트를 
              통해 성장하고 있습니다.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h4>2+</h4>
                <p>년 경력</p>
              </div>
              <div className="stat">
                <h4>10+</h4>
                <p>완료 프로젝트</p>
              </div>
              <div className="stat">
                <h4>5+</h4>
                <p>기술 스택</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <i className="fas fa-code"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
