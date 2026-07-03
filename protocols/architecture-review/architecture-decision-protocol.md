---
title: "Architecture Decision Protocol"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Architecture Maintainers"
last_updated: "2026-07-03"
document_type: "Protocol"
source: "bootstrap-source/pt27_ARCHITECTURE_DECISION_PROTOCOL.md"
---

# Architecture Decision Protocol

## Objetivo

Identificar, avaliar, registrar e comunicar decisões arquiteturais antes da Decision Engine completa.

## Pipeline

```mermaid
flowchart TD
    A[Decision Need Identified] --> B[Frame Decision]
    B --> C[Define Criteria]
    C --> D[Generate Options]
    D --> E[Compare Trade-offs]
    E --> F[Assess Risks]
    F --> G[Select Recommendation]
    G --> H[Write ADR]
    H --> I[Review Against Quality Gate]
    I --> J[Communicate Decision]
```

## Reversibility

| Class | Meaning | Handling |
|---|---|---|
| Type 1 | Hard to reverse | ADR, review and rollback plan |
| Type 2 | Reversible | ADR recommended |
| Type 3 | Local detail | Local docs or code notes |
