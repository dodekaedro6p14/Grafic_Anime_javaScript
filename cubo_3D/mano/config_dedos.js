// ==========================================
// CONFIG_DEDOS
// ------------------------------------------
// Aquí defines, por cada dedo, qué puntos (idx = índice dentro
// del array "puntos" de mano.js) se mueven al presionar la tecla G,
// y hacia qué coordenada [x, y, z] deben viajar cuando la mano
// está 100% cerrada (factorCierre = 1).
//
// A DIFERENCIA de la versión anterior, ahora TODOS los puntos de
// cada dedo (desde el primer nudillo en adelante, con y < 0) están
// incluidos y editables. El nudillo base (y = 40, donde el dedo se
// une a la palma) se dejó FIJO a propósito: es el "eje de bisagra"
// del dedo, por eso no aparece en esta lista.
//
// Los "target" de INDICE, MEDIO, ANULAR y MENOR se calcularon con
// una fórmula de rotación (no fueron puestos a mano uno por uno):
// cada punto gira alrededor del nudillo (pivote en y=40) un ángulo
// proporcional a qué tan lejos está de la base, y su radio se va
// "encogiendo" mientras más cerca está de la punta. Así el dedo
// entero se pliega de forma progresiva y simultánea, en vez de que
// solo la puntita salte de golpe hacia la palma.
//
// ¿Quieres que doble más, menos, o distinto? Edita estas constantes
// en gen_config.js y vuelve a correrlo con: node gen_config.js
//   MAX_DOBLEZ       -> qué tanto (en grados) gira la punta del dedo
//   CONTRACCION_MAX   -> qué tanto se "encoge" el dedo hacia el puño
// O si prefieres, edita directamente cualquier [x, y, z] de la lista,
// son solo coordenadas del plano cartesiano, totalmente editables.
//
// PULGAR: se dejó FUERA de este cálculo porque su movimiento es
// distinto (no gira igual que los otros 4 dedos); su target de abajo
// se puso a mano, con menos puntos.
// ==========================================
const CONFIG_DEDOS = {

    // --- PULGAR (movimiento manual, NO generado por la fórmula) ---
    PULGAR: [
        { idx: 26, target: [-35, 0, -5]},
        { idx: 30, target: [-35, 0, -20]},
        { idx: 25, target: [-50, -10, -10]}, 
        { idx: 29, target: [-50, -10, -20]}, 
        { idx: 28, target: [-25, -30, -10]},
        { idx: 32, target: [-25, -30, -20]},
        { idx: 33, target: [-25, -40, -10]},
        { idx: 37, target: [-25, -40, -20]},
        { idx: 27, target: [-35, -37, -10]},
        { idx: 31, target: [-35, -37, -20]},
        { idx: 35, target: [-5, -35, -10] },
        { idx: 39, target: [-5, -35, -20] },        
        { idx: 34, target: [-25, -30, -10]},
        { idx: 38, target: [-25, -30, -20]},        
        { idx: 36, target: [-5, -30, -10] },
        { idx: 40, target: [-5, -30, -20] }
    ],

    // --- INDICE ---
    INDICE: [
    //    { idx: 43, target: [-25, 22, 61] },
    //    { idx: 44, target: [-5, 22, 61] },
    //    { idx: 47, target: [-25, 9, 50] },
    //    { idx: 48, target: [-5, 9, 50] },
        { idx: 49, target: [-25, -43,  20] }, 
        { idx: 50, target: [-5, -43, 20] }, 
        { idx: 51, target: [-25, -80, -5] }, 
        { idx: 52, target: [-5, -80, -5] }, 
        { idx: 53, target: [-25, -30, 10] }, 
        { idx: 54, target: [-5, -30, 10] }, 
        { idx: 55, target: [-23, -66, -13] }, 
        { idx: 56, target: [-3, -66, -13] },  
        { idx: 57, target: [-23, -87, -10] }, 
        { idx: 58, target: [-3, -87, -10] },  
        { idx: 59, target: [-18, -62, -35] }, 
        { idx: 60, target: [-2, -62, -35] },    
        { idx: 61, target: [-23, -66, -13] },
        { idx: 62, target: [-3, -66, -13] },
        { idx: 63, target: [-20, -50, -30] },   
        { idx: 64, target: [-0, -50, -30] },     
        { idx: 65, target: [-18, -50, -38] },
        { idx: 66, target: [-2, -50, -38] },
        { idx: 67, target: [-16, -25, -32] },
        { idx: 68, target: [-7, -25, -32] },
        { idx: 69, target: [-20, -50, -30] },
        { idx: 70, target: [-0, -50, -30] },
        { idx: 71, target: [-16, -25, -27] },
        { idx: 72, target: [-7, -25, -27] },
    ],

    // --- MEDIO ---
    MEDIO: [
//        { idx: 75, target: [1, 23, 64] },
//        { idx: 76, target: [21, 23, 64] },
//        { idx: 79, target: [1, 10, 55] },
//        { idx: 80, target: [21, 10, 55] },
        { idx: 81, target: [1, -55, 20] },
        { idx: 82, target: [21, -55, 20] },
        { idx: 83, target: [0, -60, -30] }, 
        { idx: 84, target: [20, -60, -30] }, 
        { idx: 85, target: [1, -35, 10] },
        { idx: 86, target: [21, -35, 10] },
        { idx: 87, target: [0, -45, -32] }, 
        { idx: 88, target: [20, -45, -32] }, 
        { idx: 89, target: [0, -58, -40] }, 
        { idx: 90, target: [20, -58, -40] }, 
        { idx: 91, target: [2, -10, -40] }, 
        { idx: 92, target: [19, -10, -40] }, 
        { idx: 93, target: [0, -45, -32] }, 
        { idx: 94, target: [20, -45, -32] }, 
        { idx: 95, target: [2, -10, -30] },
        { idx: 96, target: [19, -10, -30] },
        { idx: 97, target: [2, 5, -30] },
        { idx: 98, target: [19, 5, -30] },
        { idx: 99, target: [4, 2, -10] },
        { idx: 100, target: [16, 2, -10] },
        { idx: 101, target: [2, -10, -30] }, 
        { idx: 102, target: [19, -10, -30] }, 
        { idx: 103, target: [4, -7, -10] },
        { idx: 104, target: [16, -7, -10] },
    ],

    // --- ANULAR ---
    ANULAR: [
//        { idx: 107, target: [23, 22, 61] },
//        { idx: 108, target: [43, 22, 61] },
//        { idx: 111, target: [23, 9, 50] },
//        { idx: 112, target: [43, 9, 50] },
        { idx: 113, target: [23, -50, 10] },
        { idx: 114, target: [43, -50, 10] },
        { idx: 115, target: [23, -45, -32] }, //
        { idx: 116, target: [40, -45, -32] }, //
        { idx: 117, target: [23, -30, 10] }, 
        { idx: 118, target: [40, -30, 10] }, 
        { idx: 119, target: [22, -30, -32] },
        { idx: 120, target: [42, -30, -32] },
        { idx: 121, target: [22, -30, -46] },
        { idx: 122, target: [38, -30, -46] },
        { idx: 123, target: [22, 0, -38] }, 
        { idx: 124, target: [38, 0, -38] }, 
        { idx: 125, target: [22, -30, -32] }, 
        { idx: 126, target: [38, -30, -32] }, 
        { idx: 127, target: [22, 0, -28] }, 
        { idx: 128, target: [38, 0, -28] }, 

        { idx: 129, target: [24, 12, -28] },
        { idx: 130, target: [38, 12, -28] },
        { idx: 131, target: [28, 12, -10] },
        { idx: 132, target: [38, 12, -10] },

        { idx: 133, target: [24, 0, -28] }, 
        { idx: 134, target: [38, 0, -28] }, 
        { idx: 135, target: [28, 5, -10] },
        { idx: 136, target: [38, 5, -10] },
    ],

    // --- MENOR ---
    MENOR: [
//        { idx: 139, target: [44, 33, 57] },
//        { idx: 140, target: [62, 33, 57] },
//        { idx: 143, target: [44, 19, 49] },
//        { idx: 144, target: [62, 19, 49] },
        { idx: 145, target: [40, -50, 10] },
        { idx: 146, target: [58, -50, 10] },
        { idx: 147, target: [40, -45, -32] }, //
        { idx: 148, target: [55, -45, -32] },
        { idx: 149, target: [40, -30, 10] },
        { idx: 150, target: [55, -30, 10] },
        { idx: 151, target: [39, -30, -32] }, //aa
        { idx: 152, target: [55, -30, -32] },
        { idx: 153, target: [39, -30, -46] },
        { idx: 154, target: [55, -30, -46] },
        { idx: 155, target: [39, 0, -38] },
        { idx: 156, target: [53, 0, -38] },
        { idx: 157, target: [39, -30, -32] },
        { idx: 158, target: [53, -30, -32] },
        { idx: 159, target: [39, 0, -28] },
        { idx: 160, target: [53, 0, -28] },

        { idx: 161, target: [38, 12, -28] },
        { idx: 162, target: [52, 12, -28] },
        { idx: 163, target: [38, 12, -10] },
        { idx: 164, target: [52, 12, -10] },

        { idx: 165, target: [36, 0, -28] },
        { idx: 166, target: [50, 0, -28] },
        { idx: 167, target: [36, 5, -10] },
        { idx: 168, target: [50, 5, -10] },
    ],
    
};
