---
title: "AI-SEOS Decision Engine"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Decision Maintainers"
last_updated: "2026-07-03"
document_type: "Engine"
source: "bootstrap-source/pt31_DECISION_ENGINE.md"
---

# Decision Engine

## Objetivo

Governar decisões significativas de produto, arquitetura, segurança, operação, entrega, AI usage e custo, evitando que escolhas importantes fiquem escondidas em implementação ou conversa.

## Escopo

- Scope and MVP decisions.
- Architecture and technology choices.
- Build versus buy and vendor choices.
- Data ownership and integration strategy.
- Security, compliance, scalability and operational posture.
- Cost, complexity and AI usage decisions.

## Não Escopo

Não governa detalhes triviais, formatting, pequenas correções ou escolhas locais reversíveis sem impacto arquitetural.

## Entradas

Discovery Document, PRD, MVP Scope, Product Handoff, Architecture Overview, Domain Model, Integration Model, decision candidates, assumptions, constraints, risks and stakeholder priorities.

## Saídas

Decision Record, Decision Matrix, ADR, Decision Log Entry, Risk Review Request, Optimization Review Request, Execution Constraint, Revalidation Trigger and Handoff Package for Risk Engine.

## Fluxo

```mermaid
flowchart TD
    A[Decision Candidate Detected] --> B{Is it significant?}
    B -- No --> C[Use local convention]
    B -- Yes --> D[Frame Decision Question]
    D --> E[Define Alternatives]
    E --> F[Select Evaluation Criteria]
    F --> G[Score Alternatives]
    G --> H[Review Risks]
    H --> I{Risk Acceptable?}
    I -- No --> J[Mitigate or Reframe]
    J --> E
    I -- Yes --> K[Recommend Option]
    K --> L{ADR Required?}
    L -- Yes --> M[Create ADR]
    L -- No --> N[Record Decision Log]
    M --> O[Update Artifacts]
    N --> O
    O --> P[Handoff to Risk/Optimization/Execution]
```
