# ADR 0127 — Use preparar as Public Command

## Status

Accepted

## Contexto

O comando público precisa comunicar segurança.

## Decisão

Usar `preparar` como comando principal. `resolver` fica para fase futura.

## Consequências

Evita expectativa de execução automática.

## Alternativas consideradas

- `resolver`
- `executar`

## Impacto no usuário

Clareza de que a fase prepara, não executa.

## Riscos

Alias `executar` pode confundir, então exibe aviso.

## Relação com roadmap

Reserva execução real para fase posterior.
