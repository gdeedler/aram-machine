'use client';

import styles from './styles.module.css';
import Image from 'next/image';
import icons from '../../../lib/icons';
import { useState } from 'react';

export default function StatTable({ champStats }: TableStats) {

  const [sortMethod, setSortMethod] = useState<SortMethod>('gamesPlayed')
  const [isDescending, setIsDescending] = useState(true);
  const [selectedChampion, setSelectedChampion] = useState<string>()
  const [detailedStats, setDetailedStats] = useState({})

  const sortedStats = sortStats(champStats, sortMethod, isDescending);


  function handleSortChange(newSortMethod: SortMethod) {
    if (sortMethod === newSortMethod) {
      setIsDescending(!isDescending);
      return;
    }
    setSortMethod(newSortMethod);
    setIsDescending(true);
  }

  function handleRowClick(champion: ChampionNames) {
    if(detailedStats[champion]) {
      const stats = {...detailedStats}
      stats[champion] = 0
      setDetailedStats(stats)
    } else {
      const stats = {...detailedStats}
      stats[champion] = 1
      setDetailedStats(stats)
      setTimeout(() => {
        const stats = {...detailedStats}
        stats[champion] = 100
        setDetailedStats(stats)
      }, 5)
    }
  }

  return (
    <div className={styles.dataTable}>
        <div className={styles.dataTableRow}>
          <div className={styles.dataTableHeader} onClick={() => handleSortChange('gamesPlayed')}>#</div>
          <div className={styles.dataTableHeader} onClick={() => handleSortChange('champion')}>Champion</div>
          <div className={styles.dataTableHeader} onClick={() => handleSortChange('pentaKills')}>Pentakills</div>
          <div className={styles.dataTableHeader} onClick={() => handleSortChange('gamesPlayed')}>Played</div>
          <div className={styles.dataTableHeader} onClick={() => handleSortChange('winrate')}>%</div>
        </div>
        {sortedStats.map(({ champion, games, wins, losses, winrate, pentaKills, order, displayName }, index) => (
            <div
              className={styles.dataTableRow}
              key={champion}
              onClick={() => handleRowClick(champion)}>
              <div className={styles.iconCell}>
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
              </div>
              <div>{displayName}</div>
              <div>
                {pentaKills}
              </div>
              <div className={styles.winLossWidget}>
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
              </div>
              <div className={styles.winrate}>
              {winrate}%
              </div>
            </div>
        ))}
    </div>
  );
}

function sortStats (champStats: [ChampStats], sortMethod: SortMethod, descending: boolean): [ChampStats] {
  if (sortMethod === 'gamesPlayed') {
    if (descending) return champStats.sort((a, b) => a.order - b.order)
    return champStats.sort((a, b) => b.order - a.order)
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