# Módulo 01 — Finanzas

> Etapa 1 (es el primer módulo que pidió el cliente) · Milestone: **Finanzas y recibos** · Label: `mod:finanzas`

## Qué hace

Unifica todo el movimiento de dinero de ALUVI en un solo lugar, con control exacto y prolijo. Hoy lo manejan en planillas de Excel.

## Qué incluye

- **Caja en efectivo**: ingresos y egresos.
- **Banco**: movimientos de cuentas bancarias.
- **Cuentas corrientes en los dos sentidos**:
  - Clientes que le deben a ALUVI (a cobrar).
  - Proveedores que le dan cuenta corriente a ALUVI (a pagar).
- **Cartera de cheques** (todos de terceros):
  - Cheques recibidos de clientes como pago.
  - Cheques comprados a descuento.
  - Cheques entregados a proveedores como pago.
- **Flujo de caja**: vista de ingresos y egresos en el tiempo.
- **Gastos**: registro de gastos generales (también se cargan por el bot de WhatsApp).

## Reglas de negocio

- **Cheques comprados a descuento: NO se registra la ganancia.** Lo pidió el cliente explícitamente. Se registra el cheque en cartera, pero no el rendimiento.
- Cada cheque tiene un estado y una trazabilidad: de dónde vino y a quién se entregó.
- Todo movimiento debe poder asociarse a una obra (para la rentabilidad por obra) y, si corresponde, a un cliente o proveedor.
- Los montos nunca se calculan con `number` de punto flotante: usar enteros en centavos o una librería decimal.
- Opera en pesos y dólares.

## Dónde vive el código

- Lógica: `modulos/01-finanzas/src/`
- Rutas de la API: `apps/api/src/rutas/finanzas.ts`
- Pantallas: `apps/web/src/app/finanzas/`

## Relación con otros módulos

- **Depende de**: `@aluvi/base` (clientes, proveedores, obras).
- **Lo usan**: `02-recibos` (un cobro genera un recibo), `03-bot-whatsapp` (carga pagos y gastos), `07-presupuesto` (lee lo cobrado y gastado por obra para la rentabilidad).
- Los otros módulos registran movimientos solo a través de las funciones que exporta este módulo, nunca escribiendo directo en sus tablas.

## Pendientes

- [ ] Confirmar con el cliente qué datos lleva cada cheque (banco, número, fecha de pago, librador, CUIT).
- [ ] Confirmar si necesita varias cajas o una sola.
- [ ] Confirmar cómo maneja hoy la conversión pesos/dólares en las cuentas corrientes.
