<style scoped>

</style>

<template>
  <main class="responsive">

    <async-view :data="dataAllTag" force="loading">
      <template #loading>

        <div class="center-align">
          <div>
            <!--        <progress class="circle"></progress>-->
            <div class="shape loading-indicator tiny center"></div>
            <div class="tiny-space"></div>
            <div class="secondary-text">
              加载文章标签
            </div>
          </div>
        </div>

      </template>

      <template #loaded="{ data } : { data: TagInfo[] }" >
        <div class="row">
          <div class="s12 m12 l12">
            <button v-for="tag in data"
                    class="small-round secondary" >
              <span>{{ tag.name }}</span>
              <div class="badge none">{{ tag.recordCount }}</div>
            </button>

          </div>
        </div>
      </template>

      <template #failed>
        <div>
          加载失败
        </div>
      </template>
    </async-view>

    <div class="tiny-space"></div>
    <hr>
    <div class="tiny-space"></div>

    <async-view :data="dataTimelineIndexingPage0">
      <template #loading>
        <div class="center-align middle-align small-height">
          <div>
            <div class="shape loading-indicator tiny center"></div>
            <div class="tiny-space"></div>
            <div class="secondary-text">
              加载近期文章
            </div>
          </div>

        </div>
      </template>
      <template #loaded="{ data } : { data: IndexingPage }">
        <div>
          <ul class="list border horizontal-margin small-margin">
            <li v-for="docMeta in data.listDocMeta">
              <div class="flex-horizontal full-width">
                <i class="right-margin flex-fixed">{{ docMeta['icon'] ?? 'article' }}</i>
                <div class="no-scroll flex-dynamic"
                      style="text-overflow: ellipsis; white-space: nowrap; ">{{ docMeta.title }}</div>
              </div>
              <div class="right-align">

              </div>
            </li>
          </ul>

          <div class="tiny-space"></div>
          <hr>
          <div class="tiny-space"></div>

          <pagination-view :data="data"/>
        </div>
      </template>
      <template #failed>
        <div>
          加载失败
        </div>
      </template>
    </async-view>

  </main>

</template>

<script setup lang="ts">

import {dataAllTag, dataTimelineIndexingPage0, TagInfo} from '@/data/data-store.ts'
import {computed} from 'vue'
import AsyncView from '../async-view/AsyncView.vue'
import {TagData} from '@firok-arc-project/arc-centrifuge/src/types/tag-data-def'
import {IndexingPage} from '@firok-arc-project/arc-centrifuge/src/types/indexing-data-def'
import PaginationView from '@/components/pagination-view/PaginationView.vue'

const listTag = computed(() => {
  let tagDoc: TagInfo = null
  let tagTech: TagInfo = null
  const list: TagInfo[] = []
  for(const tag of dataAllTag.value.data)
  {
    if(tag.id === 'doc')
      tagDoc = tag
    else if(tag.id === 'tech')
      tagTech = tag
    else
      list.push(tag)
  }

  return [
      tagDoc,
      tagTech,
      ...list,
  ]
})

</script>
