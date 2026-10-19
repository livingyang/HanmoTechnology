<script setup lang="ts">
const year = new Date().getFullYear()
const baseUrl = import.meta.env.BASE_URL
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer-inner">
      <div class="site-footer-brand">
        <img :src="`${baseUrl}mascot/mascot-avatar.webp`" alt="子龙哥哥" class="footer-mascot" />
        <span>© {{ year }} 深圳市汉末科技有限公司 · Hanmo Technology Co., Ltd.</span>
      </div>
      <div>
        <a href="mailto:hanmotech@agent.qq.com">hanmotech@agent.qq.com</a>
      </div>
    </div>
  </footer>
</template>