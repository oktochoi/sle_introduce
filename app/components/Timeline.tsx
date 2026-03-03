'use client';

import { useEffect, useRef, useState } from 'react';

const events = [
  {
    date: '2026년 3월 10일',
    time: '19:00 - 21:00',
    title: '프로젝트 발표회',
    location: 'NTH 412',
  },
];

export default function Timeline() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
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
    <section ref={sectionRef} className="py-16 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C221B] via-[#2A3D2F]/30 to-[#1C221B]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-[#E47A3F] text-sm tracking-[0.3em] uppercase font-semibold">
            행사 일정
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#F4F4F2] mt-4 tracking-tight">
            타임라인
          </h2>
        </div>

        {events.map((event, index) => (
          <div
            key={index}
            className={`bg-[#F4F4F2]/10 backdrop-blur-xl rounded-2xl p-12 border border-[#F4F4F2]/20 transition-all duration-700 hover:border-[#E47A3F]/50 hover:shadow-xl hover:shadow-[#E47A3F]/10 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="space-y-8">
              <div className="flex items-start justify-between">
                <span className="text-[#E47A3F] text-sm tracking-[0.2em] uppercase font-semibold">
                  발표회
                </span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-calendar-event-line text-2xl text-[#E47A3F]"></i>
                </div>
              </div>

              <h3 className="text-4xl font-bold text-[#F4F4F2]">{event.title}</h3>

              <div className="grid gap-8 mt-10">
                <div className="flex items-center gap-5 group">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#E47A3F]/30 to-[#E47A3F]/10 rounded-2xl group-hover:scale-110 transition-transform">
                    <i className="ri-calendar-line text-3xl text-[#E47A3F]"></i>
                  </div>
                  <div>
                    <p className="text-[#F4F4F2]/50 text-sm mb-1">날짜</p>
                    <p className="text-2xl font-bold text-[#F4F4F2]">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#E47A3F]/30 to-[#E47A3F]/10 rounded-2xl group-hover:scale-110 transition-transform">
                    <i className="ri-time-line text-3xl text-[#E47A3F]"></i>
                  </div>
                  <div>
                    <p className="text-[#F4F4F2]/50 text-sm mb-1">시간</p>
                    <p className="text-2xl font-bold text-[#F4F4F2]">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#E47A3F]/30 to-[#E47A3F]/10 rounded-2xl group-hover:scale-110 transition-transform">
                    <i className="ri-map-pin-line text-3xl text-[#E47A3F]"></i>
                  </div>
                  <div>
                    <p className="text-[#F4F4F2]/50 text-sm mb-1">장소</p>
                    <p className="text-2xl font-bold text-[#F4F4F2]">{event.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
