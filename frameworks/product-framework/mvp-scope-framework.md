---
title: "MVP Scope Framework"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Product Maintainers"
last_updated: "2026-07-03"
document_type: "Framework"
source: "bootstrap-source/pt23_MVP_AND_SCOPE_FRAMEWORK.md"
---

# MVP Scope Framework

## Objetivo

Definir o menor incremento coerente capaz de validar valor com risco operacional e arquitetural aceitável.

## MVP Equation

```text
MVP Scope = Core User Job + Critical Business Rule + Minimal Trust Layer + Observable Outcome + Acceptable Operational Path
```

## Scope Categories

| Category | Treatment |
|---|---|
| Core MVP | Build now |
| Enabling MVP | Build now if required for usability/safety |
| Post-MVP | Defer |
| Experimental | Prototype or research |
| Explicitly Out | Exclude and document |

## Review Protocol

Remove features not directly supporting the primary outcome, re-add only trust/operation/legal/measurement needs, document trade-offs.
