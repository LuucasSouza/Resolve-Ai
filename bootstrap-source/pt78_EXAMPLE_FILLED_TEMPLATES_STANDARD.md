---
project: AI Software Engineering Operating System (AI-SEOS)
sprint: 6
theme: Complete Template Packs
status: Draft for Codex Execution
version: 0.1.0
---

# pt78 — Example-Filled Templates Standard

## 1. Purpose

Templates become much more useful when users can see filled examples. Sprint 6 must create example-filled templates for the three entry modes and for core lifecycle artifacts. These examples must demonstrate how the same idea can be expressed at different levels of technical depth.

## 2. Why Examples Matter

Non-technical users often do not know what good input looks like. Vibe coders often over-scope. Professional engineers often need reference-level rigor. Example-filled templates help calibrate expectations.

## 3. Required Example Directory Structure

Create:

```text
templates/examples-filled/non-technical-builder/
templates/examples-filled/vibe-coder/
templates/examples-filled/professional-engineer/
templates/examples-filled/full-lifecycle/
examples/template-showcase/
```

## 4. Canonical Example Scenario

Sprint 6 should use at least one shared scenario across all three modes.

Recommended scenario:

```text
A small martial arts academy wants to manage students, attendance, payments and retention instead of using WhatsApp, paper and spreadsheets.
```

This scenario is ideal because it includes:

- real operational pain;
- non-technical owner;
- payments;
- attendance;
- dashboards;
- retention workflows;
- risk and privacy considerations;
- clear MVP boundaries.

## 5. Required Example-Filled Files

Create:

```text
templates/examples-filled/non-technical-builder/martial-arts-academy-problem-story.md
templates/examples-filled/non-technical-builder/martial-arts-academy-simple-solution-brief.md
templates/examples-filled/vibe-coder/martial-arts-academy-build-plan.md
templates/examples-filled/vibe-coder/martial-arts-academy-codex-task.md
templates/examples-filled/professional-engineer/martial-arts-academy-technical-discovery.md
templates/examples-filled/professional-engineer/martial-arts-academy-architecture-options.md
templates/examples-filled/full-lifecycle/martial-arts-academy-lifecycle-map.md
examples/template-showcase/same-scenario-three-template-depths.md
```

## 6. Example Quality Standard

Each example must:

- be realistic;
- avoid fictional complexity that hides the template purpose;
- show filled sections, not just placeholders;
- include comments explaining why certain fields were completed that way;
- show what belongs outside MVP;
- show risks and trade-offs;
- show handoff output.

## 7. Same Scenario, Three Depths

Create an example comparing:

### Non-Technical Builder Output

Plain language:

```text
The owner currently tracks students in a notebook and payments in WhatsApp. The first version should help register students, mark attendance and see who is overdue.
```

### Vibe Coder Output

Practical build path:

```text
Build a web app with login, students table, attendance check-in, payment status and simple dashboard. Use one implementation slice at a time.
```

### Professional Engineer Output

Technical artifact:

```text
Modular SaaS MVP with Student, AttendanceRecord, PaymentAccount, BillingStatus and RetentionRisk concepts. Requires tenant isolation, authorization model, payment reconciliation and ADRs for stack and data model.
```

## 8. Annotation Standard

Examples may include short comments like:

```markdown
> AI-SEOS note: This feature is deferred because payment automation before manual payment-state validation would increase risk.
```

## 9. Definition of Done

The example-filled standard is complete when:

- at least one scenario is shown across all three entry modes;
- at least one full-lifecycle map exists;
- examples are linked from template pack READMEs;
- examples are realistic enough to guide users.
