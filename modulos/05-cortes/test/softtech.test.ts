import { describe, it } from "vitest";
import { CASOS_SOFTTECH } from "./casos-softtech.js";

// Cada caso queda como "todo" hasta que exista el motor de cortes.
// Cuando se implemente, cada uno pasa a ser un test real que compara
// el resultado del motor contra `caso.esperado`, al milímetro.
describe("Cortes vs SoftTech", () => {
  for (const caso of CASOS_SOFTTECH) {
    it.todo(`${caso.nombre} (${caso.vano.ancho}×${caso.vano.alto})`);
  }
});
