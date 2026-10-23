# 0001 — Monorepo con un paquete por módulo

**Fecha:** 23/10/2026 · **Estado:** aceptada

## Contexto

El sistema tiene 9 módulos cotizados por separado y se entrega en etapas. Pedro quiere poder trabajar un módulo por vez, con su propio contexto, sin que un cambio desordene el resto.

## Decisión

- Un solo repositorio (monorepo) con pnpm workspaces y Turborepo, en TypeScript.
- Cada módulo es un paquete propio en `modulos/NN-nombre/`, con su `CLAUDE.md` (alcance, reglas, dependencias, pendientes).
- Los módulos se comunican solo por lo que exportan en `src/index.ts`.
- La web (Next.js), la API (Fastify) y el bot son apps separadas que usan los módulos.

## Consecuencias

- Claude Code carga el `CLAUDE.md` del módulo en el que se trabaja y respeta sus límites.
- Un cambio de esquema que afecta a la API y a la web entra en un solo pull request.
- Las dependencias entre módulos quedan explícitas en cada `package.json`.
