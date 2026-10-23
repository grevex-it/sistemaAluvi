# Módulo 07 — Presupuesto y precios

> Etapa 3 · Milestone: **Presupuesto y precios** · Label: `mod:presupuesto`

## Qué hace

Arma el presupuesto para el cliente final de ALUVI y lo exporta en PDF. También muestra cuánto se ganó en cada obra.

## Qué incluye

- **Cálculo del costo** de cada abertura: kg de aluminio × precio por kg de la terminación + accesorios + vidrio.
- **Precio de venta** = costo + ganancia.
- **PDF del presupuesto**:
  - Estructura de referencia que pasó el cliente: una ficha por abertura (dibujo, medidas, descripción, precio), total y página de condiciones.
  - Con estilo, fuentes y colores propios de ALUVI.
  - Al generarlo se elige: **dibujo técnico, render IA o ambos**.
- **Rentabilidad por obra**: ganancia de cada trabajo, cruzando lo presupuestado, lo comprado y lo cobrado.

## Reglas de negocio

- **El costo nunca se le muestra al cliente final.** El PDF solo lleva el precio de venta.
- Los precios de los insumos varían: el presupuesto guarda los precios con los que se calculó.
- El detalle de cada ficha lo define el cliente.

## Dónde vive el código

- Lógica: `modulos/07-presupuesto/src/`
- Rutas de la API: `apps/api/src/rutas/presupuesto.ts`
- Pantallas: `apps/web/src/app/presupuesto/`

## Relación con otros módulos

- **Depende de**: `@aluvi/cortes` (kg y m² de cada abertura), `@aluvi/catalogo` (precios), `@aluvi/imagen-ia` (render), `@aluvi/base` (clientes y obras). Lee de `@aluvi/finanzas` lo cobrado por obra.

## Pendientes

- [ ] Modelo de PDF que ALUVI usa hoy y el detalle de cada ficha.
- [ ] Texto de la página de condiciones.
- [ ] Cómo define hoy el margen de ganancia (por obra, por tipo de abertura, fijo).
- [ ] Lectura con IA de listas de precios y facturas de proveedores: a definir por el cliente (no está en el alcance).
