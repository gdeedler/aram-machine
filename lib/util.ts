export const cleanData = (champStats: [ChampStats]): [ChampStats] => {

  const displayNameLookup: { [key: string]: string } = {
    Chogath: "Cho'Gath",
    FiddleSticks: 'Fiddlesticks',
    Kaisa: "Kai'Sa",
    Khazix: "Kha'Zix",
    Leblanc: 'LeBlanc',
    Nunu: 'Nunu & Willump',
    Velkoz: "Vel'Koz",
    MonkeyKing: 'Wukong',
    KSante: "K'Sante",
    DrMundo: 'Dr. Mundo',
    JarvanIV: 'Jarvan IV',
    KogMaw: "Kog'Maw",
    LeeSin: 'Lee Sin',
    MissFortune: 'Miss Fortune',
    TwistedFate: 'Twisted Fate',
    MasterYi: 'Master Yi',
    XinZhao: 'Xin Zhao',
    AurelionSol: 'Aurelion Sol',
    RekSai: "Rek'Sai",
    TahmKench: 'Tahm Kench',
    Belveth: "Bel'Veth",
  };

  for (let i = 0; i < champStats.length; i++) {
    const champ = champStats[i];
    champ.order = i + 1;
    champ.displayName = displayNameLookup[champ.champion] || champ.champion;
  }

  return champStats;
};
