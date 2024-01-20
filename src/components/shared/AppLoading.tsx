import { Skeleton } from "@/components/ui/skeleton";

export default function AppLoading() {
  return (
    <main className="container mx-auto flex justify-start flex-col min-h-screen py-6">
      <div className="py-8 space-y-4">
        <Skeleton className="w-1/2 h-[30px] rounded-full" />
        <Skeleton className="w-1/3 h-[20px] rounded-full" />
        <Skeleton className="w-1/4 h-[20px] rounded-full" />
      </div>
      <div className="py-8 space-y-4 flex-1">
        <Skeleton className="w-1/2 h-[20px] rounded-full" />
        <Skeleton className="w-1/4 h-[20px] rounded-full" />
        <Skeleton className="w-2/4 h-[20px] rounded-full" />
      </div>
      <Skeleton className="w-1/5 mx-auto h-[10px] rounded-full" />
    </main>
  );
}
