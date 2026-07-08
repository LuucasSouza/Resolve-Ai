# ADR 0260 — Prepare GitHub Release Draft Without Creating Release

## Status

Accepted

## Context

Um GitHub Release cria um artefato público imediato. A Phase 18 precisa deixar o conteúdo do release pronto sem executar nenhuma ação pública, mantendo o gate do mantenedor como única porta de saída.

## Decision

Criar `docs/release/v0.1.0-alpha-rc/github-release-draft.md` como draft completo, pronto para copiar/colar (título, status alpha, instalação, comandos, fluxos, segurança, limitações e feedback), sem executar `gh release create`, `git tag` ou `git push --tags`. O release futuro deve ser marcado como pre-release.

## Consequences

### Positive

- Publicação futura vira operação de minutos, sem redação sob pressão.
- O texto público pode ser revisado com calma contra a política de frases proibidas.

### Negative

- O draft pode desatualizar se novas fases mudarem a CLI antes da publicação.

### Neutral

- A tag sugerida (`v0.1.0-alpha.0`) fica registrada, mas não criada.

## Alternatives Considered

- Criar o release como draft direto no GitHub: rejeitado; mesmo drafts criam estado fora do repositório e fogem do versionamento.
- Não preparar draft: rejeitado; aumentaria a chance de texto público improvisado e desonesto.

## Follow-up

Revalidar o draft contra o estado da CLI imediatamente antes da publicação real.
