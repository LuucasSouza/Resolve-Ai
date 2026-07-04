---
project: AI Software Engineering Operating System (AI-SEOS)
sprint: 6
theme: Complete Template Packs
status: Draft for Codex Execution
version: 0.1.0
---

# pt75 — Lifecycle Template Pack

## 1. Purpose

The Lifecycle Template Pack provides universal templates for every AI-SEOS lifecycle stage. These templates are profile-aware but stage-centered. They define the minimum artifacts required for a project to move through the full AI-SEOS operating system.

## 2. Required Directory Structure

Sprint 6 must create:

```text
templates/lifecycle/intake/
templates/lifecycle/discovery/
templates/lifecycle/product/
templates/lifecycle/architecture/
templates/lifecycle/decision/
templates/lifecycle/risk/
templates/lifecycle/optimization/
templates/lifecycle/execution/
templates/lifecycle/documentation/
templates/lifecycle/handoff/
templates/lifecycle/reflection/
```

## 3. Required Universal Templates

Create these files:

```text
templates/lifecycle/intake/intake-brief-template.md
templates/lifecycle/discovery/discovery-document-template.md
templates/lifecycle/product/prd-template.md
templates/lifecycle/product/mvp-scope-template.md
templates/lifecycle/product/product-roadmap-template.md
templates/lifecycle/architecture/architecture-overview-template.md
templates/lifecycle/architecture/domain-model-template.md
templates/lifecycle/architecture/integration-strategy-template.md
templates/lifecycle/decision/decision-matrix-template.md
templates/lifecycle/decision/adr-template.md
templates/lifecycle/risk/risk-register-template.md
templates/lifecycle/risk/security-risk-review-template.md
templates/lifecycle/optimization/optimization-review-template.md
templates/lifecycle/execution/execution-plan-template.md
templates/lifecycle/execution/sprint-plan-template.md
templates/lifecycle/execution/work-package-template.md
templates/lifecycle/documentation/documentation-plan-template.md
templates/lifecycle/handoff/handoff-package-template.md
templates/lifecycle/reflection/retrospective-template.md
templates/lifecycle/reflection/improvement-backlog-template.md
```

## 4. Universal Intake Brief Template

Must include:

- selected entry mode;
- user problem;
- current workflow;
- stakeholders;
- desired outcome;
- constraints;
- urgency;
- risks;
- next artifact.

## 5. Discovery Document Template

Must include:

- problem statement;
- users;
- stakeholders;
- current alternatives;
- business goals;
- assumptions;
- constraints;
- success metrics;
- open questions;
- discovery confidence;
- recommendation for Product Engine.

## 6. PRD Template

Must include:

- product vision;
- target users;
- problem;
- goals;
- non-goals;
- features;
- user stories;
- acceptance criteria;
- MVP scope;
- out-of-scope;
- dependencies;
- risks;
- metrics;
- release strategy.

## 7. Architecture Overview Template

Must include:

- context;
- constraints;
- architecture goals;
- system context diagram;
- container diagram;
- components;
- data model;
- integrations;
- security boundaries;
- deployment overview;
- observability;
- decisions and ADR references;
- risks;
- scalability path.

## 8. Decision Matrix Template

Must include:

- decision question;
- alternatives;
- criteria;
- weights;
- scores;
- confidence;
- recommendation;
- dissenting view;
- ADR reference.

## 9. Risk Register Template

Must include:

- risk id;
- category;
- description;
- cause;
- probability;
- impact;
- severity;
- owner;
- mitigation;
- trigger;
- status;
- review date.

## 10. Execution Plan Template

Must include:

- milestones;
- work packages;
- dependencies;
- sequencing;
- Definition of Ready;
- Definition of Done;
- validation plan;
- release candidate criteria;
- handoff package.

## 11. Handoff Package Template

Must include:

- source engine;
- receiving agent/engine;
- context summary;
- artifacts included;
- decisions;
- risks;
- assumptions;
- constraints;
- pending questions;
- expected next action;
- handoff receipt.

## 12. Reflection Template

Must include:

- what was planned;
- what happened;
- what changed;
- what worked;
- what failed;
- decisions to revisit;
- technical debt found;
- framework improvements;
- next iteration.

## 13. Definition of Done

The Lifecycle Template Pack is complete when every lifecycle stage has at least one canonical template and every template declares its input/output artifacts and next engine.
