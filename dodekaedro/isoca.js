// =====================================================================
// ICOSAEDRO REGULAR — coordenadas exactas basadas en la proporción áurea (φ)
// φ = 1.6180339887..., escaladas por 50 (mismo criterio que dodeka.js).
// 50 * φ = 80.9016994...
//
// Topología (verificada por convex hull, no a mano):
//   12 vértices — cada uno con grado 5 (5 aristas)
//   30 aristas  — todas de longitud idéntica (100.0)
//   20 caras    — todas triángulos equiláteros, con orientación exterior consistente
// =====================================================================

// --- 3. LISTA DE CONEXIONES CURVAS ---
const conexiones_curvas = [
    // [0, 1]
];

// --- 4. LISTA DE ESFERAS ---
const puntos_con_esfera = [];

// --- 5. CONEXION DE LOS PUNTOS (las 30 ARISTAS reales del icosaedro) ---
const conexiones = [
    [0, 2], [0, 4], [0, 6], [0, 8], [0, 10],
    [1, 3], [1, 4], [1, 6], [1, 9], [1, 11],
    [2, 5], [2, 7], [2, 8], [2, 10],
    [3, 5], [3, 7], [3, 9], [3, 11],
    [4, 6], [4, 8], [4, 9],
    [5, 7], [5, 8], [5, 9],
    [6, 10], [6, 11],
    [7, 10], [7, 11],
    [8, 9],
    [10, 11]
];

// --- 6. TUS PUNTOS 3D (12 vértices del icosaedro) ---
const puntos = [
    [0, 50, 80.9016994],    // 0
    [0, 50, -80.9016994],   // 1
    [0, -50, 80.9016994],   // 2
    [0, -50, -80.9016994],  // 3
    [50, 80.9016994, 0],    // 4
    [50, -80.9016994, 0],   // 5
    [-50, 80.9016994, 0],   // 6
    [-50, -80.9016994, 0],  // 7
    [80.9016994, 0, 50],    // 8
    [80.9016994, 0, -50],   // 9
    [-80.9016994, 0, 50],   // 10
    [-80.9016994, 0, -50]   // 11
];

// --- 7. PINTAR UN POLIGONO DENTRO DEL PLANO (las 20 CARAS triangulares reales) ---
const misPoligonos = [
    { puntos: [9, 8, 5],  color: "rgba(255, 77, 77, 0.5)" },    // 1
    { puntos: [6, 10, 0], color: "rgba(77, 255, 77, 0.5)" },    // 2
    { puntos: [2, 5, 8],  color: "rgba(77, 77, 255, 0.5)" },    // 3
    { puntos: [2, 0, 10], color: "rgba(255, 255, 77, 0.5)" },   // 4
    { puntos: [2, 8, 0],  color: "rgba(255, 77, 255, 0.5)" },   // 5
    { puntos: [2, 7, 5],  color: "rgba(77, 255, 255, 0.5)" },   // 6
    { puntos: [2, 10, 7], color: "rgba(255, 153, 51, 0.5)" },   // 7
    { puntos: [3, 5, 7],  color: "rgba(153, 51, 255, 0.5)" },   // 8
    { puntos: [3, 1, 9],  color: "rgba(51, 255, 153, 0.5)" },   // 9
    { puntos: [3, 9, 5],  color: "rgba(255, 51, 153, 0.5)" },   // 10
    { puntos: [4, 0, 8],  color: "rgba(153, 255, 51, 0.5)" },   // 11
    { puntos: [4, 8, 9],  color: "rgba(51, 153, 255, 0.5)" },   // 12
    { puntos: [4, 9, 1],  color: "rgba(255, 102, 0, 0.5)" },    // 13
    { puntos: [4, 6, 0],  color: "rgba(0, 204, 255, 0.5)" },    // 14
    { puntos: [4, 1, 6],  color: "rgba(204, 0, 255, 0.5)" },    // 15
    { puntos: [11, 7, 10],color: "rgba(255, 204, 0, 0.5)" },    // 16
    { puntos: [11, 10, 6],color: "rgba(0, 255, 128, 0.5)" },    // 17
    { puntos: [11, 6, 1], color: "rgba(255, 0, 128, 0.5)" },    // 18
    { puntos: [11, 3, 7], color: "rgba(128, 0, 255, 0.5)" },    // 19
    { puntos: [11, 1, 3], color: "rgba(0, 128, 255, 0.5)" }     // 20
];

const pintarPetalos = [
    // vacío por defecto
];
