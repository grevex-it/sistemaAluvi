// Pantalla inicial provisoria. Cada módulo agrega sus pantallas en
// src/app/<modulo>/ (ver el CLAUDE.md de cada módulo en modulos/).

const MODULOS = ["Finanzas", "Recibos", "Catálogo", "Cortes", "Pedidos", "Presupuesto"];

export default function Inicio() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 24, maxWidth: 640 }}>
      <h1>ALUVI</h1>
      <p>Sistema de gestión — en construcción.</p>
      <ul>
        {MODULOS.map((modulo) => (
          <li key={modulo}>{modulo}</li>
        ))}
      </ul>
    </main>
  );
}
