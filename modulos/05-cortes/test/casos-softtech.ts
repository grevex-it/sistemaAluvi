// Casos medidos en SoftTech (19/10/2026). Son la referencia de corte:
// el motor de cortes tiene que dar EXACTAMENTE estos valores.
// Todas las medidas en milímetros.

export interface CasoSoftTech {
  nombre: string;
  linea: "rotonda-750" | "rotonda-640";
  tipologia: string;
  perfiles: Record<string, string>;
  vano: { ancho: number; alto: number };
  esperado: Record<string, number>;
  /** Por qué este caso importa. */
  nota: string;
}

export const CASOS_SOFTTECH: CasoSoftTech[] = [
  {
    nombre: "R750 puerta 36, marco 93, hoja 411 a 45°",
    linea: "rotonda-750",
    tipologia: "puerta-36-1-hoja",
    perfiles: { marco: "93", hoja: "411" },
    vano: { ancho: 850, alto: 2000 },
    esperado: { anchoHoja: 797, altoParante: 1970 },
    nota: "Coincide exacto con el catálogo L750: A − 53 y H − 26,5 − 3,5 de despeje.",
  },
  {
    nombre: "R640 puerta 1 hoja, hoja 1166, marco 1512",
    linea: "rotonda-640",
    tipologia: "puerta-1-hoja",
    perfiles: { marco: "1512", hoja: "1166", portaFelpa: "1170" },
    vano: { ancho: 900, alto: 2050 },
    esperado: { anchoHoja: 853, altoHoja: 2020, portaFelpa: 798 },
    nota: "SoftTech da +1 mm de ancho de hoja y porta felpa respecto del catálogo (852 / 797).",
  },
  {
    nombre: "R640 corrediza 2 hojas, hoja 366",
    linea: "rotonda-640",
    tipologia: "corrediza-2-hojas",
    perfiles: { hoja: "366" },
    vano: { ancho: 900, alto: 2050 },
    esperado: { anchoHoja: 452, altoHoja: 1987 },
    nota: "SoftTech da −1 mm de ancho de hoja respecto del catálogo ((A + 6) / 2 = 453).",
  },
  {
    nombre: "R640 puerta 1 hoja, marco 1160",
    linea: "rotonda-640",
    tipologia: "puerta-1-hoja",
    perfiles: { marco: "1160", hoja: "1166", portaFelpa: "1170" },
    vano: { ancho: 900, alto: 2050 },
    esperado: { anchoHoja: 863, altoHoja: 2025, portaFelpa: 808 },
    nota: "El catálogo no cubre el marco 1160; este caso sale solo de SoftTech.",
  },
];
