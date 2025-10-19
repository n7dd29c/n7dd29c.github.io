import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: '홈' },
    { id: 'about', label: '소개' },
    { id: 'skills', label: '기술' },
    { id: 'projects', label: '프로젝트' },
    { id: 'contact', label: '연락처' }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return (
          <div className="section">
            <h1 className="section-title">안녕하세요, Synthyroider입니다</h1>
            <div className="section-content">
              <h2>웹 개발자</h2>
              <p>사용자 경험을 중시하며, 현대적인 웹 기술을 활용해 의미 있는 디지털 솔루션을 만들어갑니다.</p>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="section">
            <h1 className="section-title">소개</h1>
            <div className="section-content">
              <h2>개발자로서의 철학</h2>
              <p>웹 개발에 대한 열정을 가지고 있으며, 지속적으로 새로운 기술을 학습하고 적용하는 것을 즐깁니다.</p>
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="section">
            <h1 className="section-title">기술 스택</h1>
            <div className="section-content">
              <h2>프론트엔드</h2>
              <ul>
                <li>HTML5, CSS3, JavaScript</li>
                <li>React, Vue.js</li>
              </ul>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="section">
            <h1 className="section-title">프로젝트</h1>
            <div className="section-content">
              <h2>E-Commerce Website</h2>
              <p>React와 Node.js를 활용한 풀스택 이커머스 웹사이트입니다.</p>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="section">
            <h1 className="section-title">연락처</h1>
            <div className="section-content">
              <h2>연락 정보</h2>
              <p>Email: synthyroider@email.com</p>
              <p>Phone: +82 10-1234-5678</p>
            </div>
          </div>
        );
      default:
        return <div>내용을 선택해주세요.</div>;
    }
  };

  return (
    <div className="App">
      <div className="document-layout">
        <nav className="sidebar">
          <div className="logo">
            <h1>Synthyroider</h1>
          </div>
          <ul className="nav-tabs">
            {tabs.map(tab => (
              <li key={tab.id}>
                <button
                  className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <main className="content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;