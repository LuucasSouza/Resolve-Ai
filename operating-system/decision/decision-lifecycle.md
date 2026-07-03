---
title: "Decision Lifecycle"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Decision Maintainers"
last_updated: "2026-07-03"
document_type: "Lifecycle"
source: "bootstrap-source/pt31_DECISION_ENGINE.md"
---

# Decision Lifecycle

```mermaid
stateDiagram-v2
    [*] --> Candidate
    Candidate --> Framed
    Framed --> AlternativesDefined
    AlternativesDefined --> Evaluated
    Evaluated --> RiskReviewed
    RiskReviewed --> Recommended
    Recommended --> Approved
    Recommended --> Rejected
    Approved --> Documented
    Documented --> Implemented
    Implemented --> Monitored
    Monitored --> Revalidated
    Revalidated --> Preserved
    Revalidated --> Superseded
    Revalidated --> Deprecated
    Rejected --> Archived
```

## Decision Classes

| Class | Description | Required Artifact | Approval |
|---|---|---|---|
| D0 | Trivial local choice | None or code comment | Implementer |
| D1 | Local design decision | Decision log | Lead agent |
| D2 | Cross-module decision | ADR lite | AI CTO or Architect |
| D3 | Architectural decision | Full ADR | AI CTO + human review recommended |
| D4 | Strategic/platform decision | Full ADR + risk review | Human approval required |
| D5 | Regulated/irreversible decision | Full ADR + risk + security review | Human approval mandatory |
