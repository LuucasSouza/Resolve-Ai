---
title: "Architecture Options Template"
template_id: "professional-engineer.architecture-options"
version: "0.1.0"
status: "draft"
owner: "Architecture Engine"
profile: "professional-engineer"
lifecycle_stage: "architecture"
input_artifacts:
  - "Requirements Document"
  - "NFR Specification"
output_artifacts:
  - "Architecture Options"
next_engine: "Decision Engine"
quality_gate: "Architecture Gate"
last_updated: "2026-07-04"
---

# Architecture Options Template

## 1. When to use this template

Use when the project needs this artifact before moving to the next AI-SEOS stage.

## 2. Who this template is for

Profile: $Profile. Adjust depth to T0, T1, T2 or T3 based on risk, urgency and project maturity.

## 3. What this template produces

Architecture Options.

## 4. Required inputs

Requirements Document, NFR Specification.

## 5. Instructions

Complete the fields below in concrete language. Preserve assumptions, risks, decisions and open questions.

## 6. Questions / fields

## Context
## Decision Drivers
## Option A
## Option B
## Option C
## Comparison Matrix

| Criterion | Weight | Option A | Option B | Option C |
|---|---:|---:|---:|---:|
| Maintainability |  |  |  |  |
| Cost |  |  |  |  |
| Scalability |  |  |  |  |
| Security |  |  |  |  |
| Delivery Speed |  |  |  |  |
| Operational Complexity |  |  |  |  |

## Recommendation
## ADRs Required

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
