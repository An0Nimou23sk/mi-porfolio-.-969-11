// 1. Efecto Matrix de Fondo
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// 2. Efecto de Escritura (Typing)
const typingElement = document.getElementById('typing-text');
const textToType = typingElement.innerText;
typingElement.innerText = '';
let charIndex = 0;

function typeEffect() {
    if (charIndex < textToType.length) {
        typingElement.innerText += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 150);
    }
}

// Inicializar todo
window.onload = () => {
    typeEffect();
    setInterval(drawMatrix, 50);
};

// Ajustar canvas si se cambia el tamaño de ventana
window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
