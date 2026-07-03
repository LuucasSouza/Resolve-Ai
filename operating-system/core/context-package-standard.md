---
title: "AI-SEOS Context Package Standard"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Core Maintainers"
last_updated: "2026-07-03"
document_type: "Context Standard"
source: "bootstrap-source/pt14_CONTEXT_AND_KNOWLEDGE_MODEL.md"
---

# Context Package Standard

## Objetivo

Padronizar o pacote de contexto usado em handoffs entre humanos, agentes e engines.

## Estrutura

```yaml
context_package:
  title: ""
  purpose: ""
  source_agent: ""
  target_agent: ""
  created_at: ""
  status: "draft | ready | accepted | blocked"
  summary: ""
  background: ""
  goals: []
  non_goals: []
  stakeholders: []
  users: []
  assumptions: []
  constraints: []
  decisions: []
  artifacts: []
  risks: []
  dependencies: []
  open_questions: []
  next_actions: []
```

## Quality Gates

- Possui source e target.
- Separa goals e non-goals.
- Lista decisões e assumptions.
- Inclui riscos e next actions.
- Pode ser usado sem conversa anterior.

## Próximos passos

- Aplicar este standard nos templates de discovery e handoff.
