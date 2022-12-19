import RefreshButton from './resfreshButton';
import styles from './styles.module.css';

export default function SummonerStats({matchStats: {summonerName, games, wins, losses, winrate, pentaKills}}: StatProps) {
  return (
    <div className={styles.summonerStats}>
      <div className={styles.statHeader}>
        <span>{summonerName}</span>
        <RefreshButton summonerName={summonerName} />
      </div>
      <div className={styles.statsBlock}>
        <p>Games: {games}</p>
        <p>Wins: {wins}</p>
        <p>Losses: {losses}</p>
        <p>Winrate: {winrate}%</p>
        <p>Pentakills: {pentaKills}</p>
      </div>
    </div>
  )
}

interface StatProps {
  matchStats: MatchStats
}