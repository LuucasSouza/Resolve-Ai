# ADR 0124 — Defer Force Update Planning Overwrite Options

## Status

Accepted

## Contexto

Arquivos de plano podem ser editados manualmente.

## Decisão

`--forcar` e `--atualizar` ficam para fase futura.

## Consequências

Phase 6 preserva documentos existentes por padrão.

## Alternativas consideradas

- Sobrescrever arquivos.
- Implementar backup agora.

## Impacto no usuário

Menor risco de perda de trabalho.

## Riscos

Planos existentes podem ficar desatualizados.

## Relação com roadmap

Upgrade seguro pode ser tratado em fase posterior.
