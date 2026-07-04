# ADR 0143 — Defer Automatic Code Execution

## Status

Accepted

## Contexto

`resolver` poderia ser confundido com execução automática.

## Problema

O runtime ainda não tem mecanismos suficientes para alterar código com segurança.

## Opções consideradas

- Implementar autoexecução agora.
- Adiar autoexecução.
- Remover comandos de execução.

## Decisão

Adiar execução automática de código para fase futura.

## Consequências positivas

- Mantém o projeto seguro.
- Permite amadurecer validação e permissões.
- Evita promessas acima da maturidade atual.

## Consequências negativas

- A implementação real ainda depende de humano ou agente externo.

## Critérios de reversão

Só reverter com sandbox, diff preview, rollback, testes e aprovação explícita por tarefa.

## Relação com outras ADRs

Relaciona-se às ADRs 0137 e 0145.
