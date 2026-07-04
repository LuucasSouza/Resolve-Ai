---
title: "Handoff Package Template"
template_id: "lifecycle.handoff-package"
version: "0.1.0"
status: "draft"
owner: "Handoff Engine"
profile: "universal"
lifecycle_stage: "handoff"
input_artifacts:
  - "Previous lifecycle artifact"
output_artifacts:
  - "Handoff Package"
next_engine: "Handoff Engine"
quality_gate: "handoff Gate"
last_updated: "2026-07-04"
---

# Handoff Package Template

## 1. When to use this template

Use when the project needs this artifact before moving to the next AI-SEOS stage.

## 2. Who this template is for

Profile: $Profile. Adjust depth to T0, T1, T2 or T3 based on risk, urgency and project maturity.

## 3. What this template produces

Handoff Package.

## 4. Required inputs

Previous lifecycle artifact.

## 5. Instructions

Complete the fields below in concrete language. Preserve assumptions, risks, decisions and open questions.

## 6. Questions / fields

Capture: source engine, receiving agent, context, artifacts, decisions, risks, assumptions, constraints, pending questions, expected next action, receipt.

## 7. Output format

Summary:
Source artifacts:
Key fields:
Assumptions:
Risks:
Open questions:
Next artifact:

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
