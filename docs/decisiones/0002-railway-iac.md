# 0002 — Railway con Infrastructure as Code

**Fecha:** 23/10/2026 · **Estado:** aceptada

## Contexto

Se aloja en Railway, como DailyFC. Railway deprecó la configuración como código (`railway.json` / `railway.toml`): los servicios nuevos no pueden usarla y los existentes dejan de leerla el **1/12/2026**. El reemplazo es Infrastructure as Code en `.railway/railway.ts`.

Fuente: https://docs.railway.com/config-as-code

## Decisión

- Toda la infraestructura de ALUVI se define en `.railway/railway.ts`.
- Los servicios se construyen desde la raíz del repo (los módulos son paquetes del workspace).
- Las claves se cargan en Railway y el archivo las conserva con `preserve()`; nunca se escriben en el repo.

## Consecuencias

- Antes de aplicar cambios: `railway config plan`, revisar, y recién después `railway config apply`.
- **DailyFC**: si usa `railway.json`, hay que migrarlo antes del 1/12/2026.
