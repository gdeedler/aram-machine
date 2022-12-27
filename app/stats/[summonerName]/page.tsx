import Button from './button';
import styles from './styles.module.css';
import StatTable from './statTable';
import SummonerStats from './summonerStats';
import AllyStats from './allyStats';

export default async function Page({
  params,
}: {
  params: { summonerName: string };
}) {
  const res = await fetch(`http://localhost:3010/stats/${params.summonerName}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  let data: SummonerStats = await res.json();

  return (
    <div className={styles.container}>
      <div className={styles.profileStatCol}>
        <SummonerStats matchStats={data.matchStats} />
        <AllyStats allyStats={data.allyStats}/>
      </div>
      <StatTable champStats={data.champStats} />
    </div>
  );
}