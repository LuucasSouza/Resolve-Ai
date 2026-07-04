---
title: "Project Entry Flows"
status: "Draft"
version: "0.1.0-alpha"
phase: "Phase 3 â€” Resolve AÃ­ Runtime Productization"
owner: "Resolve AÃ­ Maintainers"
last_updated: "2026-07-04"
---

# Project Entry Flows

## Objetivo

Definir como a runtime futura escolhe o fluxo inicial de um projeto.

## Fluxos Oficiais

1. Projeto do Zero.
2. Projeto em Andamento â€” DiagnÃ³stico e ContinuaÃ§Ã£o.

## Fluxo Universal

```mermaid
flowchart TD
    A[resolve-ai comeÃ§ar] --> B[Detectar projeto]
    B --> C{Projeto existe?}
    C -->|NÃ£o| D[Projeto do Zero]
    C -->|Sim| E[Projeto em Andamento]
    D --> F[Selecionar modo de usuÃ¡rio]
    E --> G[DiagnÃ³stico e ContinuaÃ§Ã£o]
    F --> H[Gerar docs/resolve-ai]
    G --> H
```

## Projeto do Zero

Usado quando o diretÃ³rio estÃ¡ vazio ou o usuÃ¡rio comeÃ§a de uma ideia. O fluxo passa por intake, discovery, produto, arquitetura, riscos, plano e backlog inicial.

## Projeto em Andamento â€” DiagnÃ³stico e ContinuaÃ§Ã£o

Usado quando jÃ¡ existe cÃ³digo, configuraÃ§Ã£o, README, histÃ³rico Git ou estrutura de aplicaÃ§Ã£o.

Regra obrigatÃ³ria:

```text
NÃ£o modificar cÃ³digo antes de diagnÃ³stico, plano e riscos.
```

## Modos de UsuÃ¡rio

- Non-Technical Builder: linguagem simples, sem jargÃ£o.
- Vibe Coder: orientaÃ§Ã£o prÃ¡tica com proteÃ§Ã£o de engenharia.
- Professional Engineer: rigor tÃ©cnico, ADRs, riscos e trade-offs.

## SaÃ­das MÃ­nimas

Projetos existentes devem produzir intake, avaliaÃ§Ã£o de estado atual, discovery, definiÃ§Ã£o de produto, revisÃ£o arquitetural, risk register, decision log, plano de execuÃ§Ã£o, backlog e handoff.
