# Módulo 04 — Catálogo y recetas

> Etapa 2 · Milestone: **Cálculo y cortes** · Label: `mod:catalogo`

## Qué hace

Guarda todo lo que el sistema necesita saber para calcular una abertura: las líneas de Hydro, los perfiles, las **recetas** (qué piezas lleva cada tipo de abertura y cómo se calcula el largo de cada una), los vidrios, los accesorios y los precios.

Es la "base técnica" que hoy tiene SoftTech, cargada en un sistema propio.

## Qué incluye

- **Líneas**: Rotonda 750, Rotonda 640, HA62, Nordical y Orbital. El detalle de cada una está en [`lineas/`](./lineas/).
- **Perfiles**: código ADR, línea, peso por metro, largo de barra.
- **Tipologías y recetas**: por cada tipo de abertura, las piezas que lleva y la fórmula del largo de cada pieza.
- **Vidrios**: tipos de vidrio, con modalidad **a medida** (se pide a la vidriería) o **en plancha** (se corta en el taller), configurable por tipo y modificable por obra.
- **Accesorios y herrajes**: con sus cantidades por receta.
- **Precios**: aluminio por kg según terminación, vidrios y accesorios. Los precios varían y se actualizan seguido.

## Reglas de negocio

- **Regla de las recetas: primero lo que dice el cliente; si no cierra, lo que hace SoftTech.** La fórmula base sale del catálogo técnico de Hydro y se ajusta al mm hasta coincidir con SoftTech (ver `docs/validacion-softtech.md`).
- Las recetas tienen que permitir:
  - **Piezas alternativas** elegibles al presupuestar (ej. marco 94 o 188).
  - **Variantes según el vidrio** (con DVH cambia la hoja: 366 → 425).
  - **Extras opcionales** (ej. revestimiento ADR 165 en Rotonda 750).
- El precio del aluminio es **por kg** y depende de la **terminación**. Los valores los carga el cliente en el sistema; nunca van escritos en el código.
- Mosquiteros para todas las líneas: ADR 12 y 558, travesaño ADR 11.

## Dónde vive el código

- Lógica y datos de recetas: `modulos/04-catalogo/src/`
- Documentación por línea: `modulos/04-catalogo/lineas/`
- Rutas de la API: `apps/api/src/rutas/catalogo.ts`
- Pantallas: `apps/web/src/app/catalogo/`

## Relación con otros módulos

- **Depende de**: `@aluvi/base` (proveedores).
- **Lo usan**: `05-cortes` (aplica las recetas), `06-pedidos` (perfiles y proveedores), `07-presupuesto` (precios).
- Un cambio en una receta cambia los cortes: **todo cambio de receta tiene que pasar los tests de `05-cortes`**.

## Pendientes

- [ ] Lista de perfiles de Orbital (el cliente todavía no la pasó).
- [ ] Planillas de corte reales, correcciones a mano y lista de precios del cliente.
- [ ] Ver los pendientes de cada línea en `lineas/`.
