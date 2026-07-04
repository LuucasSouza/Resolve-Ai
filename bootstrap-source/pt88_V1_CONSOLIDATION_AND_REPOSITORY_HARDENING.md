---
title: "V1 Consolidation and Repository Hardening"
project: "AI Software Engineering Operating System (AI-SEOS)"
sprint: "7"
version: "0.7.0"
status: "Draft"
owner: "AI-SEOS Principal Maintainer"
last_updated: "2026-07-04"
---

# V1 Consolidation and Repository Hardening

## Purpose

This document defines repository hardening tasks for Sprint 7.

Sprints 0-6 generated a large amount of documentation. Sprint 7 must ensure that the repository is navigable, coherent and prepared for continued evolution.

## Consolidation Goals

### 1. Reduce Navigation Friction

Users must be able to answer:

- What is this?
- Who is it for?
- Where do I start?
- Which mode should I use?
- Which templates apply to me?
- How do I run a project through AI-SEOS?
- How can I contribute?

### 2. Make the Framework Coherent

Ensure that:

- engines reference each other consistently;
- templates point to engines and protocols;
- examples point to templates;
- protocols point to quality gates;
- ADRs explain major decisions;
- sprint docs tell the evolution story.

### 3. Prepare for Public Release

Create release-oriented docs:

- release readiness;
- known limitations;
- future roadmap;
- contribution guide refinements;
- issue templates;
- docs index.

## Repository Hardening Tasks

### Required README updates

Root README must include:

- brief description;
- "choose your path";
- lifecycle diagram;
- three modes;
- quick start for Codex;
- link to docs;
- link to examples;
- link to template packs;
- current status;
- roadmap.

### Required Docs Index

Create:

```text
docs/index.md
docs/navigation-map.md
docs/learning-paths.md
```

### Required Glossary Improvements

Create or update:

```text
docs/glossary/plain-language-glossary.md
docs/glossary/engineering-glossary.md
docs/glossary/ai-assisted-development-glossary.md
```

### Required Release Docs

Create:

```text
docs/release/
  README.md
  known-limitations.md
  v0.1.0-release-readiness.md
  release-notes-draft.md
  post-sprint-7-roadmap.md
```

### Required GitHub Docs

Create:

```text
.github/
  ISSUE_TEMPLATE/
    bug_report.md
    documentation_improvement.md
    framework_proposal.md
    template_proposal.md
    case_study_proposal.md
  PULL_REQUEST_TEMPLATE.md
```

## Link and Naming Audit

Codex should inspect all major README files and ensure:

- links use relative paths;
- major folders are referenced;
- duplicate terms are reduced;
- Sprint 5.5 is explained where roadmap is discussed;
- templates by profile are discoverable;
- examples by profile are discoverable.

## Source File Handling

The `bootstrap-source/` directory should remain preserved, but public documentation should clarify that it contains historical generation inputs, not the primary reading path.

Create:

```text
bootstrap-source/README.md
```

## Sprint 7 Required ADRs

Create ADRs for:

- protocol system finalization;
- case library adoption;
- anti-pattern catalog adoption;
- best practices catalog adoption;
- public adoption paths;
- release readiness audit;
- repository hardening;
- GitHub community templates;
- post-v0.1 roadmap approach.

## Definition of Done

Repository hardening is complete when a new user can open the repository and find the correct entry path in less than three clicks from the root README.

