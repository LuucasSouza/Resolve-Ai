---
project: AI Software Engineering Operating System (AI-SEOS)
sprint: 6
theme: Complete Template Packs
status: Draft for Codex Execution
version: 0.1.0
---

# pt77 — Agent Handoff Template Pack

## 1. Purpose

The Agent Handoff Template Pack standardizes how work is transferred between AI-SEOS agents and between human users and AI agents. This pack is essential because AI-assisted engineering often fails when context is lost, decisions are not carried forward or one agent receives incomplete instructions.

## 2. Required Agents

Sprint 6 must create or extend templates for:

```text
templates/agents/ai-cto/
templates/agents/product-owner/
templates/agents/solution-architect/
templates/agents/security-lead/
templates/agents/implementation-lead/
templates/agents/qa-lead/
templates/agents/documentation-lead/
templates/agents/devops-lead/
templates/agents/reviewer/
```

## 3. Required Handoff Templates

Create:

```text
templates/agents/ai-cto/cto-to-product-handoff.md
templates/agents/ai-cto/cto-to-architecture-handoff.md
templates/agents/product-owner/product-to-architecture-handoff.md
templates/agents/solution-architect/architecture-to-decision-handoff.md
templates/agents/solution-architect/architecture-to-implementation-handoff.md
templates/agents/security-lead/security-review-handoff.md
templates/agents/implementation-lead/implementation-task-handoff.md
templates/agents/qa-lead/qa-validation-handoff.md
templates/agents/documentation-lead/documentation-maintenance-handoff.md
templates/agents/devops-lead/deployment-handoff.md
templates/agents/reviewer/review-feedback-template.md
```

## 4. Universal Agent Handoff Contract

Every handoff template must include:

```markdown
# Agent Handoff

## 1. Sending agent

## 2. Receiving agent

## 3. Objective

## 4. Context summary

## 5. Source artifacts

## 6. Decisions already made

## 7. Decisions still open

## 8. Risks and constraints

## 9. Assumptions

## 10. Required output from receiving agent

## 11. Quality gates

## 12. Definition of Done

## 13. Do not change

## 14. Escalation conditions

## 15. Handoff receipt
```

## 5. Codex Implementation Handoff

Create a specific template for passing work to an AI coding agent:

```text
templates/agents/implementation-lead/codex-implementation-handoff.md
```

It must include:

- repository context;
- branch information;
- files to inspect;
- files allowed to edit;
- files not allowed to edit;
- task objective;
- technical constraints;
- acceptance criteria;
- validation commands;
- expected commit message;
- rollback notes;
- documentation update requirement.

## 6. QA Handoff

QA handoff must include:

- feature under test;
- user flows;
- acceptance criteria;
- negative cases;
- regression areas;
- security checks;
- data setup;
- expected evidence;
- pass/fail criteria.

## 7. Security Handoff

Security handoff must include:

- threat model context;
- sensitive data;
- authentication/authorization model;
- trust boundaries;
- third-party integrations;
- secrets;
- compliance considerations;
- risks;
- required mitigations.

## 8. Documentation Handoff

Documentation handoff must include:

- documents affected;
- stale documents;
- diagrams to update;
- ADR references;
- changelog entry;
- audience;
- tone;
- validation checklist.

## 9. Handoff Receipt

Every receiving agent must produce a receipt:

```markdown
# Handoff Receipt

## Received artifacts

## Understood objective

## Missing information

## Risks accepted

## Clarifications required

## Planned next action

## Acceptance or rejection
```

## 10. Definition of Done

The Agent Handoff Template Pack is complete when every major agent has at least one canonical handoff template and implementation, QA, security and documentation handoffs have specialized templates.
