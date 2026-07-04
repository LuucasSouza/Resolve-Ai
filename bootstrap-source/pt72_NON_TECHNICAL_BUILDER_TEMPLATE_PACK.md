---
project: AI Software Engineering Operating System (AI-SEOS)
sprint: 6
theme: Complete Template Packs
status: Draft for Codex Execution
version: 0.1.0
---

# pt72 — Non-Technical Builder Template Pack

## 1. Purpose

The Non-Technical Builder Template Pack helps people who do not know software engineering transform a real-life problem into a structured solution brief. This pack must avoid unnecessary technical vocabulary and must never assume the user knows GitHub, Vercel, APIs, databases, authentication, repositories, frameworks or deployment.

The pack must help the user explain their problem in plain language. AI-SEOS then translates that into software concepts.

## 2. User Profile

The Non-Technical Builder:

- has a real problem to solve;
- may run a business, team, school, studio, store, clinic or personal workflow;
- may use WhatsApp, paper, spreadsheets or memory today;
- may not know whether they need an app, website, automation, database, dashboard or chatbot;
- may be afraid of technical complexity;
- needs confidence, clarity and a simple path forward.

## 3. Tone and Language Rules

The template pack must use simple language.

Avoid these terms at first:

- backend;
- frontend;
- API;
- database;
- auth;
- deployment;
- CI/CD;
- serverless;
- repository;
- stack;
- microservices;
- cloud function.

Use these replacements:

| Technical term | Plain-language replacement |
|---|---|
| Database | Place where information is saved |
| Authentication | Login and access control |
| Dashboard | Main control panel |
| Integration | Connection with another tool |
| Deployment | Publishing the system online |
| Role-based access | Different people seeing different things |
| Automation | Something the system does automatically |

## 4. Required Templates

Sprint 6 must create the following files:

```text
templates/packs/non-technical-builder-pack/README.md
templates/intake/non-technical-builder/problem-story-template.md
templates/intake/non-technical-builder/manual-process-map-template.md
templates/intake/non-technical-builder/user-and-stakeholder-template.md
templates/intake/non-technical-builder/simple-solution-brief-template.md
templates/intake/non-technical-builder/mvp-in-plain-language-template.md
templates/intake/non-technical-builder/non-technical-risk-checklist.md
templates/intake/non-technical-builder/what-not-to-build-yet-template.md
templates/intake/non-technical-builder/plain-language-handoff-template.md
templates/examples-filled/non-technical-builder/local-business-example.md
```

## 5. Template: Problem Story

Create `problem-story-template.md` with this structure:

```markdown
---
title: "Problem Story Template"
template_id: "non-technical-builder.problem-story"
profile: "non-technical-builder"
lifecycle_stage: "intake"
output_artifacts:
  - "Problem Story"
next_engine: "Builder Intake Protocol"
---

# Problem Story Template

## 1. What problem are you trying to solve?
Describe the situation in your own words.

## 2. What happens today?
Explain how you currently handle this problem.

Examples:
- I use WhatsApp.
- I use paper.
- I use a spreadsheet.
- I remember everything manually.
- I ask someone else.

## 3. What is painful or repetitive?
What takes time, causes mistakes, creates stress or makes you lose money?

## 4. Who is affected?
Who suffers from this problem?

## 5. What would a better version of this process look like?
Do not think about technology yet. Describe the ideal result.

## 6. What would already help you this week?
Describe the smallest useful improvement.

## 7. AI-SEOS translation
This section is filled by AI-SEOS.

Plain problem:

Likely solution type:

Core users:

Core information to save:

Important actions:

Possible first version:
```

## 6. Template: Manual Process Map

Create `manual-process-map-template.md` to capture how the work happens today.

Required sections:

- Trigger: what starts the process?
- People involved.
- Tools used today.
- Step-by-step current workflow.
- Information copied manually.
- Repeated messages.
- Common mistakes.
- Lost opportunities.
- What must be automated later.
- What must remain human.

## 7. Template: Simple Solution Brief

Create `simple-solution-brief-template.md` with plain-language output:

```markdown
# Simple Solution Brief

## Problem

## Who will use it

## First version should include

## First version should not include

## Information the system needs to save

## Actions people need to perform

## Alerts or reminders needed

## Reports or summaries needed

## Tools this may connect with later

## Risks in simple language

## Recommended next step
```

## 8. Non-Technical Risk Checklist

Create `non-technical-risk-checklist.md` with questions like:

- Does this solution store personal information?
- Does it involve payments?
- Does it involve health, children, legal, financial or sensitive data?
- Can someone lose money if the system makes a mistake?
- Does more than one person need access?
- Should some people be blocked from seeing certain information?
- Does the system need backups?
- What happens if the system is offline?

## 9. What Not To Build Yet

Non-technical builders frequently over-request features. Create a template that helps defer:

- native mobile app;
- advanced AI;
- custom CRM;
- complex integrations;
- full automation;
- multi-role enterprise permissions;
- dashboards before data is reliable;
- payment automation before manual validation is understood.

## 10. Output Contract

The pack must produce:

- Problem Story;
- Manual Process Map;
- Simple Solution Brief;
- Plain-Language MVP;
- Plain-Language Risk Checklist;
- Handoff to Discovery Engine;
- Handoff to Vibe Coder or Professional Engineer mode if needed.

## 11. Definition of Done

The Non-Technical Builder Pack is complete when:

- a non-technical user can fill it without knowing software terminology;
- it produces enough information for Discovery Engine;
- it includes at least one filled example;
- it includes a simple glossary;
- it does not force early technology decisions;
- it clearly explains next steps.
