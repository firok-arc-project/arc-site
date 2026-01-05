import type {TagData} from '@firok-arc-project/arc-centrifuge/src/types/tag-data-def'
import type {TagIndexingPage} from '@firok-arc-project/arc-centrifuge/src/types/tag-indexing-def'
import type {DocMeta} from '@firok-arc-project/arc-centrifuge/src/types/doc-meta-def'

export async function loadAllTag(): Promise<TagData[]>
{
  return []
}

export async function loadTagIndexing(
  tagId: string, pageIndex: number
): Promise<TagIndexingPage>
{
  return {}
}

export async function loadTimelineIndexing(
  pageIndex: number
): Promise<DocMeta[]>
{
  return []
}
