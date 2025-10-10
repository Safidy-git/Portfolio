<template>
  <div class="app">
    <Navigation />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<style scoped>
.app {
  width: 100%;
  position: relative;
}
</style>
