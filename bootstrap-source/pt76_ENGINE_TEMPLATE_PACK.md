---
project: AI Software Engineering Operating System (AI-SEOS)
sprint: 6
theme: Complete Template Packs
status: Draft for Codex Execution
version: 0.1.0
---

# pt76 — Engine Template Pack

## 1. Purpose

The Engine Template Pack provides engine-specific templates that help each AI-SEOS engine operate consistently. While lifecycle templates focus on project stages, engine templates focus on the internal responsibilities, gates, artifact contracts and output standards of each engine.

## 2. Required Directory Structure

Create:

```text
templates/engines/discovery-engine/
templates/engines/product-engine/
templates/engines/architecture-engine/
templates/engines/decision-engine/
templates/engines/risk-engine/
templates/engines/optimization-engine/
templates/engines/execution-engine/
templates/engines/documentation-engine/
templates/engines/handoff-engine/
templates/engines/reflection-engine/
```

## 3. Required Templates by Engine

### Discovery Engine

```text
discovery-session-template.md
discovery-depth-selection-template.md
assumption-log-template.md
stakeholder-map-template.md
discovery-readiness-report-template.md
```

### Product Engine

```text
product-framing-template.md
mvp-scope-decision-template.md
feature-prioritization-template.md
product-readiness-report-template.md
```

### Architecture Engine

```text
architecture-context-template.md
architecture-option-template.md
architecture-readiness-report-template.md
technology-selection-template.md
integration-design-template.md
```

### Decision Engine

```text
decision-request-template.md
weighted-decision-matrix-template.md
adr-lifecycle-template.md
decision-review-report-template.md
```

### Risk Engine

```text
risk-identification-template.md
risk-register-template.md
risk-mitigation-plan-template.md
risk-review-report-template.md
```

### Optimization Engine

```text
cost-optimization-template.md
complexity-review-template.md
scalability-review-template.md
ai-cost-review-template.md
optimization-readiness-report-template.md
```

### Execution Engine

```text
execution-readiness-template.md
milestone-plan-template.md
work-package-template.md
sprint-plan-template.md
release-candidate-template.md
```

### Documentation Engine

```text
documentation-inventory-template.md
documentation-drift-review-template.md
documentation-maintenance-plan-template.md
```

### Handoff Engine

```text
handoff-package-template.md
handoff-receipt-template.md
handoff-gap-report-template.md
```

### Reflection Engine

```text
reflection-session-template.md
retrospective-template.md
learning-loop-template.md
improvement-backlog-template.md
```

## 4. Engine Template Standard

Each engine template must include:

```markdown
## Engine

## Purpose

## Trigger

## Required input artifacts

## Optional input artifacts

## Processing instructions

## Questions

## Output artifact

## Quality gates

## Handoff target

## Failure modes

## Example
```

## 5. Engine Quality Gates

Each engine template must reference relevant gates:

- Discovery Gate;
- Product Gate;
- Architecture Gate;
- Decision Gate;
- Risk Gate;
- Optimization Gate;
- Execution Gate;
- Documentation Gate;
- Handoff Gate;
- Reflection Gate.

## 6. Engine Failure Mode Section

Every engine template must ask:

- What information is missing?
- What assumption is unsafe?
- What decision is premature?
- What risk is ignored?
- What artifact is stale?
- What next step should be blocked?

## 7. Output Contract

Sprint 6 must ensure each engine has at least three operational templates, and high-impact engines have five or more.

## 8. Definition of Done

The Engine Template Pack is complete when each engine has templates that allow a user or AI agent to operate the engine without relying only on narrative documentation.
