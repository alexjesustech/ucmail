/**
 * Pilar 3 — Ponte para Gestão de Conhecimento (exportação Markdown).
 *
 * Extrai e-mails para ficheiros .md com cabeçalho de metadados estruturado,
 * prontos para indexação em sistemas de documentação locais.
 */

export interface MetadadosEmail {
  assunto: string
  remetente: string
  data: string // ISO 8601
  marcadores: string[]
}

/** Gera o frontmatter do ficheiro Markdown exportado. */
export function gerarFrontmatter(meta: MetadadosEmail): string {
  return [
    "---",
    `assunto: "${meta.assunto.replaceAll('"', '\\"')}"`,
    `remetente: "${meta.remetente}"`,
    `data: ${meta.data}`,
    `marcadores: [${meta.marcadores.join(", ")}]`,
    "---",
    ""
  ].join("\n")
}

// TODO(spec): extração do corpo e pipeline de download após spec SDD do Pilar 3.
