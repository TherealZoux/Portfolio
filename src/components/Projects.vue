<template>
  <section class="py-24 projects" id="projects">
    <div class="container mx-auto px-6">
      <h2 class=" main-title text-3xl font-bold mb-12">Featured Projects</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <ProjectCard v-for="(project, index) in projects" :project="project" :src="project.image" :key="index" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ecommerceImage from "/src/assets/ecommerce.png"
import spodCastImage from "/src/assets/Spodcast.png"
import portfolioImage from "/src/assets/portfolio.png"
import zouxImage from "/src/assets/Zoux.png"

import ProjectCard from "./ProjectCard.vue"
const projects = [
  {
    title: "Vue-Commerce",
    description: "A modern e-commerce solution built with Vue and Javascript",
    image: ecommerceImage,
    tech: ["Vue", "JavaScript", "Tailwind", "PrimeVue", "Pinia"]
  },
  {
    title: "SpodCast",
    description: "Podcast platform integrated with Spotify API ",
    image: spodCastImage,
    tech: ["Vue", "Javascript", "Api Integration(SpotifyAPI)", "Axios", "Tailwind", "Vuex", "Vuetify"]
  },
  {
    title: "My portfolio",
    description: "Modern, Minimal, and styled Portfolio, as you can see now ^^ ",
    image: portfolioImage,
    tech: ["Vue", "Javascript", "Tailwind", "PrimeVue"]
  },
  {
    title: "Zoux",
    description: "A ful-native project to recap of HTML, CSS, JS ",
    image: zouxImage,
    tech: ["HTML", "CSS", "Javascript",]
  }

];
</script>
<style lang="css">
.projects {
  background: url("/src/assets/ssscribble.svg");
  position: relative;
}

.projects::before {
  content: "";
  position: absolute;
  background: url("/src/assets/nnnoise.svg");
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0.3;

}
</style>
