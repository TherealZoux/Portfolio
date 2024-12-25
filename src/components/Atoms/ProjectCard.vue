<template>
  <div class="group box relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    <img :src="props.project.image" :alt="props.project.title" class="w-full h-64 object-cover" />
    <div
      class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform">
      <h3 class="text-xl font-bold text-white mb-2">{{ props.project.title }}</h3>
      <p class="text-zinc-200 mb-4">{{ props.project.description }}</p>
      <div class="flex gap-2 flex-wrap">
        <span v-for="(tech, i) in props.project.tech" :key="i"
          class="px-3   py-1 bg-white/10 rounded-full text-sm text-white">
          {{ tech }}
        </span>
      </div>
      <ExternalLink class="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  </div>

</template>

<script setup>
import { ExternalLink } from 'lucide-vue-next';

const props = defineProps({
  project: { type: Object }
});
</script>

<style lang="css" scoped>
.box {
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

}

.box img {
  transition: transform 1s ease, opacity 1.2s ease;
}

.box:hover img {
  transform: scale(1.2);
  opacity: 0.5;
}
</style>
