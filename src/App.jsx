import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'; // 라우터 관련 컴포넌트 임포트

function App() {
  const [count, setCount] = useState(0)
    const [scrollY, setScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState('home');
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
        
        const sections = ['home', 'about', 'work', 'skills', 'contact'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (current) setActiveSection(current);
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const experiences = [
      {
        year: "2025",
        items: [
          "졸업 준비 위원회 영상팀 영상감독",
          "커뮤니케이션 디자인 국제 공모전 입선",
          "계원예대 대학일자리센터 서포터즈",
          "대학생 서포터즈 '유플' 부회장"
        ]
      },
      {
        year: "2024",
        items: [
          "교내 공모전 우수상 (에세이)",
          "꿈씨패밀리x대전명소 굿즈 디자인 공모 입선",
          "메타버스 개발자 경진대회 기획/디자인 담당"
        ]
      }
    ];
  
    const projects = [
      {
        title: "졸업 준비 위원회 영상 제작",
        category: "Video Production",
        description: "졸업식을 위한 전체 영상 기획 및 감독. 팀 리딩부터 최종 결과물까지 책임지며 프로젝트를 성공적으로 완료했습니다.",
        year: "2025",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=800&fit=crop",
        tags: ["영상감독", "팀 리딩", "기획"],
        color: "pink"
      },
      {
        title: "대전명소 굿즈 디자인",
        category: "Brand Design",
        description: "꿈씨패밀리와 협업한 대전 지역 명소 굿즈 디자인 공모전 입선작. 지역 정체성을 담은 디자인 개발.",
        year: "2024",
        image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=1200&h=800&fit=crop",
        tags: ["굿즈디자인", "브랜딩", "공모전"],
        color: "yellow"
      },
      {
        title: "메타버스 개발 프로젝트",
        category: "XR Content",
        description: "메타버스 개발자 경진대회 참가. 기획부터 디자인까지 담당하며 팀의 창의적 방향성 제시.",
        year: "2024",
        image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1200&h=800&fit=crop",
        tags: ["메타버스", "기획", "UX/UI"],
        color: "pink"
      },
      {
        title: "커뮤니케이션 디자인 공모전",
        category: "International Competition",
        description: "국제 공모전 입선작. 시각적 커뮤니케이션을 통한 메시지 전달에 집중한 프로젝트.",
        year: "2025",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=800&fit=crop",
        tags: ["국제공모전", "디자인", "입선"],
        color: "yellow"
      }
    ];
  
    const skills = [
      {
        category: "Planning & UX",
        tools: "Notion / Figma / Docs",
        description: "사용자 행동 데이터를 분석해 UX 개선 방향 설정. 행사 홍보 요소 분석을 기반으로 콘텐츠 구조와 시각적 요소 설계"
      },
      {
        category: "Visual & Motion",
        tools: "Blender / Premiere / AE",
        description: "3D 오브젝트로 콘텐츠 시각화. 영상 편집 및 모션 그래픽 연출. 비주얼 컨셉 보드와 스토리보드 제작"
      },
      {
        category: "Tech & Prototyping",
        tools: "Unity / HTML / CSS / JS / React",
        description: "2D/3D/XR 게임 제작. 프로젝트 웹사이트 개발·배포. React 기반 포트폴리오 사이트 제작"
      }
    ];
  
    const education = [
      { school: "IMAE HIGH SCHOOL", period: "2019-2022", color: "pink" },
      { school: "KAYWON UNIVERSITY OF ART & DESIGN", period: "2024-2026", color: "yellow" },
      { school: "HONGIK UNIVERSITY", period: "2027-2029", color: "pink" }
    ];

  return (
     <div className="min-h-screen bg-black text-white">
          <style>{`
            :root {
              --pink: #ce89c3;
              --yellow: #dde788;
              --gray: #b0acaa;
              --black: #000000;
            }
            
            .text-pink { color: var(--pink); }
            .text-yellow { color: var(--yellow); }
            .text-gray { color: var(--gray); }
            .bg-pink { background-color: var(--pink); }
            .bg-yellow { background-color: var(--yellow); }
            .border-pink { border-color: var(--pink); }
            .border-yellow { border-color: var(--yellow); }
            .hover\:bg-pink:hover { background-color: var(--pink); }
            .hover\:bg-yellow:hover { background-color: var(--yellow); }
            
            .gradient-text {
              background: linear-gradient(135deg, var(--pink), var(--yellow));
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
            
            .float { animation: float 4s ease-in-out infinite; }
            
            @keyframes slideIn {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
            
            .animate-slide-in { animation: slideIn 0.8s ease-out forwards; }
          `}</style>
    
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-gray-900">
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
              <div className="text-2xl font-bold">
                <span className="gradient-text">KIM JIHYUN</span>
              </div>
              <div className="hidden md:flex gap-10 text-sm font-medium uppercase tracking-wider">
                <a href="#home" className={`transition-colors ${activeSection === 'home' ? 'text-pink' : 'text-gray hover:text-pink'}`}>Home</a>
                <a href="#about" className={`transition-colors ${activeSection === 'about' ? 'text-yellow' : 'text-gray hover:text-yellow'}`}>About</a>
                <a href="#work" className={`transition-colors ${activeSection === 'work' ? 'text-pink' : 'text-gray hover:text-pink'}`}>Work</a>
                <a href="#skills" className={`transition-colors ${activeSection === 'skills' ? 'text-yellow' : 'text-gray hover:text-yellow'}`}>Skills</a>
                <a href="#contact" className={`transition-colors ${activeSection === 'contact' ? 'text-pink' : 'text-gray hover:text-pink'}`}>Contact</a>
              </div>
            </div>
          </nav>
    
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-10 w-80 h-80 bg-pink rounded-full filter blur-3xl float" />
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow rounded-full filter blur-3xl float" style={{animationDelay: '2s'}} />
            </div>
            
            <div className="max-w-6xl mx-auto text-left relative z-10">
              <div className="mb-8 text-gray uppercase tracking-[0.3em] text-sm font-light">
                Visualizing Planner
              </div>
              <h1 className="text-8xl md:text-[10rem] font-black mb-8 leading-[0.9] tracking-tight">
                넓은 경험으로
                <br />
                <span className="gradient-text">사람과 아이디어를</span>
                <br />
                <span className="text-gray">잇는 기획자</span>
              </h1>
              <div className="text-5xl md:text-7xl font-black mb-12 tracking-tight">
                <span className="gradient-text">김지현</span>
                <span className="text-white">입니다.</span>
              </div>
              <p className="text-2xl text-gray leading-relaxed max-w-3xl mb-12">
                기획할 때 저는 항상 '이 프로젝트는 왜 존재하는가'를 먼저 생각합니다.
                <br />
                일적부터 기획에 관심이 있었고, 경험을 설계하고 사람들을 연결하는 일에
                <br />
                계속 참여하고 싶습니다.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray">
                <Mail size={18} className="text-pink" />
                <span>dmdhyun146@gmail.com</span>
                <span className="mx-2">•</span>
                <span>010 0000 0000</span>
              </div>
            </div>
    
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ArrowRight className="rotate-90 text-gray" size={32} />
            </div>
          </section>
    
          {/* About Section */}
          <section id="about" className="py-32 px-6 bg-gradient-to-b from-black via-gray-900/10 to-black">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                {/* Profile Card */}
                <div className="sticky top-32">
                  <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-3xl p-12 hover:border-pink transition-all duration-500">
                    <div className="w-48 h-48 bg-white rounded-3xl mb-8 flex items-center justify-center text-black font-mono text-sm">
                      <div className="text-center">
                        <div className="text-6xl mb-2">📸</div>
                        <div>PHOTO</div>
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="text-sm text-gray mb-2">@ 김지현</div>
                      <div className="text-2xl font-bold gradient-text">Visualizing planner</div>
                    </div>
                    <div className="space-y-3 text-gray leading-relaxed">
                      <p>목적을 중심으로 경험을 설계하는 기획자</p>
                      <p className="text-pink">React로 웹을 만들고 Unity로 게임을 개발하며 각 환경에서 무엇이 가능하고 무엇이 제약인지 배웠습니다.</p>
                    </div>
                  </div>
    
                  {/* Education */}
                  <div className="mt-8 space-y-4">
                    <h3 className="text-2xl font-bold text-gray mb-6">EDUCATION</h3>
                    {education.map((edu, i) => (
                      <div key={i} className="flex items-baseline gap-4 group cursor-pointer">
                        <div className={`text-lg font-mono ${edu.color === 'pink' ? 'text-pink' : 'text-yellow'}`}>
                          {edu.period}
                        </div>
                        <div className="text-xl font-bold group-hover:text-pink transition-colors">
                          {edu.school}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
    
                {/* Experience */}
                <div>
                  <div className="flex items-center gap-4 mb-12">
                    <Award className="text-yellow" size={40} />
                    <h2 className="text-5xl font-bold">
                      Work <span className="gradient-text">Experience</span>
                    </h2>
                  </div>
                  
                  <div className="space-y-16">
                    {experiences.map((exp, i) => (
                      <div key={i} className="relative pl-8 border-l-2 border-gray-800">
                        <div className="absolute left-0 top-0 w-4 h-4 bg-pink rounded-full transform -translate-x-[9px]" />
                        <div className="text-4xl font-black mb-6 gradient-text">{exp.year}</div>
                        <div className="space-y-4">
                          {exp.items.map((item, j) => (
                            <div key={j} className="group">
                              <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-900/30 transition-all cursor-pointer">
                                <div className="text-yellow mt-1">▸</div>
                                <div className="text-lg text-gray group-hover:text-white transition-colors leading-relaxed">
                                  {item}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
    
                  <div className="mt-16 p-8 bg-gradient-to-br from-pink/10 to-yellow/10 border border-pink/20 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-4 gradient-text">실행 가능한 형태의 기획</h3>
                    <p className="text-gray leading-relaxed mb-4">
                      React로 웹을 만들고 Unity로 게임을 개발하며 각 환경에서 무엇이 가능하고 무엇이 제약인지 배웠습니다.
                    </p>
                    <p className="text-gray leading-relaxed">
                      덕분에 기획 단계에서부터 실행 가능성을 판단할 수 있었고, 이는 이어지는 팀 프로젝트에서 도움을 주는 역량이 되었습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          {/* Projects Section */}
          <section id="work" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="mb-24 text-center">
                <h2 className="text-7xl md:text-9xl font-black mb-6 tracking-tight">
                  Selected
                  <br />
                  <span className="gradient-text">Works</span>
                </h2>
                <p className="text-xl text-gray">
                  기획부터 실행까지, 목적 중심의 프로젝트 경험
                </p>
              </div>
    
              <div className="space-y-32">
                {projects.map((project, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                        <div className="relative overflow-hidden rounded-3xl aspect-[4/3] bg-gray-900 border-2 border-gray-800 group-hover:border-pink transition-all duration-500">
                          <img 
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${project.color === 'pink' ? 'from-pink/30' : 'from-yellow/30'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="w-20 h-20 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                              <ExternalLink className="text-white" size={32} />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                        <div className={`text-sm uppercase tracking-[0.3em] mb-4 font-bold ${project.color === 'pink' ? 'text-pink' : 'text-yellow'}`}>
                          {project.category}
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black mb-6 group-hover:text-gray transition-colors leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-xl text-gray leading-relaxed mb-8">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-3 mb-8">
                          {project.tags.map((tag, i) => (
                            <span 
                              key={i}
                              className={`px-5 py-2 rounded-full text-sm font-bold border-2 transition-all ${
                                project.color === 'pink' 
                                  ? 'border-pink text-pink hover:bg-pink hover:text-black' 
                                  : 'border-yellow text-yellow hover:bg-yellow hover:text-black'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="text-gray font-mono text-xl font-bold">
                          {project.year}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
    
          {/* Skills Section */}
          <section id="skills" className="py-32 px-6 bg-gradient-to-b from-black via-gray-900/10 to-black">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-7xl font-black mb-6">
                  Personal <span className="gradient-text">Skills</span>
                </h2>
              </div>
    
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {skills.map((skill, i) => (
                  <div 
                    key={i}
                    className="group relative p-10 bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-3xl hover:border-yellow hover:scale-105 transition-all duration-500"
                  >
                    <div className="text-6xl mb-6">{skill.icon}</div>
                    <h3 className="text-3xl font-black mb-4 group-hover:text-yellow transition-colors">
                      {skill.category}
                    </h3>
                    <div className="text-pink text-sm font-mono mb-6 tracking-wider">
                      {skill.tools}
                    </div>
                    <p className="text-gray leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
    
              <div className="text-center">
                <p className="text-2xl text-gray mb-12 leading-relaxed max-w-4xl mx-auto">
                  앞으로도 저는 프로젝트의 본질을 찾고, 그것을 사용자가 체감할 수 있는 경험으로 
                  <br />
                  만드는 기획자로 성장하고 싶습니다.
                </p>
              </div>
            </div>
          </section>
    
          {/* Contact Section */}
          <section id="contact" className="py-40 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink/20 via-transparent to-yellow/20" />
            
            <div className="max-w-5xl mx-auto text-center relative z-10">
              <Sparkles className="mx-auto mb-8 text-yellow float" size={60} />
              <h2 className="text-7xl md:text-9xl font-black mb-12 leading-tight tracking-tight">
                Let's Create
                <br />
                <span className="gradient-text">Together</span>
              </h2>
              <p className="text-2xl text-gray mb-16 leading-relaxed max-w-3xl mx-auto">
                뉴미디어 기획과 프로젝트 관리가 필요하시다면
                <br />
                언제든 연락주세요. 함께 의미 있는 경험을 만들어가고 싶습니다.
              </p>
              <div className="flex flex-wrap gap-6 justify-center mb-12">
                <a 
                  href="mailto:dmdhyun146@gmail.com"
                  className="group inline-flex items-center gap-3 px-12 py-6 bg-pink text-black rounded-full font-black text-lg hover:bg-pink/90 transition-all hover:scale-110 shadow-lg shadow-pink/30"
                >
                  <Mail size={24} />
                  <span>dmdhyun146@gmail.com</span>
                </a>
                <a 
                  href="#"
                  className="group inline-flex items-center gap-3 px-12 py-6 bg-transparent border-3 border-yellow text-yellow rounded-full font-black text-lg hover:bg-yellow hover:text-black transition-all hover:scale-110"
                >
                  <Github size={24} />
                  <span>Portfolio</span>
                </a>
              </div>
              <div className="text-gray font-mono text-lg">
                T 010 0000 0000
              </div>
            </div>
          </section>
    
          {/* Footer */}
          <footer className="py-12 px-6 border-t-2 border-gray-900">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-gray font-mono">
                  © 2024 Kim Jihyun. All rights reserved.
                </div>
                <div className="flex gap-10 text-sm font-bold uppercase tracking-wider">
                  <a href="#about" className="text-gray hover:text-yellow transition-colors">About</a>
                  <a href="#work" className="text-gray hover:text-pink transition-colors">Work</a>
                  <a href="#skills" className="text-gray hover:text-yellow transition-colors">Skills</a>
                  <a href="#contact" className="text-gray hover:text-pink transition-colors">Contact</a>
                </div>
              </div>
              <div className="mt-8 text-center">
                <div className="gradient-text text-2xl font-black">VISUALIZING PLANNER</div>
              </div>
            </div>
          </footer>
        </div>
      );
    }

export default App
