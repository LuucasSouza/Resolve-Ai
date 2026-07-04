# ADR 0094 â€” Adopt Agent Instruction File Generation

## Status

Accepted

## Version

0.1.0-alpha

## Date

2026-07-04

## Context

Agentes precisam de contexto operacional curto e explicito sem carregar toda a documentacao do framework.

## Decision

Gerar arquivos como AGENTS.md, CLAUDE.md e Copilot instructions para orientar agentes.

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

Templates iniciais foram criados; geracao automatica pertence a Phase 4.

## Next Steps

Validar a decisÃ£o durante a implementaÃ§Ã£o do CLI MVP na Phase 4.
