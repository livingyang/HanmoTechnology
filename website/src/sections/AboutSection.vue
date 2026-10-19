<script setup lang="ts">
import SectionTitle from '../components/SectionTitle.vue'
const baseUrl = import.meta.env.BASE_URL
</script>

<template>
  <SectionTitle id="about" title="关于我们" subtitle="// ABOUT US">
    <div class="about-grid">
      <div>
        <p class="about-lead">
          汉末科技（Hanmo Technology）是一家位于深圳的独立游戏与工具研发工作室。
          我们相信好的工程实践能让创作更轻盈、更专注。
        </p>
        <p class="about-text">
          在游戏侧，我们正在开发类魂动作游戏《HanmoSekiro》，目标是把硬核动作手感与现代渲染管线结合起来。
          在工具侧，我们持续为 Unreal Engine 社区输出可复用的工具与插件，并上架到 Fab 商店。
        </p>
        <p class="about-text">
          技术栈以 Unreal Engine 5 + TypeScript 业务层（Puerts） + Vue 3 前端工程化为主，
          强调跨端一致的开发体验（桌面 + Web 同时发布）。
        </p>
      </div>

      <div class="about-aside">
        <div class="about-mascot-card">
          <img :src="`${baseUrl}mascot/mascot-body.webp`" alt="子龙哥哥" class="about-mascot-img" />
          <div class="about-mascot-cap">子龙哥哥 · 汉末主理人</div>
          <p class="about-mascot-note">从一行代码到整个三国世界，独立开发者一人包揽策划、程序与美术。</p>
        </div>
        <div class="about-stack">
          <div class="stack-card">
            <div class="stack-card-title">LOCATION</div>
            <div class="stack-card-value">深圳 · Shenzhen</div>
          </div>
          <div class="stack-card">
            <div class="stack-card-title">GAME ENGINE</div>
            <div class="stack-card-value">Unreal Engine 5.8</div>
          </div>
          <div class="stack-card">
            <div class="stack-card-title">SCRIPTING</div>
            <div class="stack-card-value">TypeScript · Puerts</div>
          </div>
          <div class="stack-card">
            <div class="stack-card-title">FRONTEND</div>
            <div class="stack-card-value">Vue 3 · Vite</div>
          </div>
        </div>
      </div>
    </div>
  </SectionTitle>
</template>