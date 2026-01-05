
export declare type AsyncStatus =
  'loading' |
  'loaded' |
  'failed'

export declare interface AsyncData<TypeEntity>
{
  requestId: string | null
  status: AsyncStatus
  data: TypeEntity | null
  error: any
}
