import styles from './styles.module.css';
import StatTable from './statTable';
import SummonerAllyStats from './summonerAllyStats';
import { cleanData } from '../../../lib/util';

export default async function Page({
  params,
}: {
  params: { summonerName: string };
}) {
  const res = await fetch(
    `${process.env.API_URL}/champstats/${params.summonerName}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch summoner stats');
  }
  let data: [ChampStats] = await res.json();

  const summonerRes = await fetch(
    `${process.env.API_URL}/summonerstats/${params.summonerName}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch summoner stats');
  }
  let summonerData: SummonerStats = await summonerRes.json();

  return (
    <div className={styles.container}>
      <SummonerAllyStats
        summonerStats={summonerData.matchStats}
        allyStats={summonerData.allyStats}
      />
      <StatTable champStats={cleanData(data)} />
    </div>
  );
}
