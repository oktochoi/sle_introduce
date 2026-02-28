
'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2A3D2F]/90 via-[#1C221B]/70 to-[#1C221B]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50" />
        <img
          src="https://readdy.ai/api/search-image?query=creative%20students%20working%20together%20on%20laptops%20in%20dark%20moody%20workspace%20with%20warm%20ambient%20lighting%2C%20coding%20environment%20with%20multiple%20screens%20showing%20code%2C%20blurred%20development%20atmosphere%2C%20team%20collaboration%20moment%20with%20soft%20bokeh%20lights%2C%20cinematic%20photography%20style%20with%20green%20and%20orange%20color%20tones%2C%20abstract%20creative%20texture%20overlay%2C%20experimental%20exhibition%20poster%20aesthetic&width=1920&height=1080&seq=hero002&orientation=landscape"
          alt="전시 배경"
          className="w-full h-full object-cover object-top blur-[2px]"
        />
      </div>

      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#E47A3F]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-20 w-96 h-96 bg-[#2A3D2F]/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <span className="inline-block px-6 py-2 bg-[#F4F4F2]/10 backdrop-blur-md rounded-full text-[#E47A3F] text-sm tracking-[0.2em] font-medium border border-[#F4F4F2]/20">
            2026 디지털 전시
          </span>
        </div>

        <h1 className="text-[clamp(2.5rem,10vw,8rem)] font-black tracking-tight leading-[0.95] mb-8 text-[#F4F4F2]">
          SLE 프로젝트<br />쇼케이스
        </h1>
        
        <p className="text-[#F4F4F2]/80 text-lg md:text-xl tracking-wide font-light mb-4">
          슬기짜기 동아리 디지털 전시
        </p>

        <p className="text-[#F4F4F2]/50 text-sm tracking-widest uppercase mb-16">
          우리가 만든 다섯 개의 프로젝트
        </p>

        <div className="flex justify-center">
          <button 
            onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex flex-col items-center gap-2 cursor-pointer"
          >
            <span className="text-[#F4F4F2]/40 text-xs tracking-widest">스크롤</span>
            <div className="w-10 h-10 flex items-center justify-center animate-bounce">
              <i className="ri-arrow-down-line text-2xl text-[#E47A3F] group-hover:text-[#F4F4F2] transition-colors"></i>
            </div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1C221B] to-transparent z-[5]" />
    </section>
  );
}
