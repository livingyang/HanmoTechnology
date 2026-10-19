<script setup lang="ts">
import SectionTitle from '../components/SectionTitle.vue'
import ProductCard from '../components/ProductCard.vue'
</script>

<template>
  <SectionTitle id="released" title="已上线游戏" subtitle="// RELEASED · NOW ON STEAM">
    <div class="cards-grid">
      <ProductCard
        class="card-featured"
        name="三国兄弟"
        name-en="Bro Sanguo"
        badge="● 已上线 Steam"
        tagline="三国题材 · 吸血鬼幸存者类 · 已上线"
        description="三国题材吸血鬼幸存者类游戏，已正式登陆 Steam。操控三国武将，在乱世洪流中存活、升级并壮大阵营。"
        :tags="['幸存者类', '三国']"
        :primary-link="{
          label: '在 Steam 查看',
          href: 'https://store.steampowered.com/app/2395660',
          external: true,
        }"
      />
    </div>
  </SectionTitle>
</template>
