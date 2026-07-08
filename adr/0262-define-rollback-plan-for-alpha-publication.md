# ADR 0262 — Define Rollback Plan for Alpha Publication

## Status

Accepted

## Context

Uma publicação npm não pode ser simplesmente desfeita: `npm unpublish` tem restrições e quebra quem já instalou. Sem plano prévio, um problema pós-publicação geraria reação improvisada.

## Decision

Adotar `docs/release/v0.1.0-alpha-rc/rollback-plan.md` como plano oficial, criado antes de qualquer publicação. Estratégia principal: **deprecar e corrigir para frente** (`npm deprecate` + novo alpha), reservando `npm unpublish` como exceção para exposição de dados sensíveis. O plano cobre cinco cenários: arquivo errado no pacote, README com promessa errada, CLI quebrada no Windows, issue de segurança e versão/tag errada.

## Consequences

### Positive

- Resposta previsível e rápida a incidentes pós-publicação.
- Usuários existentes não são quebrados por unpublish.

### Negative

- Versões com problema permanecem visíveis no histórico do npm (deprecadas).

### Neutral

- Toda ação de rollback deve ser registrada no changelog e comunicada em issue pública.

## Alternatives Considered

- Confiar em `npm unpublish`: rejeitado; janela limitada e quebra instalações existentes.
- Decidir caso a caso sem plano: rejeitado; incidentes exigem resposta pré-combinada.

## Follow-up

Testar o fluxo de `npm deprecate` na primeira correção de alpha real, se ocorrer.
