import { Skeleton } from '@/components/skeleton'

export default function HomeLoading() {
  return (
    <div className="grid max-h-[860px] grid-cols-3 gap-6">
      <Skeleton className="col-span-2 row-span-6 h-[760px]" />
      <Skeleton className="col-span-1 row-span-6 h-[760px]" />
    </div>
  )
}
