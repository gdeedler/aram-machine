import styles from './allyStatsStyles.module.css';

export default function AllyStats ({allyStats}: AllyProps) {

  if(!allyStats) {
    return <></>
  }

  return (
    <div className={styles.allyContainer}>
      <div className={`${styles.allyRow} ${styles.allyRowHead}`}>
        <div>Summoner</div>
        <div>Games</div>
        <div>Winrate</div>
      </div>
      {allyStats.map(({summonerName, wins, losses, games, winrate}) => (
        <div className={styles.allyRow} key={summonerName}>
          <div>{summonerName}</div>
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