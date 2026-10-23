# Módulo 08 — Imagen IA

> Etapa 3 · Milestone: **Presupuesto y precios** · Label: `mod:imagen-ia`

## Qué hace

Genera con IA una imagen ilustrativa de la abertura (por ejemplo, una puerta) según las medidas que cargó el operador, para incluirla en el PDF del presupuesto.

## Qué incluye

- Armado del pedido a la IA a partir de la abertura: tipo, medidas, terminación, cantidad de hojas.
- Generación de la imagen y guardado para reutilizarla.

## Reglas de negocio

- **Calidad baja o media alcanza**: es ilustrativa, no técnica. Elegir el modelo y la calidad más económicos que cumplan.
- La imagen no reemplaza al dibujo técnico: el operador elige dibujo técnico, render IA o ambos.
- Si la generación falla, el presupuesto se genera igual, sin la imagen.

## Dónde vive el código

- Lógica: `modulos/08-imagen-ia/src/`
- No tiene pantallas propias; se usa desde `07-presupuesto`.

## Relación con otros módulos

- **Depende de**: `@aluvi/shared`.
- **Lo usa**: `07-presupuesto`.

## Pendientes

- [ ] Elegir proveedor y modelo de imagen según costo por imagen.
- [ ] Definir si se cachea por tipología y medidas para no regenerar.
