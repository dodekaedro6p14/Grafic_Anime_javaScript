// --- controles.js ---
function configurarControles(estado) {
    const vel = 10;

    // 1. Controles de Teclado
    window.onkeydown = (e) => {
        // No interceptar teclas mientras el usuario escribe en un input del panel
        if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) {
            if (e.key !== "Escape") return;
        }

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
            estado.rotacionXYZActiva = false;
            estado.offsetX = 0;
            estado.offsetY = 0;
            estado.anguloPropio = 0;
            estado.tiempoFlotar = 0;
            actualizarPanel(estado);
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
            const chk = document.getElementById('ctrl-mostrarIndices');
            if (chk) chk.checked = estado.mostrarIndices;
        }
        if (key.toLowerCase() === 'g') {
            estadoMano = (estadoMano === MANO_ESTADOS.ABIERTO) ? MANO_ESTADOS.CERRADO : MANO_ESTADOS.ABIERTO;
            console.log("Estado de la mano:", estadoMano === MANO_ESTADOS.CERRADO ? "CERRADO" : "ABIERTO");
        }

        // --- NUEVO: tecla Y -> rotación libre y continua en los 3 ejes a la vez ---
        if (key.toLowerCase() === 'y') {
            estado.rotacionXYZActiva = !estado.rotacionXYZActiva;
            const chk = document.getElementById('ctrl-rotXYZ');
            if (chk) chk.checked = estado.rotacionXYZActiva;
            console.log("Rotación libre XYZ:", estado.rotacionXYZActiva ? "ON" : "OFF");
        }

        // --- NUEVO: tecla F -> activar/desactivar la "vida propia" (giro propio + flote) ---
        if (key.toLowerCase() === 'f') {
            estado.flotarActivo = !estado.flotarActivo;
            const chk = document.getElementById('ctrl-flotarActivo');
            if (chk) chk.checked = estado.flotarActivo;
        }

        // --- NUEVO: tecla C -> mostrar/ocultar panel lateral de configuración ---
        if (key.toLowerCase() === 'c') {
            estado.panelAbierto = !estado.panelAbierto;
            aplicarVisibilidadPanel(estado);
        }
    };

    // 2. Mouse: arrastre normal = rotar | Shift + arrastre = mover la figura (paneo, eje X principalmente)
    let drag = false, lastX, lastY;

    window.onmousedown = (e) => {
        // No iniciar arrastre de la escena si el clic fue dentro del panel de configuración
        if (e.target && (e.target.closest('#panel-config') || e.target.closest('#btn-toggle-panel'))) {
            return;
        }
        drag = true;
        lastX = e.clientX;
        lastY = e.clientY;
    };

    window.onmouseup = () => drag = false;

    window.onmousemove = (e) => {
        if (!drag) return;
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;

        if (e.shiftKey) {
            // --- NUEVO: mover (panear) la figura con el mouse, principalmente en el eje X ---
            estado.offsetX += dx;
            estado.offsetY += dy;
        } else {
            estado.angleY += dx * 0.01;
            estado.angleX += dy * 0.01;
        }
        lastX = e.clientX;
        lastY = e.clientY;
    };

    // 3. --- NUEVO: Ctrl + Scroll del mouse para acercar/alejar la cámara (zoom) ---
    window.addEventListener('wheel', (e) => {
        if (!e.ctrlKey) return;
        e.preventDefault();
        const delta = -e.deltaY * 0.001;
        estado.zoom = Math.max(0.1, estado.zoom + delta);
        actualizarPanel(estado);
    }, { passive: false });
}

// ==========================================
// PANEL LATERAL DE CONFIGURACIÓN
// (transparente, se esconde/aparece con la tecla C o el botón ⚙)
// ==========================================
function configurarPanel(estado) {
    const panel = document.getElementById('panel-config');
    const btn = document.getElementById('btn-toggle-panel');
    if (!panel || !btn) return;

    btn.onclick = () => {
        estado.panelAbierto = !estado.panelAbierto;
        aplicarVisibilidadPanel(estado);
    };

    // Mapa: id del <input type="range"> -> propiedad del estado
    const sliders = {
        'ctrl-velGiro':    'velocidadGiro',
        'ctrl-velCierre':  'velocidadCierre',
        'ctrl-velGiroX':   'velGiroX',
        'ctrl-velGiroY':   'velGiroY',
        'ctrl-velGiroZ':   'velGiroZ',
        'ctrl-flotarAmp':  'flotarAmplitud',
        'ctrl-flotarVel':  'flotarVelocidad',
        'ctrl-rotPropia':  'rotacionPropiaVelocidad',
        'ctrl-zoom':       'zoom'
    };

    Object.entries(sliders).forEach(([idInput, prop]) => {
        const input = document.getElementById(idInput);
        if (!input) return;
        input.value = estado[prop];
        input.addEventListener('input', () => {
            estado[prop] = parseFloat(input.value);
            actualizarPanel(estado);
        });
    });

    // Checkboxes
    const checks = {
        'ctrl-rotXYZ':          'rotacionXYZActiva',
        'ctrl-flotarActivo':    'flotarActivo',
        'ctrl-mostrarIndices':  'mostrarIndices'
    };
    Object.entries(checks).forEach(([idInput, prop]) => {
        const input = document.getElementById(idInput);
        if (!input) return;
        input.checked = estado[prop];
        input.addEventListener('change', () => {
            estado[prop] = input.checked;
        });
    });

    // --- NUEVO: selector de puntos visibles en pantalla ---
    const inputPuntos = document.getElementById('ctrl-puntos');
    const btnAplicar = document.getElementById('btn-aplicar-puntos');
    const btnTodos = document.getElementById('btn-todos-puntos');

    if (btnAplicar) {
        btnAplicar.onclick = () => {
            const texto = inputPuntos.value.trim();
            if (texto === '') {
                estado.puntosVisibles = null;
                return;
            }
            const indices = texto
                .split(',')
                .map(s => parseInt(s.trim(), 10))
                .filter(n => !isNaN(n));
            estado.puntosVisibles = new Set(indices);
        };
    }
    if (btnTodos) {
        btnTodos.onclick = () => {
            estado.puntosVisibles = null;
            if (inputPuntos) inputPuntos.value = '';
        };
    }

    actualizarPanel(estado);
    aplicarVisibilidadPanel(estado);
}

// Sincroniza los números que se muestran junto a cada slider con el estado actual
function actualizarPanel(estado) {
    const valores = {
        'val-velGiro':    estado.velocidadGiro,
        'val-velCierre':  estado.velocidadCierre,
        'val-velGiroX':   estado.velGiroX,
        'val-velGiroY':   estado.velGiroY,
        'val-velGiroZ':   estado.velGiroZ,
        'val-flotarAmp':  estado.flotarAmplitud,
        'val-flotarVel':  estado.flotarVelocidad,
        'val-rotPropia':  estado.rotacionPropiaVelocidad,
        'val-zoom':       estado.zoom
    };
    Object.entries(valores).forEach(([id, val]) => {
        const span = document.getElementById(id);
        if (span && val !== undefined) span.textContent = Number(val).toFixed(3);
    });

    const inputZoom = document.getElementById('ctrl-zoom');
    if (inputZoom && document.activeElement !== inputZoom) inputZoom.value = estado.zoom;
}

function aplicarVisibilidadPanel(estado) {
    const panel = document.getElementById('panel-config');
    if (!panel) return;
    panel.classList.toggle('abierto', estado.panelAbierto);
}
