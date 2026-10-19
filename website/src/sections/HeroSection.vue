<script setup lang="ts">
import { ref } from 'vue'
import SectionTitle from '../components/SectionTitle.vue'
const baseUrl = import.meta.env.BASE_URL

const defaultImg = `${baseUrl}mascot/mascot-body.webp`
const expressions = [
  `${baseUrl}mascot/expressions/mascot-expr-surprised.webp`,
  `${baseUrl}mascot/expressions/mascot-expr-heart.webp`,
  `${baseUrl}mascot/expressions/mascot-expr-wave.webp`,
]
const mascotSrc = ref(defaultImg)
function onMascotEnter() {
  mascotSrc.value = expressions[Math.floor(Math.random() * expressions.length)]
}
function onMascotLeave() {
  mascotSrc.value = defaultImg
}
</script>

<template>
  <SectionTitle id="hero" :title="''" :subtitle="''">
    <div class="hero">
      <div class="hero-inner">
        <div class="hero-copy">
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
        <div class="hero-mascot" @mouseenter="onMascotEnter" @mouseleave="onMascotLeave">
          <img :src="mascotSrc" alt="子龙哥哥" class="hero-mascot-img" />
          <p class="hero-mascot-greet">我是子龙哥哥 · 汉末主理人</p>
        </div>
      </div>
    </div>
  </SectionTitle>
</template>