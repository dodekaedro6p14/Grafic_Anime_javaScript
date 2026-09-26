// --- 3. LISTA DE CONEXIONES CURVAS ---
const conexiones_curvas = [
    [2, 7], [3, 6], [6, 2], [7, 3] // tetaedro superior
];

// --- 4. LISTA DE ESFERAS ---
const puntos_con_esfera = [0];

// --- 5. CONEXION DE LOS PUNTOS ---
const conexiones = [
    [8, 2],[2, 3],[3, 5],[8, 5], //cubo
    [7,9], [8,9], [6, 9], [5, 9], //conexiones cola
    [9,10], [10,11], [10,12] // rotor cola
];

// --- 6. TUS PUNTOS 3D ---
// ⚠️ 
const puntos = [
    [0, 0, 0], // 18: El núcleo

    [-50, -50, -50], [-50, 50, -50], [50, 50, -50], [50, -50, -50],
    [50, 50, 50], [50, -50, 50], [-50, -50, 50], [-50, 50, 50],

    [0, 0, 250], [-10,0,250], [-10, 35, 245],[-10, 35, 255], [-10,-35,245], [-10,-35,255], // rotor cola 9-12
    [0,-90,0], [-5, -90, 230], [5, -90, 230], [-5, -90, -230], [5, -90, -230] // rotor principal
];
// --- 7. PINTAR UN POLIGONO DENTRO DEL PLANO ...
// Ejemplo: Un triángulo (3 puntos) y un cuadrado (4 puntos)
const misPoligonos = [
    { puntos: [1, 2, 3,4], color: "rgba(255, 0, 110, 0.5)" }, // Triángulo
    { puntos: [8,5, 6, 7], color: "rgba(255, 0, 110, 0.5)" },
    { puntos: [1, 7, 6, 4], color: "rgba(255, 0, 110, 0.5)" },
    { puntos: [7, 8, 9], color: "rgba(255, 0, 110, 0.5)" },
    { puntos: [5, 6, 9], color: "rgba(255, 0, 110, 0.5)" } // Cuadrado */
];
const pintarPetalos = [
    { puntos: [2,3,5,8], color: "rgba(255, 0, 110, 0.5)", altura: 0 }, 
    { puntos: [10,11,12], color: "rgba(255, 0, 110, 1.2)", altura: 0 }, 
    { puntos: [10,13,14], color: "rgba(255, 0, 110, 1.2)", altura: 0 }, 
    { puntos: [16,17,15], color: "rgba(255, 0, 110, 1.2)", altura: 0 }, 
    { puntos: [18,19,15], color: "rgba(255, 0, 110, 1.2)", altura: 0 },   
/*    { puntos: [6,5,8], color: "rgba(255, 0, 110, 1.2)", altura: 0 }  */
];    