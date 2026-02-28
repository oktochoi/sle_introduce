
'use client';

import { useEffect, useRef, useState } from 'react';

export default function Intro() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="intro"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-32 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C221B] via-[#2A3D2F]/30 to-[#1C221B]" />
      
      <div 
        className={`relative z-10 max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="bg-[#F4F4F2]/10 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-[#F4F4F2]/20">
          <div className="mb-6">
            <span className="text-[#E47A3F] text-sm tracking-[0.3em] uppercase font-semibold">
              전시 소개
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#F4F4F2] mb-8 leading-tight">
            혁신과 창의성이<br />만나는 곳
          </h2>
          
          <div className="space-y-6 text-[#F4F4F2]/80 text-lg leading-relaxed">
            <p>
              우리는 슬기짜기 동아리입니다. 열정적인 개발자, 디자이너, 기획자들이 모여 
              아이디어를 현실로 만들어가는 대학 동아리입니다.
            </p>
            
            <p>
              이번 전시에서는 2025-2026년 동안 개발한 다섯 개의 프로젝트를 선보입니다. 
              각 프로젝트는 수많은 협업과 혁신, 그리고 가능성의 경계를 넓히려는 
              노력의 결과물입니다.
            </p>
            
            <p>
              디지털 갤러리를 거닐며 기술, 디자인, 그리고 사용자 중심 사고의 
              교차점을 경험해 보세요. 이것은 단순한 전시가 아닌, 
              우리가 함께 이룰 수 있는 것에 대한 증명입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
