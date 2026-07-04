# ADR 0116 — Adopt planejar as Guided Planning Command

## Status

Accepted

## Contexto

Após `diagnosticar`, o usuário precisa transformar diagnóstico em próximos passos.

## Decisão

Adicionar `resolve-ai planejar` como comando oficial para transformar diagnóstico em plano.

## Consequências

O runtime passa a gerar plano incremental, backlog, sprints, prompts e checklist sem executar código.

## Alternativas consideradas

- Manter apenas diagnóstico.
- Implementar execução automática.

## Impacto no usuário

O usuário recebe uma sequência clara do que fazer agora.

## Riscos

Planos ainda são heurísticos e precisam de validação humana.

## Relação com roadmap

Prepara Phase 7 — Guided Execution Prep.
