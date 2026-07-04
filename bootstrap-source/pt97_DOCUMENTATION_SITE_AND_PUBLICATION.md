---
title: "Phase 2 — Documentation Site and Publication"
part: "pt97"
phase: "Phase 2 — Validation and Productization"
version: "0.1.0-alpha-candidate"
status: "Draft"
owner: "AI-SEOS Maintainers"
last_updated: "2026-07-04"
canonical_targets:
  - "docs/publication/documentation-site-strategy.md"
  - "docs/publication/information-architecture.md"
  - "docs/publication/navigation-map.md"
  - "docs/publication/publication-checklist.md"
  - "templates/publication/docs-site-page-template.md"
  - "adr/0077-adopt-documentation-site-for-public-alpha.md"
---

# Phase 2 — Documentation Site and Publication

## 1. Purpose

This document defines the strategy for turning AI-SEOS from a repository into a navigable public documentation experience.

A strong README is not enough for a framework of this size.

AI-SEOS needs a documentation site or documentation structure that helps three very different audiences:

1. Non-Technical Builders;
2. Vibe Coders;
3. Professional Engineers.

## 2. Why Publication Matters

AI-SEOS is documentation-heavy by design. Its value is not only in code but in structured knowledge, protocols, templates, playbooks and examples.

If users cannot navigate the project, they will not experience the framework.

Publication is not marketing decoration. It is part of product usability.

## 3. Recommended Documentation Site Options

The framework should evaluate three options.

### 3.1 GitHub-Only Documentation

Advantages:

- simplest;
- no build setup;
- easy for contributors;
- no hosting dependency.

Disadvantages:

- harder navigation;
- poor search;
- limited information architecture;
- less beginner-friendly.

### 3.2 MkDocs Material

Advantages:

- excellent for documentation;
- strong navigation;
- search;
- simple Markdown-first workflow;
- good for open source.

Disadvantages:

- requires Python setup;
- requires docs build pipeline;
- another tool to maintain.

### 3.3 Docusaurus

Advantages:

- strong docs site;
- versioning support;
- good React ecosystem;
- blog support;
- polished public site.

Disadvantages:

- Node build stack;
- more configuration;
- may be heavier than needed for alpha.

## 4. Recommended Initial Decision

For `v0.1.0-alpha`, prefer:

```text
GitHub-first documentation with a docs-site-ready information architecture.
```

This means:

- keep Markdown docs as source of truth;
- improve navigation inside GitHub;
- define a site IA;
- prepare for MkDocs or Docusaurus later;
- do not block alpha release on site tooling.

This decision should be recorded as ADR 0077.

## 5. Documentation Information Architecture

The public documentation should be organized by user intent.

Recommended top-level navigation:

```text
Start Here
    What is AI-SEOS?
    Choose Your Path
    First Project Walkthrough
    Glossary for Beginners

Use AI-SEOS
    Non-Technical Builder
    Vibe Coder
    Professional Engineer

Framework
    Operating System
    Engines
    Frameworks
    Protocols
    Templates
    Playbooks
    Agents

Examples
    Case Library
    Real-World Cases
    Same Idea in Three Modes
    SenseiHub Validation Case

Contribute
    Contributing
    Governance
    Proposal Process
    Maintainer Guide

Release
    Roadmap
    Changelog
    Release Notes
    Known Limitations
```

## 6. Required Publication Artifacts

Create:

```text
docs/publication/documentation-site-strategy.md
docs/publication/information-architecture.md
docs/publication/navigation-map.md
docs/publication/publication-checklist.md
templates/publication/docs-site-page-template.md
```

ADR:

```text
adr/0077-adopt-documentation-site-for-public-alpha.md
```

## 7. Required README Updates

The README should provide:

- one-sentence explanation;
- plain-language explanation;
- three entry paths;
- current maturity status;
- how to start;
- what to read first;
- link to validation cases;
- link to release limitations;
- contribution path.

## 8. Beginner Publication Requirements

For non-technical users, the docs must include:

```text
docs/getting-started/for-non-technical-builders.md
docs/getting-started/basic-software-terms.md
docs/getting-started/how-ai-seos-interviews-you.md
docs/getting-started/from-problem-to-software.md
```

If these already exist, update them.

## 9. Vibe Coder Publication Requirements

For vibe coders, the docs must include:

```text
docs/getting-started/for-vibe-coders.md
docs/getting-started/how-to-use-with-codex.md
docs/getting-started/ai-coding-guardrails.md
docs/getting-started/first-ai-coding-session.md
```

## 10. Professional Engineer Publication Requirements

For engineers, the docs must include:

```text
docs/getting-started/for-professional-engineers.md
docs/getting-started/framework-architecture.md
docs/getting-started/artifact-lifecycle.md
docs/getting-started/architecture-and-adr-flow.md
```

## 11. Publication Checklist

The publication checklist must verify:

- README works as landing page;
- docs/README works as docs hub;
- getting-started path exists for each user profile;
- glossary exists;
- examples are discoverable;
- release limitations are clear;
- contribution path exists;
- no stable claims are made before alpha;
- navigation map exists.

## 12. Quality Gates

This workstream passes only if:

- publication strategy exists;
- information architecture exists;
- navigation map exists;
- publication checklist exists;
- docs-site page template exists;
- ADR 0077 exists;
- README and docs/README reflect the three-path onboarding.

## 13. Definition of Done

Documentation Site and Publication is done when AI-SEOS can be understood and navigated by a first-time visitor without requiring the maintainer to explain the repository manually.
