const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Caracteres para la lluvia de código
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@&";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    // Fondo negro con mucha transparencia para el rastro
    ctx.fillStyle = "rgba(5, 0, 5, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Color de las letras (Púrpura Fluorescente)
    ctx.fillStyle = "#bc13fe"; 
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Efecto Typing
const typingH1 = document.getElementById('typing-text');
const originalText = typingH1.innerText;
typingH1.innerText = "";
let index = 0;

function type() {
    if (index < originalText.length) {
        typingH1.innerHTML += originalText.charAt(index);
        index++;
        setTimeout(type, 150);
    }
}

window.onload = () => {
    type();
    setInterval(drawMatrix, 50);
};

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

