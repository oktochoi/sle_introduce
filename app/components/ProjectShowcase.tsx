
'use client';

import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    name: '에코트랙',
    concept: '지속가능성 모니터링 플랫폼',
    description: '실시간 데이터 분석과 실행 가능한 인사이트를 통해 조직의 탄소 발자국을 추적하고 줄일 수 있도록 돕는 종합 대시보드입니다.',
    tags: ['Next.js', 'TypeScript', 'D3.js', 'Supabase'],
    image: 'https://readdy.ai/api/search-image?query=modern%20minimalist%20dashboard%20interface%20showing%20environmental%20data%20analytics%20with%20green%20charts%20and%20graphs%20on%20clean%20white%20background%2C%20professional%20UI%20design%20with%20nature%20inspired%20color%20palette%2C%20editorial%20photography%20style&width=1200&height=800&seq=proj001&orientation=landscape',
    link: '#',
    align: 'left'
  },
  {
    id: 2,
    name: '마인드스페이스',
    concept: '정신 건강 케어 앱',
    description: '명상 가이드, 감정 추적, 맞춤형 웰니스 추천을 제공하는 공감적인 디지털 공간입니다.',
    tags: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
    image: 'https://readdy.ai/api/search-image?query=serene%20meditation%20app%20interface%20with%20calming%20pastel%20colors%20and%20soft%20gradients%2C%20peaceful%20user%20experience%20design%20with%20mindfulness%20elements%2C%20clean%20modern%20aesthetic%20with%20nature%20photography%20background&width=1200&height=800&seq=proj002&orientation=landscape',
    link: '#',
    align: 'right'
  },
  {
    id: 3,
    name: '코드콜랩',
    concept: '실시간 협업 개발 환경',
    description: '팀이 실시간으로 함께 코드를 작성하고, 리뷰하고, 배포할 수 있는 혁신적인 코딩 환경으로, 지리적 장벽을 허물어줍니다.',
    tags: ['WebRTC', 'Monaco Editor', 'Docker', 'WebSocket'],
    image: 'https://readdy.ai/api/search-image?query=sophisticated%20code%20editor%20interface%20with%20multiple%20cursors%20and%20collaborative%20features%2C%20dark%20theme%20with%20syntax%20highlighting%2C%20professional%20developer%20tool%20design%20with%20clean%20typography%20and%20modern%20UI%20elements&width=1200&height=800&seq=proj003&orientation=landscape',
    link: '#',
    align: 'left'
  },
  {
    id: 4,
    name: '아트버스',
    concept: '디지털 아트 마켓플레이스',
    description: '신진 아티스트와 컬렉터를 연결하는 큐레이션 플랫폼으로, 몰입형 갤러리와 원활한 거래 경험을 제공합니다.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'AWS S3'],
    image: 'https://readdy.ai/api/search-image?query=elegant%20art%20gallery%20website%20interface%20showcasing%20digital%20artwork%20in%20minimalist%20grid%20layout%2C%20sophisticated%20design%20with%20white%20space%20and%20premium%20aesthetic%2C%20editorial%20style%20presentation%20with%20artistic%20photography&width=1200&height=800&seq=proj004&orientation=landscape',
    link: '#',
    align: 'right'
  },
  {
    id: 5,
    name: '런플로우',
    concept: '적응형 학습 플랫폼',
    description: '각 학생의 학습 속도에 맞춰 적응하며, 지식 습득을 위한 맞춤형 학습 경로를 제공하는 지능형 교육 시스템입니다.',
    tags: ['Vue.js', 'Python', 'TensorFlow', 'Redis'],
    image: 'https://readdy.ai/api/search-image?query=modern%20educational%20platform%20interface%20with%20interactive%20learning%20modules%20and%20progress%20tracking%2C%20bright%20and%20engaging%20design%20with%20educational%20elements%2C%20clean%20user%20interface%20with%20student%20focused%20experience%20and%20warm%20colors&width=1200&height=800&seq=proj005&orientation=landscape',
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
