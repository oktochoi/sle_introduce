
'use client';

import { useEffect, useRef, useState } from 'react';

export default function FinalCTA() {
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
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C221B] via-[#2A3D2F]/40 to-[#1C221B]" />
        <img
          src="https://readdy.ai/api/search-image?query=creative%20students%20collaborating%20on%20laptops%20in%20modern%20workspace%20with%20warm%20ambient%20lighting%20and%20green%20plants%2C%20team%20working%20together%20on%20digital%20projects%2C%20cinematic%20photography%20with%20soft%20bokeh%20and%20moody%20atmosphere%2C%20editorial%20style%20showcasing%20innovation%20and%20teamwork&width=1920&height=1080&seq=cta002&orientation=landscape"
          alt="함께하기"
          className="w-full h-full object-cover object-top opacity-30"
        />
      </div>

      <div 
        className={`relative z-10 text-center max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="mb-8">
          <span className="text-[#E47A3F] text-sm tracking-[0.3em] uppercase font-semibold">
            함께하는 여정
          </span>
        </div>

        <h2 className="text-[clamp(2rem,7vw,5.5rem)] font-black leading-[1] mb-12 text-[#F4F4F2] tracking-tight">
          우리가 함께<br />만들어낸 것들
        </h2>

        <p className="text-[#F4F4F2]/70 text-xl md:text-2xl leading-relaxed mb-16 max-w-3xl mx-auto">
          한 줄 한 줄의 코드, 모든 디자인 결정, 밤새운 디버깅 세션—
          이 모든 것이 이 순간을 위한 것이었습니다. 혁신, 협업, 
          그리고 집단 창의성의 힘을 함께 축하해 주세요.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#E47A3F] hover:bg-[#E47A3F]/90 text-[#F4F4F2] text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-[#E47A3F]/40 hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            전시 관람하기
            <i className="ri-arrow-right-line text-xl w-5 h-5 flex items-center justify-center"></i>
          </a>

          <a
            href="#"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#F4F4F2]/10 backdrop-blur-xl hover:bg-[#F4F4F2]/20 border border-[#F4F4F2]/30 text-[#F4F4F2] text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            동아리 가입하기
            <i className="ri-team-line text-xl w-5 h-5 flex items-center justify-center"></i>
          </a>
        </div>
      </div>

      <footer className="absolute bottom-8 left-0 right-0 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[#F4F4F2]/40 text-sm">
          <div className="flex items-center gap-2">
            <span>© 2026 슬기짜기 동아리. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="hover:text-[#E47A3F] transition-colors cursor-pointer whitespace-nowrap">
              Made with Readdy
            </a>
            <a href="#" className="hover:text-[#E47A3F] transition-colors cursor-pointer whitespace-nowrap">
              문의하기
            </a>
            <a href="#" className="hover:text-[#E47A3F] transition-colors cursor-pointer whitespace-nowrap">
              개인정보처리방침
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
