import React from 'react';
import './index.css';

export default function Portfolio() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-brand">KIM JIHYUN</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section hero" id="home">
        <div className="container">
          <div className="hero-content">
            <p className="label">VISUALIZING PLANNER</p>
            <h1 className="hero-title">
              넓은 경험으로<br/>
              사람과 아이디어를<br/>
              잇는 기획자
            </h1>
            <p className="hero-name">김지현입니다.</p>
            <p className="hero-description">
              기획할 때 저는 항상 '이 프로젝트는 왜 존재하는가'를 먼저 생각합니다.<br/>
              경험을 설계하고 사람들을 연결하는 일에 계속 참여하고 싶습니다.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about" id="about">
        <div className="container">
          <h2 className="section-title">About</h2>
          
          <div className="about-grid">
            <div className="about-sidebar">
              <div className="profile-image">
                <img src='./profile.jpg'/>
              </div>
              <p className="label">@ 김지현</p>
              <p className="profile-title">Visualizing planner</p>
              
              <div className="education">
                <p className="label">EDUCATION</p>
                <div className="education-item">
                  <p className="education-period">2019-2022</p>
                  <p className="education-school">IMAE HIGH SCHOOL</p>
                </div>
                <div className="education-item">
                  <p className="education-period">2024-2026</p>
                  <p className="education-school">KAYWON UNIVERSITY</p>
                </div>
                {/* <div className="education-item">
                  <p className="education-period">2027-2029</p>
                  <p className="education-school">HONGIK UNIVERSITY</p>
                </div> */}
              </div>
            </div>

            <div className="about-main">
              <h3 className="subsection-title">Work Experience</h3>
              
              <div className="experience-section">
                <h4 className="experience-year">2025</h4>
                <ul className="experience-list">
                  <li>AR/VR 콘텐츠 실무 5조 PD</li>
                  <li>졸업 준비 위원회 영상팀 영상감독</li>
                  <li>커뮤니케이션 디자인 국제 공모전 입선</li>
                  <li>계원예대 대학일자리센터 서포터즈</li>
                  <li>대학생 서포터즈 '유플' 부회장</li>
                </ul>
              </div>

              <div className="experience-section">
                <h4 className="experience-year">2024</h4>
                <ul className="experience-list">
                  <li>교내 공모전 우수상 (에세이)</li>
                  <li>꿈씨패밀리x대전명소 굿즈 디자인 공모 입선</li>
                  <li>메타버스 개발자 경진대회 기획/디자인 담당</li>
                </ul>
              </div>

              <div className="philosophy">
                <p>
                  React로 웹을 만들고 Unity로 게임을 개발하며 각 환경에서 무엇이 가능하고 무엇이 제약인지 배웠습니다. 
                  덕분에 기획 단계에서부터 실행 가능성을 판단할 수 있었고, 이는 팀 프로젝트에서 도움을 주는 역량이 되었습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="section work" id="work">
        <div className="container">
          <h2 className="section-title">Selected Works</h2>
          
          <div className="work-grid">
            <div className="work-item">
              <div className="work-image">PROJECT IMAGE</div>
              <p className="label">Brand Design</p>
              <h3 className="work-title">대전명소 굿즈 디자인</h3>
              <p className="work-year">2024</p>
            </div>

            <div className="work-item">
              <div className="work-image">PROJECT IMAGE</div>
              <p className="label">XR Content</p>
              <h3 className="work-title">메타버스 개발 프로젝트</h3>
              <p className="work-year">2024</p>
            </div>

            <div className="work-item">
              <div className="work-image">PROJECT IMAGE</div>
              <p className="label">International Competition</p>
              <h3 className="work-title">커뮤니케이션 디자인 공모전</h3>
              <p className="work-year">2025</p>
            </div>

            <div className="work-item">
              <div className="work-image">PROJECT IMAGE</div>
              <p className="label">Video Production</p>
              <h3 className="work-title">졸업 준비 위원회 영상 제작</h3>
              <p className="work-year">2025</p>
            </div>

            <div className="work-item">
              <div className="work-image">PROJECT IMAGE</div>
              <p className="label">Event Planning</p>
              <h3 className="work-title">졸업전시 오프닝 행사 기획</h3>
              <p className="work-year">2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills" id="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          
          <div className="skills-grid">
            <div className="skill-card">
              <h3 className="skill-title">Planning & UX</h3>
              <p className="skill-tools">Notion / Figma / Excel / Docs</p>
              <h4>
                사용자 행동 데이터를 분석해 UX 개선 방향 설정<br/>
                행사 흥미 요소 분석을 기반으로 콘텐츠 구조와 시각적 요소 설계<br/>
                엑셀 내 정보처리에 필요한 도구를 활용해 자료를 처리
              </h4>
            </div>

            <div className="skill-card">
              <h3 className="skill-title">Visual & Motion</h3>
              <p className="skill-tools">Blender / Premiere / AE</p>
              <h4>
                3D 오브젝트 콘텐츠 시각화<br/>
                영상 편집 및 모션 그래픽 연출<br/>
                비주얼 컨셉 보드와 스토리보드 제작<br/>
              </h4>
            </div>

            <div className="skill-card">
              <h3 className="skill-title">Tech & Prototyping</h3>
              <p className="skill-tools">Unity / React / HTML/CSS/JS</p>
              <h4>
                2D/3D/XR 게임 제작<br/>
                프로젝트 웹사이트 개발&배포<br/>
                React 기반 포트폴리오 사이트 제작<br/>
              </h4>
            </div>
          </div>

          <div className="skills-outro">
            <p>
              프로젝트의 본질을 찾고, 사용자가 체감할 수 있는 경험으로 만드는 기획자로 성장 중입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact" id="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <p className="contact-description">
            뉴미디어 기획과 프로젝트 관리가 필요하시다면<br/>
            언제든 연락주세요.
          </p>
          <div className="contact-buttons">
            <a href="mailto:dmdhyun146@gmail.com" className="contact-button">
              dmdhyun146@gmail.com
            </a>
            <div className="contact-button">010 0000 0000</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-copyright">© 2025 Kim Jihyun</div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}