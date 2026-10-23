# Arquitectura

```
                  ┌──────────────┐
 Equipo ALUVI ──▶ │   apps/web   │ Next.js (Mac y celular)
                  └──────┬───────┘
                         │ HTTP
                  ┌──────▼───────┐      ┌──────────────┐
 Dueño (WhatsApp) │   apps/api   │ ◀──▶ │   Postgres   │
   │              └──────▲───────┘      └──────────────┘
   ▼                     │
┌────────┐        ┌──────┴───────┐      ┌──────────────┐
│  WAHA  │ ─────▶ │   apps/bot   │ ───▶ │ IA (Claude / │
└────────┘webhook └──────────────┘      │   OpenAI)    │
                                        └──────────────┘
```

## Piezas

- **apps/web** — Next.js. Pantallas de cada módulo en `src/app/<modulo>/`.
- **apps/api** — Fastify. Rutas de cada módulo en `src/rutas/<modulo>.ts`. Es la única pieza que habla con la base de datos.
- **apps/bot** — recibe los mensajes de WAHA, filtra los números autorizados y usa el módulo `03-bot-whatsapp` para interpretarlos. Registra a través de la API.
- **modulos/** — la lógica de negocio. Las apps solo importan lo que cada módulo exporta.
- **WAHA** — WhatsApp self-hosted (no la API oficial de Meta), mismo esquema que DailyFC.
- **Postgres** — base de datos única.
- **IA** — interpretación de mensajes del bot (texto y audio) y render de aberturas para el presupuesto.

## Dependencias entre módulos

| Módulo | Usa a |
|---|---|
| base | shared |
| finanzas | base |
| recibos | base, finanzas |
| bot-whatsapp | base, finanzas |
| catalogo | base |
| cortes | catalogo |
| pedidos | base, catalogo, cortes |
| presupuesto | base, finanzas, catalogo, cortes, imagen-ia |
| imagen-ia | shared |

Todos usan `shared`. Las dependencias van en un solo sentido: un módulo nunca importa a uno que lo usa a él.

## Infraestructura

Railway, definido como código en `.railway/railway.ts` (Infrastructure as Code). Servicios: `postgres`, `api`, `web`, `waha` (con volumen para las sesiones) y `bot`. Ver [decisión 0002](./decisiones/0002-railway-iac.md).
