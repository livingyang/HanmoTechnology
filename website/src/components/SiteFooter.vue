<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer-inner">
      <div>
        © {{ year }} 深圳市汉末科技有限公司 · Hanmo Technology Co., Ltd.
      </div>
      <div>
        <a href="https://github.com/livingyang/HanmoTechnology" target="_blank" rel="noopener">
          GitHub
        </a>
        ·
        <a href="mailto:lhm.cold@163.com">lhm.cold@163.com</a>
      </div>
    </div>
  </footer>
</template>