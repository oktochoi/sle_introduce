
'use client';

import { useEffect, useRef, useState } from 'react';

const members = [
  { name: '김민준', role: '리드 개발자', description: '프로젝트 전체 아키텍처 설계 및 개발 총괄' },
  { name: '이서연', role: 'UI/UX 디자이너', description: '사용자 경험 설계 및 인터페이스 디자인' },
  { name: '박지훈', role: '백엔드 엔지니어', description: '서버 인프라 구축 및 데이터베이스 설계' },
  { name: '최수아', role: '프로덕트 매니저', description: '프로젝트 기획 및 일정 관리' },
  { name: '정우진', role: '프론트엔드 개발자', description: '웹 애플리케이션 UI 구현 및 최적화' },
];

export default function Crew() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-32 px-6 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C221B] via-[#2A3D2F]/20 to-[#1C221B]" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-[#E47A3F] text-sm tracking-[0.3em] uppercase font-semibold">
            PRESENTERS
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#F4F4F2] mt-4 tracking-tight">
            발표자
          </h2>
          <p className="text-[#F4F4F2]/60 mt-4 text-lg">
            프로젝트를 이끌어온 5명의 발표자를 소개합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.slice(0, 3).map((member, index) => (
            <div
              key={index}
              className={`bg-[#F4F4F2]/10 backdrop-blur-xl rounded-3xl p-10 border border-[#F4F4F2]/20 transition-all duration-700 hover:border-[#E47A3F]/50 hover:shadow-2xl hover:shadow-[#E47A3F]/10 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="space-y-5">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-[#E47A3F]/30 to-[#E47A3F]/10 rounded-2xl mb-6">
                  <i className="ri-user-line text-4xl text-[#E47A3F]"></i>
                </div>
                
                <h3 className="text-2xl font-bold text-[#F4F4F2]">
                  {member.name}
                </h3>
                
                <p className="text-[#E47A3F] text-base font-medium tracking-wide">
                  {member.role}
                </p>
                
                <p className="text-[#F4F4F2]/50 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {members.slice(3, 5).map((member, index) => (
            <div
              key={index + 3}
              className={`bg-[#F4F4F2]/10 backdrop-blur-xl rounded-3xl p-10 border border-[#F4F4F2]/20 transition-all duration-700 hover:border-[#E47A3F]/50 hover:shadow-2xl hover:shadow-[#E47A3F]/10 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="space-y-5">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-[#E47A3F]/30 to-[#E47A3F]/10 rounded-2xl mb-6">
                  <i className="ri-user-line text-4xl text-[#E47A3F]"></i>
                </div>
                
                <h3 className="text-2xl font-bold text-[#F4F4F2]">
                  {member.name}
                </h3>
                
                <p className="text-[#E47A3F] text-base font-medium tracking-wide">
                  {member.role}
                </p>
                
                <p className="text-[#F4F4F2]/50 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
