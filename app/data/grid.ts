// 2025 F1 grid. Lineup as of mid-season; Doohan was replaced by Colapinto at Alpine
// and Lawson was replaced by Tsunoda at Red Bull early in the season.
// Helmet color choices below are stylized interpretations, not 1:1 reproductions.

export type HelmetPattern =
  | "topStripe"
  | "splitDiagonal"
  | "halfHalf"
  | "star"
  | "wave"
  | "centerBand";

export type Driver = {
  id: string;
  firstName: string;
  lastName: string;
  number: number;
  countryCode: string;
  countryName: string;
  countryFlag: string;
  teamId: TeamId;
  helmet: {
    primary: string;
    secondary: string;
    tertiary: string;
    visor: string;
    pattern: HelmetPattern;
  };
  designNote: string;
};

export type TeamId =
  | "redbull"
  | "mclaren"
  | "ferrari"
  | "mercedes"
  | "aston"
  | "alpine"
  | "williams"
  | "rb"
  | "haas"
  | "sauber";

export type Team = {
  id: TeamId;
  name: string;
  fullName: string;
  color: string;
  accent: string;
};

export const teams: Record<TeamId, Team> = {
  redbull: {
    id: "redbull",
    name: "Red Bull",
    fullName: "Oracle Red Bull Racing",
    color: "#1E5BC6",
    accent: "#E1252C",
  },
  mclaren: {
    id: "mclaren",
    name: "McLaren",
    fullName: "McLaren F1 Team",
    color: "#FF8000",
    accent: "#47C7FC",
  },
  ferrari: {
    id: "ferrari",
    name: "Ferrari",
    fullName: "Scuderia Ferrari HP",
    color: "#DC0000",
    accent: "#FFF200",
  },
  mercedes: {
    id: "mercedes",
    name: "Mercedes",
    fullName: "Mercedes-AMG PETRONAS",
    color: "#27F4D2",
    accent: "#000000",
  },
  aston: {
    id: "aston",
    name: "Aston Martin",
    fullName: "Aston Martin Aramco",
    color: "#229971",
    accent: "#CEDC00",
  },
  alpine: {
    id: "alpine",
    name: "Alpine",
    fullName: "BWT Alpine F1 Team",
    color: "#0093CC",
    accent: "#FF87BC",
  },
  williams: {
    id: "williams",
    name: "Williams",
    fullName: "Atlassian Williams Racing",
    color: "#1868DB",
    accent: "#FFFFFF",
  },
  rb: {
    id: "rb",
    name: "Racing Bulls",
    fullName: "Visa Cash App Racing Bulls",
    color: "#6692FF",
    accent: "#E6002B",
  },
  haas: {
    id: "haas",
    name: "Haas",
    fullName: "MoneyGram Haas F1 Team",
    color: "#B6BABD",
    accent: "#E6002B",
  },
  sauber: {
    id: "sauber",
    name: "Kick Sauber",
    fullName: "Stake F1 Team Kick Sauber",
    color: "#00E700",
    accent: "#000000",
  },
};

export const drivers: Driver[] = [
  {
    id: "verstappen",
    firstName: "Max",
    lastName: "Verstappen",
    number: 1,
    countryCode: "NL",
    countryName: "Netherlands",
    countryFlag: "🇳🇱",
    teamId: "redbull",
    helmet: {
      primary: "#1E2A4A",
      secondary: "#E1252C",
      tertiary: "#F4C518",
      visor: "#0a0a14",
      pattern: "splitDiagonal",
    },
    designNote:
      "Navy shell with the Belgian-Dutch lion in red and gold. The diagonal split nods to the Verstappen family racing colors.",
  },
  {
    id: "tsunoda",
    firstName: "Yuki",
    lastName: "Tsunoda",
    number: 22,
    countryCode: "JP",
    countryName: "Japan",
    countryFlag: "🇯🇵",
    teamId: "redbull",
    helmet: {
      primary: "#FFFFFF",
      secondary: "#E1252C",
      tertiary: "#1E2A4A",
      visor: "#0a0a14",
      pattern: "centerBand",
    },
    designNote:
      "White shell with the rising sun centered, wrapped by a Red Bull navy band. Clean, direct, hinomaru-forward.",
  },
  {
    id: "norris",
    firstName: "Lando",
    lastName: "Norris",
    number: 4,
    countryCode: "GB",
    countryName: "United Kingdom",
    countryFlag: "🇬🇧",
    teamId: "mclaren",
    helmet: {
      primary: "#47C7FC",
      secondary: "#FF8000",
      tertiary: "#FFEC1F",
      visor: "#1a1a1a",
      pattern: "wave",
    },
    designNote:
      "Cyan base with neon papaya and yellow waves. The Quadrant-influenced palette Lando has run for years.",
  },
  {
    id: "piastri",
    firstName: "Oscar",
    lastName: "Piastri",
    number: 81,
    countryCode: "AU",
    countryName: "Australia",
    countryFlag: "🇦🇺",
    teamId: "mclaren",
    helmet: {
      primary: "#FF8000",
      secondary: "#0033A0",
      tertiary: "#FFFFFF",
      visor: "#1a1a1a",
      pattern: "topStripe",
    },
    designNote:
      "Papaya shell with a navy crown stripe and Southern Cross star pattern. Quiet, geometric, uncluttered.",
  },
  {
    id: "leclerc",
    firstName: "Charles",
    lastName: "Leclerc",
    number: 16,
    countryCode: "MC",
    countryName: "Monaco",
    countryFlag: "🇲🇨",
    teamId: "ferrari",
    helmet: {
      primary: "#DC0000",
      secondary: "#FFFFFF",
      tertiary: "#1E2A4A",
      visor: "#1a1a1a",
      pattern: "halfHalf",
    },
    designNote:
      "Ferrari red over white split, with Monégasque red-and-white nodding to the principality. Crown motif on the dome.",
  },
  {
    id: "hamilton",
    firstName: "Lewis",
    lastName: "Hamilton",
    number: 44,
    countryCode: "GB",
    countryName: "United Kingdom",
    countryFlag: "🇬🇧",
    teamId: "ferrari",
    helmet: {
      primary: "#FFEC1F",
      secondary: "#DC0000",
      tertiary: "#1a1a1a",
      visor: "#0a0a0a",
      pattern: "star",
    },
    designNote:
      "Yellow shell carried over from his Mercedes years, now with Ferrari red accents. Star marks every championship.",
  },
  {
    id: "russell",
    firstName: "George",
    lastName: "Russell",
    number: 63,
    countryCode: "GB",
    countryName: "United Kingdom",
    countryFlag: "🇬🇧",
    teamId: "mercedes",
    helmet: {
      primary: "#1a1a1a",
      secondary: "#27F4D2",
      tertiary: "#FFFFFF",
      visor: "#0a0a0a",
      pattern: "topStripe",
    },
    designNote:
      "Matte black with Mercedes petronas teal stripe. Minimalist, shaped around a thick crown band.",
  },
  {
    id: "antonelli",
    firstName: "Andrea Kimi",
    lastName: "Antonelli",
    number: 12,
    countryCode: "IT",
    countryName: "Italy",
    countryFlag: "🇮🇹",
    teamId: "mercedes",
    helmet: {
      primary: "#27F4D2",
      secondary: "#1a1a1a",
      tertiary: "#FFFFFF",
      visor: "#0a0a0a",
      pattern: "splitDiagonal",
    },
    designNote:
      "Teal dominant with a black diagonal — Mercedes silver arrow translated into a rookie's lid.",
  },
  {
    id: "alonso",
    firstName: "Fernando",
    lastName: "Alonso",
    number: 14,
    countryCode: "ES",
    countryName: "Spain",
    countryFlag: "🇪🇸",
    teamId: "aston",
    helmet: {
      primary: "#1E3A8A",
      secondary: "#FFEC1F",
      tertiary: "#DC0000",
      visor: "#0a0a0a",
      pattern: "splitDiagonal",
    },
    designNote:
      "Royal blue shell with yellow sunrays — Asturias colors he has carried since karting.",
  },
  {
    id: "stroll",
    firstName: "Lance",
    lastName: "Stroll",
    number: 18,
    countryCode: "CA",
    countryName: "Canada",
    countryFlag: "🇨🇦",
    teamId: "aston",
    helmet: {
      primary: "#229971",
      secondary: "#DC0000",
      tertiary: "#FFFFFF",
      visor: "#0a0a0a",
      pattern: "centerBand",
    },
    designNote:
      "Aston green base with a red maple-leaf band wrapping the dome. Clean, national, no clutter.",
  },
  {
    id: "gasly",
    firstName: "Pierre",
    lastName: "Gasly",
    number: 10,
    countryCode: "FR",
    countryName: "France",
    countryFlag: "🇫🇷",
    teamId: "alpine",
    helmet: {
      primary: "#0093CC",
      secondary: "#FFFFFF",
      tertiary: "#E1252C",
      visor: "#0a0a0a",
      pattern: "halfHalf",
    },
    designNote:
      "Tricolore vertical split — blue, white, red — wrapping the Alpine A-arrow.",
  },
  {
    id: "colapinto",
    firstName: "Franco",
    lastName: "Colapinto",
    number: 43,
    countryCode: "AR",
    countryName: "Argentina",
    countryFlag: "🇦🇷",
    teamId: "alpine",
    helmet: {
      primary: "#74ACDF",
      secondary: "#FFFFFF",
      tertiary: "#F6B40E",
      visor: "#0a0a0a",
      pattern: "centerBand",
    },
    designNote:
      "Sky blue and white horizontal bands with the Sun of May. Argentina's flag, almost literal.",
  },
  {
    id: "albon",
    firstName: "Alex",
    lastName: "Albon",
    number: 23,
    countryCode: "TH",
    countryName: "Thailand",
    countryFlag: "🇹🇭",
    teamId: "williams",
    helmet: {
      primary: "#1868DB",
      secondary: "#E1252C",
      tertiary: "#FFFFFF",
      visor: "#0a0a0a",
      pattern: "topStripe",
    },
    designNote:
      "Williams blue with a Thai red-white-blue crown stripe. The elephant motif sits on the temple.",
  },
  {
    id: "sainz",
    firstName: "Carlos",
    lastName: "Sainz",
    number: 55,
    countryCode: "ES",
    countryName: "Spain",
    countryFlag: "🇪🇸",
    teamId: "williams",
    helmet: {
      primary: "#FFEC1F",
      secondary: "#DC0000",
      tertiary: "#1868DB",
      visor: "#0a0a0a",
      pattern: "splitDiagonal",
    },
    designNote:
      "Yellow and red Spanish split with Williams blue accent. Carries his father's rally heritage in the chevron.",
  },
  {
    id: "hadjar",
    firstName: "Isack",
    lastName: "Hadjar",
    number: 6,
    countryCode: "FR",
    countryName: "France",
    countryFlag: "🇫🇷",
    teamId: "rb",
    helmet: {
      primary: "#1a1a1a",
      secondary: "#6692FF",
      tertiary: "#E6002B",
      visor: "#0a0a0a",
      pattern: "wave",
    },
    designNote:
      "Black shell with a Racing Bulls blue wave and red tricolor flash on the temple. Rookie restraint.",
  },
  {
    id: "lawson",
    firstName: "Liam",
    lastName: "Lawson",
    number: 30,
    countryCode: "NZ",
    countryName: "New Zealand",
    countryFlag: "🇳🇿",
    teamId: "rb",
    helmet: {
      primary: "#1a1a1a",
      secondary: "#FFFFFF",
      tertiary: "#E6002B",
      visor: "#0a0a0a",
      pattern: "star",
    },
    designNote:
      "Black base with the Southern Cross in white and a red kiwi accent. Direct national branding.",
  },
  {
    id: "ocon",
    firstName: "Esteban",
    lastName: "Ocon",
    number: 31,
    countryCode: "FR",
    countryName: "France",
    countryFlag: "🇫🇷",
    teamId: "haas",
    helmet: {
      primary: "#FFFFFF",
      secondary: "#0055A4",
      tertiary: "#EF4135",
      visor: "#0a0a0a",
      pattern: "halfHalf",
    },
    designNote:
      "White dome with a clean tricolore split down the centerline. The Évreux postcode on the chin.",
  },
  {
    id: "bearman",
    firstName: "Oliver",
    lastName: "Bearman",
    number: 87,
    countryCode: "GB",
    countryName: "United Kingdom",
    countryFlag: "🇬🇧",
    teamId: "haas",
    helmet: {
      primary: "#B6BABD",
      secondary: "#E6002B",
      tertiary: "#1a1a1a",
      visor: "#0a0a0a",
      pattern: "topStripe",
    },
    designNote:
      "Haas silver with a red Union Jack-derived crown stripe. Rookie energy, restrained palette.",
  },
  {
    id: "hulkenberg",
    firstName: "Nico",
    lastName: "Hülkenberg",
    number: 27,
    countryCode: "DE",
    countryName: "Germany",
    countryFlag: "🇩🇪",
    teamId: "sauber",
    helmet: {
      primary: "#1a1a1a",
      secondary: "#DC0000",
      tertiary: "#F4C518",
      visor: "#0a0a0a",
      pattern: "centerBand",
    },
    designNote:
      "Black, red, gold — the German tricolor wrapped horizontally. Veteran simplicity.",
  },
  {
    id: "bortoleto",
    firstName: "Gabriel",
    lastName: "Bortoleto",
    number: 5,
    countryCode: "BR",
    countryName: "Brazil",
    countryFlag: "🇧🇷",
    teamId: "sauber",
    helmet: {
      primary: "#FFEC1F",
      secondary: "#00A859",
      tertiary: "#0033A0",
      visor: "#0a0a0a",
      pattern: "wave",
    },
    designNote:
      "Brazilian yellow and green with a blue diagonal flash. F2 champion's first F1 lid.",
  },
];
