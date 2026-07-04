---
title: "Phase 2 — SenseiHub Validation Case"
part: "pt93"
phase: "Phase 2 — Validation and Productization"
version: "0.1.0-alpha-candidate"
status: "Draft"
owner: "AI-SEOS Maintainers"
last_updated: "2026-07-04"
canonical_targets:
  - "examples/real-world/senseihub/README.md"
  - "examples/real-world/senseihub/00-entry-mode/non-technical-builder-intake.md"
  - "examples/real-world/senseihub/01-discovery/discovery-brief.md"
  - "examples/real-world/senseihub/02-product/prd.md"
  - "examples/real-world/senseihub/03-architecture/architecture-overview.md"
  - "examples/real-world/senseihub/04-decisions/decision-log.md"
  - "examples/real-world/senseihub/05-risk/risk-register.md"
  - "examples/real-world/senseihub/06-optimization/optimization-review.md"
  - "examples/real-world/senseihub/07-execution/execution-plan.md"
  - "examples/real-world/senseihub/08-handoff/handoff-package.md"
  - "examples/real-world/senseihub/09-reflection/framework-retrospective.md"
  - "adr/0073-adopt-senseihub-as-first-real-world-validation-case.md"
---

# Phase 2 — SenseiHub Validation Case

## 1. Purpose

This document defines the first real-world validation case for AI-SEOS.

The selected case is **SenseiHub**, a SaaS management platform for martial arts academies and sports schools.

SenseiHub is used because it represents a realistic product with enough complexity to test AI-SEOS without becoming too broad for public-alpha validation.

## 2. Case Summary

SenseiHub is a SaaS platform intended for owners and managers of martial arts academies.

The product centralizes:

- student registration;
- plans and billing;
- Pix/Boleto payment workflows;
- attendance tracking;
- retention risk;
- dashboards;
- student engagement;
- operational visibility.

The target users are academy owners and managers who often use spreadsheets, notebooks, WhatsApp and manual processes.

## 3. Why SenseiHub Is a Strong Validation Case

SenseiHub is strong because it exercises several dimensions of AI-SEOS:

| Dimension | Why It Matters |
|---|---|
| Non-technical domain | Many academy owners are not technical |
| Clear operational pain | Manual student/payment/attendance management |
| Product discovery | Requires understanding real daily workflows |
| MVP scoping | Many tempting features must be deferred |
| Architecture | Multi-tenant SaaS with auth, database, payments and dashboards |
| Risk | LGPD, payment reconciliation, tenant isolation |
| Optimization | Needs simple MVP before advanced features |
| Execution | Can be broken into practical milestones |
| Documentation | Needs handoff for implementation agents |

## 4. Entry Mode Selection

SenseiHub must be validated in three entry modes.

### 4.1 Non-Technical Builder Mode

Persona:

```text
Academy owner who has a real operational problem but does not know software engineering.
```

The system must avoid terms like:

- backend;
- deployment;
- API;
- database;
- auth;
- multi-tenant;
- CI/CD;
- webhook.

Unless those terms are explained in plain language.

The intake must ask about:

- how the academy manages students today;
- how payments are tracked;
- how attendance is tracked;
- how the owner identifies inactive students;
- what causes the most confusion;
- what would make the owner feel more organized;
- what first version would already be useful.

### 4.2 Vibe Coder Mode

Persona:

```text
Builder using Codex/Cursor/Claude/Gemini to create a SaaS MVP.
```

The system may mention tools but must keep implementation steps guided and practical.

The output must include:

- recommended simple stack;
- implementation stages;
- Codex-ready tasks;
- guardrails against overengineering;
- testing checklist;
- deployment checklist.

### 4.3 Professional Engineer Mode

Persona:

```text
Developer or architect who wants technical rigor.
```

The output must include:

- product requirements;
- domain model;
- architecture overview;
- ADRs;
- risk register;
- execution plan;
- handoff package.

## 5. SenseiHub Domain Context

### 5.1 Primary User

The primary user is an academy owner or manager.

They are responsible for:

- student onboarding;
- class operations;
- payment follow-up;
- retention;
- schedule management;
- communication with students;
- business growth.

### 5.2 Current Alternatives

Common current solutions:

- notebook;
- spreadsheet;
- WhatsApp;
- manual Pix control;
- memory;
- generic financial tools;
- generic gym systems not adapted to martial arts.

### 5.3 Main Pain Points

Key pain points:

- not knowing who is overdue;
- not knowing who stopped attending;
- losing students without noticing;
- spending too much time on administrative control;
- lack of visibility into monthly revenue;
- difficulty professionalizing the academy.

### 5.4 Desired Outcome

The desired outcome is:

```text
A simple, reliable and easy-to-use SaaS that helps martial arts academies manage students, payments, attendance and retention with less manual work.
```

## 6. Recommended MVP

The first MVP should include:

1. authentication;
2. tenant/account setup;
3. student registration;
4. plan assignment;
5. payment status tracking;
6. manual or basic payment reconciliation;
7. attendance/check-in registration;
8. dashboard with active students, overdue students and attendance summary;
9. retention risk list based on inactivity;
10. basic WhatsApp message helper.

The MVP should not initially include:

- native mobile app;
- advanced AI predictions;
- complex gamification;
- full ERP;
- marketplace;
- complex inventory;
- custom analytics warehouse;
- multi-country payment strategy;
- advanced automation before core data is reliable.

## 7. Suggested Technical Direction for Validation

The validation case may use this technical direction as a reference, but the Architecture Engine must still evaluate alternatives.

Potential stack:

- Next.js App Router;
- TypeScript;
- Firebase Authentication or Supabase Auth;
- Firestore or PostgreSQL/Supabase;
- serverless functions;
- payment provider such as Asaas;
- Vercel for frontend deployment;
- GitHub for repository;
- basic observability and logging.

The system must not lock into these choices without ADRs.

## 8. Required SenseiHub Artifacts

Create the following structure:

```text
examples/real-world/senseihub/
    README.md
    00-entry-mode/
        non-technical-builder-intake.md
        vibe-coder-intake.md
        professional-engineer-intake.md
        mode-router-result.md
    01-discovery/
        discovery-brief.md
        problem-framing.md
        stakeholder-map.md
        assumptions-register.md
        discovery-readiness-score.md
    02-product/
        prd.md
        mvp-scope.md
        user-stories.md
        roadmap.md
        feature-prioritization.md
    03-architecture/
        architecture-overview.md
        domain-model.md
        data-model.md
        integration-model.md
        c4-context.md
        c4-container.md
    04-decisions/
        decision-log.md
        adr-0001-application-architecture.md
        adr-0002-authentication-provider.md
        adr-0003-database-strategy.md
        adr-0004-payment-provider.md
        adr-0005-deployment-strategy.md
    05-risk/
        risk-register.md
        lgpd-review.md
        payment-risk-review.md
        tenant-isolation-risk-review.md
    06-optimization/
        mvp-simplification-review.md
        cost-review.md
        scalability-review.md
    07-execution/
        execution-plan.md
        milestones.md
        sprint-plan.md
        technical-backlog.md
    08-handoff/
        handoff-package.md
        implementation-agent-handoff.md
        security-agent-handoff.md
        qa-agent-handoff.md
    09-reflection/
        validation-retrospective.md
        ai-seos-improvement-backlog.md
```

## 9. Required ADR

Create:

```text
adr/0073-adopt-senseihub-as-first-real-world-validation-case.md
```

ADR must explain:

- why SenseiHub was selected;
- what dimensions it validates;
- what risks exist;
- what this does not prove;
- how future cases should expand coverage.

## 10. Validation Questions

After generating the SenseiHub case, answer:

1. Could a non-technical academy owner understand the first intake?
2. Could a vibe coder use the generated steps?
3. Could a programmer implement from the professional artifacts?
4. Did the framework produce useful trade-offs?
5. Were risks identified clearly?
6. Was the MVP simplified enough?
7. Were handoffs actionable?
8. Which AI-SEOS templates need improvement?

## 11. Quality Gates

The SenseiHub validation case passes only if:

- all required directories exist;
- all required artifacts are generated;
- the same scenario is shown across the three entry modes;
- MVP boundaries are explicit;
- at least 5 ADRs are generated inside the case;
- risk register includes LGPD, payments and tenant isolation;
- execution plan is buildable;
- retrospective produces actionable framework improvements.

## 12. Definition of Done

SenseiHub validation is done when it proves AI-SEOS can transform a real business idea into structured product, architecture, risk, execution and handoff artifacts across all three user profiles.
