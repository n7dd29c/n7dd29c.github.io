import React from 'react';

const Projects = () => {
  return (
    <div className="section">
      <h1 className="section-title">프로젝트</h1>
      <div className="section-content">
        <h2>E-Commerce Website</h2>
        <p>
          React와 Node.js를 활용한 풀스택 이커머스 웹사이트입니다. 
          사용자 인증, 상품 관리, 결제 시스템을 포함합니다.
        </p>
        <p><strong>기술 스택:</strong> React, Node.js, MongoDB, Express</p>
        <p><strong>주요 기능:</strong> 사용자 인증, 상품 카탈로그, 장바구니, 결제 시스템</p>
        
        <h2>Task Management App</h2>
        <p>
          개인 생산성 향상을 위한 태스크 관리 애플리케이션입니다. 
          드래그 앤 드롭 기능과 실시간 동기화를 지원합니다.
        </p>
        <p><strong>기술 스택:</strong> Vue.js, Firebase, CSS3</p>
        <p><strong>주요 기능:</strong> 태스크 생성/수정/삭제, 드래그 앤 드롭, 실시간 동기화</p>
        
        <h2>Data Visualization Dashboard</h2>
        <p>
          복잡한 데이터를 직관적으로 표현하는 대시보드입니다. 
          실시간 데이터 업데이트와 인터랙티브 차트를 제공합니다.
        </p>
        <p><strong>기술 스택:</strong> D3.js, Python, Flask</p>
        <p><strong>주요 기능:</strong> 실시간 차트, 데이터 필터링, 반응형 대시보드</p>
      </div>
    </div>
  );
};

export default Projects;