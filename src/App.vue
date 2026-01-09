
<style scoped>

</style>

<template>
  <div class="full flex-vertical">
<!--    <progress value="100" max="100" class="indeterminate"></progress>-->
    <RouterView class="flex-dynamic scroll" />
    <bottom-nav class="flex-fixed"/>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {onMounted, onUpdated, ref} from 'vue'
import BottomNav from '@/components/bottom-nav/BottomNav.vue'
import {triggerLoadData} from '@/data/data-store.ts'

onMounted(() => {
  triggerLoadData()
})
onUpdated(() => {
  triggerLoadData()
})

</script>
