import React from 'react';

const About = () => {
  return (
    <div className="section">
      <h1 className="section-title">소개</h1>
      <div className="section-content">
        <h2>개발자로서의 철학</h2>
        <p>
          웹 개발에 대한 열정을 가지고 있으며, 지속적으로 새로운 기술을 학습하고 
          적용하는 것을 즐깁니다. 사용자 중심의 사고로 문제를 해결하고, 
          깔끔하고 효율적인 코드를 작성하는 것을 추구합니다.
        </p>
        
        <h2>협업과 성장</h2>
        <p>
          팀워크를 중시하며, 협업을 통해 더 나은 결과를 만들어내는 것을 
          믿습니다. 항상 배우는 자세로 임하며, 도전적인 프로젝트를 
          통해 성장하고 있습니다.
        </p>
        
        <h2>경력 요약</h2>
        <ul>
          <li><strong>경력:</strong> 2년 이상의 웹 개발 경험</li>
          <li><strong>프로젝트:</strong> 10개 이상의 웹 애플리케이션 개발</li>
          <li><strong>기술:</strong> 다양한 프론트엔드 및 백엔드 기술 스택</li>
          <li><strong>교육:</strong> 지속적인 학습과 기술 트렌드 파악</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
