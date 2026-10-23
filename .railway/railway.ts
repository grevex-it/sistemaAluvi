// Infraestructura de ALUVI en Railway (Infrastructure as Code).
// Reemplaza a railway.json / railway.toml, que Railway deja de soportar el 1/12/2026.
//
// Uso:
//   railway login && railway link
//   railway config plan     ← revisar SIEMPRE el plan antes de aplicar
//   railway config apply
//
// Docs: https://docs.railway.com/infrastructure-as-code
//
// Las URLs internas usan la sintaxis de referencias de Railway ("${{servicio.VARIABLE}}"),
// que Railway resuelve al desplegar. La red privada no pasa por internet.
//
// Todos los servicios salen del mismo repo y se construyen desde la raíz,
// porque los módulos son paquetes del workspace y las apps los importan.

import {
  defineRailway,
  github,
  image,
  postgres,
  preserve,
  project,
  service,
  volume,
} from "railway/iac";

const REPO = "grevex-it/sistemaAluvi";
const INSTALL = "pnpm install --frozen-lockfile";

export default defineRailway(() => {
  const db = postgres("postgres");

  const api = service("api", {
    source: github(REPO, { branch: "main" }),
    build: `${INSTALL} && pnpm turbo run build --filter=@aluvi/api...`,
    start: "pnpm --filter @aluvi/api start",
    healthcheck: "/health",
    env: {
      PORT: "3001",
      DATABASE_URL: db.env.DATABASE_URL,
      ANTHROPIC_API_KEY: preserve(),
      OPENAI_API_KEY: preserve(),
    },
  });

  const web = service("web", {
    source: github(REPO, { branch: "main" }),
    build: `${INSTALL} && pnpm turbo run build --filter=@aluvi/web...`,
    start: "pnpm --filter @aluvi/web start",
    env: {
      NEXT_PUBLIC_API_URL: preserve(),
    },
  });

  const waha = service("waha", {
    source: image("devlikeapro/waha"),
    volumeMounts: {
      "/app/.sessions": volume("waha-sessions"),
    },
    env: {
      WHATSAPP_API_KEY: preserve(),
    },
  });

  const bot = service("bot", {
    source: github(REPO, { branch: "main" }),
    build: `${INSTALL} && pnpm turbo run build --filter=@aluvi/bot...`,
    start: "pnpm --filter @aluvi/bot start",
    healthcheck: "/health",
    env: {
      API_URL: "http://${{api.RAILWAY_PRIVATE_DOMAIN}}:3001",
      WAHA_URL: "http://${{waha.RAILWAY_PRIVATE_DOMAIN}}:3000",
      WAHA_API_KEY: preserve(),
      BOT_NUMEROS_AUTORIZADOS: preserve(),
    },
  });

  return project("sistema-aluvi", {
    resources: [db, api, web, waha, bot],
  });
});
