// Pobieranie przycisków
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

// Funkcja obsługująca kliknięcia
function handleButtonClick(choice) {
    console.log(`You clicked: ${choice}`);
    // Tutaj możesz dodać logikę gry
}

// Dodawanie nasłuchiwania zdarzeń
rockButton.addEventListener('click', () => {
    console.log(Math.random());
    handleButtonClick('Rock');
});
paperButton.addEventListener('click', () => {
    console.log(Math.random());
    handleButtonClick('Paper');
});
scissorsButton.addEventListener('click', () => {
    console.log(Math.random());
    handleButtonClick('Scissors');
});