# ADR 0090 â€” Adopt Project Adapter with Local State

## Status

Accepted

## Version

0.1.0-alpha

## Date

2026-07-04

## Context

Estado operacional nao deve se misturar com documentacao humana nem com codigo da aplicacao.

## Decision

Usar .resolve-ai/ como estado operacional local.

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

A Phase 4 deve implementar criacao segura de config e state.

## Next Steps

Validar a decisÃ£o durante a implementaÃ§Ã£o do CLI MVP na Phase 4.
