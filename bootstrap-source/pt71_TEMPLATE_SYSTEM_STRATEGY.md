---
project: AI Software Engineering Operating System (AI-SEOS)
sprint: 6
theme: Complete Template Packs
status: Draft for Codex Execution
version: 0.1.0
---

# pt71 — Template System Strategy

## 1. Purpose

Sprint 6 exists to transform the AI-SEOS from a strong operating model into a reusable working system. Previous sprints created the engines, frameworks, protocols, scorecards, entry modes and cross-engine integration model. Sprint 6 now turns that architecture into practical template packs that can be used repeatedly by non-technical builders, vibe coders, professional engineers, agents and maintainers.

The goal is not to create generic forms. The goal is to create a coherent template system that guides users from a vague idea to validated artifacts across the full AI-SEOS lifecycle.

## 2. Why Sprint 6 follows Sprint 5.5

Sprint 5.5 introduced the Entry Modes Layer because the project identified a major usability risk: if Sprint 6 created templates without knowing who they were for, the templates would default to technical users. That would weaken the open-source vision of AI-SEOS and exclude non-technical builders who need the framework the most.

Sprint 6 therefore must produce templates for three user profiles:

1. Non-Technical Builder — understands a real-world problem but does not know software terminology.
2. Vibe Coder — can use AI coding tools but needs guardrails, structure and sequencing.
3. Professional Engineer — expects rigorous technical artifacts, traceability, decisions and execution readiness.

The same lifecycle must support all three profiles, but the language, depth, assumptions, questions and expected outputs must be different.

## 3. Template System Principles

Every template in Sprint 6 must follow these principles:

### 3.1 Plain first, technical when necessary

Templates for non-technical builders must start with real-world language. Technical translation must happen later and must be explained.

Bad:

```text
Define your persistence layer and deployment target.
```

Good:

```text
What information do you need to save, search, update or share with other people?
AI-SEOS will later translate this into a data model and storage strategy.
```

### 3.2 One template, one job

A template must not try to solve all lifecycle stages at once. It must produce a clear artifact.

Examples:

- Intake Template produces an Intake Brief.
- Discovery Template produces a Discovery Document.
- MVP Template produces an MVP Scope Definition.
- Architecture Template produces an Architecture Overview.
- ADR Template produces one decision record.
- Handoff Template produces a transfer package.

### 3.3 Each template must define its output contract

Every template must clearly state:

- required inputs;
- optional inputs;
- expected outputs;
- quality gates;
- next engine or agent;
- completion criteria.

### 3.4 Templates must be agent-executable

A template must be usable by a human, but also executable by Codex, Claude Code, Cursor, Gemini CLI or another AI agent. This means templates must include explicit instructions, placeholders and validation sections.

### 3.5 Templates must support progressive depth

Templates must allow light, standard and deep usage.

Suggested levels:

- T0 — Quick Capture
- T1 — Standard Project
- T2 — Production-Ready
- T3 — Enterprise / High-Risk

### 3.6 Templates must support traceability

A template should preserve links to previous artifacts and next artifacts.

Example:

```text
Source artifacts:
- Builder Intake
- Discovery Document
- PRD
- ADRs
- Risk Register

Generated artifacts:
- Execution Plan
- Backlog
- Handoff Package
```

## 4. Canonical Template Front Matter

All Markdown templates must use this front matter unless there is a strong reason not to:

```yaml
title: "<Template Name>"
template_id: "<canonical-id>"
version: "0.1.0"
status: "draft"
owner: "<engine-or-agent>"
profile: "non-technical-builder | vibe-coder | professional-engineer | universal"
lifecycle_stage: "intake | discovery | product | architecture | decision | risk | optimization | execution | documentation | handoff | reflection"
input_artifacts: []
output_artifacts: []
next_engine: "<engine-name>"
quality_gate: "<gate-name>"
last_updated: "2026-07-03"
```

## 5. Canonical Template Sections

Every template should include the following sections when applicable:

```markdown
# Template Name

## 1. When to use this template
## 2. Who this template is for
## 3. What this template produces
## 4. Required inputs
## 5. Instructions
## 6. Questions / fields
## 7. Output format
## 8. Quality gates
## 9. Common mistakes
## 10. Example
## 11. Handoff
```

## 6. Template Pack Architecture

Sprint 6 must create the following template packs:

```text
templates/
  entry-modes/
  intake/
    non-technical-builder/
    vibe-coder/
    professional-engineer/
  lifecycle/
    discovery/
    product/
    architecture/
    decision/
    risk/
    optimization/
    execution/
    documentation/
    handoff/
    reflection/
  engines/
    discovery-engine/
    product-engine/
    architecture-engine/
    decision-engine/
    risk-engine/
    optimization-engine/
    execution-engine/
    documentation-engine/
    handoff-engine/
    reflection-engine/
  agents/
    ai-cto/
    product-owner/
    solution-architect/
    security-lead/
    implementation-lead/
    qa-lead/
    documentation-lead/
  examples-filled/
    non-technical-builder/
    vibe-coder/
    professional-engineer/
  packs/
    non-technical-builder-pack/
    vibe-coder-pack/
    professional-engineer-pack/
    full-lifecycle-pack/
```

## 7. Template Naming Standard

Use kebab-case for filenames.

Examples:

```text
problem-intake-template.md
builder-interview-template.md
mvp-scope-template.md
architecture-overview-template.md
risk-register-template.md
execution-plan-template.md
handoff-package-template.md
reflection-report-template.md
```

## 8. Template Quality Standard

A template is only accepted when it satisfies:

- clear target user;
- clear lifecycle stage;
- no ambiguous placeholders;
- example included or linked;
- quality gate included;
- handoff target included;
- compatible with Entry Modes Layer;
- compatible with cross-engine artifact contracts;
- can be used by an AI coding agent without additional explanation.

## 9. Sprint 6 Expected Outcome

At the end of Sprint 6, the AI-SEOS should have complete reusable templates for:

- non-technical users;
- vibe coders;
- professional engineers;
- lifecycle artifacts;
- engine artifacts;
- agent handoffs;
- example-filled reference documents;
- validation and maintenance.

Sprint 6 should make the AI-SEOS usable in practice, not only well designed in theory.
