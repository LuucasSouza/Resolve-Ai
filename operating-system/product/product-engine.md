---
title: "AI-SEOS Product Engine"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Product Maintainers"
last_updated: "2026-07-03"
document_type: "Engine"
source: "bootstrap-source/pt21_PRODUCT_ENGINE.md"
---

# Product Engine

## Objetivo

Converter discovery validado em produto coerente, mensurável e pronto para arquitetura.

## Escopo

- Product vision.
- PRD.
- MVP boundary.
- Non-MVP scope.
- User journeys.
- Capability map.
- Epic and feature breakdown.
- Acceptance criteria.
- Outcome metrics.
- Product roadmap and backlog.
- Architecture input brief.

## Não Escopo

O Product Engine não escolhe arquitetura final, não substitui validação de mercado, não decide security architecture e não transforma toda solicitação em requisito.

## Entradas

- Discovery Document.
- Context Package.
- Problem Statement.
- User and Buyer Map.
- Business Objectives.
- Assumptions, constraints and risks.
- Initial success metrics.
- Known non-goals.

## Saídas

- PRD.
- MVP Definition.
- Product Roadmap.
- Product Backlog Candidate.
- Product Risk Register.
- Architecture Input Brief.
- Product Handoff Package.

## Pipeline

```mermaid
flowchart TD
    A[Receive Discovery Outputs] --> B[Validate Discovery Completeness]
    B --> C[Define Product Problem]
    C --> D[Define Users and Jobs]
    D --> E[Define Outcomes and Metrics]
    E --> F[Map Capabilities]
    F --> G[Define MVP Boundary]
    G --> H[Define Non-MVP Scope]
    H --> I[Write PRD]
    I --> J[Create Epic and Feature Map]
    J --> K[Define Acceptance Criteria]
    K --> L[Prepare Architecture Input Brief]
    L --> M[Product Quality Gate]
    M --> N[Product Handoff]
```

## Trade-offs

Product Engine adds structure before architecture. This slows direct implementation but reduces product bloat, architecture drift and waste.

## Próximos passos

- Feed Architecture Engine with Product Handoff.
