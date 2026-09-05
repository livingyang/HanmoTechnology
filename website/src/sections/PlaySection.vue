<script setup lang="ts">
import SectionTitle from '../components/SectionTitle.vue'
import DemoCard from '../components/DemoCard.vue'
import { products } from '../data/products'
</script>

<template>
  <SectionTitle id="play" title="试玩" subtitle="// PLAY · WEB DEMOS">
    <p v-if="products.length === 0" class="play-empty">
      暂无试玩产品。注册新 demo 请参考仓库内的 DEMO-HOSTING.md。
    </p>

    <div v-else class="play-grid">
      <DemoCard
        v-for="p in products"
        :key="p.slug"
        :product="p"
      />
    </div>
  </SectionTitle>
</template>