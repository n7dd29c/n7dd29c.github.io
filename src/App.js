import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: '홈', component: <Hero /> },
    { id: 'about', label: '소개', component: <About /> },
    { id: 'skills', label: '기술', component: <Skills /> },
    { id: 'projects', label: '프로젝트', component: <Projects /> },
    { id: 'contact', label: '연락처', component: <Contact /> }
  ];

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
          {tabs.find(tab => tab.id === activeTab)?.component}
        </main>
      </div>
    </div>
  );
}

export default App;