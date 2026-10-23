# Validación de recetas contra SoftTech

El taller de ALUVI corta lo que le da SoftTech (Abernetica Softech 4.0 Hydro). Por eso **SoftTech es la referencia de corte**: el sistema tiene que dar exactamente las mismas medidas.

## Regla

1. **Primero lo que dice el cliente.**
2. **Si no cierra, lo que hace SoftTech.**
3. La fórmula base sale del catálogo técnico de Hydro y se ajusta al mm hasta coincidir con SoftTech en varias medidas.
4. La respuesta de Hydro (consulta hecha por su formulario web) queda como respaldo para lo que el catálogo no trae.

SoftTech se usa solo como "examen": el cliente no tiene que usar dos sistemas en paralelo. El control lo hace el equipo de Grevex.

## Diferencias encontradas (catálogo vs SoftTech)

Las diferencias son **sistemáticas, de ±1 mm**:

| Línea | Pieza | Diferencia de SoftTech |
|---|---|---|
| L750 | Zócalo | −1,5 mm (el cliente no usa ese caso) |
| R640 | Ancho de hoja de corrediza | −1 mm |
| R640 | Ancho de hoja y porta felpa de puerta (marco 1512) | +1 mm |
| HA62 | Hoja de corrediza | ancho −1 mm, alto +1 mm |
| L750 | Puerta 36 | coincide exacto |

También difieren cantidades de accesorios: en R640 SoftTech pone 8 ruedas (el catálogo 4) y aplica la felpa ×1,3.

## Casos de prueba

Los casos medidos en SoftTech están en `modulos/05-cortes/test/casos-softtech.ts` y corren en el CI. Cada caso nuevo que se mida en SoftTech se agrega ahí con su vano, sus perfiles y las medidas esperadas.

## Cómo agregar un caso

1. Cargar la abertura en SoftTech con un vano concreto.
2. Anotar el vano, los perfiles y el largo de cada pieza que da SoftTech.
3. Agregarlo a `casos-softtech.ts` con una nota de por qué importa.
4. El test tiene que pasar antes de subir cualquier cambio en recetas.
