import LiveStats from "./liveStats";
import Search from "./search";


export default async function Page() {

  const res = await fetch(
    `${process.env.API_URL}/livestats` + summonerParams
  )
  if (!res.ok) {
    throw new Error('Failed to fetch summoner stats')
  }
  let liveStats= await res.json()

  return (
    <div className="w-full bg-slate-900 h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-slate-200 text-6xl">ARAM Machine</h1>
          <Search/>
          {
            liveStats && <LiveStats liveStats={liveStats}/>
          }
        </div>
    </div>
  )
}

const summonerNames = ['PepperMD', 'SpiceMD', 'SugarMD', 'CinnamonMD', 'OreganoMD', 'MintMD', 'Dusty Attic', 'HoneyMD', 'Giraffe Prism']

function createParams (summonerNames: string[]) {
  if(!summonerNames.length) return ''
  let params = ''
  params += `?summonerName=${summonerNames.pop()}`
  for (const summonerName of summonerNames) {
    params += `&summonerName=${summonerName}`
  }
  return params
}

const summonerParams = createParams(summonerNames)
