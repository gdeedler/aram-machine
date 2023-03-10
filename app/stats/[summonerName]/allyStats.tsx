import styles from './allyStatsStyles.module.css';
import Link from 'next/link';

export default function AllyStats ({allyStats}: AllyProps) {

  if(!allyStats) {
    return <></>
  }

  return (
    <div className={styles.allyContainer}>
      <div className={styles.allyContainerHeader}>Teammates (over 5 games)</div>
      <div className={`${styles.allyRow} ${styles.allyRowHead}`}>
        <div>Summoner</div>
        <div>Games</div>
        <div>Winrate</div>
      </div>
      {allyStats.map(({summonername, wins, losses, games, winrate}) => (
        <div className={styles.allyRow} key={summonername}>
          <Link href={`/stats/${summonername}/`}>{summonername}</Link>
          <div>{games}</div>
          <div>{winrate}%</div>
        </div>
      ))}
    </div>
  )
}

interface AllyProps {
  allyStats: [AllyStats] | undefined;
}