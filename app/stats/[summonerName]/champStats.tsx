"use client";

import { useEffect, useState } from "react";
import styles from "./champStatsStyles.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function ChampStats({
  summonerName,
  champName,
}: champStatsProps) {
  console.log(summonerName, champName);

  let [winData, setWinData] = useState<[number]>([0]);
  let [data, setData] = useState<ChartData<'line'>>();

  useEffect(() => {
    if (!summonerName || !champName) return;
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/champ-wins?summonerName=${summonerName}&champName=${champName}`
      );
      if (res.ok) {
        const winData = await res.json();
        setWinData(winData);
      }
    };

    fetchData();
  }, [summonerName, champName]);

  useEffect(() => {
    if (!Array.isArray(winData)) return;
    data = {
      labels: winData.map((val, index) => index),
      datasets: [
        {
          fill: {
            target: "origin",
            above: "rgba(68, 0, 255, 0.151)",
            below: "rgba(255, 0, 64, 0.205)",
          },
          data: winData,
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.705)",
          pointStyle: false,
          tension: 0.5,
        },
      ],
    };
    setData(data);
  }, [winData]);

  const min = Math.abs(Math.min(...winData));
  const max = Math.abs(Math.max(...winData));
  const boundary = max > min ? max : min;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        max: boundary,
        min: -boundary,
        grid: {
          color: "rgba(40, 35, 58, 0.226)",
        },
      },
    },
  };

  return (
    <div className={styles.chartContainer}>
      {data && <Line data={data} options={options} />}
    </div>
  );
}

interface champStatsProps {
  summonerName: string;
  champName: string;
}
