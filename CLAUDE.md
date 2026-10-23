# Sistema ALUVI

Sistema de gestión para **ALUVI Aberturas de Aluminio** (Río Tercero, Córdoba), desarrollado por **Grevex**.
Reemplaza las planillas de Excel y la base técnica de SoftTech con un sistema web propio, usable desde Mac y celular.

## Cómo está organizado

Monorepo con pnpm + Turborepo, todo en TypeScript.

- `modulos/` — la lógica del sistema, **un paquete por módulo**. Cada módulo tiene su propio `CLAUDE.md` con su alcance, reglas, dependencias y pendientes.
- `apps/web` — Next.js, la app que usa el equipo de ALUVI.
- `apps/api` — API (Fastify) que expone los módulos.
- `apps/bot` — recibe los mensajes de WhatsApp (WAHA).
- `packages/shared` — tipos comunes (medidas, monedas, líneas, terminaciones).
- `docs/` — alcance, arquitectura, validación contra SoftTech y decisiones.
- `.railway/railway.ts` — infraestructura en Railway.

## Módulos

| Carpeta | Módulo | Etapa |
|---|---|---|
| `modulos/00-base` | Usuarios, clientes, proveedores, obras, configuración | 1 |
| `modulos/01-finanzas` | Caja, banco, cuentas corrientes, cheques | 1 |
| `modulos/02-recibos` | Recibo en PDF de cada cobro | 1 |
| `modulos/03-bot-whatsapp` | Carga de pagos y gastos por WhatsApp | Bot |
| `modulos/04-catalogo` | Líneas Hydro, perfiles, recetas, vidrios, precios | 2 |
| `modulos/05-cortes` | Cálculo de cortes, optimización, retazos, etiquetas | 2 |
| `modulos/06-pedidos` | Pedidos a proveedores | 2 |
| `modulos/07-presupuesto` | Presupuesto PDF y rentabilidad por obra | 3 |
| `modulos/08-imagen-ia` | Render IA de la abertura | 3 |

## Reglas para trabajar

1. **Un módulo por vez.** Antes de tocar un módulo, leer su `CLAUDE.md`.
2. **No modificar otro módulo sin avisar.** Si un cambio necesita tocar otro módulo, frenar y explicarlo antes de hacerlo.
3. **Los módulos se usan entre sí solo por lo que exportan en su `src/index.ts`.** Nunca importar archivos internos de otro módulo ni escribir en sus tablas.
4. **Antes de implementar algo nuevo, proponer el plan y esperar confirmación.**
5. **Mantener actualizado el `CLAUDE.md` del módulo**: toda regla nueva, decisión o pendiente resuelto se anota ahí.
6. **Cero errores en cortes, costos y pedidos.** Cualquier cambio en recetas o en el motor de cortes tiene que pasar los tests de `modulos/05-cortes`.
7. **Medidas siempre en milímetros** internamente. **Montos nunca en punto flotante.**
8. Código, nombres y comentarios en español.

## Comandos

```bash
pnpm install
pnpm db:up          # Postgres local
pnpm dev            # levanta web, api y bot
pnpm check          # formato + tipos + tests (lo mismo que corre el CI)
pnpm --filter @aluvi/cortes test   # tests de un solo módulo
```

## Más contexto

- `docs/alcance.md` — módulos, etapas y qué queda fuera del alcance.
- `docs/arquitectura.md` — cómo se conectan las piezas.
- `docs/validacion-softtech.md` — cómo se validan las recetas contra SoftTech.
- `docs/decisiones/` — decisiones tomadas y por qué.
