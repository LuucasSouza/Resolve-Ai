# ADR 0263 — Keep Human Validation Gap Visible in Release Docs

## Status

Accepted

## Context

A Phase 18 avança a preparação de release sem validação humana real adicional. Documentos de release tendem a destacar conquistas e diluir lacunas, e um leitor apressado poderia concluir que o produto foi validado por usuários reais.

## Decision

Todo documento de release do v0.1.0-alpha (release notes, known limitations, scorecard, go/no-go, GitHub release draft e gate do mantenedor) deve declarar explicitamente que a validação humana ampla ainda não aconteceu, especificando o que está pendente: Non-Technical Builder real e Professional Engineer dedicado. Frases proibidas (pt272): "pronto para produção", "stable", "validado por usuários não técnicos reais", "seguro para qualquer projeto", "resolve automaticamente seu projeto", "substitui revisão humana".

## Consequences

### Positive

- Honestidade pública preservada; confiança de longo prazo.
- O mantenedor decide com a lacuna à vista, não escondida.

### Negative

- Material de divulgação menos "vendedor".

### Neutral

- A lacuna limita o score máximo a 90/100 até existir evidência real.

## Alternatives Considered

- Mencionar a lacuna apenas no scorecard interno: rejeitado; o público-alvo do alpha precisa saber.
- Adiar release docs até haver validação: rejeitado; a preparação documental não cria risco e acelera a publicação futura.

## Follow-up

Remover a limitação dos documentos somente com sessões reais registradas em `docs/alpha-validation/`.
