# ADR 0092 â€” Adopt Existing Project Diagnostic Flow

## Status

Accepted

## Version

0.1.0-alpha

## Date

2026-07-04

## Context

Projetos existentes exigem entendimento antes de alteracao para reduzir regressoes, riscos e retrabalho.

## Decision

Formalizar Projeto em Andamento - Diagnostico e Continuacao como fluxo oficial.

## Scope

Esta decisÃ£o se aplica Ã  Phase 3 â€” Resolve AÃ­ Runtime Productization e Ã  preparaÃ§Ã£o da Phase 4.

## Principles

- PortuguÃªs como experiÃªncia pÃºblica principal.
- SeguranÃ§a por padrÃ£o.
- Economia de tokens.
- Rastreabilidade por documentaÃ§Ã£o e ADR.
- DiagnÃ³stico antes de execuÃ§Ã£o em projetos existentes.

## Responsibilities

Mantenedores devem refletir esta decisÃ£o em documentaÃ§Ã£o, protocolos, templates e implementaÃ§Ã£o futura.

## Consequences

A runtime deve bloquear a tentacao de sair modificando codigo sem diagnostico.

## Next Steps

Validar a decisÃ£o durante a implementaÃ§Ã£o do CLI MVP na Phase 4.
