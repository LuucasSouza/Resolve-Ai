---
title: "Decision Framework"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Decision Maintainers"
last_updated: "2026-07-03"
document_type: "Framework"
source: "bootstrap-source/pt32_DECISION_FRAMEWORK_AND_MATRIX.md"
---

# Decision Framework

## Objetivo

Padronizar como AI-SEOS compara alternativas e escolhe uma direção sem remover julgamento humano.

## Fluxo

```mermaid
flowchart TD
    A[Frame Decision] --> B[Identify Alternatives]
    B --> C[Define Criteria]
    C --> D[Assign Weights]
    D --> E[Score Alternatives]
    E --> F[Analyze Sensitivity]
    F --> G[Identify Risks]
    G --> H[Choose Recommendation]
    H --> I[Document ADR]
    I --> J[Define Revalidation Trigger]
```

## Decision Question Pattern

```text
For [context], given [constraints], should we choose [option category] among [alternatives] in order to achieve [goal] while optimizing for [priority]?
```
