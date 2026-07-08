# ADR 0265 — Classify Phase 18 as Release Candidate, Not Stable

## Status

Accepted

## Context

A Phase 18 concluiu toda a preparação técnica e documental do alpha público com testes verdes e pacote auditado. Sem uma classificação explícita, o resultado poderia ser lido como "GO" ou como prontidão stable.

## Decision

O resultado oficial da Phase 18 é **90/100 — RELEASE CANDIDATE READY, aguardando aprovação do mantenedor**. Este é o teto de score permitido sem validação humana real adicional. A classificação pública permitida é "Public Alpha Candidate" / "Alpha público para validação" / "Release Candidate aguardando aprovação do mantenedor". Declarar stable, production ready ou GO pleno é proibido até que exista validação humana real registrada e aprovação explícita do mantenedor.

## Consequences

### Positive

- Score e classificação coerentes com a evidência disponível.
- Critério objetivo para a transição Phase 19 (publicação) vs. Phase 18B (correções).

### Negative

- O projeto permanece formalmente "não lançado" mesmo com tudo preparado.

### Neutral

- O teto de 90/100 só sobe com sessões reais de Non-Technical Builder e Professional Engineer.

## Alternatives Considered

- Declarar GO condicionado: rejeitado; "GO" sem publicação nem validação confunde o histórico de decisões.
- Manter LIMITED GO 88/100: rejeitado; ignoraria o avanço real de prontidão de release desta fase.

## Follow-up

Recalcular o score após a próxima rodada de validação humana real ou após a decisão do mantenedor no gate.
