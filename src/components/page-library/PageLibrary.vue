<style scoped>

</style>

<template>
  <main class="responsive">

    <async-view :data="dataAllTag">
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

            <button class="small-round primary">
              <span>时间线</span>
            </button>

            <template v-for="tag in listTag" :key="tag.id">
              <button class="small-round secondary" v-if="tag.id !== 'doc'">
                <span>{{ tag.name }}</span>
                <div class="badge none">{{ tag.recordCount }}</div>
              </button>
            </template>

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
      <template #loaded="{ data } : { data: FetchedIndexingPage & IndexingPage }">
        <div>
          <ul class="list border horizontal-margin small-margin">
            <li v-for="docMeta in data.listDocMeta" @click="onClickDoc(docMeta)">
              <div class="flex-horizontal full-width middle-align">
                <i class="right-margin flex-fixed">{{ docMeta['icon'] ?? 'article' }}</i>
                <div class="no-scroll flex-dynamic right-padding small-padding"
                      style="text-overflow: ellipsis; white-space: nowrap; ">{{ docMeta.title }}</div>
                <div class="flex-fixed">

                  <div class="">
                    <span class="m l">
                      <template v-for="tag in docMeta.tags">
                        <button v-if="tag !== 'doc' && mapAllTag[tag] != null && !mapAllTag[tag].hidden"
                                class="chip small tertiary" >{{ mapAllTag[tag].name }}</button>
                      </template>
                    </span>

                    <span class="small-text grey-text">
                      {{ (docMeta as FetchedDocMeta).textCreateTimestamp }}
                    </span>
                  </div>
                </div>
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

import {dataAllTag, mapAllTag, dataTimelineIndexingPage0, TagInfo} from '@/data/data-store.ts'
import {computed} from 'vue'
import AsyncView from '../async-view/AsyncView.vue'
import {TagData} from '@firok-arc-project/arc-centrifuge/src/types/tag-data-def'
import {IndexingPage} from '@firok-arc-project/arc-centrifuge/src/types/indexing-data-def'
import PaginationView from '@/components/pagination-view/PaginationView.vue'
import {FetchedDocMeta, FetchedIndexingPage} from '@firok-arc-project/arc-connector/src/connector-def'
import {useRouter} from 'vue-router'
import {DocMeta} from '@firok-arc-project/arc-centrifuge/src/types/doc-meta-def'

const dataTimeline0recordCount = computed(() => {
  const data = dataTimelineIndexingPage0.value.data as IndexingPage & FetchedIndexingPage
  return data.recordCount
})
const listTag = computed(() => {
  let tagDoc: TagInfo = null
  let tagTech: TagInfo = null
  const list: TagInfo[] = []
  for(const tag of (dataAllTag.value.data ?? []))
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

const router = useRouter()
async function onClickDoc(docMeta: FetchedDocMeta & DocMeta): void
{
  const docId = docMeta.id
  await router.push({
    name: 'document',
    params: {
      docId,
    },
  })
}


</script>
