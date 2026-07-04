---
title: "Phase 2 — Non-Technical Builder Validation"
part: "pt94"
phase: "Phase 2 — Validation and Productization"
version: "0.1.0-alpha-candidate"
status: "Draft"
owner: "AI-SEOS Maintainers"
last_updated: "2026-07-04"
canonical_targets:
  - "docs/validation/non-technical-builder-validation.md"
  - "protocols/user-validation/non-technical-builder-validation-protocol.md"
  - "templates/validation/non-technical-builder-test-script.md"
  - "templates/validation/plain-language-feedback-form.md"
  - "adr/0074-adopt-non-technical-builder-validation.md"
---

# Phase 2 — Non-Technical Builder Validation

## 1. Purpose

This document defines how to validate AI-SEOS with people who do not know software engineering.

This is essential because AI-SEOS is not intended only for professional programmers. One of its strongest strategic goals is to help people who have real operational problems but do not know how to translate those problems into software.

## 2. Core Principle

For non-technical users, AI-SEOS must not behave like a software architect at the beginning.

It must behave like a patient problem interviewer.

The system must first understand the user's reality before introducing technical concepts.

## 3. Target User

The target user is someone who may not understand:

- GitHub;
- repository;
- Vercel;
- deploy;
- frontend;
- backend;
- database;
- API;
- authentication;
- webhook;
- cloud;
- CI/CD;
- environment variables;
- architecture.

They may only know:

- they have a problem;
- they waste time;
- they use spreadsheets, paper, WhatsApp or manual work;
- they want something easier;
- they do not know how to build it.

## 4. Validation Goal

The validation must determine whether the Non-Technical Builder Mode can:

1. make the user feel understood;
2. ask questions in plain language;
3. avoid unnecessary technical terms;
4. translate real-world problems into structured software concepts;
5. propose a reasonable first version;
6. explain why not everything should be built immediately;
7. produce a handoff that Codex or a developer can use.

## 5. Language Rules

### 5.1 Avoid Early Technical Language

Do not start with:

```text
What stack do you want?
What database do you prefer?
Do you need serverless architecture?
What authentication provider will you use?
```

Start with:

```text
What are you trying to organize?
How do you do this today?
What part takes the most time?
What goes wrong when this is not controlled?
Who else needs to see this information?
Do you need this on your phone?
```

### 5.2 Translate Concepts

When technical concepts become necessary, explain them.

Example:

```text
You probably need a database. Think of it like a safe digital notebook where the system stores students, payments and attendance.
```

Example:

```text
You probably need login. This means each person enters with their own access, so private information is not visible to everyone.
```

## 6. Required Validation Script

Create:

```text
templates/validation/non-technical-builder-test-script.md
```

It must include:

1. introduction;
2. consent and expectations;
3. raw idea capture;
4. daily workflow questions;
5. pain questions;
6. urgency questions;
7. user and role questions;
8. data questions in plain language;
9. first-version questions;
10. complexity control questions;
11. solution explanation;
12. feedback questions.

## 7. Sample Interview Flow

### Opening

```text
I will not ask you technical questions first.
I will ask about your problem and how you handle it today.
Then I will translate that into a simple software plan.
```

### Problem Questions

- What are you trying to organize or improve?
- How do you do this today?
- What is the most annoying part?
- What happens when you forget or lose control?
- How often does this problem happen?
- Who else is affected?

### Data Questions

- What information do you need to save?
- Who can see that information?
- Does this information change often?
- Do you need to search or filter it later?
- Do you need reports?

### First Version Questions

- What would already help you this week?
- What can wait?
- What would be nice but not necessary?
- What would make this too complicated?

### Output Explanation

The system must explain:

- what the solution is;
- what the first version should contain;
- what should not be built yet;
- what risks exist;
- what the next step is.

## 8. Plain-Language Output Template

Create:

```text
templates/validation/plain-language-feedback-form.md
```

The generated solution must include:

```markdown
# Your Solution Plan

## The Problem

## How You Solve It Today

## What Is Hard Today

## Recommended First Version

## What This First Version Will Do

## What It Will Not Do Yet

## Information It Needs to Store

## Who Will Use It

## Simple Risks to Be Aware Of

## Next Step If You Want to Build It With AI

## Next Step If You Want to Hire a Developer
```

## 9. Validation Metrics

Use a 5-point scale.

| Metric | Question |
|---|---|
| Clarity | Did the user understand the questions? |
| Comfort | Did the user feel overwhelmed? |
| Relevance | Did the questions match their real problem? |
| Translation quality | Did the technical plan match what they meant? |
| MVP clarity | Did they understand the first version? |
| Trust | Would they continue using the process? |
| Actionability | Could they give the output to someone else? |

## 10. Required Test Cases

Create at least three non-technical validation examples:

```text
examples/validation/non-technical-builder/
    academy-owner/
    small-store-owner/
    service-provider/
```

Each must include:

- raw user idea;
- interview transcript sample;
- translated software brief;
- recommended MVP;
- what not to build yet;
- handoff to builder/coder;
- clarity score.

## 11. Required Canonical Artifacts

Create or update:

```text
docs/validation/non-technical-builder-validation.md
protocols/user-validation/non-technical-builder-validation-protocol.md
templates/validation/non-technical-builder-test-script.md
templates/validation/plain-language-feedback-form.md
examples/validation/non-technical-builder/
```

ADR:

```text
adr/0074-adopt-non-technical-builder-validation.md
```

## 12. Quality Gates

This validation passes only if:

- no required user-facing interview begins with technical jargon;
- at least three sample cases exist;
- outputs include plain-language explanations;
- each case produces a build handoff;
- feedback form exists;
- ADR 0074 exists.

## 13. Definition of Done

Non-Technical Builder validation is done when AI-SEOS can guide a person with no software background from a raw problem to a clear, buildable and understandable solution plan.
