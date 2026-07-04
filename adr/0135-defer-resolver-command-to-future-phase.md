# ADR 0135 — Defer resolver Command to Future Phase

## Status

Accepted

## Contexto

`resolver` sugere execução real.

## Decisão

Não implementar `resolve-ai resolver` na Phase 7.

## Consequências

Evita automação destrutiva prematura.

## Alternativas consideradas

- Implementar `resolver` como alias.
- Executar tarefa preparada.

## Impacto no usuário

Expectativas ficam alinhadas: preparar não executa.

## Riscos

Usuário ainda precisa executar manualmente.

## Relação com roadmap

Execução real requer fase e ADR próprias.
