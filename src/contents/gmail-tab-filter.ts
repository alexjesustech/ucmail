import type { PlasmoCSConfig } from "plasmo"
import { montarFiltroDeAbas } from "~features/tab-filter"

export const config: PlasmoCSConfig = {
  matches: ["https://mail.google.com/*"],
  run_at: "document_idle"
}

// Ponto de entrada do Pilar 1 no DOM do Gmail.
// Toda a lógica vive no módulo de feature; aqui só ciclo de vida.
const filtro = montarFiltroDeAbas(document)

// Encapsulamento obrigatório (ADR-0003): cleanup explícito ao descarregar.
window.addEventListener("pagehide", () => filtro.cleanup(), { once: true })
