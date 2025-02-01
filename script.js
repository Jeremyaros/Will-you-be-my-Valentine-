const messages = [
    "Tu es sûr?",
    "Vraiment sûr??",
    "Certaine?",
    "S'il te plait...",
    "Pense-y!",
    "Si tu dis nan, je serais vraiment triste...",
    "Très très triste...",
    "Très très très triste ...",
    "Bon ok, j'arrête de demander...",
    "Je rigole, dis OUIIIIIII! ❤️"
];

const gifs = [
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2NuejNjd2s5cXRxdXFkMDB1b3h4eHZlY2tianp0eDFpeGl2eXBlayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qQdL532ZANbjy/giphy.gif", 
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmxnZ3hleDQ1MG5va2tyNTBhajZoZWd6endjOTA2bHZka3E0ZTUxNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Y4z9olnoVl5QI/giphy.gif", 
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTZ2ZjhlZzRxa2d3cWR5OGpkMjdiZzJlajF3eDlpcG9uZnVhb29wNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ChX3hzy5CkXsI/giphy.gif", 
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZiNm9vNWZiMndibXppZHVqOTMwNTB6eXNtYnJrdHFxdHpnOWtpZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JEVqknUonZJWU/giphy.gif"  
];

let messageIndex = 0;
let gifIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gifImage = document.getElementById('gifImage');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    gifImage.src = gifs[gifIndex];
    gifIndex = (gifIndex + 1) % gifs.length;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
