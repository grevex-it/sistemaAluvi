# Línea Rotonda 640

Fuente: lista que pasó el cliente el 19/10/2026, cruzada con los catálogos R640 corrediza (sept. 2022) y R640 batiente de Hydro.

## Perfiles por tipología

| Tipología | Perfiles (código ADR) |
|---|---|
| Ventana corrediza | marcos 71 / 63 / 1874 / 374 · opcional 53/52 · hoja 366 (con DVH: 425) · encuentro 262 (172 para la hoja 53) · tapajuntas 1517 |
| Paños fijos | marco 1176 o 1160 (1161 marco chico) · travesaño 1168 · contravidrio 1175 o 1178 |
| Ventanas de abrir | marco 1176 / 1160 / 1800 · hojas 1162, 1166, 1177 · doble contacto 1169 · tapajuntas 1517 |
| Puertas de abrir | marco 1176 / 1160 · hoja 1166 o 1179 · travesaño 1167 · porta felpa 1170 · doble contacto 1169 · tapajuntas 1517 |

- Verificado el 19/10: todos los códigos de batiente están en el catálogo R640 batiente.
- La hoja de corrediza real es la **366 (pecho paloma)**, no la 3400 (lisa).
- **ADR 71** no está en el catálogo R640: es un marco de corrediza de la línea L750. Hay que aclararlo con el cliente.

## Fórmulas validadas contra SoftTech

**Puerta 1 hoja, hoja 1166, marco 1512 (900×2050):**

| Pieza | Catálogo | SoftTech | Diferencia |
|---|---|---|---|
| Alto de hoja | H − 30 | 2020 | coincide |
| Ancho de hoja | A − 48 = 852 | 853 | +1 mm |
| Porta felpa 1170 | A − 103 = 797 | 798 | +1 mm |

**Corrediza 2 hojas, hoja 366 (900×2050):**

| Pieza | Catálogo | SoftTech | Diferencia |
|---|---|---|---|
| Alto de hoja | H − 63 | 1987 | coincide |
| Ancho de hoja | (A + 6) / 2 = 453 | 452 | −1 mm |

**Puerta con marco 1160:** SoftTech da 863 de ancho, 2025 de alto y porta felpa 808. El catálogo no cubre esta combinación (su tabla es para marco 1512).

## Otras diferencias con SoftTech

- Ruedas de corrediza: SoftTech pone 8, el catálogo 4.
- Felpa: SoftTech aplica ×1,3.

## Pendientes

- [ ] Confirmar ADR 71 con el cliente.
- [ ] Revalidar la corrediza con hoja 366/425 (con DVH).
- [ ] Fórmulas para marco 1160: necesitan la fuente de Hydro.
- [ ] Ventanas de abrir y paños fijos.
