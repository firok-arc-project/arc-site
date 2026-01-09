
import {computed, ComputedRef, type Ref, ref} from 'vue'
import {buildAsync, loadAsync} from '@/data/async-data.ts'
import type {AsyncData} from '@/data/async-data-def'
import {AjaxConnector} from '@firok-arc-project/arc-connector/dist/ajax-connector'
import {TagData} from '@firok-arc-project/arc-centrifuge/src/types/tag-data-def'
import {IndexingPage, IndexingPageMeta} from '@firok-arc-project/arc-centrifuge/src/types/indexing-data-def'

export interface TagInfo extends TagData
{
  pageCount: number
  recordCount: number
}
export const dataAllTag: Ref<AsyncData<TagInfo[]>> = ref(buildAsync())
export const dataTimelineIndexingPage0: Ref<AsyncData<IndexingPage>> = ref(buildAsync())

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

const ajaxBaseUrl: string = import.meta.env.VITE_DATA_BASE_URL
const ajax = new AjaxConnector(ajaxBaseUrl)
export async function triggerLoadData()
{
  loadAsync(dataAllTag, async () => {
    return (await ajax.getAllTag()) as TagInfo[]
  }).finally(() => {})
  loadAsync(dataTimelineIndexingPage0, async () => {
    return (await ajax.getTimelineIndexingPage(0))
  }).finally(() => {})
}
