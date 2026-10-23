# sistemaAluvi

Sistema de gestión para **ALUVI Aberturas de Aluminio**, desarrollado por [Grevex](https://www.instagram.com/grevex.it/).

Finanzas y cheques, recibos, cálculo de cortes para las líneas de Hydro, pedidos a proveedores, presupuestos en PDF y carga de movimientos por WhatsApp.

## Requisitos

- Node.js 22 o superior
- pnpm 10 (`corepack enable`)
- Docker (para Postgres y WAHA en local)

## Puesta en marcha

```bash
pnpm install
cp .env.example .env      # completar las claves
pnpm db:up                # Postgres local
pnpm dev                  # web en :3000, api en :3001, bot en :3003
```

Para probar el bot de WhatsApp en local: `pnpm waha:up` (WAHA queda en :3002).

## Estructura

```
apps/
  web/        Next.js — app del equipo de ALUVI
  api/        Fastify — API
  bot/        Receptor de mensajes de WAHA
modulos/      Un paquete por módulo, cada uno con su CLAUDE.md
packages/
  shared/     Tipos comunes
docs/         Alcance, arquitectura, validación SoftTech, decisiones
.railway/     Infraestructura en Railway
```

## Flujo de trabajo

- `main` = producción (protegida). `develop` = integración.
- Cada tarea en su rama (`feat/finanzas-cheques`, `fix/cortes-zocalo`) y entra por pull request a `develop`.
- El CI corre formato, tipos, tests y build en cada PR.
- Las issues se etiquetan por módulo (`mod:*`) y se asignan a la milestone de su etapa.

## Despliegue

Railway, definido como código en `.railway/railway.ts`:

```bash
railway login && railway link
railway config plan    # revisar antes de aplicar
railway config apply
```
