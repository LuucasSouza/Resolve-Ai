# ADR 0145 — Prepare Phase 9 Validation Command

## Status

Accepted

## Contexto

Phase 8 prepara execução assistida, mas não valida o resultado.

## Problema

Depois que o usuário executa o prompt em um agente, o Resolve Aí precisa revisar evidências, checklist e estado.

## Opções consideradas

- Encerrar no `resolver`.
- Implementar validação junto do `resolver`.
- Preparar uma Phase 9 dedicada.

## Decisão

Preparar a Phase 9 para implementar um comando provável `resolve-ai validar`.

## Consequências positivas

- Mantém responsabilidades separadas.
- Evita misturar execução assistida com revisão.
- Cria sequência clara: preparar, resolver, validar.

## Consequências negativas

- Validação automatizada fica pendente.

## Critérios de reversão

Revisar se a validação puder ser integrada sem reduzir clareza do workflow.

## Relação com outras ADRs

Relaciona-se às ADRs 0140 e 0144.
