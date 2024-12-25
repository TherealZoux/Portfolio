<template>
  <section class="py-24 bg-zinc-50" id="skills">
    <div class="container mx-auto px-6">
      <h2 class="main-title text-3xl font-bold mb-12">Skills & Expertise</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <SkillsCard v-for="(category, index) in categories" :key="index" :category="category" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SkillsCard from "./Atoms/SkillsCard.vue"

import { Layout, Code2, Database } from 'lucide-vue-next';

const categories = [
  {
    icon: Layout,
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "Vuejs", "Tailwind CSS", "Primevue", "Vuetify", "Vuex", "Pinia", "Axios"]
  },
  {
    icon: Code2,
    title: "Languages",
    skills: ["JavaScript(Nodejs/Express)", "C++", "Java", "C", "Php", "Python"]
  },
  {
    icon: Database,
    title: "Other Tools",
    skills: ["Git", "GitHub", "REST APIs", "Figma", "Postman", "MongoDB"]
  }
];</script>
<style lang="css">
#skills {
  position: relative;
  background: url("/src/assets/rrreflection.svg");
}

#skills::before {
  content: "";
  position: absolute;
  background: url("/src/assets/nnnoise.svg");
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0.3;
}
</style>
