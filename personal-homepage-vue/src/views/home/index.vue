<script setup lang="ts" name="HomePage">
import Cursor from '@/components/common/cursor.vue';
import ProgressIndicator from '@/components/common/progress-indicator.vue';
import AboutSection from '@/components/home/about.vue';
import HeroSection from '@/components/home/hero.vue';
import ProjectsSection from '@/components/home/projects.vue';
import useState from '@/utils/useState';
import TimelineSection from '@/components/home/timeline.vue';
import CollaborationSection from '@/components/home/collaboration.vue';
import Footer from '@/components/common/footer.vue';
import Header from '../../components/common/header.vue';
import SkillsSection from '../../components/home/myskill.vue';
import QuoteSection from '../../components/home/quote.vue';
import Layout from '../../components/common/layout.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export interface IDesktop {
  isDesktop: boolean;
}

gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false });
const [isDesktop, setisDesktop] = useState(true);

let timer: NodeJS.Timeout | null = null;
const DEBOUNCE_TIME = 100;

const debouncedDimensionCalculator = () => {
  clearTimeout(timer!);
  timer = setTimeout(() => {
    const isDesktopResult =
      typeof window.matchMedia('(orientation: portrait)').matches === 'undefined' && !navigator.userAgent.includes('IEMobile');

    window.history.scrollRestoration = 'manual';
    setisDesktop(isDesktopResult);
  }, DEBOUNCE_TIME);
};

onMounted(() => {
  debouncedDimensionCalculator();
  window.addEventListener('resize', debouncedDimensionCalculator);
  onUnmounted(() => {
    window.removeEventListener('resize', debouncedDimensionCalculator);
  });
});
</script>

<template>
  <Layout />
  <Header />
  <ProgressIndicator />
  <Cursor :is-desktop="isDesktop" />
  <main class="flex flex-col">
    <div class="fixed left-0 top-0 h-full w-full bg-gray-900 -z-1" />
    <HeroSection />
    <AboutSection />
    <ProjectsSection :is-desktop="isDesktop" />
    <QuoteSection />
    <SkillsSection />
    <TimelineSection :is-desktop="isDesktop" />
    <CollaborationSection />
    <Footer />
  </main>
</template>

<style scoped></style>
