# ADR 0132 — Update Runtime State with Prepared Task

## Status

Accepted

## Contexto

`status` e fases futuras precisam saber qual tarefa foi preparada.

## Decisão

Registrar `ultimoPreparo` no `state.json`.

## Consequências

Estado local passa a conter tarefa, risco, aprovação e autoexecução.

## Alternativas consideradas

- Guardar apenas em docs.

## Impacto no usuário

Retomada fica mais clara.

## Riscos

Schema deve ser mantido compatível.

## Relação com roadmap

Prepara validação pós-execução.
