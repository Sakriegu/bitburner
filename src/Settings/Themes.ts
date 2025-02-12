import { IMap } from "../types";

export interface ITheme {
  [key: string]: string | undefined;
  primarylight: string;
  primary: string;
  primarydark: string;
  successlight: string;
  success: string;
  successdark: string;
  errorlight: string;
  error: string;
  errordark: string;
  secondarylight: string;
  secondary: string;
  secondarydark: string;
  warninglight: string;
  warning: string;
  warningdark: string;
  infolight: string;
  info: string;
  infodark: string;
  welllight: string;
  well: string;
  white: string;
  black: string;
  hp: string;
  money: string;
  hack: string;
  combat: string;
  cha: string;
  int: string;
  rep: string;
  disabled: string;
  backgroundprimary: string;
  backgroundsecondary: string;
  button: string;
}

export interface IPredefinedTheme {
  colors: ITheme;
  name?: string;
  credit?: string;
  description?: string;
  reference?: string;
}

export const defaultTheme: ITheme = {
  primarylight: "#0f0",
  primary: "#0c0",
  primarydark: "#090",
  successlight: "#0f0",
  success: "#0c0",
  successdark: "#090",
  errorlight: "#f00",
  error: "#c00",
  errordark: "#900",
  secondarylight: "#AAA",
  secondary: "#888",
  secondarydark: "#666",
  warninglight: "#ff0",
  warning: "#cc0",
  warningdark: "#990",
  infolight: "#69f",
  info: "#36c",
  infodark: "#039",
  welllight: "#444",
  well: "#222",
  white: "#fff",
  black: "#000",
  hp: "#dd3434",
  money: "#ffd700",
  hack: "#adff2f",
  combat: "#faffdf",
  cha: "#a671d1",
  int: "#6495ed",
  rep: "#faffdf",
  disabled: "#66cfbc",
  backgroundprimary: "#000",
  backgroundsecondary: "#000",
  button: "#333",
};

export const getPredefinedThemes = (): IMap<IPredefinedTheme> => ({
  Default: {
    colors: defaultTheme,
  },
  Monokai: {
    description: "Monokai'ish",
    colors: {
      primarylight: "#FFF",
      primary: "#F8F8F2",
      primarydark: "#FAFAEB",
      successlight: "#ADE146",
      success: "#A6E22E",
      successdark: "#98E104",
      errorlight: "#FF69A0",
      error: "#F92672",
      errordark: "#D10F56",
      secondarylight: "#AAA",
      secondary: "#888",
      secondarydark: "#666",
      warninglight: "#E1D992",
      warning: "#E6DB74",
      warningdark: "#EDDD54",
      infolight: "#92E1F1",
      info: "#66D9EF",
      infodark: "#31CDED",
      welllight: "#444",
      well: "#222",
      white: "#fff",
      black: "#000",
      hp: "#F92672",
      money: "#E6DB74",
      hack: "#A6E22E",
      combat: "#75715E",
      cha: "#AE81FF",
      int: "#66D9EF",
      rep: "#E69F66",
      disabled: "#66cfbc",
      backgroundprimary: "#272822",
      backgroundsecondary: "#1B1C18",
      button: "#333",
    },
  },

  Warmer: {
    credit: "hexnaught",
    description: "Warmer, softer theme",
    reference: "https://discord.com/channels/415207508303544321/921991895230611466/921999581020028938",
    colors: {
      primarylight: "#EA9062",
      primary: "#DD7B4A",
      primarydark: "#D3591C",
      successlight: "#6ACF6A",
      success: "#43BF43",
      successdark: "#3E913E",
      errorlight: "#C15757",
      error: "#B34141",
      errordark: "#752525",
      secondarylight: "#AAA",
      secondary: "#888",
      secondarydark: "#666",
      warninglight: "#E6E69D",
      warning: "#DADA56",
      warningdark: "#A1A106",
      infolight: "#69f",
      info: "#36c",
      infodark: "#039",
      welllight: "#444",
      well: "#222",
      white: "#fff",
      black: "#000",
      hp: "#dd3434",
      money: "#ffd700",
      hack: "#adff2f",
      combat: "#faffdf",
      cha: "#AD84CF",
      int: "#6495ed",
      rep: "#faffdf",
      disabled: "#76C6B7",
      backgroundprimary: "#000",
      backgroundsecondary: "#000",
      button: "#333",
    },
  },

  "Dark+": {
    credit: "LoganMD",
    description: "VSCode Dark+",
    reference: "https://discord.com/channels/415207508303544321/921991895230611466/921999975867617310",
    colors: {
      primarylight: "#E0E0BC",
      primary: "#CCCCAE",
      primarydark: "#B8B89C",
      successlight: "#00F000",
      success: "#00D200",
      successdark: "#00B400",
      errorlight: "#F00000",
      error: "#C80000",
      errordark: "#A00000",
      secondarylight: "#B4AEAE",
      secondary: "#969090",
      secondarydark: "#787272",
      warninglight: "#F0F000",
      warning: "#C8C800",
      warningdark: "#A0A000",
      infolight: "#69f",
      info: "#36c",
      infodark: "#039",
      welllight: "#444",
      well: "#222",
      white: "#fff",
      black: "#1E1E1E",
      hp: "#dd3434",
      money: "#ffd700",
      hack: "#adff2f",
      combat: "#faffdf",
      cha: "#a671d1",
      int: "#6495ed",
      rep: "#faffdf",
      disabled: "#66cfbc",
      backgroundprimary: "#1E1E1E",
      backgroundsecondary: "#252525",
      button: "#333",
    },
  },

  "Mayukai Dark": {
    credit: "Festive Noire",
    description: "Mayukai Dark-esque",
    reference: "https://discord.com/channels/415207508303544321/921991895230611466/922037502334889994",
    colors: {
      primarylight: "#DDDFC5",
      primary: "#CDCFB6",
      primarydark: "#9D9F8C",
      successlight: "#00EF00",
      success: "#00A500",
      successdark: "#007A00",
      errorlight: "#F92672",
      error: "#CA1C5C",
      errordark: "#90274A",
      secondarylight: "#AAA",
      secondary: "#888",
      secondarydark: "#666",
      warninglight: "#D3D300",
      warning: "#cc0",
      warningdark: "#990",
      infolight: "#69f",
      info: "#36c",
      infodark: "#039",
      welllight: "#444",
      well: "#00010A",
      white: "#fff",
      black: "#020509",
      hp: "#dd3434",
      money: "#ffd700",
      hack: "#8CCF27",
      combat: "#faffdf",
      cha: "#a671d1",
      int: "#6495ed",
      rep: "#faffdf",
      disabled: "#66cfbc",
      backgroundprimary: "#080C11",
      backgroundsecondary: "#03080F",
      button: "#00010A",
    },
  },

  Purple: {
    credit: "zer0ney",
    description: "Essentially all defaults except for purple replacing the main colors",
    reference: "https://discord.com/channels/415207508303544321/921991895230611466/922091815849570395",
    colors: {
      primarylight: "#BA55D3",
      primary: "#9370DB",
      primarydark: "#8A2BE2",
      successlight: "#BA55D3",
      success: "#9370DB",
      successdark: "#8A2BE2",
      errorlight: "#f00",
      error: "#c00",
      errordark: "#900",
      secondarylight: "#AAA",
      secondary: "#888",
      secondarydark: "#666",
      warninglight: "#ff0",
      warning: "#cc0",
      warningdark: "#990",
      infolight: "#69f",
      info: "#36c",
      infodark: "#039",
      welllight: "#444",
      well: "#222",
      white: "#fff",
      black: "#000",
      hp: "#dd3434",
      money: "#ffd700",
      hack: "#adff2f",
      combat: "#faffdf",
      cha: "#a671d1",
      int: "#6495ed",
      rep: "#faffdf",
      disabled: "#66cfbc",
      backgroundprimary: "#000",
      backgroundsecondary: "#000",
      button: "#333",
    },
  },

  "Smooth Green": {
    credit: "Swidt",
    description: "A nice green theme that doesn't hurt your eyes.",
    reference: "https://discord.com/channels/415207508303544321/921991895230611466/922243957986033725",
    colors: {
      primarylight: "#E0E0BC",
      primary: "#B0D9A3",
      primarydark: "#B8B89C",
      successlight: "#00F000",
      success: "#6BC16B",
      successdark: "#00B400",
      errorlight: "#F00000",
      error: "#3D713D",
      errordark: "#A00000",
      secondarylight: "#B4AEAE",
      secondary: "#8FAF85",
      secondarydark: "#787272",
      warninglight: "#F0F000",
      warning: "#38F100",
      warningdark: "#A0A000",
      infolight: "#69f",
      info: "#36c",
      infodark: "#039",
      welllight: "#444",
      well: "#2F3C2B",
      white: "#fff",
      black: "#1E1E1E",
      hp: "#dd3434",
      money: "#4AA52E",
      hack: "#adff2f",
      combat: "#faffdf",
      cha: "#a671d1",
      int: "#6495ed",
      rep: "#35A135",
      disabled: "#66cfbc",
      backgroundprimary: "#1E1E1E",
      backgroundsecondary: "#252525",
      button: "#2F3C2B",
    },
  },

  Dracula: {
    credit: "H3draut3r",
    reference: "https://discord.com/channels/415207508303544321/921991895230611466/922296307836678144",
    colors: {
      primarylight: "#7082B8",
      primary: "#F8F8F2",
      primarydark: "#FF79C6",
      successlight: "#0f0",
      success: "#0c0",
      successdark: "#090",
      errorlight: "#FD4545",
      error: "#FF2D2D",
      errordark: "#C62424",
      secondarylight: "#AAA",
      secondary: "#8BE9FD",
      secondarydark: "#666",
      warninglight: "#FFC281",
      warning: "#FFB86C",
      warningdark: "#E6A055",
      infolight: "#A0A0FF",
      info: "#7070FF",
      infodark: "#4040FF",
      welllight: "#44475A",
      well: "#363948",
      white: "#fff",
      black: "#282A36",
      hp: "#D34448",
      money: "#50FA7B",
      hack: "#F1FA8C",
      combat: "#BD93F9",
      cha: "#FF79C6",
      int: "#6495ed",
      rep: "#faffdf",
      disabled: "#66cfbc",
      backgroundprimary: "#282A36",
      backgroundsecondary: "#21222C",
      button: "#21222C",
    },
  },

  "Dark Blue": {
    credit: "Saynt_Garmo",
    reference: "https://discord.com/channels/415207508303544321/921991895230611466/923084732718264340",
    colors: {
      primarylight: "#023DDE",
      primary: "#4A41C8",
      primarydark: "#005299",
      successlight: "#00FF00",
      success: "#D1DAD1",
      successdark: "#BFCABF",
      errorlight: "#f00",
      error: "#c00",
      errordark: "#900",
      secondarylight: "#AAA",
      secondary: "#888",
      secondarydark: "#666",
      warninglight: "#ff0",
      warning: "#cc0",
      warningdark: "#990",
      infolight: "#69f",
      info: "#36c",
      infodark: "#039",
      welllight: "#444",
      well: "#040505",
      white: "#fff",
      black: "#000000",
      hp: "#dd3434",
      money: "#ffd700",
      hack: "#adff2f",
      combat: "#faffdf",
      cha: "#a671d1",
      int: "#6495ed",
      rep: "#faffdf",
      disabled: "#66cfbc",
      backgroundprimary: "#091419",
      backgroundsecondary: "#000000",
      button: "#000000",
    },
  },

  Discord: {
    credit: "Thermite",
    description: "Discord inspired theme",
    reference: "https://discord.com/channels/415207508303544321/921991895230611466/924305252017143818",
    colors: {
      primarylight: "#7389DC",
      primary: "#7389DC",
      primarydark: "#5964F1",
      successlight: "#00CC00",
      success: "#20DF20",
      successdark: "#0CB80C",
      errorlight: "#EA5558",
      error: "#EC4145",
      errordark: "#E82528",
      secondarylight: "#C3C3C3",
      secondary: "#9C9C9C",
      secondarydark: "#4E4E4E",
      warninglight: "#ff0",
      warning: "#cc0",
      warningdark: "#990",
      infolight: "#69f",
      info: "#36c",
      infodark: "#1C4FB3",
      welllight: "#999999",
      well: "#35383C",
      white: "#FFFFFF",
      black: "#202225",
      hp: "#FF5656",
      money: "#43FF43",
      hack: "#FFAB3D",
      combat: "#8A90FD",
      cha: "#FF51D9",
      int: "#6495ed",
      rep: "#FFFF30",
      disabled: "#474B51",
      backgroundprimary: "#2F3136",
      backgroundsecondary: "#35393E",
      button: "#333",
    },
  },

  "One Dark": {
    credit: "Dexalt142",
    reference: "https://discord.com/channels/415207508303544321/921991895230611466/924650660694208512",
    colors: {
      primarylight: "#98C379",
      primary: "#98C379",
      primarydark: "#98C379",
      successlight: "#98C379",
      success: "#98C379",
      successdark: "#98C379",
      errorlight: "#E06C75",
      error: "#BE5046",
      errordark: "#BE5046",
      secondarylight: "#AAA",
      secondary: "#888",
      secondarydark: "#666",
      warninglight: "#E5C07B",
      warning: "#E5C07B",
      warningdark: "#D19A66",
      infolight: "#61AFEF",
      info: "#61AFEF",
      infodark: "#61AFEF",
      welllight: "#4B5263",
      well: "#282C34",
      white: "#ABB2BF",
      black: "#282C34",
      hp: "#E06C75",
      money: "#E5C07B",
      hack: "#98C379",
      combat: "#ABB2BF",
      cha: "#C678DD",
      int: "#61AFEF",
      rep: "#ABB2BF",
      disabled: "#56B6C2",
      backgroundprimary: "#282C34",
      backgroundsecondary: "#21252B",
      button: "#4B5263",
    },
  },

  "Muted Gold & Blue": {
    credit: "Sloth",
    reference: "https://discord.com/channels/415207508303544321/921991895230611466/924672660758208563",
    colors: {
      primarylight: "#E3B54A",
      primary: "#CAA243",
      primarydark: "#7E6937",
      successlight: "#82FF82",
      success: "#6FDA6F",
      successdark: "#64C364",
      errorlight: "#FD5555",
      error: "#D84A4A",
      errordark: "#AC3939",
      secondarylight: "#D8D0B8",
      secondary: "#B1AA95",
      secondarydark: "#736E5E",
      warninglight: "#ff0",
      warning: "#cc0",
      warningdark: "#990",
      infolight: "#69f",
      info: "#36c",
      infodark: "#039",
      welllight: "#444",
      well: "#111111",
      white: "#fff",
      black: "#070300",
      hp: "#dd3434",
      money: "#ffd700",
      hack: "#adff2f",
      combat: "#faffdf",
      cha: "#a671d1",
      int: "#6495ed",
      rep: "#faffdf",
      disabled: "#66cfbc",
      backgroundprimary: "#0A0A0E",
      backgroundsecondary: "#0E0E10",
      button: "#222222",
    },
  },

  "Default Lite": {
    credit: "NmuGmu",
    description: "Less eye-straining default theme",
    reference: "https://discord.com/channels/415207508303544321/921991895230611466/925263801564151888",
    colors: {
      primarylight: "#28CF28",
      primary: "#21A821",
      primarydark: "#177317",
      successlight: "#1CFF1C",
      success: "#16CA16",
      successdark: "#0D910D",
      errorlight: "#FF3B3B",
      error: "#C32D2D",
      errordark: "#8E2121",
      secondarylight: "#B3B3B3",
      secondary: "#838383",
      secondarydark: "#676767",
      warninglight: "#FFFF3A",
      warning: "#C3C32A",
      warningdark: "#8C8C1E",
      infolight: "#64CBFF",
      info: "#3399CC",
      infodark: "#246D91",
      welllight: "#404040",
      well: "#1C1C1C",
      white: "#C3C3C3",
      black: "#0A0B0B",
      hp: "#C62E2E",
      money: "#D6BB27",
      hack: "#ADFF2F",
      combat: "#E8EDCD",
      cha: "#8B5FAF",
      int: "#537CC8",
      rep: "#E8EDCD",
      disabled: "#5AB5A5",
      backgroundprimary: "#0C0D0E",
      backgroundsecondary: "#121415",
      button: "#252829",
    },
  },

  Light: {
    credit: "matt",
    reference: "https://discord.com/channels/415207508303544321/921991895230611466/926114005456658432",
    colors: {
      primarylight: "#535353",
      primary: "#1A1A1A",
      primarydark: "#0d0d0d",
      successlight: "#63c439",
      success: "#428226",
      successdark: "#2E5A1B",
      errorlight: "#df7051",
      error: "#C94824",
      errordark: "#91341B",
      secondarylight: "#b3b3b3",
      secondary: "#9B9B9B",
      secondarydark: "#7A7979",
      warninglight: "#e8d464",
      warning: "#C6AD20",
      warningdark: "#9F8A16",
      infolight: "#6299cf",
      info: "#3778B7",
      infodark: "#30689C",
      welllight: "#f9f9f9",
      well: "#eaeaea",
      white: "#F7F7F7",
      black: "#F7F7F7",
      hp: "#BF5C41",
      money: "#E1B121",
      hack: "#47BC38",
      combat: "#656262",
      cha: "#A568AC",
      int: "#889BCF",
      rep: "#656262",
      disabled: "#70B4BF",
      backgroundprimary: "#F7F7F7",
      backgroundsecondary: "#f9f9f9",
      button: "#eaeaea",
    },
  },
});
