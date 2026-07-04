---
title: "Sprint 7 Handoff"
project: "AI Software Engineering Operating System (AI-SEOS)"
sprint: "7"
version: "0.7.0"
status: "Draft"
owner: "AI-SEOS Principal Maintainer"
last_updated: "2026-07-04"
---

# Sprint 7 Handoff

## Purpose

This is the official handoff document for Sprint 7.

Sprint 7 closes the initial planned construction cycle of AI-SEOS by adding protocols, real cases, anti-patterns, best practices, repository hardening, release readiness and community onboarding.

## Sprint 7 Name

```text
Protocols, Cases, Anti-Patterns, Best Practices and Final Consolidation
```

## Why Sprint 7 Exists

Sprints 0 to 6 created the framework's foundation, engines, entry modes, templates and cross-engine structure. Sprint 7 must make the project usable, understandable and ready for public-facing iteration.

Sprint 7 is not about adding another isolated engine. It is about consolidating the system into a coherent open-source framework.

## Sprint 7 Objectives

1. Finalize the protocol system.
2. Create a case library.
3. Create real-world implementation cases.
4. Document anti-patterns.
5. Document best practices.
6. Harden repository navigation.
7. Add getting-started paths.
8. Add public/community docs.
9. Add release readiness audit.
10. Prepare the project for post-Sprint evolution.

## Required Directories

Codex must create or update:

```text
docs/protocols/
docs/anti-patterns/
docs/best-practices/
docs/getting-started/
docs/release/
docs/community/
examples/case-library/
examples/real-world/
templates/protocols/
templates/cases/
.github/
.github/ISSUE_TEMPLATE/
```

## Required Files

At minimum, Codex must create:

```text
docs/protocols/protocol-system.md
docs/protocols/protocol-lifecycle.md
docs/protocols/protocol-registry.md
docs/protocols/protocol-taxonomy.md

examples/case-library/README.md
examples/case-library/index.md
examples/case-library/cross-mode/martial-arts-academy-three-modes.md
examples/case-library/non-technical-builder/customer-orders-whatsapp.md
examples/case-library/vibe-coder/simple-saas-dashboard.md
examples/case-library/professional-engineer/multi-tenant-saas-platform.md

docs/anti-patterns/README.md
docs/anti-patterns/anti-pattern-catalog.md
docs/anti-patterns/anti-pattern-to-countermeasure-map.md

docs/best-practices/README.md
docs/best-practices/best-practices-catalog.md

examples/real-world/README.md
examples/real-world/martial-arts-academy-saas/README.md
examples/real-world/martial-arts-academy-saas/artifact-chain.md
examples/real-world/whatsapp-order-tracker/README.md
examples/real-world/internal-operations-dashboard/README.md
examples/real-world/ai-document-assistant/README.md
examples/real-world/multi-tenant-saas/README.md

docs/getting-started/README.md
docs/getting-started/choose-your-path.md
docs/getting-started/for-non-technical-builders.md
docs/getting-started/for-vibe-coders.md
docs/getting-started/for-professional-engineers.md
docs/getting-started/glossary-for-beginners.md
docs/getting-started/first-project-walkthrough.md

docs/release/README.md
docs/release/known-limitations.md
docs/release/v0.1.0-release-readiness.md
docs/release/release-notes-draft.md
docs/release/post-sprint-7-roadmap.md

docs/community/README.md
docs/community/contributor-onboarding.md
docs/community/maintainer-guide.md
docs/community/proposal-process.md

templates/protocols/protocol-template.md
templates/protocols/protocol-review-checklist.md
templates/cases/case-study-template.md
templates/cases/case-quality-checklist.md

.github/PULL_REQUEST_TEMPLATE.md
.github/ISSUE_TEMPLATE/bug_report.md
.github/ISSUE_TEMPLATE/documentation_improvement.md
.github/ISSUE_TEMPLATE/framework_proposal.md
.github/ISSUE_TEMPLATE/template_proposal.md
.github/ISSUE_TEMPLATE/case_study_proposal.md

docs/sprints/sprint-7-handoff.md
docs/sprints/sprint-7-validation-report.md
docs/sprints/sprint-7-retrospective.md
```

## Required ADRs

Create ADRs 0061 to 0070:

```text
0061-adopt-protocol-system-lifecycle.md
0062-adopt-case-library.md
0063-adopt-anti-pattern-catalog.md
0064-adopt-best-practices-catalog.md
0065-adopt-real-world-reference-cases.md
0066-adopt-public-adoption-paths.md
0067-adopt-release-readiness-audit.md
0068-adopt-repository-hardening-process.md
0069-adopt-community-onboarding-model.md
0070-adopt-post-sprint-roadmap-model.md
```

## Required Updates

Update:

- `README.md`
- `ROADMAP.md`
- `CHANGELOG.md`
- `adr/README.md`
- `docs/README.md`
- `docs/sprints/README.md`
- `examples/README.md`
- `templates/README.md`
- `protocols/README.md`
- `frameworks/README.md`
- `playbooks/README.md`
- `GOVERNANCE.md`
- `CONTRIBUTING.md`

## Required Validation

Codex must validate:

- all required paths exist;
- ADRs 0061-0070 exist;
- protocol system exists;
- case library exists;
- anti-pattern catalog exists;
- best practices catalog exists;
- getting-started paths exist;
- release readiness audit exists;
- GitHub issue and PR templates exist;
- README includes three entry paths;
- CHANGELOG includes Sprint 7;
- ROADMAP marks initial planned sprint cycle complete.

## Sprint 7 Quality Gates

### Protocol Gate

Passes only if protocol registry, lifecycle and template exist.

### Case Gate

Passes only if real examples exist for all three user profiles.

### Anti-Pattern Gate

Passes only if anti-patterns are mapped to AI-SEOS countermeasures.

### Best Practice Gate

Passes only if best practices are mapped to engines or entry modes.

### Public Usability Gate

Passes only if a new user can choose an entry path from the README.

### Release Readiness Gate

Passes only if a release readiness audit exists with honest limitations.

### Community Gate

Passes only if issue templates, PR template and contributor onboarding exist.

## Definition of Done

Sprint 7 is done when:

- all files listed in this handoff exist;
- ADRs 0061-0070 exist;
- README clearly explains AI-SEOS for the three audiences;
- examples demonstrate use in real contexts;
- anti-patterns and best practices are documented;
- release readiness is assessed;
- community onboarding exists;
- Sprint 7 validation report is created;
- Sprint 7 retrospective is created;
- files pt81-pt90 are preserved in `bootstrap-source/`;
- work is committed with:

```text
docs: execute sprint 7 final consolidation
```

- work is pushed if remote is configured.

## Post-Sprint 7 Recommendation

After Sprint 7, do not immediately add more conceptual modules. The next recommended phase is:

```text
Phase 2 — Validation and Productization
```

Suggested next work:

- run one complete project through AI-SEOS end-to-end;
- test Non-Technical Builder mode with real users;
- test Vibe Coder mode with Codex/Cursor/Claude Code workflows;
- test Professional Engineer mode with a real architecture case;
- automate link and metadata validation;
- consider docs site generation with Docusaurus, MkDocs or VitePress;
- prepare `v0.1.0-alpha`.

