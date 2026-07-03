---
title: "Discovery to PRD Protocol"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Product Maintainers"
last_updated: "2026-07-03"
document_type: "Protocol"
source: "bootstrap-source/pt22_PRODUCT_DISCOVERY_TO_PRD_PROTOCOL.md"
---

# Discovery to PRD Protocol

## Objetivo

Converter Discovery outputs em PRD sem perder contexto, assumptions, risks, constraints ou trade-offs.

## Princípio

No PRD may be created directly from an idea. It must derive from Context Package and Discovery Output.

## Transformation Map

| Discovery Artifact | PRD Section |
|---|---|
| Problem Statement | Product Problem |
| User Segments | Target Users |
| Buyer/User Map | Stakeholders and Personas |
| Jobs To Be Done | User Needs and Use Cases |
| Current Solution | Alternatives Context |
| Business Goals | Product Objectives |
| Constraints | Product Constraints |
| Assumptions | Assumptions Register |
| Risks | Product Risks |
| Metrics | Success Metrics |
| Non-goals | Out of Scope |

## Pipeline

```mermaid
flowchart TD
    A[Load Context Package] --> B[Validate Discovery Inputs]
    B --> C[Extract Product Problem]
    C --> D[Identify Stakeholders]
    D --> E[Map User Jobs]
    E --> F[Define Product Outcomes]
    F --> G[Define Scope Candidates]
    G --> H[Prioritize Capabilities]
    H --> I[Define MVP Boundary]
    I --> J[Write PRD]
    J --> K[Review PRD Against Quality Gates]
    K --> L[Create Product Handoff]
```

## Output Contract

- PRD.
- MVP Definition.
- Product Roadmap.
- Backlog Candidate.
- Product Risk Register.
- Architecture Input Brief.
- Product Handoff Package.
