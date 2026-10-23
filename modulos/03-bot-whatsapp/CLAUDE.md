# Módulo 03 — Bot de WhatsApp

> Milestone propia: **Bot de WhatsApp** · Label: `mod:bot`

## Qué hace

Permite que el **dueño de ALUVI** (y quien autorice) cargue movimientos escribiéndole al bot por WhatsApp: pagos de clientes, gastos, etc. El bot los interpreta y los registra en Finanzas.

## Qué incluye

- Recepción de mensajes por WAHA (WhatsApp self-hosted, no la API oficial de Meta).
- Interpretación del mensaje con IA (texto y audios) para entender qué movimiento es.
- Confirmación antes de registrar: el bot responde con lo que entendió y espera el OK.
- Registro en Finanzas solo después de la confirmación.

## Reglas de negocio

- **El bot NO atiende a los clientes de ALUVI.** Es solo para cargar datos internos.
- Solo responde a los números autorizados (`BOT_NUMEROS_AUTORIZADOS`); cualquier otro número se ignora.
- Nunca registra un movimiento sin la confirmación explícita del usuario.
- Toda carga queda auditada: quién la mandó, el mensaje original y lo que se registró.

## Dónde vive el código

- Lógica (interpretación, armado del movimiento): `modulos/03-bot-whatsapp/src/`
- Servicio que recibe los mensajes de WAHA: `apps/bot/`
- No tiene pantallas propias; lo cargado se ve en Finanzas.

## Relación con otros módulos

- **Depende de**: `@aluvi/finanzas` (registra los movimientos), `@aluvi/base` (clientes, proveedores, obras).

## Pendientes

- [ ] Definir con el cliente qué tipos de movimiento se cargan por el bot.
- [ ] Definir qué números quedan autorizados.
