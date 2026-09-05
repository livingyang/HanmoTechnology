<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const baseUrl = import.meta.env.BASE_URL

const open = ref(false)
const scrolled = ref(false)

function toggle() {
  open.value = !open.value
}

function close() {
  open.value = false
}

function onScroll() {
  scrolled.value = window.scrollY > 4
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

const links = [
  { id: 'about', label: '关于' },
  { id: 'products', label: '产品' },
  { id: 'projects', label: '项目' },
  { id: 'play', label: '试玩' },
  { id: 'contact', label: '联系' },
]

function go(id: string) {
  close()
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="navbar" :class="{ 'navbar-scrolled': scrolled }">
    <div class="container navbar-inner">
      <a href="#hero" class="navbar-brand" @click.prevent="go('hero')">
        <img :src="`${baseUrl}logo.png`" alt="Hanmo" class="logo" />
        <span class="brand-cn">汉末科技</span>
        <span class="brand-en">Hanmo</span>
      </a>

      <nav class="navbar-links" aria-label="主导航">
        <a
          v-for="l in links"
          :key="l.id"
          :href="`#${l.id}`"
          class="navbar-link"
          @click.prevent="go(l.id)"
        >
          {{ l.label }}
        </a>
      </nav>
    </div>
  </header>
</template>