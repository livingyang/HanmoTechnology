<script setup lang="ts">
import SectionTitle from '../components/SectionTitle.vue'
import ProductCard from '../components/ProductCard.vue'
</script>

<template>
  <SectionTitle id="products" title="产品" subtitle="// PRODUCTS · ON FAB">
    <div class="cards-grid">
      <ProductCard
        name="智能导航组件 SmartNavigationWidget"
        name-en="Smart Navigation Widget"
        tagline="UE5 智能导航可视化与调试插件"
        description="为 AI / 关卡设计师提供运行时导航网格可视化、路径预览与断点调试，覆盖 5.0 ~ 5.8 多版本。"
        :tags="['UE5', 'AI', 'NavMesh', 'Fab']"
        :primary-link="{
          label: '前往 Fab',
          href: 'https://www.fab.com/listings/xxxx',
          external: true,
        }"
        :secondary-link="{
          label: '查看源码',
          href: 'https://github.com/livingyang/SmartNavigationWidget',
          external: true,
        }"
      />

      <ProductCard
        name="Puerts Web 集成方案"
        name-en="Puerts Web Bridge"
        tagline="UE5 ↔ Vue3 ↔ WebBrowser 双工通信"
        description="基于 UE CefBrowser 承载 Vue 3 前端，UE 业务层用 Puerts (TypeScript) 编写，无需 WebSocket 服务器。"
        :tags="['UE5', 'Puerts', 'Vue3', 'Web']"
        :primary-link="{
          label: '查看文章',
          href: '#',
          external: false,
        }"
      />
    </div>
  </SectionTitle>
</template>