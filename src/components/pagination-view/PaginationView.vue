<style scoped>

</style>

<template>
  <div class="flex-horizontal full-width middle-align">
    <div class="flex-dynamic m l"></div>

    <div class="flex-fixed horizontal-margin small-margin s">
      第 {{ pageIndex + 1 }} 页
    </div>
    <div class="flex-fixed horizontal-margin m l">
      第 {{ indexStart }} ~ {{ indexEnd }} 篇 (共 {{ recordCount }} 篇)
    </div>

    <div class="flex-dynamic s"></div>

    <div class="flex-fixed">
      <button class="circle transparent" :disabled="!hasFirst" @click="emits('click-first')">
        <i>first_page</i>
      </button>

      <button class="circle transparent" :disabled="!hasPrev" @click="emits('click-prev')">
        <i>keyboard_arrow_left</i>
      </button>

      <button class="circle transparent" :disabled="!hasNext" @click="emits('click-next')">
        <i>keyboard_arrow_right</i>
      </button>

      <button class="circle transparent" :disabled="!hasLast" @click="emits('click-last')">
        <i>last_page</i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

import {computed, defineProps} from 'vue'
import {IndexingPage} from '@firok-arc-project/arc-centrifuge/src/types/indexing-data-def'

const props = defineProps<{
  data: IndexingPage,
}>()

const emits = defineEmits([
    'click-first',
    'click-last',
    'click-prev',
    'click-next',
])

const pageCount = computed(() => {
  return props.data.pageCount
})
const pageIndex = computed(() => {
  return props.data.pageIndex
})
const recordCount = computed(() => {
  return props.data.recordCount
})
const indexStart = computed(() => {
  return (pageIndex.value) * pageCount.value + 1
})
const indexEnd = computed(() => {
  return indexStart.value + (props.data.listDocMeta?.length ?? 0)
})

const hasPrev = computed(() => {
  return pageIndex.value > 0
})
const hasNext = computed(() => {
  return pageIndex.value < pageCount.value - 1
})
const hasFirst = computed(() => {
  return pageIndex.value > 0
})
const hasLast = computed(() => {
  return pageIndex.value < pageCount.value - 1
})

</script>
