<style scoped>

</style>

<template>
  <footer class="primary">
    <nav class="flex-horizontal full-width center-align">

      <nav-link icon="account_balance" text="大厅" :active="isHomepageActive" @click="go('homepage')" />

      <nav-link icon="library_books" text="档案馆" :active="isLibraryActive" @click="go('library')" />

      <nav-link icon="anchor" text="港口" :active="isPortActive" @click="go('port')" />

    </nav>
  </footer>
</template>

<script setup lang="ts">

import {useRoute, useRouter} from 'vue-router'
import {computed} from 'vue'
import NavLink from '@/components/bottom-nav/NavLink.vue'

const route = useRoute()
const router = useRouter()

declare type NavType = 'homepage' | 'library' | 'port'
async function go(type: NavType): Promise<void>
{
  await router.push({
    name: type,
  })
}

const isHomepageActive = computed(() => route.path === '/')
const isLibraryActive = computed(() => route.path === '/library') // todo
const isPortActive = computed(() => route.path === '/port')

</script>
