<style scoped>

</style>

<template>
  <template v-if="true">
    <div class="center-align middle-align">
      <div>
<!--        <progress class="circle"></progress>-->
        <div class="shape loading-indicator tiny center"></div>
        <div class="tiny-space"></div>
        <div class="secondary-text">
          正在加载索引数据
        </div>
      </div>

    </div>
  </template>
  <template v-else>
    <div>
      page library
    </div>
  </template>

</template>

<script setup lang="ts">

</script>
