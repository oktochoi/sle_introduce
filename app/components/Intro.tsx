
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
            함께 배우고, 직접 만들다
          </h2>
          
          <div className="space-y-6 text-[#F4F4F2]/80 text-lg leading-relaxed">
            <p>
              우리는 슬기짜기입니다.
              <br />
              수업에서 배운 지식을 멈추지 않고,
              <br />
              직접 프로젝트로 확장해 보는 사람들입니다.
            </p>
            
            <p>
              이번 전시에서는 지난 겨울 방학 동안 고민하고, 부딪히고, 완성해낸 프로젝트를 소개합니다.
              각 결과물에는 시행착오, 협업, 그리고 &quot;끝까지 해보자&quot;는 끈기가 담겨 있습니다.
            </p>
            
            <p>
              전공이 궁금한 새내기에게,
              <br />
              컴퓨터공학이 무엇을 배우고 어디까지 갈 수 있는지
              <br />
              조금 더 선명하게 보여주고 싶었습니다.
            </p>
            
            <p>
              이 전시는 단순한 결과 발표가 아니라,
              <br />
              우리가 어떻게 성장해왔는지에 대한 기록입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
