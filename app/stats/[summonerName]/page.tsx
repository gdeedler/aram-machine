import Button from './backbutton';
import styles from './styles.module.css';
import StatTable from './statTable';
import SummonerStats from './summonerStats';
import AllyStats from './allyStats';

export default async function Page({
  params,
}: {
  params: { summonerName: string };
}) {
  const lowerCaseName = params.summonerName.toLowerCase();
  const res = await fetch(`${process.env.API_URL}/stats/${lowerCaseName}`, { next: { revalidate: 30 } });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  let data: SummonerStats = await res.json();

  const champStats = rankStats(data.champStats);

  return (
    <div className={styles.container}>
      <div className={styles.profileStatCol}>
        <SummonerStats matchStats={data.matchStats} />
        <AllyStats allyStats={data.allyStats}/>
      </div>
      <StatTable champStats={champStats} />
    </div>
  );
}

function rankStats(champStats: [ChampStats]): [ChampStats] {
  for (let i = 0; i < champStats.length; i++) {
    champStats[i].order = i + 1;
  }
  return champStats;
}