// Obtener referencias del DOM
const btnMenuFlotante = document.getElementById('menu-flotante');
const panelInfo = document.getElementById('panel-info');

if (btnMenuFlotante && panelInfo) {
    btnMenuFlotante.addEventListener('click', (e) => {
        // Evita que el clic propague eventos indeseados
        e.stopPropagation(); 
        
        // Alterna la clase 'abierto'
        panelInfo.classList.toggle('abierto');
    });
}