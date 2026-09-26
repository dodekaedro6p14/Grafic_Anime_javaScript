// --- controles.js ---
function configurarControles(estado) {
    const vel = 10
    // 1. Controles de Teclado
    window.onkeydown = (e) => {
        const key = e.key;

        if (key === "ArrowRight") estado.offsetX += vel;
        if (key === "ArrowLeft") estado.offsetX -= vel;
        if (key === "ArrowUp") estado.offsetY -= vel;
        if (key === "ArrowDown") estado.offsetY += vel;

         // --- EVITAR SCROLL DEL NAVEGADOR ---
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) {
            e.preventDefault();
        }

        if (key === 'q') estado.zoom += 0.1;
        if (key === 'e') estado.zoom = Math.max(0.1, estado.zoom - 0.1);
        if (key === 'a') estado.angleY -= 0.1;
        if (key === 'd') estado.angleY += 0.1;
        if (key === 'w') estado.angleX += 0.1;
        if (key === 's') estado.angleX -= 0.1;

        if (key === 'r') {
            estado.angleX = 0;
            estado.angleY = 0;
            estado.angleZ = 0;
            estado.zoom = 1;
            estado.animacionActiva = false;
            estado.offsetX = 0;
            estado.offsetY = 0;
        }
        if (key === 'p') {
            estado.animacionActiva = !estado.animacionActiva;
        }
        if (key === 'l') {
             estado.animacionZ_puntos_activa = !estado.animacionZ_puntos_activa;
        }
        if (key === 'k') {
            estado.animacionX = !estado.animacionX;
             console.log("Animación Eje X:", estado.animacionZ ? "ON" : "OFF"); 
        }
        if (key === 'v') {
            estado.mostrarIndices = !estado.mostrarIndices;
        }
        // --- EN controles.js dentro de window.onkeydown ---
        if (key.toLowerCase() === 'g') {
            estadoMano = (estadoMano === MANO_ESTADOS.ABIERTO) ? MANO_ESTADOS.CERRADO : MANO_ESTADOS.ABIERTO;
            console.log("Estado de la mano:", estadoMano === MANO_ESTADOS.CERRADO ? "CERRADO" : "ABIERTO");
        }
    };

    // 2. Mouse (Arrastre para rotar)
    let drag = false, lastX, lastY;

    window.onmousedown = (e) => {
        drag = true;
        lastX = e.clientX;
        lastY = e.clientY;
    };

    window.onmouseup = () => drag = false;

    window.onmousemove = (e) => {
        if (!drag) return;
        estado.angleY += (e.clientX - lastX) * 0.01;
        estado.angleX += (e.clientY - lastY) * 0.01;
        lastX = e.clientX;
        lastY = e.clientY;
    };
}