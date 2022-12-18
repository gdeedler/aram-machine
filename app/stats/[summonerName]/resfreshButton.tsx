'use client';

import { useRouter } from "next/navigation";

interface RefreshButton {
  summonerName: string;
  value: string;
}

export default function RefreshButton({summonerName, value}: RefreshButton) {
  const router = useRouter();

  async function handleClick() {
    const res = await fetch(
      `http://localhost:3010/stats/${summonerName}/refresh`
    );
    if (res.ok) {
      router.refresh();
    }
  }

  return (
    <button onClick={handleClick}>{value}</button>
  )
}