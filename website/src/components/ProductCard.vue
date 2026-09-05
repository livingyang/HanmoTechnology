<script setup lang="ts">
defineProps<{
  name: string
  nameEn?: string
  tagline: string
  description?: string
  tags?: string[]
  /** 链接按钮配置 */
  primaryLink?: { label: string; href: string; external?: boolean }
  secondaryLink?: { label: string; href: string; external?: boolean }
}>()
</script>

<template>
  <article class="card">
    <div v-if="nameEn" class="card-tag-row">
      <span class="tag">{{ nameEn }}</span>
    </div>

    <h3 class="card-title">{{ name }}</h3>
    <p class="card-desc">{{ tagline }}</p>

    <p v-if="description" class="card-desc" style="font-size: 13.5px;">
      {{ description }}
    </p>

    <div v-if="tags?.length" class="card-meta">
      <span v-for="t in tags" :key="t">#{{ t }}</span>
    </div>

    <div class="card-actions">
      <a
        v-if="primaryLink"
        class="card-link"
        :href="primaryLink.href"
        :target="primaryLink.external ? '_blank' : '_self'"
        rel="noopener"
      >
        {{ primaryLink.label }} →
      </a>
      <a
        v-if="secondaryLink"
        class="card-link"
        :href="secondaryLink.href"
        :target="secondaryLink.external ? '_blank' : '_self'"
        rel="noopener"
      >
        {{ secondaryLink.label }} →
      </a>
    </div>
  </article>
</template>