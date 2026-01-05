<style scoped>

</style>

<template>
  <div class="max">
    <a class="circle large vertical" :class="active ? 'white-text active' : 'inverse-primary-text'">
      <i>{{ icon }}</i>
      <div>{{ text }}</div>
    </a>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  icon: string,
  text: string,
  active?: boolean,
}>()

</script>
