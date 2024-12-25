<template>
  <div class=" main min-h-screen bg-zinc-50 text-zinc-900">
    <Hero />
    <Skills />
    <Projects />

    <Contact />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Hero from './components/Hero.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
</script>

<style lang="css">
.main-title {
  background: #fff;
  width: fit-content;
  padding: 0.5rem;
  border-left: 4px solid #6b6dece5;
}
</style>
