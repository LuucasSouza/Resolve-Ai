# ADR 0256 — Adopt Public Alpha Release Candidate Gate

## Status

Accepted

## Context

A Phase 17B terminou com 88/100 (LIMITED GO muito forte) e 87/87 testes passando, mas sem validação humana real adicional planejada antes da próxima fase. O projeto precisava de um mecanismo que permitisse avançar a preparação de release sem fingir prontidão stable.

## Decision

Adotar um gate formal de Release Candidate para o alpha público: a Phase 18 produz todos os artefatos de release em `docs/release/v0.1.0-alpha-rc/` (release notes, known limitations, auditoria de pacote, checklists, rollback plan, feedback plan e gate do mantenedor), mas nenhuma ação de publicação é executada. O resultado máximo da fase é RELEASE CANDIDATE READY, nunca GO stable.

## Consequences

### Positive

- Separação clara entre preparar release e executar release.
- O mantenedor decide com todos os artefatos prontos e auditados.
- A lacuna de validação humana permanece visível.

### Negative

- Mais uma camada de processo antes da publicação.
- O release pode ficar parado aguardando aprovação.

### Neutral

- O diretório `v0.1.0-alpha-rc/` passa a ser a fonte canônica de artefatos de release.

## Alternatives Considered

- Publicar direto como alpha: rejeitado; violaria o gate de aprovação do mantenedor (ADR-0194).
- Esperar validação humana antes de qualquer preparação: rejeitado; a preparação documental não depende de participantes e reduz o tempo até a publicação quando aprovada.

## Follow-up

Se o gate for aprovado, executar a Phase 19 — Public Alpha Publication Execution.
