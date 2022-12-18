import Button from './button';
import RefreshButton from './resfreshButton';
import styles from './styles.module.css';
import StatTable from './statTable';

export default async function Page({
  params,
}: {
  params: { summonerName: string };
}) {
  const res = await fetch(`http://localhost:3010/stats/${params.summonerName}`);
  let data: SummonerStats | null = null;
  if (res.status === 200) {
    data = await res.json();
  }

  return (
    <div className={styles.container}>
      Stats for {params.summonerName}
      <div className={styles.row}>
        <RefreshButton summonerName={params.summonerName} value="Refresh" />
        <Button route="/">Back</Button>
      </div>
      {data && <StatTable champStats={data.champStats} summonerName={data.summonerName} matchStats={data.matchStats}/>}
    </div>
  );
}
