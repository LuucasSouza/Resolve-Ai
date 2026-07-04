---
title: "Project Adapter and Local State"
status: "Draft"
version: "0.1.0-alpha"
phase: "Phase 3 â€” Resolve AÃ­ Runtime Productization"
owner: "Resolve AÃ­ Maintainers"
last_updated: "2026-07-04"
---

# Project Adapter and Local State

## Objetivo

Definir como o Resolve AÃ­ se adapta a um repositÃ³rio sem misturar estado operacional com cÃ³digo da aplicaÃ§Ã£o.

## Camadas Locais

```text
.resolve-ai/        Estado operacional local
docs/resolve-ai/    DocumentaÃ§Ã£o humana do projeto
```

## `.resolve-ai/`

Estrutura proposta:

```text
.resolve-ai/
â”œâ”€â”€ config.yml
â”œâ”€â”€ state.json
â”œâ”€â”€ session.md
â”œâ”€â”€ handoff.md
â”œâ”€â”€ mode.md
â”œâ”€â”€ logs/
â”œâ”€â”€ cache/
â””â”€â”€ index/
```

Esta pasta deve ser tratada como estado operacional. Por padrÃ£o, pode ser ignorada pelo Git, exceto arquivos explicitamente seguros.

## `docs/resolve-ai/`

Estrutura proposta para projeto em andamento:

```text
docs/resolve-ai/
â”œâ”€â”€ 00-project-intake.md
â”œâ”€â”€ 01-current-state-assessment.md
â”œâ”€â”€ 02-discovery.md
â”œâ”€â”€ 03-product-definition.md
â”œâ”€â”€ 04-architecture-review.md
â”œâ”€â”€ 05-risk-register.md
â”œâ”€â”€ 06-decision-log.md
â”œâ”€â”€ 07-execution-plan.md
â”œâ”€â”€ 08-backlog.md
â”œâ”€â”€ 09-handoff.md
â””â”€â”€ README.md
```

## MigraÃ§Ã£o Legada

`docs/ai-seos/` Ã© caminho tÃ©cnico legado. A runtime futura deve detectar, sugerir migraÃ§Ã£o para `docs/resolve-ai/` e preservar histÃ³rico sem apagar documentos automaticamente.

## SeguranÃ§a

O adapter nÃ£o deve indexar nem registrar `.env`, secrets, dumps, backups, credenciais, tokens, chaves privadas ou dados pessoais.

## PrÃ³ximos Passos

Criar na Phase 4 o detector inicial de stack e o gerador local de config/state.
