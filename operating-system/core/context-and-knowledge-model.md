---
title: "AI-SEOS Context and Knowledge Model"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Principal Maintainer"
last_updated: "2026-07-03"
document_type: "Context and Knowledge Model"
source: "bootstrap-source/pt14_CONTEXT_AND_KNOWLEDGE_MODEL.md"
---

# Context and Knowledge Model

## Objetivo

Definir como o AI-SEOS captura, estrutura, valida, transfere e evolui conhecimento de engenharia.

## Contexto

Contexto é a informação necessária para tomar uma decisão correta ou produzir um artefato útil. Conhecimento é informação validada, reutilizável e durável.

## Camadas

```mermaid
flowchart TD
    A[Global Framework Context] --> B[Repository Context]
    B --> C[Module Context]
    C --> D[Project Context]
    D --> E[Work Item Context]
    E --> F[Agent Task Context]
```

## Escopo

- Context package.
- Assumption register.
- Constraint register.
- Knowledge freshness.
- Context drift.
- Context compression.

## Regras

- No orphan decisions.
- No orphan artifacts.
- No silent assumptions.
- No stale handoffs.
- No ambiguous scope.

## Próximos passos

- Usar o context package como padrão de handoff para todos os agentes.
