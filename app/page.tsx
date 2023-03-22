import LiveStats from "./liveStats";
import Search from "./search";


export default async function Page() {

  return (
    <div className="w-full bg-slate-900 h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-slate-200 text-6xl">ARAM Machine</h1>
          <Search/>
          <LiveStats/>
        </div>
    </div>
  )
}