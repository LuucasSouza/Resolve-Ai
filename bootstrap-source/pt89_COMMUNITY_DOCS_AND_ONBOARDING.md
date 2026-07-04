---
title: "Community Docs and Onboarding"
project: "AI Software Engineering Operating System (AI-SEOS)"
sprint: "7"
version: "0.7.0"
status: "Draft"
owner: "AI-SEOS Principal Maintainer"
last_updated: "2026-07-04"
---

# Community Docs and Onboarding

## Purpose

This document defines community and onboarding documentation for Sprint 7.

AI-SEOS is intended to be open-source. Therefore it needs more than internal architecture. It needs onboarding, contribution guidance and community-facing documentation.

## User Onboarding

Create onboarding paths for:

### Non-Technical Builder

Goal:

```text
Help a person with no software background understand how AI-SEOS turns a problem into a buildable software plan.
```

Required docs:

- What AI-SEOS does in plain language
- How to describe your problem
- How the interview works
- What you will receive
- What you do not need to know
- How to pass the result to Codex or a developer

### Vibe Coder

Goal:

```text
Help an AI coding tool user build with less chaos.
```

Required docs:

- How to start from an idea
- How to avoid prompt-and-pray development
- How to use template packs
- How to create tasks for Codex
- How to validate generated work
- How to avoid common AI coding traps

### Professional Engineer

Goal:

```text
Help technical users adopt AI-SEOS as an engineering workflow.
```

Required docs:

- Engine lifecycle
- Artifact contracts
- ADR workflow
- Quality gates
- Risk model
- Handoff model
- Reference implementation

## Contributor Onboarding

Create:

```text
docs/community/
  README.md
  contributor-onboarding.md
  maintainer-guide.md
  proposal-process.md
  documentation-contribution-guide.md
  template-contribution-guide.md
  case-study-contribution-guide.md
```

## Proposal Types

AI-SEOS should support the following contribution proposal types:

- new protocol;
- new template;
- new framework;
- new playbook;
- new case study;
- anti-pattern addition;
- best practice addition;
- documentation improvement;
- translation/localization;
- tooling/automation.

## Maintainer Guide

Must define:

- how to review new templates;
- how to review new protocols;
- how to accept ADRs;
- how to reject changes respectfully;
- how to prevent framework bloat;
- how to preserve modularity;
- how to maintain beginner accessibility.

## Community Quality Principles

Every contribution should improve at least one of:

- clarity;
- usability;
- traceability;
- accessibility;
- maintainability;
- safety;
- learning value;
- practical applicability.

## Required Outputs

Codex must create:

- `docs/community/README.md`
- `docs/community/contributor-onboarding.md`
- `docs/community/maintainer-guide.md`
- `docs/community/proposal-process.md`
- `docs/community/documentation-contribution-guide.md`
- `docs/community/template-contribution-guide.md`
- `docs/community/case-study-contribution-guide.md`
- `.github/ISSUE_TEMPLATE/*`
- `.github/PULL_REQUEST_TEMPLATE.md`

## Definition of Done

Sprint 7 community onboarding is complete when a contributor can understand how to propose a change without asking the maintainer privately.

