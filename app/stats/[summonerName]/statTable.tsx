'use client';

import styles from './styles.module.css';
import Image from 'next/image';
import icons from '../../../lib/icons';

export default function StatTable({ champStats }: SummonerStats) {
  return (
    <table className={styles.dataTable}>
      <tr>
        <th>#</th>
        <th>Champion</th>
        <th>Played</th>
        <th></th>
      </tr>
      {champStats.map(({ champion, games, wins, losses, winrate }, index) => (
        <tr key={champion}>
          <td className={styles.iconCell}>
            {index + 1}
            <div className={styles.championIconContainer}>
              <Image
                src={icons[champion]}
                alt={champion}
                width={50}
                height={50}
                className={styles.championIcon}
              />
            </div>
          </td>
          <td>{champion}</td>
          <td className={styles.winLossWidget}>
            <div className={styles.gamePillWrapper}>
              <div className={styles.gameLossPill} />
              <div
                className={styles.gameWinPill}
                style={{ width: winrate + '%' }}
              />
              <div className={styles.pillText}>
                <div>{wins}W</div>
                <div>{losses}L</div>
              </div>
            </div>
          </td>
          <td className={styles.winrate}>
          {winrate}%
          </td>
        </tr>
      ))}
    </table>
  );
}
