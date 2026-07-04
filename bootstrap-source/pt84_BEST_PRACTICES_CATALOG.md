---
title: "Best Practices Catalog"
project: "AI Software Engineering Operating System (AI-SEOS)"
sprint: "7"
version: "0.7.0"
status: "Draft"
owner: "AI-SEOS Principal Maintainer"
last_updated: "2026-07-04"
---

# Best Practices Catalog

## Purpose

This document defines the AI-SEOS best practices catalog.

Best practices are not generic advice. In AI-SEOS, a best practice is a repeatable behavior that improves clarity, maintainability, security, traceability, execution quality or long-term evolvability.

## Best Practice Categories

### 1. Intake Best Practices

- Start with the user's real-world problem.
- Do not start with technology when the user is non-technical.
- Detect the user profile before selecting templates.
- Translate language, not quality.
- Confirm what the first useful version means.

### 2. Discovery Best Practices

- Separate pain from requested solution.
- Identify who uses, who pays and who maintains.
- Capture current workaround.
- Capture constraints before architecture.
- Make assumptions explicit.
- Score discovery depth according to risk.

### 3. Product Best Practices

- Define MVP as a learning vehicle, not a reduced enterprise system.
- Use "not in scope" as a first-class artifact.
- Convert features into user outcomes.
- Keep roadmap separate from backlog.
- Prioritize by value, risk and dependency.

### 4. Architecture Best Practices

- Compare at least three alternatives for major decisions.
- Prefer the simplest architecture that satisfies constraints.
- Document trade-offs explicitly.
- Model domain before database tables.
- Avoid premature distribution.
- Treat security and observability as architecture concerns.

### 5. Decision Best Practices

- Use ADRs for irreversible or high-impact decisions.
- Include reversal plans.
- Record confidence level.
- Revisit decisions when assumptions change.
- Do not confuse preference with evidence.

### 6. Risk Best Practices

- Identify risks before implementation.
- Classify by probability, impact and detectability.
- Connect risk mitigations to backlog.
- Treat compliance, privacy and security as product constraints.
- Review vendor risk for platform choices.

### 7. Optimization Best Practices

- Optimize after understanding, not before.
- Reduce complexity before adding infrastructure.
- Make cost visible.
- Consider AI usage cost and latency.
- Prefer maintainability over cleverness.

### 8. Execution Best Practices

- Convert decisions into work packages.
- Keep tasks small enough for AI execution.
- Include acceptance criteria.
- Validate after each meaningful step.
- Avoid long unreviewed coding runs.

### 9. Documentation Best Practices

- Write docs for future maintainers.
- Keep decision logs current.
- Link artifacts.
- Prefer examples over abstract explanations.
- Mark stale documents.

### 10. Handoff Best Practices

- Every handoff must include context, decisions, risks and next actions.
- Require receipt from receiving agent.
- Identify open questions.
- Include artifact links.
- Never handoff ambiguity as certainty.

### 11. Reflection Best Practices

- Review outcomes against initial assumptions.
- Identify reusable lessons.
- Convert lessons into framework improvements.
- Track decisions that caused rework.
- Improve templates after real use.

## Required Best Practice Structure

Codex must create:

```text
docs/best-practices/
  README.md
  best-practices-catalog.md
  intake-best-practices.md
  discovery-best-practices.md
  product-best-practices.md
  architecture-best-practices.md
  decision-risk-optimization-best-practices.md
  execution-documentation-handoff-best-practices.md
  ai-agent-best-practices.md
```

## Best Practice Template

```markdown
# Best Practice Name

## Summary

## Applies To

## Why It Matters

## How To Apply

## Example

## Related Anti-Patterns

## Related Templates

## Review Checklist
```

## Sprint 7 Required Minimum

At least 40 best practices must be documented across the categories.

