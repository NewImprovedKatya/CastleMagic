import katarynaSmall from "../images/kataryna-castle-sm.jpg";
import frandsenSmall from "../images/frandsen-castle-sm.jpg"
import historyTowerSmall from "../images/history-tower-sm.jpg";
import katarynaLarge from "../images/kataryna-castle-lg.jpg";
import frandsenLarge from "../images/frandsen-castle-lg.jpg";
import historyTowerLarge from "../images/history-tower-lg.jpg";
// Don't forget the curly braces and commas!

export const GALLERYPHOTOS = [
  {
    id: 0,
    alt: "Castle Kataryna",
    src: katarynaSmall,
    srcSet: `${katarynaSmall} 500w, ${katarynaLarge} 1200w`
  },
  {
    id: 1,
    alt: "Castle Kataryna",
    src: frandsenSmall,
    srcSet: `${frandsenSmall} 500w, ${frandsenLarge} 1200w`
  },
  {
    id: 2,
    alt: "Castle Kataryna",
    src: katarynaSmall,
    srcSet: `${katarynaSmall} 500w, ${katarynaLarge} 1200w`
  },
];

export default GALLERYPHOTOS;