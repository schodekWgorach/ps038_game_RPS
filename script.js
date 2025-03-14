// Pobieranie przycisków
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// Pobieranie elementu wyniku
const resultMessage = document.getElementById("message");

// Zmienne globalne
let playerChoice = null; // Wybór gracza
let computerChoice = null; // Wybór komputera

// Funkcja zapisująca wybór gracza
function setPlayerChoice(choice) {
  playerChoice = choice; // Zapisuje wybór
  console.log(`Player wybiera: ${choice}`);
  generateComputerChoice(); // Generowanie wyboru komputera
  determineWinner(); // Porównanie wyników
}

// Funkcja generująca wybór komputera
function generateComputerChoice() {
  const random = Math.random(); // Liczba pseudolosowa 0–1
  if (random <= 1 / 3) {
    computerChoice = 1; // Rock
  } else if (random <= 2 / 3) {
    computerChoice = 2; // Paper
  } else {
    computerChoice = 3; // Scissors
  }
  console.log(`Komputer wybiera: ${computerChoice}`);
}

// Funkcja decydująca o wyniku
function determineWinner() {
  let result = "";
  if (playerChoice === computerChoice) {
    result = "Remis! Spróbuj jeszcze raz.";
  } else if (
    (playerChoice === 1 && computerChoice === 3) || // Rock beats Scissors
    (playerChoice === 2 && computerChoice === 1) || // Paper beats Rock
    (playerChoice === 3 && computerChoice === 2)    // Scissors beats Paper
  ) {
    result = "Wygrana! Gratulacje!";
  } else {
    result = "Przegrana! Powodzenia następnym razem.";
  }

  // Wyświetlanie wyniku w sekcji result
  resultMessage.textContent = result;

  // Restartowanie gry
  playerChoice = null;
  computerChoice = null;
  console.log("Gra została zresetowana.");
}

// Dodawanie obsługi kliknięć do przycisków
rockButton.addEventListener("click", () => setPlayerChoice(1)); // Rock = 1
paperButton.addEventListener("click", () => setPlayerChoice(2)); // Paper = 2
scissorsButton.addEventListener("click", () => setPlayerChoice(3)); // Scissors = 3
