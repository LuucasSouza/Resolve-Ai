---
title: "Anti-Patterns Catalog"
project: "AI Software Engineering Operating System (AI-SEOS)"
sprint: "7"
version: "0.7.0"
status: "Draft"
owner: "AI-SEOS Principal Maintainer"
last_updated: "2026-07-04"
---

# Anti-Patterns Catalog

## Purpose

This document defines the official AI-SEOS anti-pattern catalog.

An anti-pattern is a repeated behavior that appears useful at first but usually causes long-term damage. AI-assisted development is especially vulnerable to anti-patterns because AI can generate plausible work quickly even when the underlying process is weak.

Sprint 7 must document the anti-patterns that AI-SEOS exists to prevent.

## Anti-Pattern Categories

### 1. Vibe Coding Anti-Patterns

#### 1.1 Prompt-and-Pray Development

The user gives a vague prompt and hopes the AI builds the right system.

Symptoms:

- no discovery;
- no requirements;
- no architecture;
- no validation;
- no documentation.

Likely result:

- a demo that works briefly;
- hidden technical debt;
- fragile implementation;
- unclear next steps.

AI-SEOS countermeasure:

- Entry Mode Layer;
- Discovery Engine;
- Product Engine;
- Execution Plan;
- Quality Gates.

#### 1.2 Feature Pile

The user keeps asking for features without reviewing architecture.

Symptoms:

- expanding scope;
- duplicated logic;
- unclear domain model;
- inconsistent UI;
- fragile data model.

Countermeasure:

- MVP Scope Framework;
- Optimization Engine;
- Scope Control Protocol.

#### 1.3 Invisible Complexity

The system looks simple in the UI but hides complex security, data, permission or payment issues.

Countermeasure:

- Risk Engine;
- Architecture Engine;
- Security and vendor risk review.

#### 1.4 AI Patch Spiral

The user repeatedly asks the AI to fix bugs without understanding root cause.

Countermeasure:

- Reflection Engine;
- System Review Protocol;
- Failure Mode Analysis.

### 2. Product Anti-Patterns

#### 2.1 Building Before Understanding

A solution is implemented before the problem is validated.

Countermeasure:

- Discovery Protocol;
- Problem Validation;
- Non-Technical Builder Interview.

#### 2.2 MVP as Mini-Enterprise

The first version includes everything.

Countermeasure:

- MVP Scope Framework;
- MoSCoW or similar prioritization;
- What Not To Build section.

#### 2.3 User Confusion

The product has unclear target users and conflicting needs.

Countermeasure:

- stakeholder discovery;
- persona definition;
- use case mapping.

### 3. Architecture Anti-Patterns

#### 3.1 Default Stack Bias

The AI chooses a technology because it is popular or familiar, not because it fits.

Countermeasure:

- Architecture Decision Protocol;
- Decision Matrix;
- ADR.

#### 3.2 Premature Microservices

Microservices are chosen before there is organizational or technical need.

Countermeasure:

- Complexity Index;
- Architecture Readiness Levels;
- Modular Monolith evaluation.

#### 3.3 Database as Afterthought

Data model decisions are delayed until implementation, causing rework.

Countermeasure:

- Domain Modeling;
- Integration Modeling;
- Architecture Overview Template.

#### 3.4 No Reversal Plan

The team makes irreversible decisions without migration path.

Countermeasure:

- ADR Reversal Plan;
- Risk Register.

### 4. Documentation Anti-Patterns

#### 4.1 Documentation as Decoration

Docs exist but do not guide decisions or execution.

Countermeasure:

- Documentation Engine;
- Documentation Drift Review.

#### 4.2 README Graveyard

The README becomes marketing copy but does not help users execute the framework.

Countermeasure:

- docs information architecture;
- onboarding guide;
- quick-start paths by profile.

### 5. AI Agent Anti-Patterns

#### 5.1 Agent Role Confusion

Different agents make overlapping decisions without authority boundaries.

Countermeasure:

- Agent Collaboration Framework;
- Handoff Contracts;
- Conflict Resolution Protocol.

#### 5.2 Lost Context

An agent starts implementing without understanding prior decisions.

Countermeasure:

- Context Package Standard;
- Handoff Receipt;
- Traceability Matrix.

#### 5.3 Confident Hallucinated Architecture

The AI presents architecture as fact without evidence, alternatives or trade-offs.

Countermeasure:

- evidence-based decision making;
- at least three alternatives;
- ADR.

## Required Catalog Structure

Codex must create:

```text
docs/anti-patterns/
  README.md
  anti-pattern-catalog.md
  vibe-coding-anti-patterns.md
  product-anti-patterns.md
  architecture-anti-patterns.md
  documentation-anti-patterns.md
  ai-agent-anti-patterns.md
  anti-pattern-to-countermeasure-map.md
```

## Anti-Pattern Template

```markdown
# Anti-Pattern Name

## Summary

## Context

## Why It Looks Attractive

## Symptoms

## Consequences

## AI-SEOS Countermeasures

## Related Engines

## Related Templates

## Example

## Detection Checklist
```

## Sprint 7 Definition of Done

At least 25 anti-patterns must be documented and mapped to AI-SEOS countermeasures.

