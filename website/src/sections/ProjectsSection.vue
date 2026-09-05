<script setup lang="ts">
import SectionTitle from '../components/SectionTitle.vue'
import ProductCard from '../components/ProductCard.vue'
</script>

<template>
  <SectionTitle id="projects" title="项目" subtitle="// PROJECTS · IN DEVELOPMENT">
    <div class="cards-grid">
      <ProductCard
        name="HanmoSekiro"
        name-en="Hanmo Sekiro"
        tagline="类魂/动作游戏 · 开发中"
        description="UE 5.8 类魂动作游戏，主角 Aurora 为冰系魔法剑士；Boris 作为大型熊怪 boss 拥有完整四组普攻动画集与连招。Puerts (TS) 承担业务逻辑层，UE C++ 只在 adapter 出现。"
        :tags="['UE 5.8', 'Puerts', 'Action', 'Souls-like']"
        :primary-link="{
          label: '了解更多',
          href: '#contact',
          external: false,
        }"
        :secondary-link="{
          label: '开发日志',
          href: '#',
          external: false,
        }"
      />

      <ProductCard
        name="HanmoIdleMMO"
        name-en="Hanmo Idle MMO"
        tagline="放置类 MMO 单机版 · 试玩已上线"
        description="Vue3 + Vite + TypeScript 双形态应用（桌面 Electron + Web）。已接入 Hub /play 板块，可在线试玩。"
        :tags="['Vue3', 'Vite', 'Idle', 'MMO']"
        :primary-link="{
          label: '▶ 立即试玩',
          href: '#play',
          external: false,
        }"
        :secondary-link="{
          label: '查看源码',
          href: 'https://github.com/livingyang/HanmoIdleMMO',
          external: true,
        }"
      />
    </div>
  </SectionTitle>
</template>