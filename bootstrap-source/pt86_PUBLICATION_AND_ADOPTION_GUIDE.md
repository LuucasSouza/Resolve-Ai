---
title: "Publication and Adoption Guide"
project: "AI Software Engineering Operating System (AI-SEOS)"
sprint: "7"
version: "0.7.0"
status: "Draft"
owner: "AI-SEOS Principal Maintainer"
last_updated: "2026-07-04"
---

# Publication and Adoption Guide

## Purpose

This document defines how AI-SEOS should be prepared for public usage.

A framework can be well-designed and still fail if users do not understand how to start. Sprint 7 must therefore make the project easier to adopt for three audiences:

- Non-Technical Builders
- Vibe Coders
- Professional Engineers

## Public Positioning

AI-SEOS should be presented as:

```text
An open-source operating system for AI-assisted software engineering.
```

Plain language version:

```text
A structured way to turn ideas into software projects using AI without losing clarity, planning, safety or maintainability.
```

## Adoption Paths

### Path 1: Non-Technical Builder

Primary question:

```text
I have a problem. Can AI help me create a tool to solve it?
```

Provide:

- plain-language explanation;
- guided interview;
- examples;
- glossary;
- "what you do not need to know yet";
- handoff to a technical agent.

### Path 2: Vibe Coder

Primary question:

```text
I use AI coding tools. How do I avoid building a mess?
```

Provide:

- quick-start;
- prompts;
- template pack;
- execution checklist;
- anti-patterns;
- simple architecture guardrails.

### Path 3: Professional Engineer

Primary question:

```text
How do I use AI-SEOS as a structured engineering workflow?
```

Provide:

- engine lifecycle;
- artifact contracts;
- ADR workflows;
- risk and readiness models;
- templates;
- reference implementations.

## Required Public Documentation

Create:

```text
docs/getting-started/
  README.md
  for-non-technical-builders.md
  for-vibe-coders.md
  for-professional-engineers.md
  choose-your-path.md
  glossary-for-beginners.md
  first-project-walkthrough.md
```

## README Improvements

The root README must include:

- short explanation;
- who it is for;
- three entry paths;
- quick-start;
- lifecycle diagram;
- repository map;
- how to use with Codex;
- how to contribute.

## Adoption Checklist

AI-SEOS is adoption-ready when:

- a non-technical user can understand what it does;
- a vibe coder can copy a prompt and start;
- a programmer can find technical docs quickly;
- the repository has clear navigation;
- examples exist;
- templates are discoverable;
- anti-patterns are documented;
- contribution path is clear.

## GitHub Project Recommendations

Codex should create or update:

```text
.github/
  ISSUE_TEMPLATE/
  PULL_REQUEST_TEMPLATE.md
```

Suggested issue templates:

- Bug report
- Documentation improvement
- New protocol proposal
- New template proposal
- New case study proposal
- Framework improvement proposal

## Release Preparation

Sprint 7 should prepare the repository for a future `v0.1.0` public release.

Recommended release checklist:

- README usable;
- roadmap updated;
- changelog updated;
- license present;
- security policy present;
- code of conduct present;
- governance present;
- examples present;
- template registry present;
- protocol registry present;
- release notes draft created.

## Required Outputs

- `docs/getting-started/*`
- `.github/ISSUE_TEMPLATE/*`
- `.github/PULL_REQUEST_TEMPLATE.md`
- `docs/release/v0.1.0-release-readiness.md`
- `docs/release/release-notes-draft.md`

