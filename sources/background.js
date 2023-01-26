const body = document.querySelector("body");
const BG = [
  "url(../images/BG_apple.jpg)",
  "url(../images/BG_field.jpg)",
  "url(../images/BG_planet.jpg)",
  "url(../images/BG_sea.jpg)",
];

body.style.backgroundImage = BG[Math.floor(Math.random() * BG.length)];
