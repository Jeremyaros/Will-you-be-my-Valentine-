const messages = [
    "Tu es sûr?",
    "Vraiment sûr??",
    "Certaine?",
    "S'il te plait...",
    "Pense-y!",
    "Si tu dis nan, je serais vraiment triste...",
    "Tres tres triste...",
    "Tres tres tres triste ...",
    "bon ok, j'arrete de demander...",
    "Je rigole,dit OUIIIIIII! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}