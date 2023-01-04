'use client';

import styles from './styles.module.css';
import Image from 'next/image';
import icons from '../../../lib/icons';
import { useState } from 'react';

export default function StatTable({ champStats }: TableStats) {

  const [sortMethod, setSortMethod] = useState<SortMethod>('gamesPlayed')
  const [isDescending, setIsDescending] = useState(true);

  const sortedStats = sortStats(champStats, sortMethod, isDescending);


  function handleSortChange(newSortMethod: SortMethod) {
    if (sortMethod === newSortMethod) {
      setIsDescending(!isDescending);
      return;
    }
    setSortMethod(newSortMethod);
    setIsDescending(true);
  }

  return (
    <table className={styles.dataTable}>
      <tbody>
        <tr>
          <th onClick={() => handleSortChange('gamesPlayed')}>#</th>
          <th onClick={() => handleSortChange('champion')}>Champion</th>
          <th onClick={() => handleSortChange('pentaKills')}>Pentakills</th>
          <th onClick={() => handleSortChange('gamesPlayed')}>Played</th>
          <th onClick={() => handleSortChange('winrate')}>%</th>
        </tr>
        {sortedStats.map(({ champion, games, wins, losses, winrate, pentaKills, order }, index) => (
          <tr key={order}>
            <td className={styles.iconCell}>
              {order}
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
            <td>
              {pentaKills}
            </td>
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
      </tbody>
    </table>
  );
}

function sortStats (champStats: [ChampStats], sortMethod: SortMethod, descending: boolean): [ChampStats] {
  if (sortMethod === 'gamesPlayed') {
    if (descending) return champStats.sort((a, b) => b.order - a.order)
    return champStats.sort((a, b) => a.order - b.order)
  }
  if (sortMethod === 'champion') {
    if (descending) return champStats.sort((a, b) => {
      const nameA = a.champion.toUpperCase();
      const nameB = b.champion.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    })
    return champStats.sort((a, b) => {
      const nameA = a.champion.toUpperCase();
      const nameB = b.champion.toUpperCase();
      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
      return 0;
    })
  }
  if (sortMethod === 'pentaKills') {
    if (descending) return champStats.sort((a, b) => b.pentaKills - a.pentaKills)
    return champStats.sort((a, b) => a.pentaKills - b.pentaKills)
  }
  if (sortMethod === 'winrate') {
    if (descending) return champStats.sort((a, b) => b.winrate - a.winrate)
    return champStats.sort((a, b) => a.winrate - b.winrate)
  }
  return champStats;
}

interface TableStats {
  champStats: [ChampStats],
}