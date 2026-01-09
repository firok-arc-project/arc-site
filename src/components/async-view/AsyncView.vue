<style scoped>

</style>

<template>
  <template v-if="(force ?? data.status) === 'loading'">
    <slot name="loading"></slot>
  </template>
  <template v-else-if="(force ?? data.status) === 'loaded'">
    <slot name="loaded" :data="data.data"></slot>
  </template>
  <template v-else-if="(force ?? data.status) === 'failed'">
    <slot name="failed" :error="data.error"></slot>
  </template>
</template>

<script setup lang="ts">
import {defineProps, Ref} from 'vue'
import {AsyncData, AsyncStatus} from '@/data/async-data-def'

type ComponentProps<T = any> = {
  data: AsyncData<T>,
  force?: AsyncStatus,
}

const props = defineProps<ComponentProps>()
</script>

