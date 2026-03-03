
'use client';

import { useEffect, useRef, useState } from 'react';

interface Project {
  id: number;
  name: string;
  concept: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  align: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isLeft = project.align === 'left';

  return (
    <div
      ref={cardRef}
      className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      <div className="flex-1 w-full">
        <div className="relative group overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C221B]/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src={project.image}
            alt={project.name}
            className="w-full aspect-[3/2] object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 border-2 border-[#E47A3F]/0 group-hover:border-[#E47A3F]/50 rounded-2xl transition-all duration-500 z-20" />
        </div>
      </div>

      <div className="flex-1 w-full space-y-6">
        <div>
          <span className="text-[#E47A3F] text-sm tracking-[0.2em] uppercase font-semibold">
            프로젝트 {project.id.toString().padStart(2, '0')}
          </span>
        </div>

        <h3 className="text-5xl md:text-6xl font-bold text-[#F4F4F2] tracking-tight">
          {project.name}
        </h3>

        <p className="text-[#E47A3F]/80 text-xl font-medium">
          {project.concept}
        </p>

        <p className="text-[#F4F4F2]/70 text-lg leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-[#F4F4F2]/10 backdrop-blur-sm rounded-full text-[#F4F4F2]/80 text-sm border border-[#F4F4F2]/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.link !== '#' && (
          <div className="pt-4">
            <a
              href={project.link}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#E47A3F] hover:bg-[#E47A3F]/90 text-[#F4F4F2] font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#E47A3F]/30 hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              사이트 방문
              <i className="ri-arrow-right-up-line text-xl w-5 h-5 flex items-center justify-center"></i>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
