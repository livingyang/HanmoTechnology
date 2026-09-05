<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
import HeroSection from './sections/HeroSection.vue'
import AboutSection from './sections/AboutSection.vue'
import ProductsSection from './sections/ProductsSection.vue'
import ProjectsSection from './sections/ProjectsSection.vue'
import PlaySection from './sections/PlaySection.vue'
import ContactSection from './sections/ContactSection.vue'
</script>

<template>
  <div class="layout">
    <NavBar />
    <main class="content">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ProjectsSection />
      <PlaySection />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
</template>