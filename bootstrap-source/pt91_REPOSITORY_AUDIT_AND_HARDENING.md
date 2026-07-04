---
title: "Phase 2 — Repository Audit and Hardening"
part: "pt91"
phase: "Phase 2 — Validation and Productization"
version: "0.1.0-alpha-candidate"
status: "Draft"
owner: "AI-SEOS Maintainers"
last_updated: "2026-07-04"
depends_on:
  - "Sprint 0"
  - "Sprint 1"
  - "Sprint 2"
  - "Sprint 3"
  - "Sprint 4"
  - "Sprint 5"
  - "Sprint 5.5"
  - "Sprint 6"
  - "Sprint 7"
canonical_targets:
  - "docs/quality/repository-audit-and-hardening.md"
  - "docs/release/repository-hardening-checklist.md"
  - "docs/release/public-alpha-readiness-gap-analysis.md"
  - "protocols/repository-audit/repository-audit-protocol.md"
  - "templates/repository-audit/repository-audit-report-template.md"
  - "adr/0071-adopt-repository-audit-before-public-alpha.md"
---

# Phase 2 — Repository Audit and Hardening

## 1. Purpose

This document defines the first workstream of **Phase 2 — Validation and Productization**.

Until Sprint 7, AI-SEOS was primarily built as a structured documentation framework: engines, protocols, templates, playbooks, ADRs, examples, entry modes and public-alpha documentation were created.

Phase 2 changes the project posture.

The project must now behave less like a document-generation effort and more like a public open-source framework being prepared for real adoption.

This means the repository must be audited, hardened, made navigable, made internally consistent, and prepared for validation by real users.

## 2. Why This Phase Exists

Sprint 7 produced a public-alpha readiness score of **43 / 50**.

That score means the project is strong enough to be shown as a public alpha, but not strong enough to be considered stable or production-grade as a framework.

The main known limitations are:

- manual validation of internal links;
- manual validation of front matter;
- manual registry synchronization;
- incomplete end-to-end validation using real projects;
- draft status across many protocols and templates;
- no release-tagged adoption package yet;
- no evidence that the three entry modes work for real users;
- no verified first-project walkthrough from idea to execution;
- no automated quality audit script.

Repository hardening is necessary before inviting external contributors, publishing a release, or asking people to adopt the framework.

## 3. Strategic Objective

The objective of this workstream is to make the repository reliable enough to support public-alpha usage.

Repository hardening must answer the following questions:

1. Can a new user understand what AI-SEOS is from the README?
2. Can a non-technical builder find the right starting path?
3. Can a vibe coder find a practical workflow?
4. Can a professional engineer find rigorous artifacts?
5. Are all main directories documented?
6. Are framework registries aligned with actual files?
7. Are ADR indexes aligned with ADR files?
8. Are sprint reports discoverable?
9. Are template packs discoverable and usable?
10. Are release limitations clearly documented?
11. Are contribution paths clear?
12. Are known gaps explicitly visible?

## 4. Required Repository Audit Dimensions

The audit must evaluate the repository across the following dimensions.

### 4.1 Navigation Audit

Evaluate whether a new user can navigate the repository without prior context.

Required checks:

- root README gives a clear explanation of AI-SEOS;
- README links to the three entry modes;
- README links to getting started docs;
- README explains current project maturity;
- docs/README.md works as a documentation hub;
- frameworks/README.md explains the framework registry;
- templates/README.md explains how to choose templates;
- examples/README.md explains case libraries;
- protocols/README.md explains protocol lifecycle;
- adr/README.md lists all ADRs;
- ROADMAP.md reflects current phase.

### 4.2 Structural Audit

Verify that the actual repository structure matches the intended architecture.

Required checks:

- every top-level directory has README.md;
- every engine directory has README.md;
- every framework directory has README.md;
- every protocol directory has README.md or equivalent index;
- every template pack has an index;
- examples are organized by type and user profile;
- docs/sprints contains all sprint reports;
- bootstrap-source contains source parts for traceability.

### 4.3 Metadata Audit

Front matter may currently be inconsistent. The audit must identify, not necessarily fix all metadata immediately.

Required checks:

- documents have title;
- documents have status;
- documents have version or lifecycle marker;
- documents have owner or maintainer field when appropriate;
- documents have last_updated where appropriate;
- canonical documents identify their purpose;
- templates identify target user profile;
- protocols identify lifecycle stage.

### 4.4 Link Audit

AI-SEOS is documentation-heavy. Broken links will severely reduce trust.

Required checks:

- internal relative links resolve;
- README links resolve;
- docs index links resolve;
- ADR index links resolve;
- template registry links resolve;
- framework registry links resolve;
- release documentation links resolve.

If full automation is not implemented yet, create a manual link-audit checklist and a backlog item for automation.

### 4.5 Registry Audit

Several registries were introduced in previous sprints. They must match the actual repository.

Required checks:

- framework registry includes all framework directories;
- template registry includes all major template packs;
- protocol registry includes all protocol directories;
- ADR registry includes ADRs 0001-0070 and new Phase 2 ADRs;
- case-library registry includes case examples;
- best-practice catalog references existing engines and frameworks;
- anti-pattern catalog references countermeasures.

### 4.6 Release Readiness Audit

Assess whether the repository is ready for `v0.1.0-alpha`.

Required checks:

- known limitations exist;
- release notes draft exists;
- release checklist exists;
- release readiness score exists;
- installation/use instructions exist;
- no misleading stable claims;
- alpha status is clear;
- public adoption path is clear.

### 4.7 Contributor Readiness Audit

Assess whether new contributors can participate.

Required checks:

- CONTRIBUTING.md is current;
- GOVERNANCE.md is current;
- CODE_OF_CONDUCT.md exists;
- SECURITY.md exists;
- issue templates exist;
- PR template exists;
- proposal process exists;
- maintainer guide exists.

## 5. Required Canonical Artifacts

The Codex agent must create or update the following canonical artifacts.

```text
docs/quality/repository-audit-and-hardening.md
docs/release/repository-hardening-checklist.md
docs/release/public-alpha-readiness-gap-analysis.md
protocols/repository-audit/repository-audit-protocol.md
templates/repository-audit/repository-audit-report-template.md
```

Also create the ADR:

```text
adr/0071-adopt-repository-audit-before-public-alpha.md
```

## 6. Repository Audit Report Template

The generated audit report must include:

```markdown
# Repository Audit Report

## Metadata
- Date:
- Auditor:
- Scope:
- Repository branch:
- Commit:
- Release target:

## Executive Summary

## Audit Score
| Dimension | Score | Status | Notes |
|---|---:|---|---|
| Navigation | 0-5 | | |
| Structure | 0-5 | | |
| Metadata | 0-5 | | |
| Links | 0-5 | | |
| Registries | 0-5 | | |
| Release readiness | 0-5 | | |
| Contributor readiness | 0-5 | | |
| Documentation clarity | 0-5 | | |
| User paths | 0-5 | | |
| Operational maintainability | 0-5 | | |

## Findings

## Critical Gaps

## Improvement Backlog

## Release Blockers

## Non-Blocking Improvements

## Recommended Next Actions
```

## 7. Scoring Model

Use a 50-point readiness model.

| Score | Meaning |
|---:|---|
| 0-20 | Not ready |
| 21-30 | Internal draft only |
| 31-40 | Early alpha candidate |
| 41-45 | Public alpha with limitations |
| 46-48 | Strong public alpha |
| 49-50 | Alpha release ready |

The previous Sprint 7 score was **43 / 50**. The goal of Phase 2 is to reach at least **47 / 50** before tagging `v0.1.0-alpha`.

## 8. Required Actions for Codex

Codex must:

1. Read this file completely.
2. Audit the repository against the dimensions above.
3. Create the canonical audit documents.
4. Create a repository hardening checklist.
5. Create a public alpha readiness gap analysis.
6. Create a repository audit protocol.
7. Create a reusable repository audit report template.
8. Create ADR 0071.
9. Update README, ROADMAP, CHANGELOG, docs/README, docs/release/README, docs/quality/README, protocols/README, templates/README and adr/README.
10. Add findings to the Phase 2 validation report when created.
11. Do not hide gaps.
12. Do not claim stable readiness unless the audit supports it.

## 9. Quality Gates

The workstream is complete only when:

- audit protocol exists;
- hardening checklist exists;
- gap analysis exists;
- audit template exists;
- ADR 0071 exists;
- README and release docs reflect the public-alpha posture;
- gaps are documented honestly;
- improvement backlog is created.

## 10. Definition of Done

Repository Audit and Hardening is done when the repository has a documented, repeatable and honest audit process that can be used before every public release.

The result must not be a marketing page. It must be a trustworthy engineering artifact.
