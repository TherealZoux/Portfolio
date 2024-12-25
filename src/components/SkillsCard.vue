<template>
  <div class="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div class="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
      <component :is="props.category.icon" class="w-6 h-6" />
    </div>
    <h3 class="text-xl font-bold mb-4">{{ props.category.title }}</h3>
    <div class="flex flex-wrap gap-2">
      <span v-for="(skill, i) in props.category.skills" :key="i" class="px-3 py-1 bg-zinc-100 rounded-full text-sm">
        {{ skill }}
      </span>
    </div>
  </div>
</template>

<script setup>


const props = defineProps({
  category: { type: Object }
});
</script>

<style lang="scss" scoped></style>
