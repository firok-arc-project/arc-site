<style scoped>

</style>

<template>

  <div>
    <async-view :data="dataDocData">
      <template #loading>
        <div class="center-align middle-align">
          <progress class="circle"></progress>
        </div>
      </template>

      <template #loaded="{ data } : { data: DocData }">
        <div>
          <div>
            {{ data.docMeta }}
          </div>

          <marked-area :content="data.docContent ?? 'empty'" safe>
          </marked-area>
        </div>
      </template>

      <template #failed="{ error }">
        <div class="center-align middle-align full">
          <div class="">
            <div class="error-text">
              <i class="large">error</i>
            </div>
            <div class="error-text large-text">
              加载失败
            </div>
            <div class="error-text">
              请刷新或稍后重试
            </div>
            <div class="grey-text small-text">
              {{ error }}
            </div>
          </div>
        </div>
      </template>
    </async-view>
  </div>

</template>

<script setup lang="ts">

import {onMounted, ref, watch} from 'vue'
import {AsyncData} from '@/data/async-data-def'
import {DocMeta} from '@firok-arc-project/arc-centrifuge/src/types/doc-meta-def'
import {FetchedDocMeta} from '@firok-arc-project/arc-connector/src/connector-def'
import {useRoute, useRouter} from 'vue-router'
import { ajax, ajaxBaseUrlDoc, } from '../../data/data-store.js'
import {buildAsync, loadAsync} from '@/data/async-data.ts'
import AsyncView from '@/components/async-view/AsyncView.vue'
import {MarkedArea} from 'mosoul/src/components/marked-area/marked-area.ts'
import { default as matter } from 'gray-matter'

interface DocData
{
  docMeta: FetchedDocMeta & DocMeta
  docContent: string
  docPath: URL
}
const dataDocData = ref<AsyncData<DocData>>(buildAsync())

async function loadDoc(docId: string | null)
{
  await loadAsync(
      dataDocData,
      async () => {
        const docMeta = await ajax.getDocIndexing(docId) as FetchedDocMeta & DocMeta
        const docContent = await ajax.getDocContent(docMeta)

        const mf: matter.GrayMatterFile<DocMeta> = matter(docContent)

        const pathBase = `${location.protocol}//${location.host}${ajaxBaseUrlDoc}`
        const docPath = new URL(docMeta.pathRelative, pathBase)

        return {
          docMeta: mf.data,
          docContent: mf.content,
          docPath,
        }
      },
  )
}

const route = useRoute()
const router = useRouter()
watch(
    () => route.params.docId as string | null,
    (docId: string) => {
      loadDoc(docId).finally(() => {})
    },
    { immediate: true, },
)


</script>
