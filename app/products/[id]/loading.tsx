export default function Loading() {
  return (
    <div className="py-8 pb-8 px-12 divide-y divide-zinc-100 bg-background shadow-md rounded-b-md animate-pulse">
      <div>
        <div className="w-16 h-8 bg-accent rounded-lg" />

        <div className="mt-4">
          <div className="bg-accent h-10 w-1/2 rounded-lg" />
        </div>

        <div className="rounded-lg bg-accent h-40 w-40 mt-4" />

        <div className="w-full flex-1 space-y-4 py-1">
          <div className="h-6 bg-accent rounded w-1/3 mt-4" />

          <div className="space-y-2">
            <div className="h-4 bg-accent rounded w-4/5" />
            <div className="h-4 bg-accent rounded w-4/5" />
            <div className="h-4 bg-accent rounded w-4/5" />
          </div>
        </div>
      </div>
    </div>
  );
}
