import styles from './liveStatsStyles.module.css'
import Link from 'next/link';

export default function LiveStats ({liveStats}: LiveStatsProps) {

  const aramPlayers = liveStats.filter(({gameMode}) => gameMode === 'ARAM')
  const classicPlayers = liveStats.filter(({gameMode}) => gameMode === 'CLASSIC')
  const inactivePlayers = liveStats.filter(({gameMode}) => gameMode === 'INACTIVE')
  return (
    <div className={styles.container}>
      {
        aramPlayers.map(({summonerName, gameMode}) => (
          <div key={summonerName} className={styles.statRow}>
            <Link href={`/stats/${summonerName}`}>{summonerName}</Link>
            <span className={styles.aram}>ARAM</span>
          </div>
        ))
      }
      {
        classicPlayers.map(({summonerName, gameMode}) => (
          <div key={summonerName} className={styles.statRow}>
            <Link href={`/stats/${summonerName}`}>{summonerName}</Link>
            <span className={styles.classic}>SR</span>
          </div>
        ))
      }
      {
        inactivePlayers.map(({summonerName, gameMode}) => (
          <div key={summonerName} className={styles.statRow}>
            <Link href={`/stats/${summonerName}`}>{summonerName}</Link>
            <span className={styles.inactive}>{gameMode}</span>
          </div>
        ))
      }
    </div>
  )
}

interface LiveStat {
  summonerName: string,
  gameMode: string
}
interface LiveStatsProps {
  liveStats: LiveStat[]
}