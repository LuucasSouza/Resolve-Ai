---
title: "Product Backlog Standard"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Product Maintainers"
last_updated: "2026-07-03"
document_type: "Standard"
source: "bootstrap-source/pt25_PRODUCT_BACKLOG_AND_ROADMAP_TEMPLATE.md"
---

# Product Backlog Standard

## Objetivo

Garantir que backlog seja rastreável a outcomes, capabilities, epics, features and acceptance criteria.

## Hierarquia

```mermaid
flowchart TD
    A[Outcome] --> B[Capability]
    B --> C[Epic]
    C --> D[Feature]
    D --> E[User Story or Work Item]
    E --> F[Acceptance Criteria]
```

## Quality Gates

- Every epic maps to a capability.
- Every capability maps to an outcome.
- MVP and non-MVP items are marked.
- Acceptance criteria exist for MVP features.
- Risks and dependencies are visible.
