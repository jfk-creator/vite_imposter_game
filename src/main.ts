import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1 id="newGame">New Game</h1>
    <h2>Anzahl der Spieler:</h2>
    <div class="playerCount">    
      <h2 id="playerCount3">3</h2>
      <h2 id="playerCount4">4</h2>
      <h2 id="playerCount5">5</h2>
      <h2 id="playerCount6">6</h2>
    </div>
    <h1 id="player">Player: </h1>
    <h1 id="reveal">Reveal</h1>
  </div>
`

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

const players = ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5", "Player 6"];
const playerField = document.getElementById("player");
const revealField = document.getElementById("reveal");
const newGame = document.getElementById("newGame");

const playerCount3 = document.getElementById("playerCount3");
const playerCount4 = document.getElementById("playerCount4");
const playerCount5 = document.getElementById("playerCount5");
const playerCount6 = document.getElementById("playerCount6");

let maxPlayer = 4;
const selectWord = () => {
  let randomIndex = Math.floor(Math.random() * germanNouns.length); 
  return germanNouns[randomIndex];
}

const selectImposter = () => {
  let randomIndex = Math.floor(Math.random() * maxPlayer); 
  return randomIndex;
}

const resetNums = () => {
  if(playerCount3 && playerCount4 && playerCount5 && playerCount6){
    playerCount3.innerHTML = "3";
    playerCount4.innerHTML = "4";
    playerCount5.innerHTML = "5";
    playerCount6.innerHTML = "6";
  }
}

const startNewGame = () => {
  let imposterIndex = selectImposter();
  let randomWord = selectWord();

  
    
  let playerIndex: number = 0;
  if(playerField){
    playerField.innerHTML = players[playerIndex];
  }
  playerCount3?.addEventListener("click", () => {
    maxPlayer = 3;
    resetNums();
    playerCount3.innerHTML = "*3";
  })
  playerCount4?.addEventListener("click", () => {
    maxPlayer = 4;
    resetNums();
    playerCount4.innerHTML = "*4";
  })
  playerCount5?.addEventListener("click", () => {
    maxPlayer = 5;
    resetNums();
    playerCount5.innerHTML = "*5";
  })

  playerCount6?.addEventListener("click", () => {
    maxPlayer = 6;
    resetNums();
    playerCount6.innerHTML = "*6";
  })

  playerField?.addEventListener("click", () => {
    console.log("hello")
    playerIndex += 1;
    playerIndex = playerIndex % maxPlayer
    playerField.innerHTML = players[playerIndex];
      if(revealField)  revealField.innerHTML = "reveal";      

  })

  revealField?.addEventListener("click", () => {
    let showWord = false;
    showWord = !showWord; 
    if(showWord){
      if(playerIndex == imposterIndex){
        revealField.innerHTML = "Imposter";
        return;
      } else {
        revealField.innerHTML = randomWord;
      }
    } else {
        revealField.innerHTML = "reveal";      
    }


  }) 
}

startNewGame();
newGame?.addEventListener("click", () => {
  startNewGame();
  if(revealField) revealField.innerHTML = "reveal";      
})





