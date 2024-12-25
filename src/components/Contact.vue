<template>
  <section class="py-24 bg-white" id="contact">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-6">Let's Work Together</h2>
      <p class="text-xl text-zinc-600 mb-8 max-w-2xl mx-auto">
        I'm always interested in hearing about new projects and opportunities.
      </p>
      <a href="mailto:moazmohamed.dev@gmail.com"
        class="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
        <Mail class="w-5 h-5" />
        Get in Touch
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail } from 'lucide-vue-next';
</script>
