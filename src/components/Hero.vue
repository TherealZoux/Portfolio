<template>
  <header class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 to-rose-50 opacity-50" />
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      <div
        class="absolute h-[40rem] w-[40rem] -top-20 -left-20 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div
        class="absolute h-[30rem] w-[30rem] top-40 right-0 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
    </div>

    <div class="container mx-auto px-6 py-24 relative z-10 flex flex-col-reverse md:flex-row items-center gap-12">
      <div class="md:w-1/2 text-center md:text-left">
        <h1
          class="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-rose-600 text-transparent bg-clip-text">
          Moaz Mohamed
        </h1>
        <h2 class="text-3xl md:text-4xl font-bold text-zinc-700 mb-4">
          Frontend Developer
        </h2>
        <p class="text-xl md:text-2xl text-zinc-600 max-w-2xl mb-8">
          With 3+ years of experience crafting beautiful, responsive, and user-friendly web experiences.
        </p>
        <div class="flex gap-4 justify-center md:justify-start">
          <a href="https://github.com/therealzoux" target="_blank" rel="noopener noreferrer"
            class="p-2 hover:text-indigo-600 transition-colors">
            <Github :size="24" />
          </a>
          <a href="https://linkedin.com/therealzoux" target="_blank" rel="noopener noreferrer"
            class="p-2 hover:text-indigo-600 transition-colors">
            <Linkedin :size="24" />
          </a>
          <a href="https://x.com/_therealzoux" target="_blank" rel="noopener noreferrer"
            class="p-2 hover:text-indigo-600 transition-colors">
            <Twitter :size="24" />
          </a>
          <a href="mailto:moazmohamed.dev@gmail.com" class="p-2 hover:text-indigo-600 transition-colors">
            <Mail :size="24" />
          </a>
        </div>
      </div>

      <div class="md:w-1/2 flex justify-center md:justify-end">
        <div class="relative">
          <div class=" w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-white shadow-2xl">
            <img src="/src/assets/5974427765505640192.jpg" alt="Moaz's photo" class="w-full h-full object-cover" />
          </div>
          <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/10 to-transparent" />
          <div class="avatar"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Github, Linkedin, Twitter, Mail } from 'lucide-vue-next';
</script>

<style lang="css">
header {
  background: url('/src/assets/nnnoise.svg');
  background-size: cover;
  box-shadow: 0px 10px 10px #9faeff82;
}
</style>
