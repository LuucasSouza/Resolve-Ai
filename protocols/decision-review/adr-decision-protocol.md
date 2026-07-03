---
title: "ADR Decision Protocol"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Decision Maintainers"
last_updated: "2026-07-03"
document_type: "Protocol"
source: "bootstrap-source/pt33_ADR_DECISION_PROTOCOL.md"
---

# ADR Decision Protocol

## Objetivo

Definir quando e como AI-SEOS cria, atualiza, supersede e referencia ADRs.

## ADR Levels

| Level | Artifact | Use case |
|---|---|---|
| ADR-L0 | None | Trivial local choice |
| ADR-L1 | Decision Log Entry | Small but noteworthy choice |
| ADR-L2 | ADR Lite | Cross-module or recurring convention |
| ADR-L3 | Full ADR | Architecture-impacting decision |
| ADR-L4 | Full ADR + Risk Review | Strategic, vendor, security, compliance decision |
| ADR-L5 | Full ADR + Risk + Human Approval | Irreversible or regulated decision |

## Update Rules

Accepted ADRs must not be rewritten to hide historical reasoning. Superseding requires a new ADR, old ADR status update and index updates.
