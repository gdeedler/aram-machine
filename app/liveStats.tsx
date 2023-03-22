"use client";

import styles from "./liveStatsStyles.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import icons from '../lib/icons'

export default function LiveStats() {
  const [liveStats, setLiveStats] = useState<LiveStat[]>([]);
  const aramPlayers = liveStats.filter(({ gameMode }) => gameMode === "ARAM");
  const classicPlayers = liveStats.filter(
    ({ gameMode }) => gameMode === "CLASSIC"
  );
  const inactivePlayers = liveStats.filter(
    ({ gameMode }) => gameMode === "INACTIVE"
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/livestats` + summonerParams
      );
      if (!res.ok) {
        throw new Error("Failed to fetch summoner stats");
      }
      const liveStats: LiveStat[] = await res.json();
      setLiveStats(liveStats);
    };
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      {aramPlayers.map(({ summonerName, gameMode, champion }) => (
        <div key={summonerName} className={styles.statRow}>
          <Link href={`/stats/${summonerName}`}>{summonerName}</Link>
          <div className={styles.championIconContainer}>
            <Image
              src={icons[champion.id]}
              alt={champion.id}
              width={50}
              height={50}
              className={styles.championIcon}
            />
          </div>
          <span className={styles.aram}>ARAM</span>
        </div>
      ))}
      {classicPlayers.map(({ summonerName, gameMode, champion }) => (
        <div key={summonerName} className={styles.statRow}>
          <Link href={`/stats/${summonerName}`}>{summonerName}</Link>
          <Image
            src={icons[champion.id]}
            alt={champion.id}
            width={50}
            height={50}
            className={styles.championIcon}
          />
          <span className={styles.classic}>SR</span>
        </div>
      ))}
      {inactivePlayers.map(({ summonerName, gameMode }) => (
        <div key={summonerName} className={styles.statRow}>
          <Link href={`/stats/${summonerName}`}>{summonerName}</Link>
          <span className={styles.inactive}>{gameMode}</span>
        </div>
      ))}
    </div>
  );
}

const summonerNames = [
  "PepperMD",
  "SpiceMD",
  "SugarMD",
  "CinnamonMD",
  "OreganoMD",
  "MintMD",
  "Dusty Attic",
  "HoneyMD",
  "Giraffe Prism",
];
function createParams(summonerNames: string[]) {
  if (!summonerNames.length) return "";
  let params = "";
  params += `?summonerName=${summonerNames.pop()}`;
  for (const summonerName of summonerNames) {
    params += `&summonerName=${summonerName}`;
  }
  return params;
}

const summonerParams = createParams(summonerNames);
interface LiveStat {
  summonerName: string;
  gameMode: string;
  champion: {
    name: string;
    id: ChampionNames
  }
}
interface LiveStatsProps {
  liveStats: LiveStat[];
}