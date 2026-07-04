---
title: "Resolve AÃ­ CLI Architecture"
status: "Draft"
version: "0.1.0-alpha"
phase: "Phase 3 â€” Resolve AÃ­ Runtime Productization"
owner: "Resolve AÃ­ Maintainers"
last_updated: "2026-07-04"
---

# Resolve AÃ­ CLI Architecture

## Objetivo

Especificar a arquitetura da futura CLI `resolve-ai` sem implementar o pacote nesta fase.

## Escopo

A CLI serÃ¡ a primeira interface runtime do Resolve AÃ­. Ela deve ser local, leve, auditÃ¡vel e orientada por comandos em portuguÃªs.

## Comandos PÃºblicos

```bash
resolve-ai comeÃ§ar
resolve-ai ligar
resolve-ai desligar
resolve-ai status
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai continuar
resolve-ai revisar
resolve-ai entregar
resolve-ai ajuda
```

## Estrutura Conceitual Futura

```text
packages/resolve-ai-cli/
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ commands/
â”‚   â”œâ”€â”€ core/
â”‚   â”œâ”€â”€ adapters/
â”‚   â”œâ”€â”€ templates/
â”‚   â””â”€â”€ safety/
â””â”€â”€ package.json
```

Esta estrutura Ã© referÃªncia para a Phase 4. Ela nÃ£o deve ser criada como implementaÃ§Ã£o nesta fase.

## Responsabilidades

- Detectar projeto novo ou em andamento.
- Criar `.resolve-ai/` e `docs/resolve-ai/`.
- Alternar Modo Liga/Desliga.
- Gerar instruÃ§Ãµes para agentes.
- Criar prompts e documentos de diagnÃ³stico.
- Evitar mudanÃ§as destrutivas por padrÃ£o.

## PadrÃµes de SeguranÃ§a

A CLI nÃ£o deve modificar cÃ³digo, instalar dependÃªncias, commitar ou fazer push sem intenÃ§Ã£o explÃ­cita. DiagnÃ³stico e planejamento vÃªm antes de execuÃ§Ã£o.

## PrÃ³ximos Passos

Implementar na Phase 4 um MVP mÃ­nimo com comandos locais sem IA obrigatÃ³ria.
