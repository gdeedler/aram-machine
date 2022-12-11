import Button from './button';

export default async function Page({
  params,
}: {
  params: { summonerName: string };
}) {
  const res = await fetch(
    `http://localhost:3010/champstats/${params.summonerName}`
  );
  const data: { champion: string; games: number; wins: number }[] =
    await res.json();
  return (
    <div className="text-lg">
      Stats for {params.summonerName}
      <Button route="/">Back</Button>
      <ul>
        {data.map((champion) => (
          <li key={champion.champion}>
            {champion.champion} {champion.games} games {Math.trunc(champion.wins / champion.games * 100)}%
          </li>
        ))}
      </ul>
    </div>
  );
}
