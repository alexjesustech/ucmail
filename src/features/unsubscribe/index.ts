/**
 * Pilar 2 — Cancelamento de Inscrições em Lote.
 *
 * Varredura assíncrona da rota de subscrições com delays inteligentes
 * (jitter + backoff) para blindar o navegador de gargalos de rede e
 * evitar restrições por requisições simultâneas.
 */

export interface OpcoesVarredura {
  /** Atraso base entre requisições, em ms. */
  atrasoBaseMs: number
  /** Variação aleatória aplicada ao atraso (0–1). */
  jitter: number
}

export const OPCOES_PADRAO: OpcoesVarredura = {
  atrasoBaseMs: 1500,
  jitter: 0.4
}

// TODO(spec): implementar após especificação SDD do Pilar 2.
