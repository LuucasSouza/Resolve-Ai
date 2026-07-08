# ADR 0264 — Require Package Dry-Run Audit Before Publication

## Status

Accepted

## Context

O maior risco técnico de uma publicação npm é embarcar arquivos indevidos: `.env`, `.resolve-ai/`, `docs/resolve-ai/`, feedbacks privados, backups ou segredos. O campo `files` (ADR-0190) restringe o tarball, mas precisa ser verificado a cada release.

## Decision

Antes de qualquer `npm publish`, é obrigatório executar `npm pack --dry-run` dentro de `packages/resolve-ai-cli/` e registrar a auditoria em `docs/release/v0.1.0-alpha-rc/npm-package-audit.md`, incluindo: número de arquivos, tamanho do pacote, tamanho descompactado, verificação item a item de arquivos proibidos e decisão (aprovado / aprovado com ressalvas / bloqueado). A auditoria da Phase 18 registrou 37 arquivos, 38.5 kB (147.1 kB descompactado), somente `dist/`, `README.md` e `package.json`: **aprovado**. O dry-run deve ser repetido e comparado imediatamente antes da publicação real.

## Consequences

### Positive

- Vazamento de dados via pacote passa a ser bloqueado por processo, não por sorte.
- A auditoria fica versionada e comparável entre fases.

### Negative

- Passo manual adicional a cada release.

### Neutral

- Divergência entre dry-run atual e auditoria registrada bloqueia a publicação até nova auditoria.

## Alternatives Considered

- Confiar apenas no campo `files`: rejeitado; configuração pode regredir sem ninguém notar.
- Automatizar a auditoria em CI: adiado; a Phase 18 proíbe GitHub Actions de publicação.

## Follow-up

Repetir a auditoria em toda versão alpha futura antes do publish.
