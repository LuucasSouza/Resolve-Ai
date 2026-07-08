# ADR 0259 — Document Known Limitations Before Public Release

## Status

Accepted

## Context

O Resolve Aí vai a alpha público sem validação humana ampla. Materiais de release costumam esconder limitações para melhorar a percepção, o que violaria a política de honestidade do projeto (pt272, ADR-0218).

## Decision

Nenhuma publicação pública pode acontecer sem um documento de known limitations visível e vinculado às release notes. A lista mínima obrigatória (pt272) inclui: ausência de validação humana ampla, exigência de terminal, ausência de UI gráfica, dependência de Git para `validar` funcionar melhor, não execução automática de código, volume de documentos gerados, possíveis falsos positivos de diagnóstico, ausência de telemetria, feedback manual e status não stable.

## Consequences

### Positive

- Expectativas realistas para os primeiros usuários públicos.
- Reduz frustração e feedback enviesado por promessa errada.

### Negative

- Pode reduzir adoção inicial.

### Neutral

- As limitações devem ser atualizadas a cada fase; remover uma limitação exige evidência.

## Alternatives Considered

- Limitar as limitações a um FAQ interno: rejeitado; a lista deve ser pública.
- Listar apenas limitações técnicas: rejeitado; a lacuna de validação humana é a limitação mais importante.

## Follow-up

Revisar `known-limitations.md` após cada rodada de validação real.
