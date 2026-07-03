---
title: "AI-SEOS Core Quality Gates"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Core Maintainers"
last_updated: "2026-07-03"
document_type: "Quality Gates"
source: "bootstrap-source/pt13_OPERATING_SYSTEM_KERNEL.md"
---

# Core Quality Gates

## Objetivo

Definir checkpoints mínimos antes da transição entre estágios do AI-SEOS.

## Gates

| Gate | Antes de | Evidência mínima |
|---|---|---|
| Problem Gate | MVP definition | Problem statement, users, assumptions |
| Scope Gate | Architecture | MVP, non-goals, constraints |
| Architecture Gate | Execution | Options, trade-offs, ADRs |
| Risk Gate | Implementation | Risk register, mitigations |
| Handoff Gate | Downstream execution | Context package, artifacts, next steps |
| Reflection Gate | Completion | Gaps, unresolved questions, learnings |

## Responsabilidades

O agente executor deve parar ou registrar assumptions quando evidências mínimas estiverem ausentes.

## Próximos passos

- Especializar gates para Product Engine e Architecture Engine.
