import Fastify from "fastify";

// Recibe los mensajes que manda WAHA y se los pasa al módulo 03-bot-whatsapp.
// Reglas (ver modulos/03-bot-whatsapp/CLAUDE.md):
//  - Solo responde a los números de BOT_NUMEROS_AUTORIZADOS.
//  - Nunca registra un movimiento sin confirmación explícita.

const app = Fastify({ logger: true });

const numerosAutorizados = new Set(
  (process.env.BOT_NUMEROS_AUTORIZADOS ?? "")
    .split(",")
    .map((numero) => numero.trim())
    .filter(Boolean),
);

app.get("/health", async () => ({ ok: true, servicio: "bot" }));

app.post("/webhook", async (request, reply) => {
  // Por ahora solo registra que llegó el evento; la interpretación
  // se implementa en el módulo 03-bot-whatsapp.
  app.log.info(
    { autorizados: numerosAutorizados.size, evento: request.body },
    "mensaje recibido de WAHA",
  );
  return reply.code(200).send({ recibido: true });
});

const port = Number(process.env.PORT ?? process.env.BOT_PORT ?? 3003);

app.listen({ port, host: "0.0.0.0" }).catch((error: unknown) => {
  app.log.error(error);
  process.exit(1);
});
