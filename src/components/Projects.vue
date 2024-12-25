<template>
  <section class="py-24 projects" id="projects">
    <div class="container mx-auto px-6">
      <h2 class=" main-title text-3xl font-bold mb-12">Featured Projects</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <ProjectCard v-for="(project, index) in projects" :project="project" :key="index" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue"
const projects = [
  {
    title: "Vue-Commerce",
    description: "A modern e-commerce solution built with Vue and Javascript",
    image: "src/assets/ecommerce.png",
    tech: ["Vue", "JavaScript", "Tailwind", "PrimeVue", "Pinia"]
  },
  {
    title: "SpodCast",
    description: "Podcast platform integrated with Spotify API ",
    image: "src/assets/Spodcast.png",
    tech: ["Vue", "Javascript", "Api Integration(SpotifyAPI)", "Axios", "Tailwind", "Vuex", "Vuetify"]
  },
  {
    title: "My portfolio",
    description: "Modern, Minimal, and styled Portfolio, as you can see now ^^ ",
    image: "src/assets/portfolio.png",
    tech: ["Vue", "Javascript", "Tailwind", "PrimeVue"]
  },
  {
    title: "Zoux",
    description: "A ful-native project to recap of HTML, CSS, JS ",
    image: "src/assets/Zoux.png",
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
