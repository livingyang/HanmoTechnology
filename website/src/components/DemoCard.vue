<script setup lang="ts">
import { ref } from 'vue'
import type { ProductEntry } from '../data/products'
import { demoSrc, demoThumbSrc } from '../data/products'

const props = defineProps<{
  product: ProductEntry
}>()

const embed = ref(false)
const imgError = ref(false)

function toggleEmbed() {
  embed.value = !embed.value
}
</script>

<template>
  <article class="demo-card">
    <div class="demo-thumb-wrap">
      <img
        v-if="!embed && !imgError"
        :src="demoThumbSrc(props.product.thumbnail)"
        :alt="props.product.name"
        class="demo-thumb"
        @error="imgError = true"
      />
      <span v-else-if="!embed && imgError" class="demo-thumb-fallback">
        {{ props.product.nameEn }} · {{ props.product.thumbnail }}
      </span>

      <iframe
        v-if="embed && props.product.embeddable"
        :src="demoSrc(props.product.entry)"
        :sandbox="props.product.sandbox || 'allow-scripts allow-same-origin allow-popups allow-forms'"
        class="demo-embed"
        loading="lazy"
        referrerpolicy="no-referrer"
        :title="`试玩 — ${props.product.name}`"
      ></iframe>
    </div>

    <div class="demo-body">
      <div class="demo-title-row">
        <h3 class="demo-title">{{ props.product.name }}</h3>
        <span class="demo-version">v{{ props.product.version }}</span>
      </div>

      <p class="demo-desc">{{ props.product.tagline }}</p>

      <div v-if="props.product.tags?.length" class="demo-tags">
        <span v-for="t in props.product.tags" :key="t" class="tag">{{ t }}</span>
      </div>

      <div class="demo-actions">
        <button
          v-if="props.product.embeddable"
          class="btn btn-primary"
          @click="toggleEmbed"
        >
          {{ embed ? '收起试玩' : '▶ 直接试玩' }}
        </button>
        <a
          class="btn btn-secondary"
          :href="demoSrc(props.product.entry)"
          target="_blank"
          rel="noopener"
        >
          新窗口打开
        </a>
        <a
          v-if="props.product.homepage"
          class="btn btn-secondary"
          :href="props.product.homepage"
          target="_blank"
          rel="noopener"
        >
          源码
        </a>
      </div>
    </div>
  </article>
</template>