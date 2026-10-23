# Módulo 05 — Cálculo y cortes

> Etapa 2 · Milestone: **Cálculo y cortes** · Label: `mod:cortes`

## Qué hace

A partir de las medidas de una abertura, calcula qué piezas hay que cortar y de qué largo, y arma la planilla de corte optimizando el desperdicio. Es lo que hoy le da SoftTech al taller, y el taller corta lo que le da el sistema.

## ⚠️ Cero errores

Pedro exige **cero errores** en planillas de corte, cálculo de costos y pedidos. Un corte mal calculado es material perdido para el cliente. Por eso:

- Toda fórmula nueva o modificada lleva un test con un caso comparado contra SoftTech (`test/casos-softtech.ts`).
- Ningún cambio se sube si los tests de este módulo no pasan.
- Ante la duda sobre una medida, **no se adivina**: se marca como pendiente y se consulta.

## Qué incluye

- **Cálculo de piezas** por abertura aplicando la receta del catálogo.
- **Carga de medidas en cm o m** con conversión automática a mm (no obligar al operador a usar mm).
- **Planilla de corte optimizada**:
  - Usa **primero los retazos** y después barra nueva.
  - Descuenta el **espesor del disco** en cada corte.
- **Control de retazos**:
  - El sobrante mayor a un largo mínimo configurable se registra como retazo (perfil + color + largo, ubicación opcional) con **etiqueta impresa**.
  - El sobrante menor se descarta como desperdicio.
  - La planilla permite marcar "retazo no encontrado".
  - Recuento periódico de retazos.
- **Etiquetas** para que el cliente reconozca cada pieza y tipo de material.
- **Vidrio**: medidas a pedir (a medida) u **optimizador de corte de plancha**, según el tipo de vidrio.

## Reglas de negocio

- Todo se calcula internamente en **milímetros**.
- Las diferencias con el catálogo de Hydro son sistemáticas (±1 mm) y se ajustan para coincidir con SoftTech. Ver `docs/validacion-softtech.md`.
- Para HA62 se siguen los números de SoftTech como referencia de corte.

## Dónde vive el código

- Motor de cálculo y optimización: `modulos/05-cortes/src/` (sin base de datos ni pantallas: funciones puras, fáciles de testear).
- Casos validados contra SoftTech: `modulos/05-cortes/test/`
- Rutas de la API: `apps/api/src/rutas/cortes.ts`
- Pantallas: `apps/web/src/app/cortes/`

## Relación con otros módulos

- **Depende de**: `@aluvi/catalogo` (recetas, perfiles, vidrios).
- **Lo usan**: `06-pedidos` (qué pedir), `07-presupuesto` (kg de aluminio y m² de vidrio para el costo).

## Pendientes

- [ ] Largo de barra estándar por perfil y largo mínimo para guardar un retazo.
- [ ] Espesor del disco de corte del taller.
- [ ] Formato de etiqueta (impresora que usan).
- [ ] Combinaciones que el catálogo no trae (ej. R640 puerta con marco 1160): necesitan la fuente de Hydro.
- [ ] Revalidar la corrediza R640 con hoja 366/425.
