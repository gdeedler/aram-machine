'use client';

import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface RefreshButton {
  summonerName: string;
}

export default function RefreshButton({ summonerName}: RefreshButton) {
  const [isUpdating, setIsUpdating] = useState(false);
  const router = useRouter();

  async function handleClick() {
    setIsUpdating(true);
    const res = await fetch(
      `${process.env.API_URL}/stats/${summonerName}/refresh`
    );
    if (res.ok) {
      router.refresh();
    }
    setIsUpdating(false);
  }

  return (
    <span className={styles.updateButton}>
      <button onClick={handleClick}>Update</button>
      {isUpdating && <span>Summoner data is updating...</span>}
    </span>
  );
}
