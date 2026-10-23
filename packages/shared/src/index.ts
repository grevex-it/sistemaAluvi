// Tipos comunes a todo el sistema. Acá va solo lo que usan dos o más módulos.

/**
 * Todas las medidas se guardan y se calculan en milímetros.
 * El operador puede cargar en cm o m: la conversión se hace al ingresar el dato.
 */
export type Milimetros = number & { readonly __unidad: "mm" };

/** Monedas con las que opera ALUVI. */
export type Moneda = "ARS" | "USD";

export interface Importe {
  monto: number;
  moneda: Moneda;
}

/** Líneas de Hydro con las que trabaja ALUVI. */
export const LINEAS = ["rotonda-750", "rotonda-640", "ha62", "nordical", "orbital"] as const;
export type Linea = (typeof LINEAS)[number];

/** Terminaciones del aluminio; cada una tiene su propio precio por kg. */
export const TERMINACIONES = [
  "blanco",
  "negro",
  "bronce",
  "gris-oscuro",
  "anodizado",
  "simil-madera",
] as const;
export type Terminacion = (typeof TERMINACIONES)[number];
