import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1 id="newGame">New Game</h1>
    <div class="playerCount">    
      <h1 id="playerCount3">3</h1>
      <h1 id="playerCount4">4</h1>
      <h1 id="playerCount5">5</h1>
      <h1 id="playerCount6">6</h1>
    </div>
    <h2 id="player">Player: </h2>
    <div id="revealButton" >
      <h1 id="reveal">aufdecken</h1>
    </div>
    <div id="nextButton">
      <h2> weiter -> </h2>
    </div>
  </div>
`;

const germanNouns = [
  "Apfel",
  "Baum",
  "Haus",
  "Buch",
  "Tisch",
  "Stuhl",
  "Fenster",
  "Tür",
  "Straße",
  "Auto",
  "Fahrrad",
  "Zug",
  "Flugzeug",
  "Schiff",
  "Mensch",
  "Frau",
  "Mann",
  "Kind",
  "Familie",
  "Freund",
  "Lehrer",
  "Arzt",
  "Student",
  "Arbeit",
  "Schule",
  "Universität",
  "Krankenhaus",
  "Bank",
  "Geschäft",
  "Stadt",
  "Land",
  "Dorf",
  "Berg",
  "Fluss",
  "See",
  "Meer",
  "Sonne",
  "Mond",
  "Stern",
  "Wolke",
  "Regen",
  "Schnee",
  "Wind",
  "Feuer",
  "Wasser",
  "Luft",
  "Erde",
  "Zeit",
  "Geld",
  "Tom Cruise",
  "Leonardo DiCaprio",
  "Brad Pitt",
  "Dwayne Johnson",
  "Will Smith",
  "Tom Hanks",
  "Johnny Depp",
  "Julia Roberts",
  "Michael Jackson",
  "Elvis Presley",
  "Madonna",
  "Elton John",
  "Beyoncé",
  "Freddie Mercury",
  "Leonardo da Vinci",
  "Vincent van Gogh",
  "Pablo Picasso",
  "Toyota",
  "Volkswagen",
  "Mercedes-Benz",
  "BMW",
  "Audi",
  "Ford",
  "Honda",
  "Hyundai",
  "Tesla",
  "Nissan",
  "Samsung",
  "Apple",
  "Xiaomi",
  "Huawei",
  "Gronkh",
  "Instagram",
  "Lego",
  "Playstation",
  "Gitarre",
  "Maus",
  "Ducati",
  "Lockenwickler",
  "Geist",
  "Glas",
  "Plutonium",
  "F16",
  "Ferrari",
  "Red",
  "Nike",
  "Adidas",
  "Dinosaurier",
  "Ludovico Einaudi",
  "Polizei",
  "Laserschwert",
  "Matrix",
  "Tangente",
  "Schaufel",
  "Busch",
  "9/11",
  "Pinguin",
  "Schildkröte",
  "Igel",
  "Einhorn",
  "Eichhörnchen",
  "Tesa",
  "Familie",
  "Turbo",
  "Garmin",
  "Stein",
  "Harry Potter",
  "Schuh",
  "Einarmiger Bandit",
  "Ehrenmann",
];
const players = [
  "Spieler 1",
  "Spieler 2",
  "Spieler 3",
  "Spieler 4",
  "Spieler 5",
  "Spieler 6",
];

const playerField = document.getElementById("player");
const revealButton = document.getElementById("revealButton");
const revealField = document.getElementById("reveal");
const nextButton = document.getElementById("nextButton");
const newGame = document.getElementById("newGame");

const playerCount3 = document.getElementById("playerCount3");
const playerCount4 = document.getElementById("playerCount4");
const playerCount5 = document.getElementById("playerCount5");
const playerCount6 = document.getElementById("playerCount6");

let maxPlayer = 4;
const selectWord = () => {
  let randomIndex = Math.floor(Math.random() * germanNouns.length);
  return germanNouns[randomIndex];
};

const selectImposter = () => {
  let randomIndex = Math.floor(Math.random() * maxPlayer);
  return randomIndex;
};

const resetNums = () => {
  if (playerCount3 && playerCount4 && playerCount5 && playerCount6) {
    playerCount3.innerHTML = "3";
    playerCount4.innerHTML = "4";
    playerCount5.innerHTML = "5";
    playerCount6.innerHTML = "6";
  }
};
let showWord = false;
let imposterIndex1 = -1;
let imposterIndex2 = -1;
let imposterIndex3 = -1;
let imposterIndex4 = -1;
let imposterIndex5 = -1;
let imposterIndex6 = -1;
let randomWord = selectWord();
let playerIndex: number = 0;

const startNewGame = () => {
  let imposterChooser = Math.random();
  if (imposterChooser > 0.01) {
    imposterIndex1 = selectImposter();
    if (imposterChooser > 0.95) {
      imposterIndex2 = selectImposter();
      if (imposterChooser > 0.95) {
        imposterIndex3 = selectImposter();
        if (imposterChooser > 0.98) {
          imposterIndex4 = selectImposter();
          if (imposterChooser > 0.99) {
            imposterIndex5 = selectImposter();
            if (imposterChooser > 0.999) {
              imposterIndex6 = selectImposter();
            }
          }
        }
      }
    }
  }

  randomWord = selectWord();

  playerIndex = 0;
  if (playerField) {
    playerField.innerHTML = players[playerIndex];
  }
};

playerCount3?.addEventListener("click", () => {
  maxPlayer = 3;
  resetNums();
  playerCount3.innerHTML = "*3";
});
playerCount4?.addEventListener("click", () => {
  maxPlayer = 4;
  resetNums();
  playerCount4.innerHTML = "*4";
});
playerCount5?.addEventListener("click", () => {
  maxPlayer = 5;
  resetNums();
  playerCount5.innerHTML = "*5";
});

playerCount6?.addEventListener("click", () => {
  maxPlayer = 6;
  resetNums();
  playerCount6.innerHTML = "*6";
});

nextButton?.addEventListener("click", () => {
  playerIndex += 1;
  playerIndex = playerIndex % maxPlayer;
  showWord = false;
  playerField!.innerHTML = players[playerIndex];
  revealField!.innerHTML = "aufdecken";
});

revealButton?.addEventListener("click", () => {
  console.log(showWord);
  showWord = !showWord;
  if (showWord) {
    if (
      playerIndex == imposterIndex1 ||
      playerIndex == imposterIndex2 ||
      playerIndex == imposterIndex3 ||
      playerIndex == imposterIndex4 ||
      playerIndex == imposterIndex5 ||
      playerIndex == imposterIndex6
    ) {
      revealField!.innerHTML = "Imposter";
      return;
    } else {
      revealField!.innerHTML = randomWord;
    }
  } else {
    revealField!.innerHTML = "aufdecken";
  }
});

startNewGame();
newGame?.addEventListener("click", () => {
  startNewGame();
  showWord = false;
  if (revealField) revealField.innerHTML = "aufdecken";
});
