document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica del Botón de Escaneo
    const scanBtn = document.getElementById('scan-btn');
    const scanResult = document.getElementById('scan-result');

    scanBtn.addEventListener('click', () => {
        let steps = [
            "Buscando exploits...", 
            "Analizando IP: 127.0.0.1...", 
            "Verificando Certificados de Argentina Programa...", 
            "SISTEMA PROTEGIDO POR ALEJANDRO DIAZ."
        ];
        let i = 0;
        scanBtn.disabled = true;
        scanBtn.style.opacity = "0.5";
        
        const interval = setInterval(() => {
            scanResult.innerText = steps[i];
            i++;
            if (i >= steps.length) {
                clearInterval(interval);
                scanBtn.disabled = false;
                scanBtn.style.opacity = "1";
            }
        }, 800);
    });

    // 2. Scroll suave para los enlaces del menú
    document.querySelectorAll('.cyber-nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    console.log("Terminal vinculada. Autoridades verificadas.");
});