
'use client';

import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    name: '퀴즈천국',
    concept: '인터랙티브 퀴즈 기반 참여형 콘텐츠 플랫폼',
    description: '사용자 생성 문제을 기반으로, 두뇌게임·밸런스게임 등 다양한 퀴즈를 통해 몰입도 높은 참여 경험을 제공하는 종합 인터랙티브 플랫폼입니다.',
    tags: ['Next.js', 'TypeScript', 'Supabase'],
    image: '/1.png',
    link: 'https://turtle-soup-rust.vercel.app/ko',
    align: 'left'
  },
  {
    id: 2,
    name: 'TICKETING WAR: Operational Console',
    concept: '정신 건강 케어 앱',
    description: '고성능 엔진을 통해 실제 공연 예매의 대기열과 타이밍을 실전처럼 연습할 수 있는 아미(ARMY) 맞춤형 티케팅 시뮬레이션 플랫폼입니다.',
    tags: ['Next.js', 'Tailwind CSS,', 'Zustand', 'Framer Motion'],
    image: './3.png',
    link: 'https://ticketing-war.vercel.app/',
    align: 'right'
  },
  {
    id: 3,
    name: '도약의 숲',
    concept: '성장형 습관 관리 및 가드닝 플랫폼',
    description: '각 사용자의 목표 달성 여부에 따라 나만의 숲을 울창하게 가꾸며, 시각적인 보상을 통해 지속 가능한 습관 형성을 돕는 지능형 라이프스타일 웹입니다.',
    tags: ['React.js', 'React Hooks', 'React Router',],
    image: '/2_pic.png',
    link: 'https://26-leap-project.vercel.app/',
    align: 'left'
  },
  {
    id: 4,
    name: 'Not For You',
    concept: '사진 속 물체 제거 사이트',
    description: 'AI 기반 이미지 인페인팅 기술을 활용해 사진 속 불필요한 물체를 자연스럽게 제거하는 웹 서비스입니다.',
    tags: ['React', 'Python',],
    image: '/4.png',
    link: 'https://vacation-project-suelgi.vercel.app/',
    align: 'right'
  },
  {
    id: 5,
    name: '추후공개',
    concept: '준비 중입니다',
    description: '곧 공개될 예정입니다.',
    tags: [],
    image: '/coming.jpg',
    link: '#',
    align: 'right'
  },
  {
    id: 6,
    name: '추후공개',
    concept: '준비 중입니다',
    description: '곧 공개될 예정입니다.',
    tags: [],
    image: '/coming.jpg',
    link: '#',
    align: 'left'
  }
];

export default function ProjectShowcase() {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C221B] via-[#2A3D2F]/20 to-[#1C221B]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-[#E47A3F] text-sm tracking-[0.3em] uppercase font-semibold">
            주요 작품
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#F4F4F2] mt-4 tracking-tight">
            프로젝트 갤러리
          </h2>
        </div>

        <div className="space-y-32">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
