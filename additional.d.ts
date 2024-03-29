type ChampionNames = 'Aatrox'| 'Ahri'| 'Akali'| 'Akshan'| 'Amumu'| 'Anivia'| 'Annie'| 'Aphelios'| 'Ashe'| 'AurelionSol'| 'Azir'| 'Bard'| 'Belveth'| 'Blitzcrank'| 'Brand'| 'Braum'| 'Caitlyn'| 'Camille'| 'Cassiopeia'| 'Chogath'| 'Corki'| 'Darius'| 'Diana'| 'Draven'| 'DrMundo'| 'Ekko'| 'Elise'| 'Evelynn'| 'Ezreal'| 'FiddleSticks'| 'Fiora'| 'Fizz'| 'Galio'| 'Gangplank'| 'Garen'| 'Gnar'| 'Gragas'| 'Graves'| 'Gwen'| 'Hecarim'| 'Heimerdinger'| 'Illaoi'| 'Irelia'| 'Ivern'| 'Janna'| 'JarvanIV'| 'Jax'| 'Jayce'| 'Jhin'| 'Jinx'| 'Kaisa'| 'Kalista'| 'Karma'| 'Karthus'| 'Kassadin'| 'Katarina'| 'Kayle'| 'Kayn'| 'Kennen'| 'Khazix'| 'Kindred'| 'Kled'| 'KogMaw'| 'Leblanc'| 'LeeSin'| 'Leona'| 'Lillia'| 'Lissandra'| 'Lucian'| 'Lulu'| 'Lux'| 'Malphite'| 'Malzahar'| 'Maokai'| 'MasterYi'| 'MissFortune'| 'MonkeyKing'| 'Mordekaiser'| 'Morgana'| 'Nami'| 'Nasus'| 'Nautilus'| 'Neeko'| 'Nidalee'| 'Nilah'| 'Nocturne'| 'Nunu'| 'Olaf'| 'Orianna'| 'Ornn'| 'Pantheon'| 'Poppy'| 'Pyke'| 'Qiyana'| 'Quinn'| 'Rakan'| 'Rammus'| 'RekSai'| 'Rell'| 'Renata'| 'Renekton'| 'Rengar'| 'Riven'| 'Rumble'| 'Ryze'| 'Samira'| 'Sejuani'| 'Senna'| 'Seraphine'| 'Sett'| 'Shaco'| 'Shen'| 'Shyvana'| 'Singed'| 'Sion'| 'Sivir'| 'Skarner'| 'Sona'| 'Soraka'| 'Swain'| 'Sylas'| 'Syndra'| 'TahmKench'| 'Taliyah'| 'Talon'| 'Taric'| 'Teemo'| 'Thresh'| 'Tristana'| 'Trundle'| 'Tryndamere'| 'TwistedFate'| 'Twitch'| 'Udyr'| 'Urgot'| 'Varus'| 'Vayne'| 'Veigar'| 'Velkoz'| 'Vex'| 'Vi'| 'Viego'| 'Viktor'| 'Vladimir'| 'Volibear'| 'Warwick'| 'Xayah'| 'Xerath'| 'XinZhao'| 'Yasuo'| 'Yone'| 'Yorick'| 'Yuumi'| 'Zac'| 'Zed'| 'Zeri'| 'Ziggs'| 'Zilean'| 'Zoe'| 'Zyra' | 'KSante' | 'Milio' | 'Briar' | 'Naafiri' | 'Hwei' | 'Smolder'

type SortMethod = 'gamesPlayed' | 'champion' | 'pentaKills' | 'winrate';

interface ChampStats {
  champion: ChampionNames,
  displayName: string,
  games: number,
  wins: number,
  losses: number,
  winrate: number,
  pentaKills: number,
  order: number,
}

interface MatchStats {
  summonername: string,
  puuid: string,
  games: number,
  wins: number,
  losses: number,
  winrate: number,
  pentaKills: number,
}

interface AllyStats {
  summonername: string,
  games: number,
  wins: number,
  losses: number,
  winrate: number,
}
interface SummonerStats {
  summonername: string,
  matchStats: MatchStats,
  champStats: [
    ChampStats
  ]
  allyStats: [
    AllyStats
  ]
}

interface DetailedStats {
  [key: string]: number | undefined
}