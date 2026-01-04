
<style scoped>

</style>

<template>
  <div class="full flex-vertical">
    <div class="flex-dynamic">

      <RouterView />
    </div>

    <footer class="primary flex-fixed center-align">
      <nav>
        <button class="circle large vertical">
          <i>account_balance</i>
          <div>大厅</div>
        </button>
        <a class="vertical">
          <i>library_books</i>
          <div>档案馆</div>
        </a>
        <a class="vertical">
          <i>anchor</i>
          <div>港口</div>
        </a>
      </nav>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const name = ref('Unknown')

</script>
