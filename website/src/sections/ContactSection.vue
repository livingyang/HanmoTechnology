<script setup lang="ts">
import SectionTitle from '../components/SectionTitle.vue'

interface ContactItem {
  label: string
  value: string
  href: string
  external?: boolean
}

const contacts: ContactItem[] = [
  {
    label: 'EMAIL',
    value: 'lhm.cold@163.com',
    href: 'mailto:lhm.cold@163.com',
  },
  {
    label: 'GITHUB',
    value: 'github.com/livingyang',
    href: 'https://github.com/livingyang',
    external: true,
  },
  {
    label: 'COMPANY SITE',
    value: 'livingyang.github.io/HanmoTechnology',
    href: '#hero',
  },
  {
    label: 'LOCATION',
    value: '深圳 · Shenzhen, China',
    href: '#',
  },
]
</script>

<template>
  <SectionTitle id="contact" title="联系" subtitle="// CONTACT">
    <p class="about-text" style="margin-bottom: 24px;">
      欢迎联系合作、咨询工具定制，或加入我们的社区一起成长。
    </p>

    <div class="contact-grid">
      <a
        v-for="c in contacts"
        :key="c.label"
        :href="c.href"
        :target="c.external ? '_blank' : '_self'"
        rel="noopener"
        class="contact-card"
      >
        <span class="contact-label">{{ c.label }}</span>
        <span class="contact-value">{{ c.value }}</span>
      </a>
    </div>
  </SectionTitle>
</template>