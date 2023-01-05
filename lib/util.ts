export const cleanData = (champStats: [ChampStats]): [ChampStats] => {
  for (let i = 0; i < champStats.length; i++) {
    const champ = champStats[i];
    champ.order = i + 1;
    champ.displayName = champ.champion;
    if (champ.champion === 'Chogath') champ.displayName = "Cho'Gath";
    if (champ.champion === 'FiddleSticks') champ.displayName = 'Fiddlesticks';
    if (champ.champion === 'Kaisa') champ.displayName = "Kai'Sa";
    if (champ.champion === 'Khazix') champ.displayName = "Kha'Zix";
    if (champ.champion === 'Leblanc') champ.displayName = 'LeBlanc';
    if (champ.champion === 'Nunu') champ.displayName = 'Nunu & Willump';
    if (champ.champion === 'Velkoz') champ.displayName = "Vel'Koz";
    if (champ.champion === 'MonkeyKing') champ.displayName = 'Wukong';
    if (champ.champion === 'KSante') champ.displayName = "K'Sante";
    if (champ.champion === 'DrMundo') champ.displayName = 'Dr. Mundo';
    if (champ.champion === 'JarvanIV') champ.displayName = 'Jarvan IV';
    if (champ.champion === 'KogMaw') champ.displayName = "Kog'Maw";
    if (champ.champion === 'LeeSin') champ.displayName = 'Lee Sin';
    if (champ.champion === 'MissFortune') champ.displayName = 'Miss Fortune';
    if (champ.champion === 'TwistedFate') champ.displayName = 'Twisted Fate';
    if (champ.champion === 'MasterYi') champ.displayName = 'Master Yi';
    if (champ.champion === 'XinZhao') champ.displayName = 'Xin Zhao';
    if (champ.champion === 'AurelionSol') champ.displayName = 'Aurelion Sol';
    if (champ.champion === 'RekSai') champ.displayName = "Rek'Sai";
    if (champ.champion === 'TahmKench') champ.displayName = 'Tahm Kench';
    if (champ.champion === 'Belveth') champ.displayName = "Bel'Veth";
  }
  return champStats;
};
