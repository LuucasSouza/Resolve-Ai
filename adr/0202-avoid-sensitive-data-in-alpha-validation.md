# ADR 0202 - Avoid Sensitive Data in Alpha Validation

## Status

Accepted

## Context

Projetos reais podem conter segredos, dados pessoais e informacoes comerciais.

## Decision

Alpha validation deve usar projetos simulados, sanitizados ou dados nao sensiveis.

## Consequences

- Reduz risco.
- Limita fidelidade de alguns testes.
- Mantem coerencia com seguranca do Resolve Ai.
