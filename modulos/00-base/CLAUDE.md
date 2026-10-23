# Módulo 00 — Base

> Etapa 1 · Milestone: **Finanzas y recibos** · Label: `mod:base`

## Qué hace

Es la base sobre la que se apoyan los demás módulos: quién usa el sistema, con quién trabaja ALUVI y la configuración general.

## Qué incluye

- **Usuarios y permisos**: acceso por rol (dueño, administración, taller, presupuestador). Los roles exactos se definen con el cliente.
- **Clientes**: los clientes finales de ALUVI (a quienes se les presupuesta y cobra).
- **Proveedores**: distribuidor de aluminio, vidriería, accesorios, etc.
- **Obras**: cada trabajo para un cliente. Es el eje que une presupuesto, cortes, pedidos y movimientos de dinero (permite la rentabilidad por obra).
- **Configuración general**: datos de la empresa, cotización del dólar de referencia, parámetros globales.

## Reglas de negocio

- El sistema es solo para ALUVI (no multiempresa).
- Debe usarse cómodo desde Mac y celular.

## Dónde vive el código

- Lógica: `modulos/00-base/src/`
- Rutas de la API: `apps/api/src/rutas/base.ts`
- Pantallas: `apps/web/src/app/base/`

## Relación con otros módulos

- **Depende de**: `@aluvi/shared`.
- **Lo usan**: todos los módulos (clientes, proveedores, obras y usuarios).
- Como todos dependen de este módulo, cualquier cambio en sus tipos exportados hay que avisarlo y revisar el impacto en los demás.

## Pendientes

- [ ] Definir con el cliente los roles y qué ve cada uno.
- [ ] Confirmar qué datos de cliente y proveedor necesita (CUIT, condición IVA, contacto).
- [ ] Definir la fuente de la cotización del dólar (manual o automática).
