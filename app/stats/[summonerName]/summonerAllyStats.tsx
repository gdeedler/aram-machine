import styles from './styles.module.css';
import SummonerStats from './summonerStats';
import AllyStats from './allyStats';
import { RadarChart } from '../../../components/RadarChart';

export default function SummonerAllyStats ({summonerStats, allyStats}: SummonerAllyProps) {

  return (
    <div className={styles.profileStatCol}>
      <SummonerStats matchStats={summonerStats} />
      <AllyStats allyStats={allyStats} />
      {/* <RadarChart/> */}
    </div>
  )
}

interface SummonerAllyProps {
  summonerStats: MatchStats;
  allyStats: [AllyStats];
}