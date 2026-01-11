import type {AsyncData} from '@/data/async-data-def'
import type {Ref} from 'vue'
import {guid} from 'beercss/src/cdn/utils.ts'

export function buildAsync<TypeEntity>(): AsyncData<TypeEntity>
{
  return {
    requestId: null,
    status: 'loading',
    data: null,
    error: null,
  }
}

export async function loadAsync<TypeEntity>(
  ref: Ref<AsyncData<TypeEntity>>,
  func: () => Promise<TypeEntity>,
): Promise<void>
{
  if(ref.value.requestId != null && ref.value.status === 'loading')
    return

  const requestId = guid()
  ref.value = {
    requestId,
    status: 'loading',
    data: null,
    error: null,
  }

  try
  {
    const value = await func()

    if(ref.value.requestId !== requestId)
      return

    ref.value = {
      requestId,
      status: 'loaded',
      data: value,
      error: null,
    }
  }
  catch(any)
  {
    console.error(any)

    if(ref.value.requestId !== requestId)
      return

    ref.value = {
      requestId,
      status: 'failed',
      data: null,
      error: any,
    }
  }
}
