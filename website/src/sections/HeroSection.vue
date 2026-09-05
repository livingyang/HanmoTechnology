<script setup lang="ts">
import SectionTitle from '../components/SectionTitle.vue'
</script>

<template>
  <SectionTitle id="hero" :title="''" :subtitle="''">
    <div class="hero">
      <span class="hero-tag">UE5 · GAMES · TOOLS</span>
      <h1 class="hero-title">
        <span class="hero-title-cn">深圳市汉末科技有限公司</span>
        <span class="hero-title-en">Shenzhen Hanmo Technology Co., Ltd.</span>
      </h1>
      <p class="hero-subtitle">
        独立开发者工作室，专注 Unreal Engine 5 游戏研发与工具链建设。
        在这里用代码构筑世界，用工具提升效率。
      </p>
      <div class="hero-actions">
        <a href="#play" class="btn btn-primary">▶ 进入试玩</a>
        <a href="#projects" class="btn btn-secondary">查看项目</a>
        <a href="#contact" class="btn btn-secondary">联系合作</a>
      </div>
    </div>
  </SectionTitle>
</template>