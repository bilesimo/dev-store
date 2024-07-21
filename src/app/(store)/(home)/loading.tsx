import { Skeleton } from '@/components/skeleton'

export default function HomeLoading() {
  return (
    <div className="grid h-full grid-cols-9 grid-rows-8 gap-6">
      <Skeleton className="col-span-6 row-span-6 h-[760px]" />
      <Skeleton className="col-span-3 row-span-6 h-[760px]" />
      <Skeleton className="col-span-3 row-span-6 h-[760px]" />
    </div>
  )
}
