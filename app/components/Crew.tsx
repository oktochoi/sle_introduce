
'use client';

import { useEffect, useRef, useState } from 'react';

const members = [
  { name: '최옥토', role: '퀴즈천국' },
  { name: '신태현', role: 'TICKETING WAR: Operational Console' },
  { name: '신혜원', role: '도약의 숲' },
  { name: '정봉혁', role: 'Not For You' },
  { name: '조도현', role: '추후공개' },
  { name: '이승주', role: '추후공개' },
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
            프로젝트를 이끌어온 7명의 발표자를 소개합니다
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {members.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className={`flex items-center gap-5 px-6 py-5 rounded-2xl border border-[#F4F4F2]/20 bg-[#F4F4F2]/5 transition-all duration-500 hover:border-[#E47A3F]/40 hover:bg-[#F4F4F2]/10 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-[#E47A3F]/20 text-[#E47A3F]">
                  <i className="ri-user-3-line text-xl"></i>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-[#F4F4F2] truncate">{member.name}</h3>
                  <p className="text-[#E47A3F]/90 text-sm font-medium truncate">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.slice(3, 7).map((member, index) => (
              <div
                key={index + 3}
                className={`flex items-center gap-5 px-6 py-5 rounded-2xl border border-[#F4F4F2]/20 bg-[#F4F4F2]/5 transition-all duration-500 hover:border-[#E47A3F]/40 hover:bg-[#F4F4F2]/10 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 3) * 80}ms` }}
              >
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-[#E47A3F]/20 text-[#E47A3F]">
                  <i className="ri-user-3-line text-xl"></i>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-[#F4F4F2] truncate">{member.name}</h3>
                  <p className="text-[#E47A3F]/90 text-sm font-medium truncate">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
