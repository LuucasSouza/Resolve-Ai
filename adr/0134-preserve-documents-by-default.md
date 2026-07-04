# ADR 0134 — Preserve Documents by Default

## Status

Accepted

## Contexto

Documentos do pacote podem ser editados manualmente.

## Decisão

Não sobrescrever documentos existentes por padrão.

## Consequências

Idempotência e preservação de trabalho humano.

## Alternativas consideradas

- Sobrescrever automaticamente.
- Backup automático nesta fase.

## Impacto no usuário

Menor risco de perda.

## Riscos

Docs podem ficar antigos.

## Relação com roadmap

Futuro `--atualizar` pode resolver.
