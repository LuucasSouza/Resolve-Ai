---
title: "Phase 2 — Release v0.1.0-alpha Plan"
part: "pt98"
phase: "Phase 2 — Validation and Productization"
version: "0.1.0-alpha-candidate"
status: "Draft"
owner: "AI-SEOS Maintainers"
last_updated: "2026-07-04"
canonical_targets:
  - "docs/release/v0.1.0-alpha-release-plan.md"
  - "docs/release/v0.1.0-alpha-release-notes.md"
  - "docs/release/v0.1.0-alpha-checklist.md"
  - "docs/release/v0.1.0-alpha-known-limitations.md"
  - "docs/release/v0.1.0-alpha-readiness-report.md"
  - "adr/0078-adopt-v0-1-0-alpha-release-process.md"
---

# Phase 2 — Release v0.1.0-alpha Plan

## 1. Purpose

This document defines the release plan for `v0.1.0-alpha`.

The purpose of this release is to make AI-SEOS publicly usable as an early framework while clearly communicating its alpha status, limitations and intended validation path.

## 2. Release Philosophy

The first alpha release must be:

- honest;
- useful;
- navigable;
- limited in claims;
- clear about target users;
- clear about what is ready;
- clear about what still needs validation.

The release must not pretend that AI-SEOS is stable.

It should say:

```text
AI-SEOS is an early public alpha documentation framework for AI-assisted software engineering. It is ready for experimentation, validation and contribution, but not yet a mature standard.
```

## 3. Release Goals

The `v0.1.0-alpha` release should demonstrate:

1. complete initial lifecycle coverage;
2. three entry modes;
3. engine-based operating model;
4. governed templates;
5. protocols and playbooks;
6. case library;
7. anti-pattern and best-practice catalogs;
8. first validation case structure;
9. public onboarding;
10. contribution readiness.

## 4. Non-Goals

This release does not claim:

- production-grade automation;
- complete validation across industries;
- stable API or schema;
- finished CLI;
- full documentation site tooling;
- complete real-world benchmark coverage;
- perfect metadata consistency;
- automated link validation.

## 5. Release Readiness Target

Previous score:

```text
Sprint 7 readiness: 43 / 50 — Public alpha
```

Target before tagging:

```text
Phase 2 readiness: 47 / 50 — Strong public alpha
```

## 6. Release Checklist

Create:

```text
docs/release/v0.1.0-alpha-checklist.md
```

The checklist must include:

### 6.1 Repository

- README updated;
- ROADMAP updated;
- CHANGELOG updated;
- LICENSE exists;
- CONTRIBUTING exists;
- GOVERNANCE exists;
- SECURITY exists;
- CODE_OF_CONDUCT exists;
- issue templates exist;
- PR template exists.

### 6.2 Documentation

- docs hub exists;
- getting started exists;
- three user paths exist;
- glossary exists;
- release limitations exist;
- publication navigation exists.

### 6.3 Framework

- engines documented;
- frameworks documented;
- protocols documented;
- templates documented;
- playbooks documented;
- agents documented;
- ADRs indexed.

### 6.4 Validation

- first validation case exists;
- SenseiHub validation exists;
- non-technical builder validation exists;
- vibe coder validation exists;
- professional engineer validation exists;
- improvement backlog exists.

### 6.5 Release

- release notes drafted;
- known limitations drafted;
- readiness report exists;
- tag instructions exist;
- post-release feedback path exists.

## 7. Release Notes Structure

Create:

```text
docs/release/v0.1.0-alpha-release-notes.md
```

Use this structure:

```markdown
# AI-SEOS v0.1.0-alpha Release Notes

## Summary

## What Is Included

## Who This Release Is For

## What You Can Do With It

## What Is Not Ready Yet

## Known Limitations

## Recommended First Use

## Validation Status

## How to Contribute

## Next Milestone
```

## 8. Known Limitations

Create:

```text
docs/release/v0.1.0-alpha-known-limitations.md
```

It must include:

- documentation is extensive but still draft in many areas;
- templates require more real-world validation;
- link validation may still be manual;
- metadata consistency may require automation;
- case library is early;
- no official CLI yet;
- no official package manager integration;
- no stable schema;
- examples may be illustrative rather than fully implemented software.

## 9. Readiness Report

Create:

```text
docs/release/v0.1.0-alpha-readiness-report.md
```

It must include:

- readiness score;
- scoring criteria;
- blockers;
- non-blockers;
- release recommendation;
- post-release improvement backlog.

## 10. Git Tagging Guidance

Do not automatically create a GitHub release unless explicitly instructed by the maintainer.

But document the recommended commands:

```bash
git status
git tag -a v0.1.0-alpha -m "AI-SEOS v0.1.0-alpha"
git push origin v0.1.0-alpha
```

## 11. Required ADR

Create:

```text
adr/0078-adopt-v0-1-0-alpha-release-process.md
```

The ADR must explain:

- why alpha release is appropriate;
- why stable release is not appropriate;
- what readiness score is required;
- what limitations must be disclosed;
- what must happen after release.

## 12. Quality Gates

This workstream passes only if:

- release plan exists;
- release notes draft exists;
- checklist exists;
- known limitations exist;
- readiness report exists;
- ADR 0078 exists;
- README and CHANGELOG reference alpha status;
- release claims are accurate and not exaggerated.

## 13. Definition of Done

Release planning is done when AI-SEOS has everything required to tag `v0.1.0-alpha` responsibly, including release notes, limitations, readiness score and post-release plan.
