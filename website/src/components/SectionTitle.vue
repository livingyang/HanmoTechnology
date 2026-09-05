<script setup lang="ts">
defineProps<{
  id: string
  title: string
  subtitle?: string
}>()
</script>

<template>
  <section :id="id" class="section">
    <div class="container">
      <h2 class="section-title">{{ title }}</h2>
      <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
      <slot />
    </div>
  </section>
</template>