// ==========================================
// CONFIG_DEDOS
// ------------------------------------------
// Aquí defines, por cada dedo, qué puntos (idx = índice dentro
// del array "puntos" de mano.js) se mueven al presionar la tecla G,
// y hacia qué coordenada [x, y, z] deben viajar cuando la mano
// está 100% cerrada (factorCierre = 1).
//
// Puedes agregar más puntos a cada dedo (por ejemplo el segmento
// anterior a la punta) para lograr una curva más suave, o mover
// los "target" para ajustar qué tan cerrado se ve el puño.
// ==========================================
const CONFIG_DEDOS = {

    // --- superindice de la flor (puntos base 17-40, punta ~33-40) ---
    demo: [ //
        { idx: 8, target:  [100,   0,   0] },
        { idx: 12, target:  [86.6,  0,  50] },
        { idx: 16, target: [50,   0, 86.6] },
        { idx: 14, target: [ 0,   0,  100] },
        { idx: 19, target: [-50,  0, 86.6] },
        { idx: 13, target: [-86.6, 0,  50] },
        { idx: 11, target: [-100,  0,   0] },
        { idx: 15, target: [-86.6, 0, -50] },
        { idx: 10, target: [-50, 0, -86.6] },
        { idx: 17, target: [ 0,  0,  -100] },
        { idx: 18, target: [ 50, 0, -86.6] },
        { idx: 9, target: [86.6, 0,  -50] }
/*
        [100, 0, 0],[86.6, 0, 50],[50, 0, 86.6],[0, 0, 100],[-50, 0, 86.6],[-86.6, 0, 50],
    [-100, 0, 0],[-86.6, 0, -50],[-50, 0, -86.6],[0, 0, -100],[50, 0, -86.6],[86.6, 0, -50]  
*/    
    ],

    // --- ÍNDICE (puntos base 41-72, punta 65-72) ---
    mono: [
        { idx: 21, target: [-50.0, -30,   0] }, // 21
        { idx: 22, target: [ -21.65, 0, -12.5] }, 
        { idx: 24, target: [  0, 20, 0] },
        { idx: 23, target: [ -21.65,  0, 12.5] },
        { idx: 25, target: [ 25.0, -30,  43.3] }, // 25
        { idx: 28, target: [ 21.65, 0,  12.5] },  ///--------------------
        { idx: 27, target: [ 0, 20, 0]  },
        { idx: 26, target: [0,  0, 25] },  
        { idx: 29, target: [-25.0, -30, 43.3] }, // 29
        { idx: 30, target: [-21.65,  0, 12.5] },
        { idx: 31, target: [ 0,  20, 0] },
        { idx: 32, target: [0,  0, 25] },  
        { idx: 33, target: [50, -30, 0] }, // 33
        { idx: 34, target: [21.65,  0, 12.5] },
        { idx: 35, target: [ 0,  20, 0] },
        { idx: 36, target: [21.65,  0, -12.5] },
        { idx: 37, target: [-25.0, -30, -43.3] }, // 37
        { idx: 38, target: [ 0,  0, -25] },
        { idx: 39, target: [ 0,  20, 0] },
        { idx: 40, target: [-21.65,  0, -12.5] },    
        { idx: 41, target: [25.0, -30, -43.3] }, // 41
        { idx: 42, target: [ 21.65,  0, -12.5] },
        { idx: 43, target: [ 0,  20, 0] },
        { idx: 44, target: [0,  0, -25] },   
    ],

    // --- MEDIO (puntos base 73-104, punta 97-104) ---
    hojas: [
        { idx: 45, target: [0, 15, -80] }, //
        { idx: 46, target: [-25, 10, -43.3] },
        { idx: 47, target: [0, 25, 0] },
        { idx: 48, target: [25, 10, -43.3] },
        { idx: 49, target: [69.3, 15, -40]  }, //
        { idx: 50, target: [43.3, 10, 0]  },
        { idx: 51, target: [0, 25, 0]  },
        { idx: 52, target: [25, 10, -43.3] },
        { idx: 53, target: [69.3, 15, 40]  }, // 
        { idx: 54, target: [25, 10, 43.3]  },
        { idx: 55, target: [0, 25, 0]  },
        { idx: 56, target: [43.3, 10, 0]  },
        { idx: 57, target: [0, 15, 80]  }, // 
        { idx: 58, target: [-25, 10, 43.3]  },
        { idx: 59, target: [0, 25, 0]  },
        { idx: 60, target: [25, 10, 43.3]  },
        { idx: 61, target: [-69.3, 15, 40]  }, // ----------
        { idx: 62, target: [-43.3, 10, 0]  },
        { idx: 63, target: [0, 25, 0]  },
        { idx: 64, target: [-25, 10, 43.3]  },
        { idx: 65, target: [-69.3, 15, -40]  }, // ----------
        { idx: 66, target: [-25, 10, -43.3]  },
        { idx: 67, target: [0, 25, 0]  },
        { idx: 68, target: [-43.3, 10, 0]  }
    ],

    // --- ANULAR (puntos base 105-136, punta 129-136) ---
    base: [
        { idx: 69, target: [48.30, 0, -12.94] },
        { idx: 70, target: [48.30, 0, 12.94] },
        { idx: 71, target: [14.49, 15, 3.88] },
        { idx: 72, target: [14.49, 15, -3.88] },


        { idx: 73, target: [48.30, 0, 12.94] },
        { idx: 74, target: [35.36, 0, 35.36] },
        { idx: 75, target: [10.61, 15, 10.61] },
        { idx: 76, target: [14.49, 15, 3.88] }, 
        
        { idx:  0, target: [12.94, 0, 48.30] },
        { idx: 77, target: [35.36, 0, 35.36] },
        { idx: 78, target: [10.61, 15, 10.61] },
        { idx: 79, target: [3.88, 15, 14.49] },

        { idx: 81, target: [12.94, 0, 48.30] },
        { idx: 82, target: [-12.94, 0, 48.30]  },
        { idx: 80, target: [3.88, 15, 14.49]  },
        { idx: 83, target: [-3.88, 15, 14.49]  },
        
    //    { idx: 168, target: [52, 45, 5]  }

    ]

};
