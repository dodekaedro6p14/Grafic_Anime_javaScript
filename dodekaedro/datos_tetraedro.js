// --- 3. LISTA DE CONEXIONES CURVAS ---
// Agrega aquí los pares de puntos que quieres unir
const conexiones_curvas = [
    [1, 2]

/*
    [9, 10],[10, 11],[11, 12],[12, 13], // tetaedro superior
    [13, 14],[14, 15],[15, 16],[16, 17], [17, 18], [18,19], [19, 20] */
];

// --- 4. LISTA DE ESFERAS ---
// Elegir los punos para agregar esferas
const puntos_con_esfera = [8];

// --- 5. CONEXION DE LOS PUNTOS ---
const conexiones = [
    [5, 4], [4, 7], [7, 6], [6, 5] 
];

// --- 6. TUS PUNTOS 3D ---
// ⚠️ 
const puntos = [
   /*[-x, -y, -z]*/ 
    [-50, -50, -50], [50, -50, -50], [50, 50, -50], [-50, 50, -50],
    [-50, 50, 50], [50, 50, 50], [50, -50, 50], [-50, -50, 50],
    [0, 0, 0], // 9: El núcleo

    /* punto 9 - 20  */
    [-25, 0, 80.9], [25, 0, 80.9], [-25, 0, -89.9], [25, 0, -89.9],
    [0, -89.9, 25], [0, -89.9, -25], [0, 89.9, 25], [0, 89.9, -25],
    [-89.9, -25, 0], [-89.9, 25, 0], [89.9, -25, 0], [89.9, 25, 0]

/*    [100, 0, 0],[86.6, 0, 50],[50, 0, 86.6],[0, 0, 100],[-50, 0, 86.6],[-86.6, 0, 50],
    [-100, 0, 0],[-86.6, 0, -50],[-50, 0, -86.6],[0, 0, -100],[50, 0, -86.6],[86.6, 0, -50]  
*/  
];
// --- 7. PINTAR UN POLIGONO DENTRO DEL PLANO ...
// Ejemplo: Un triángulo (3 puntos) y un cuadrado (4 puntos)
const misPoligonos = [
    { puntos: [4, 5, 6, 7], color: "rgba(255, 77, 77, 0.5)" }, // Cub0 centro
    { puntos: [0, 1, 2, 3], color: "rgba(255, 77, 77, 0.5)" }, 
    { puntos: [2, 3, 4, 5], color: "rgba(77, 255, 77, 0.5)" },
    { puntos: [7, 6, 1, 0], color: "rgba(77, 255, 77, 0.5)" }, 
    { puntos: [5, 2, 1, 6], color: "rgba(77, 77, 255, 0.5)" }, 
    { puntos: [7, 4, 3, 0], color: "rgba(77, 77, 255, 0.5)" }, 
    { puntos: [9, 10, 12, 11], color: "rgba(0, 255, 0, 0.5)" },
    { puntos: [13, 14, 16, 15], color: "rgba(0, 0, 255, 0.5)" },
    { puntos: [17, 18, 20, 19], color: "rgba(255, 0, 0, 0.5)" },
    { puntos: [11, 12, 2, 16, 3], color: "rgba(179, 0, 179, 0.25)" },
    { puntos: [11, 12, 1, 14, 0], color: "rgba(179, 0, 179, 0.25)" },
    { puntos: [14, 13, 6, 19, 1], color: "rgba(179, 0, 179, 0.25)" },
    { puntos: [11, 3, 18, 17, 0], color: "rgba(179, 0, 179, 0.25)" },
    { puntos: [12, 1, 19, 20, 2], color: "rgba(179, 0, 179, 0.25)" },
    { puntos: [13, 14, 0, 17, 7], color: "rgba(179, 0, 179, 0.25)" },
    { puntos: [15, 16, 2, 20, 5], color: "rgba(179, 0, 179, 0.25)" }, //
    { puntos: [13,  7, 9, 10, 6], color: "rgba(179, 0, 179, 0.25)" },
    { puntos: [10, 5, 20, 19, 6], color: "rgba(179, 0, 179, 0.25)" },
    { puntos: [18, 17, 7, 9,  4], color: "rgba(179, 0, 179, 0.25)" },
    { puntos: [15, 16, 3, 18, 4], color: "rgba(179, 0, 179, 0.25)" },
    { puntos: [15, 5, 10, 9,  4], color: "rgba(179, 0, 179, 0.25)" },
/*    { puntos: [77, 78, 80, 79], color: "rgba(102, 102, 0, 0.5)" },
    { puntos: [81, 82, 84, 83], color: "rgba(255, 255, 77, 0.5)" },
    { puntos: [85, 86, 88, 87], color: "rgba(255, 255, 77, 0.5)" },
    { puntos: [89, 90, 92, 91], color: "rgba(255, 255, 128, 0.5)" },
    { puntos: [93, 94, 96, 95], color: "rgba(255, 255, 128, 0.5)" },
    { puntos: [97, 98, 100, 99], color: "rgba(255, 255, 229, 0.5)" },
    { puntos: [101, 102, 104, 103], color: "rgba(255, 255, 229, 0.5)" },
    { puntos: [105, 106, 108, 107], color: "rgba(102, 0, 0, 0.5)" },
    { puntos: [109, 110, 112, 111], color: "rgba(102, 0, 0, 0.5)" },
    { puntos: [113, 114, 116, 115], color: "rgba(255, 0, 0, 0.5)" },
    { puntos: [117, 118, 120, 119], color: "rgba(255, 0, 0, 0.5)" },
    { puntos: [121, 122, 124, 123], color: "rgba(255, 128, 128, 0.5)" },
    { puntos: [125, 126, 128, 127], color: "rgba(255, 128, 128, 0.5)" },
    { puntos: [129, 130, 132, 131], color: "rgba(255, 229, 229, 0.5)" },
    { puntos: [133, 134, 136, 135], color: "rgba(255, 229, 229, 0.5)" },
    { puntos: [137, 138, 140, 139], color: "rgba(102, 0, 77, 0.5)" },
    { puntos: [141, 142, 144, 143], color: "rgba(102, 0, 77, 0.5)" },
    { puntos: [145, 146, 148, 147], color: "rgba(255, 0, 191, 0.5)" },
    { puntos: [149, 150, 152, 151], color: "rgba(255, 0, 191, 0.5)" },
    { puntos: [153, 154, 156, 155], color: "rgba(255, 77, 210, 0.5)" },
    { puntos: [157, 158, 160, 159], color: "rgba(255, 77, 210, 0.5)" },
    { puntos: [161, 162, 164, 163], color: "rgba(255, 179, 236, 0.5)" },
    { puntos: [165, 166, 168, 167], color: "rgba(255, 179, 236, 0.5)" },
     */
];
const pintarPetalos = [
/*     { puntos: [1,2,3], color: "rgba(255, 0, 110, 1.2)", altura: 0 }, 
    { puntos: [2,3,4], color: "rgba(255, 0, 110, 1.2)", altura: 0 }, 
    { puntos: [2,1,4], color: "rgba(255, 0, 110, 1.2)", altura: 0 }, 
    { puntos: [5,6,7], color: "rgba(255, 0, 110, 1.2)", altura: 0 }, 
    { puntos: [6,7,8], color: "rgba(255, 0, 110, 1.2)", altura: 0 },   
    { puntos: [6,5,8], color: "rgba(255, 0, 110, 1.2)", altura: 0 }  */
];    