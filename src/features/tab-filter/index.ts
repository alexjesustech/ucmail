/**
 * Pilar 1 — Filtro Dinâmico de Abas Nativas.
 *
 * Oculta mensagens lidas nas abas padrão do Gmail (Principal, Promoções,
 * Social, Atualizações, Fóruns) preservando o layout nativo.
 *
 * Contrato: nenhum estado global; todo observer registrado deve ser
 * devolvido no cleanup(). Spec: UCMail-meta/docs (SDD).
 */

export interface FiltroDeAbas {
  /** Liga/desliga a ocultação de lidas na aba ativa. */
  alternar(ativo: boolean): void
  /** Desconecta observers e restaura o DOM. Idempotente. */
  cleanup(): void
}

export function montarFiltroDeAbas(_raiz: Document): FiltroDeAbas {
  // TODO(spec): implementar após aprovação da especificação SDD do Pilar 1.
  let ativo = false
  return {
    alternar(novo) {
      ativo = novo
    },
    cleanup() {
      ativo = false
    }
  }
}
