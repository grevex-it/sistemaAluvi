# Módulo 02 — Recibos

> Etapa 1 · Milestone: **Finanzas y recibos** · Label: `mod:recibos`

## Qué hace

Cuando un cliente le paga a ALUVI, el sistema genera automáticamente el recibo en PDF con el diseño de ALUVI. Hoy lo hacen a mano.

## Qué incluye

- Generación del PDF del recibo a partir de un cobro registrado en Finanzas.
- Numeración correlativa de recibos.
- Detalle de los medios de pago del cobro (efectivo, transferencia, cheques).
- Descarga y reenvío del recibo.

## Reglas de negocio

- El recibo replica el diseño que ALUVI ya usa (logo, colores, datos).
- Un recibo emitido no se edita: si hay un error, se anula y se emite otro.

## Dónde vive el código

- Lógica: `modulos/02-recibos/src/`
- Rutas de la API: `apps/api/src/rutas/recibos.ts`
- Pantallas: `apps/web/src/app/recibos/`

## Relación con otros módulos

- **Depende de**: `@aluvi/base` (datos de la empresa y del cliente), `@aluvi/finanzas` (el cobro).
- **Lo usan**: `03-bot-whatsapp` puede pedir el recibo de un pago cargado por WhatsApp.

## Pendientes

- [ ] Conseguir el modelo de recibo actual de ALUVI.
- [ ] Confirmar si el recibo se envía por WhatsApp o mail al cliente.
- [ ] Confirmar el formato de la numeración.
