# ADR 0096 â€” Adopt Safe Runtime Defaults

## Status

Accepted

## Version

0.1.0-alpha

## Date

2026-07-04

## Context

A runtime deve aumentar seguranca e controle, nao automatizar acoes arriscadas silenciosamente.

## Decision

Nao modificar codigo, instalar dependencias, commitar ou fazer push por padrao sem intencao explicita.

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

A Phase 4 deve implementar guards e mensagens claras para acoes sensiveis.

## Next Steps

Validar a decisÃ£o durante a implementaÃ§Ã£o do CLI MVP na Phase 4.
