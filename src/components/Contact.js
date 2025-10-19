import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    
    // Simulate form submission
    alert('메시지가 성공적으로 전송되었습니다!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="section">
      <h1 className="section-title">연락처</h1>
      <div className="section-content">
        <h2>연락 정보</h2>
        <ul className="info-list">
          <li>
            <i className="fas fa-envelope"></i>
            <span>synthyroider@email.com</span>
          </li>
          <li>
            <i className="fas fa-phone"></i>
            <span>+82 10-1234-5678</span>
          </li>
          <li>
            <i className="fas fa-map-marker-alt"></i>
            <span>Seoul, South Korea</span>
          </li>
        </ul>
        
        <h2>소셜 링크</h2>
        <ul>
          <li><a href="https://github.com/n7dd29c">GitHub</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
        
        <h2>메시지 보내기</h2>
        <p>
          새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면 
          언제든지 연락주세요. 함께 멋진 것을 만들어봅시다!
        </p>
        
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="이름"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="이메일"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="제목"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="메시지"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            메시지 보내기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
