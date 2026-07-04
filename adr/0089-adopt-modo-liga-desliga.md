# ADR 0089 â€” Adopt Modo Liga/Desliga

## Status

Accepted

## Version

0.1.0-alpha

## Date

2026-07-04

## Context

Usuarios precisam ligar orientacao quando util e desligar contexto pesado quando querem trabalhar livremente.

## Decision

Adicionar controle simples de ativacao/desativacao para economia de tokens e controle de interferencia.

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

O estado deve ser persistido localmente e respeitado por agentes e hooks futuros.

## Next Steps

Validar a decisÃ£o durante a implementaÃ§Ã£o do CLI MVP na Phase 4.
