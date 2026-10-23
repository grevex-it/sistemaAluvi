import Fastify from "fastify";

// Cada módulo registra sus rutas en src/rutas/<modulo>.ts
// (ver el CLAUDE.md de cada módulo en modulos/).

const app = Fastify({ logger: true });

app.get("/health", async () => ({ ok: true, servicio: "api" }));

const port = Number(process.env.PORT ?? process.env.API_PORT ?? 3001);

app.listen({ port, host: "0.0.0.0" }).catch((error: unknown) => {
  app.log.error(error);
  process.exit(1);
});
