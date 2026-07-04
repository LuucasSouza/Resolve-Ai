---
title: "Case Library and Reference Scenarios"
project: "AI Software Engineering Operating System (AI-SEOS)"
sprint: "7"
version: "0.7.0"
status: "Draft"
owner: "AI-SEOS Principal Maintainer"
last_updated: "2026-07-04"
---

# Case Library and Reference Scenarios

## Purpose

This document defines the official AI-SEOS case library.

A framework becomes credible when users can see how it works in real situations. Sprint 7 must therefore create applied examples that demonstrate how AI-SEOS behaves for different user profiles, business domains, complexity levels and delivery contexts.

## Why cases matter

AI-SEOS is not intended to be abstract documentation only. It must be teachable, demonstrable and reusable. Case studies allow a user to understand:

- how an idea enters the system;
- how the mode router changes the language;
- how discovery becomes product;
- how product becomes architecture;
- how decisions become ADRs;
- how risks become mitigations;
- how optimization changes scope;
- how execution becomes backlog;
- how documentation and handoff preserve continuity.

## Required Case Library Structure

Create the following directory structure:

```text
examples/
  case-library/
    README.md
    index.md
    non-technical-builder/
    vibe-coder/
    professional-engineer/
    cross-mode/
    domains/
      saas/
      operations/
      internal-tools/
      marketplace/
      education/
      local-business/
      ai-product/
```

## Case Types

### 1. Same Idea, Three Modes

This is the most important example type.

The same idea must be processed in three different ways:

- Non-Technical Builder
- Vibe Coder
- Professional Engineer

The goal is to prove that the AI-SEOS core remains consistent while language, depth and artifacts change.

Recommended first case:

```text
Idea:
"I want a simple system to control students, payments and attendance for a martial arts academy."
```

### 2. Non-Technical Everyday Problem

A case for a user who has no software vocabulary.

Example:

```text
"I lose track of customer orders in my small store because everything comes through WhatsApp."
```

Expected output:

- plain-language interview;
- problem summary;
- simple solution recommendation;
- MVP;
- what not to build yet;
- builder-friendly execution plan;
- handoff to a technical agent.

### 3. Vibe Coder Project

A case for someone using Codex, Cursor or Claude Code.

Example:

```text
"I want to build a small SaaS with login, dashboard, forms and payments. I can use AI tools but I don't know architecture deeply."
```

Expected output:

- recommended stack;
- guardrails;
- task-by-task execution;
- validation prompts;
- anti-gambiarra checklist;
- deployment guidance.

### 4. Professional Engineering Scenario

A case for a technical audience.

Example:

```text
"Design a multi-tenant B2B SaaS for martial arts academies with payments, attendance, retention scoring and role-based access."
```

Expected output:

- PRD;
- architecture overview;
- domain model;
- ADRs;
- risk register;
- execution plan;
- quality gates;
- handoff contracts.

### 5. Internal Tool Scenario

Example:

```text
"Create an internal dashboard for a small team to track tasks, clients and deadlines."
```

### 6. Marketplace Scenario

Example:

```text
"Create a marketplace connecting local service providers with customers."
```

### 7. AI Product Scenario

Example:

```text
"Create an AI assistant that reads documents and answers questions for a company."
```

## Standard Case Structure

Every case must include:

```markdown
# Case Name

## Profile
- Target Mode:
- User Type:
- Technical Level:
- Domain:
- Complexity:
- Risk Level:

## Raw Idea

## Entry Mode Interpretation

## Interview

## Problem Translation

## Discovery Summary

## Product Definition

## MVP

## Architecture Summary

## Decision Summary

## Risk Summary

## Optimization Notes

## Execution Plan

## Documentation Outputs

## Handoff Package

## What AI-SEOS Prevented

## Lessons Learned
```

## Case Quality Gates

A case is valid only when:

- it starts from a raw human idea;
- it clearly identifies the entry mode;
- it demonstrates translation from ambiguity to structure;
- it includes at least one trade-off;
- it includes at least one risk;
- it includes at least one explicit scope cut;
- it produces a downstream handoff;
- it explains what would likely go wrong without AI-SEOS.

## Required Sprint 7 Outputs

Codex must create:

- `examples/case-library/README.md`
- `examples/case-library/index.md`
- `examples/case-library/cross-mode/martial-arts-academy-three-modes.md`
- `examples/case-library/non-technical-builder/customer-orders-whatsapp.md`
- `examples/case-library/vibe-coder/simple-saas-dashboard.md`
- `examples/case-library/professional-engineer/multi-tenant-saas-platform.md`
- `templates/cases/case-study-template.md`
- `templates/cases/case-quality-checklist.md`

## Definition of Done

Sprint 7 must include at least one cross-mode case and at least three profile-specific cases.

