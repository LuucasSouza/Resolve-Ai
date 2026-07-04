# ADR 0095 â€” Adopt Token-Saving Context Strategy

## Status

Accepted

## Version

0.1.0-alpha

## Date

2026-07-04

## Context

Carregar o framework inteiro em toda sessao e caro e aumenta ruido.

## Decision

Usar contexto compacto, estado local e Modo Liga/Desliga para economizar tokens.

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

A runtime deve preferir context package minimo, handoff compacto e consulta seletiva.

## Next Steps

Validar a decisÃ£o durante a implementaÃ§Ã£o do CLI MVP na Phase 4.
