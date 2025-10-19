import React from 'react';

const Hero = () => {
  return (
    <div className="section">
      <h1 className="section-title">안녕하세요, Synthyroider입니다</h1>
      <div className="section-content">
        <h2>웹 개발자</h2>
        <p>
          사용자 경험을 중시하며, 현대적인 웹 기술을 활용해 
          의미 있는 디지털 솔루션을 만들어갑니다.
        </p>
        <p>
          지속적으로 새로운 기술을 학습하고 적용하는 것을 즐기며, 
          깔끔하고 효율적인 코드를 작성하는 것을 추구합니다.
        </p>
        
        <h2>주요 관심사</h2>
        <ul>
          <li>사용자 중심의 웹 애플리케이션 개발</li>
          <li>반응형 웹 디자인과 접근성</li>
          <li>현대적인 JavaScript 프레임워크</li>
          <li>클린 코드와 아키텍처 설계</li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
