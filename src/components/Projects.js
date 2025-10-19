import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'React와 Node.js를 활용한 풀스택 이커머스 웹사이트입니다. 사용자 인증, 상품 관리, 결제 시스템을 포함합니다.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      icon: 'fas fa-laptop-code',
      githubLink: '#',
      demoLink: '#'
    },
    {
      title: 'Task Management App',
      description: '개인 생산성 향상을 위한 태스크 관리 애플리케이션입니다. 드래그 앤 드롭 기능과 실시간 동기화를 지원합니다.',
      technologies: ['Vue.js', 'Firebase', 'CSS3'],
      icon: 'fas fa-mobile-alt',
      githubLink: '#',
      demoLink: '#'
    },
    {
      title: 'Data Visualization Dashboard',
      description: '복잡한 데이터를 직관적으로 표현하는 대시보드입니다. 실시간 데이터 업데이트와 인터랙티브 차트를 제공합니다.',
      technologies: ['D3.js', 'Python', 'Flask'],
      icon: 'fas fa-chart-line',
      githubLink: '#',
      demoLink: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <i className={project.icon}></i>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubLink} className="project-link">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  <a href={project.demoLink} className="project-link">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
