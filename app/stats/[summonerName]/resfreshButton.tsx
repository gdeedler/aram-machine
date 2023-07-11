'use client';

import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

interface RefreshButton {
  summonerName: string,
}

export default function RefreshButton({ summonerName}: RefreshButton) {
  const [isUpdating, setIsUpdating] = useState(false);
  const router = useRouter();

  async function handleClick() {
    setIsUpdating(true);
    await refreshData(summonerName, router);
    setIsUpdating(false);
  }

  return (
    <span className={styles.updateButton}>
      {isUpdating && <span>Updating... </span>}
      <button onClick={handleClick}>Update</button>
    </span>
  );
}

async function refreshData(summonerName: string, router: AppRouterInstance) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/refresh/${summonerName}/`
  );
  if (res.ok) {
    router.refresh();
  }
}