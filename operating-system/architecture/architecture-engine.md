---
title: "AI-SEOS Architecture Engine"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Architecture Maintainers"
last_updated: "2026-07-03"
document_type: "Engine"
source: "bootstrap-source/pt26_ARCHITECTURE_ENGINE.md"
---

# Architecture Engine

## Objetivo

Transformar product requirements e discovery context em arquitetura explícita, explicável, evolutiva e alinhada ao produto.

## Escopo

- Architecture overview.
- System context, container and component views.
- Domain model.
- Data strategy.
- Integration strategy.
- API strategy.
- Security, observability and deployment signals.
- Quality attribute scenarios.
- Architecture options and trade-off matrix.
- ADR candidates and architecture handoff.

## Não Escopo

Não implementa código, não substitui Security Engine review, não decide escopo de produto e não escolhe tecnologia por tendência.

## Entradas

PRD, MVP Definition, Product Roadmap, Product Backlog Candidate, Architecture Input Brief, Discovery Context Package, NFRs, data requirements, integration requirements, security/privacy signals and future direction.

## Pipeline

```mermaid
flowchart TD
    A[Receive Product Handoff] --> B[Validate Architecture Inputs]
    B --> C[Extract Architectural Drivers]
    C --> D[Define Quality Attribute Scenarios]
    D --> E[Model Domain]
    E --> F[Define System Boundaries]
    F --> G[Identify Architecture Options]
    G --> H[Compare Trade-offs]
    H --> I[Select Baseline Architecture]
    I --> J[Create Architecture Views]
    J --> K[Create ADRs]
    K --> L[Assess Architecture Risks]
    L --> M[Architecture Quality Gate]
    M --> N[Architecture Handoff]
```

## Default Bias

Prefer modular monolith before microservices, boring technology before trendy technology, reversible decisions under uncertainty and security/observability from the start.
