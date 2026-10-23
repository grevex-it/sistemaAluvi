# Módulo 06 — Pedidos a proveedores

> Etapa 2 · Milestone: **Cálculo y cortes** · Label: `mod:pedidos`

## Qué hace

Arma el pedido a cada proveedor a partir de lo que pidió el cliente: las barras al distribuidor de aluminio y el vidrio a la vidriería.

## Qué incluye

- Pedido de **barras**: cuántas barras de cada perfil y terminación, descontando lo que se cubre con retazos.
- Pedido de **vidrio**: medidas a medida o cantidad de planchas, según el tipo de vidrio.
- Pedido de **accesorios**.
- **Carga de costos** reales de lo comprado.
- Seguimiento del pedido (pedido, recibido).

## Reglas de negocio

- **Cero errores**: el pedido sale del cálculo de cortes, no se arma a mano.
- ALUVI no fabrica aluminio ni vidrio: compra las barras al distribuidor y el vidrio a la vidriería.

## Dónde vive el código

- Lógica: `modulos/06-pedidos/src/`
- Rutas de la API: `apps/api/src/rutas/pedidos.ts`
- Pantallas: `apps/web/src/app/pedidos/`

## Relación con otros módulos

- **Depende de**: `@aluvi/cortes` (qué hace falta), `@aluvi/catalogo` (perfiles y precios), `@aluvi/base` (proveedores y obras).
- Los costos cargados acá alimentan la rentabilidad por obra de `07-presupuesto`.

## Pendientes

- [ ] Formato en que ALUVI manda hoy los pedidos a cada proveedor.
- [ ] Confirmar si el pedido se agrupa por obra o se juntan varias obras en un mismo pedido.
