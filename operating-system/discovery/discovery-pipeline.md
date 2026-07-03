---
title: "Discovery Pipeline"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Discovery Maintainers"
last_updated: "2026-07-03"
document_type: "Pipeline"
source: "bootstrap-source/pt15_DISCOVERY_ENGINE.md"
---

# Discovery Pipeline

## Fluxo

```mermaid
flowchart TD
    A[Intake] --> B[Problem Discovery]
    B --> C[User Discovery]
    C --> D[Stakeholder Discovery]
    D --> E[Current Alternatives]
    E --> F[Business Context]
    F --> G[Domain Discovery]
    G --> H[Constraint Discovery]
    H --> I[Assumption Discovery]
    I --> J[Risk Discovery]
    J --> K[Success Metrics]
    K --> L[MVP Boundary]
    L --> M[Validation Plan]
    M --> N[Discovery Handoff]
```

## Quality Gates

Cada etapa deve produzir artefato mínimo antes de avançar. Quando dados forem insuficientes, registre assumptions e open questions.

## Próximos passos

- Criar exemplos preenchidos por domínio.
