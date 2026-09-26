// Script auxiliar (no se usa en la mano, solo para GENERAR los valores
// de config_dedos.js con una curva de doblez coherente)

const DEG = Math.PI / 180;

// Puntos reales de mano.js (excluyendo la base y=40 de cada dedo, y excluyendo pulgar)
const fingers = {
  INDICE: {
    tipY: -150,
    pts: {
      43:[-25,-30,30],44:[-5,-30,30],47:[-25,-30,10],48:[-5,-30,10],
      49:[-25,-35,30],50:[-5,-35,30],53:[-27,-35,10],54:[-7,-35,10],
      51:[-27,-80,30],52:[-7,-80,30],55:[-27,-80,10],56:[-7,-80,10],
      57:[-27,-85,30],58:[-7,-85,30],61:[-27,-85,10],62:[-7,-85,10],
      59:[-25,-120,27],60:[-9,-120,27],63:[-25,-120,7],64:[-9,-120,7],
      65:[-25,-125,27],66:[-9,-125,27],69:[-25,-125,7],70:[-9,-125,7],
      67:[-20,-150,23],68:[-12,-150,23],71:[-20,-150,5],72:[-12,-150,5]
    }
  },
  MEDIO: {
    tipY: -155,
    pts: {
      75:[1,-35,30],76:[21,-35,30],79:[1,-35,10],80:[21,-35,10],
      81:[1,-40,30],82:[21,-40,30],85:[1,-40,10],86:[21,-40,10],
      83:[1,-85,30],84:[21,-85,30],87:[1,-85,10],88:[21,-85,10],
      89:[1,-90,30],90:[21,-90,30],93:[1,-90,10],94:[21,-90,10],
      91:[2,-130,27],92:[19,-130,27],95:[2,-130,7],96:[19,-130,7],
      97:[2,-135,27],98:[19,-135,27],101:[2,-135,7],102:[19,-135,7],
      99:[4,-155,23],100:[16,-155,23],103:[4,-155,5],104:[16,-155,5]
    }
  },
  ANULAR: {
    tipY: -150,
    pts: {
      107:[23,-30,30],108:[43,-30,30],111:[23,-30,10],112:[43,-30,10],
      113:[23,-35,30],114:[43,-35,30],117:[23,-35,10],118:[43,-35,10],
      115:[25,-80,30],116:[45,-80,30],119:[25,-80,10],120:[45,-80,10],
      121:[25,-85,30],122:[45,-85,30],125:[25,-85,10],126:[45,-85,10],
      123:[27,-120,27],124:[43,-120,27],127:[27,-120,7],128:[43,-120,7],
      129:[27,-125,27],130:[43,-125,27],133:[27,-125,7],134:[43,-125,7],
      131:[29,-150,23],132:[41,-150,23],135:[29,-150,5],136:[41,-150,5]
    }
  },
  MENOR: {
    tipY: -120,
    pts: {
      139:[44,-25,30],140:[62,-25,30],143:[44,-25,10],144:[62,-25,10],
      145:[44,-30,30],146:[62,-30,30],149:[44,-30,10],150:[62,-30,10],
      147:[46,-60,27],148:[61,-60,27],151:[46,-60,7],152:[61,-60,7],
      153:[46,-65,27],154:[61,-65,27],157:[46,-65,7],158:[61,-65,7],
      155:[48,-85,25],156:[60,-85,25],159:[48,-85,5],160:[60,-85,5],
      161:[48,-90,25],162:[61,-90,25],165:[48,-90,5],166:[61,-90,5],
      163:[50,-120,23],164:[58,-120,23],167:[50,-120,5],168:[58,-120,5]
    }
  }
};

const PIVOT_Y = 40;       // eje del nudillo (base del dedo)
const MAX_DOBLEZ = 205;   // grados que se dobla la PUNTA respecto a la base
const CONTRACCION_MAX = 0.82; // encogimiento máximo del radio en la punta

function generar() {
  let out = "const CONFIG_DEDOS = {\n";
  for (const [nombre, data] of Object.entries(fingers)) {
    out += `\n    // --- ${nombre} ---\n    ${nombre}: [\n`;
    const entries = Object.entries(data.pts).sort((a,b)=>a[0]-b[0]);
    for (const [idxStr, [x,y,z]] of entries) {
      const idx = parseInt(idxStr,10);
      const dy = y - PIVOT_Y;
      const dz = z; // pivote en z=0
      const r = Math.sqrt(dy*dy + dz*dz);
      const baseAngle = Math.atan2(dz, dy);
      const tLineal = Math.min(1, Math.max(0, (PIVOT_Y - y) / (PIVOT_Y - data.tipY)));
      const tBend = Math.pow(tLineal, 1.4);       // ease-in: dobla poco al inicio, mucho al final
      const tContraccion = Math.pow(tLineal, 1.6); // contrae más rápido cerca de la punta
      const angle = baseAngle - (MAX_DOBLEZ * DEG) * tBend;
      const rNew = r * (1 - CONTRACCION_MAX * tContraccion);
      const ndy = rNew * Math.cos(angle);
      const ndz = rNew * Math.sin(angle);
      const ty = Math.round(PIVOT_Y + ndy);
      const tz = Math.round(ndz);
      out += `        { idx: ${idx}, target: [${x}, ${ty}, ${tz}] },\n`;
    }
    out += `    ],\n`;
  }
  out += "\n    // El pulgar NO está incluido (movimiento distinto, se deja fuera a propósito)\n";
  out += "};\n";
  return out;
}

console.log(generar());
