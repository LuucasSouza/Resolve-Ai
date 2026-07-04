---
title: "Architecture Review Template"
template_id: "professional-engineer.architecture-review"
version: "0.1.0"
status: "draft"
owner: "Solution Architect"
profile: "professional-engineer"
lifecycle_stage: "architecture"
input_artifacts:
  - "Architecture Overview"
  - "Architecture Options"
output_artifacts:
  - "Architecture Review"
next_engine: "Decision Engine"
quality_gate: "Architecture Review Gate"
last_updated: "2026-07-04"
---

# Architecture Review Template

## 1. When to use this template

Use when the project needs this artifact before moving to the next AI-SEOS stage.

## 2. Who this template is for

Profile: $Profile. Adjust depth to T0, T1, T2 or T3 based on risk, urgency and project maturity.

## 3. What this template produces

Architecture Review.

## 4. Required inputs

Architecture Overview, Architecture Options.

## 5. Instructions

Complete the fields below in concrete language. Preserve assumptions, risks, decisions and open questions.

## 6. Questions / fields

Architecture overview:
C4-inspired views:
Data flow:
Trust boundaries:
Failure modes:
Scalability path:
Cost model:
Observability:
Security review:
Decision log:
Unresolved risks:
Review outcome:

## 8. Quality gates

- Target user and lifecycle stage are clear.
- Required inputs are linked or summarized.
- Output is specific enough for the next engine or agent.
- Risks, assumptions and non-goals are explicit.
- Handoff target is named.

## 9. Common mistakes

- Filling placeholders with generic text.
- Making technology decisions before the current stage requires them.
- Omitting risks because they are uncomfortable.
- Losing traceability to previous artifacts.

## 10. Example

Use the martial arts academy examples in 	emplates/examples-filled/ when calibration is needed.

## 11. Handoff

Send this artifact to $Next with the related assumptions, risks and open questions.
