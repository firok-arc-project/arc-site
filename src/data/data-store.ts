
import {computed, ComputedRef, type Ref, ref} from 'vue'
import {buildAsync, loadAsync} from '@/data/async-data.ts'
import type {AsyncData} from '@/data/async-data-def'
import {AjaxConnector} from '@firok-arc-project/arc-connector/dist/ajax-connector'
import {TagData} from '@firok-arc-project/arc-centrifuge/src/types/tag-data-def'
import {FetchedIndexingPage} from '@firok-arc-project/arc-connector/src/connector-def'
import {TagMap} from '@firok-arc-project/arc-centrifuge/dist/tag/tags'

export interface TagInfo extends TagData
{
  pageCount: number
  recordCount: number
}
export const dataAllTag: Ref<AsyncData<TagInfo[]>> = ref(buildAsync())
export const dataTimelineIndexingPage0: Ref<AsyncData<FetchedIndexingPage>> = ref(buildAsync())

export const mapAllTag: ComputedRef<Record<string, TagInfo>> = computed(() => {
  if(dataAllTag.value.status === 'loaded')
  {
    return dataAllTag.value.data.reduce((acc, cur) => {
      acc[cur.id] = cur
      return acc
    }, {} as Record<string, TagInfo>)
  }
  else return {}
})

// export const isLoadingData = computed(() => {
//   return dataAllTag.value.status === 'loading'
// })

export const ajaxBaseUrlMeta: string = import.meta.env.VITE_DATA_BASE_URL_META
export const ajaxBaseUrlDoc: string = import.meta.env.VITE_DATA_BASE_URL_DOC
export const ajax = new AjaxConnector(ajaxBaseUrlMeta, ajaxBaseUrlDoc)
export async function triggerLoadData()
{
  loadAsync(dataAllTag, async () => {
    return (await ajax.getAllTag()) as TagMap
  }).finally(() => {})
  loadAsync(dataTimelineIndexingPage0, async () => {
    return (await ajax.getTimelineIndexingPage(0))
  }).finally(() => {})
}
