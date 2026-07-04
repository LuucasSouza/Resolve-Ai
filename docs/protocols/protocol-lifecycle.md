---
title: "Protocol Lifecycle"
version: "0.7.0"
status: "Draft"
owner: "AI-SEOS Protocol Maintainers"
last_updated: "2026-07-04"
document_type: "Protocol Governance"
---

# Protocol Lifecycle

## Lifecycle States

`mermaid
flowchart LR
  Proposed --> Draft
  Draft --> Trial
  Trial --> Stable
  Stable --> Deprecated
  Deprecated --> Retired
  Trial --> Draft
  Stable --> Trial
`

## State Definitions

- Proposed: idea identified but not written.
- Draft: written but not validated in a real case.
- Trial: usable and under practical validation.
- Stable: recommended for standard use.
- Deprecated: still available but not for new work.
- Retired: historical only.

## Quality Gate

A protocol cannot move to stable until it has purpose, input contract, output contract, steps, gates, examples, related templates and owner.
