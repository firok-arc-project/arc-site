
import {computed, type Ref, ref} from 'vue'
import {buildAsync} from '@/data/async-data.ts'
import type {AsyncData} from '@/data/async-data-def'

const dataMeta: Ref<AsyncData<any>> = ref(buildAsync())

const isLoadingData = computed(() => {
  return dataMeta.value.status === 'loading'
})
