'use client';

import Hero from './components/Hero';
import Intro from './components/Intro';
import ProjectShowcase from './components/ProjectShowcase';
import Timeline from './components/Timeline';
import Crew from './components/Crew';
import FinalCTA from './components/FinalCTA';

export default function Home() {
  return (
    <main className="bg-[#1C221B]">
      <Hero />
      <Intro />
      <ProjectShowcase />
      <Timeline />
      <Crew />
      <FinalCTA />
    </main>
  );
}
