import React from 'react';

const Skills = () => {
  return (
    <div className="section">
      <h1 className="section-title">기술 스택</h1>
      <div className="section-content">
        <h2>프론트엔드</h2>
        <ul>
          <li><strong>HTML5:</strong> 시맨틱 마크업과 웹 표준 준수</li>
          <li><strong>CSS3:</strong> Flexbox, Grid, 애니메이션, 반응형 디자인</li>
          <li><strong>JavaScript:</strong> ES6+, DOM 조작, 비동기 프로그래밍</li>
          <li><strong>React:</strong> 컴포넌트 기반 개발, Hooks, 상태 관리</li>
        </ul>
        
        <h2>백엔드</h2>
        <ul>
          <li><strong>Node.js:</strong> 서버 사이드 JavaScript 개발</li>
          <li><strong>Python:</strong> 데이터 처리 및 백엔드 API 개발</li>
          <li><strong>MongoDB:</strong> NoSQL 데이터베이스 설계 및 관리</li>
          <li><strong>Express:</strong> RESTful API 개발 및 미들웨어 활용</li>
        </ul>
        
        <h2>개발 도구</h2>
        <ul>
          <li><strong>Git:</strong> 버전 관리 및 협업 워크플로우</li>
          <li><strong>GitHub:</strong> 코드 저장소 관리 및 오픈소스 기여</li>
          <li><strong>Figma:</strong> UI/UX 디자인 및 프로토타이핑</li>
          <li><strong>Terminal:</strong> 명령줄 인터페이스 활용</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
