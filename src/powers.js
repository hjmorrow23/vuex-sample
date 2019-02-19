import iceImg from "./assets/ice.jpeg";
import earthImg from "./assets/earth.jpeg";
import fireImg from "./assets/fire.jpeg";
import waterImg from "./assets/water.jpeg";
import lightningImg from "./assets/lightning.jpeg";

const powers = [
    {
        power: "Ice Manipulation",
        weakness: "Fire Manipulation",
        strongAgainst: "Summon Eartquakes",
        img: iceImg,
        weakImg: fireImg,
        strongImg: earthImg
    },
    {
        power: "Summon Earthquakes",
        weakness: "Ice Manipulation",
        strongAgainst: "Lightning Bolts",
        img: earthImg,
        weakImg: iceImg,
        strongImg: lightningImg
    },
    {
        power: "Lightning Bolts",
        weakness: "Summon Earthquakes",
        strongAgainst: "Water Manipulation",
        img: lightningImg,
        weakImg: earthImg,
        strongImg: waterImg
    },
    {
        power: "Water Manipulation",
        weakness: "Lightning Bolts",
        strongAgainst: "Fire Manipulation",
        img: waterImg,
        weakImg: lightningImg,
        strongImg: fireImg
    },
    {
        power: "Fire Manipulation",
        weakness: "Water Manipulation",
        strongAgainst: "Ice Manipulation",
        img: fireImg,
        weakImg: waterImg,
        strongImg: iceImg
    },
];

export default powers;