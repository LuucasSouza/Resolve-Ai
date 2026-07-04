---
title: "Debugging Handoff Template"
template_id: "vibe-coder.debugging-handoff"
version: "0.1.0"
status: "draft"
owner: "Handoff Engine"
profile: "vibe-coder"
lifecycle_stage: "handoff"
input_artifacts:
  - "Error report"
  - "Current state"
output_artifacts:
  - "Debugging Handoff"
next_engine: "Implementation Lead"
quality_gate: "Handoff Gate"
last_updated: "2026-07-04"
---

# Debugging Handoff Template

## 1. When to use this template

Use when the project needs this artifact before moving to the next AI-SEOS stage.

## 2. Who this template is for

Profile: $Profile. Adjust depth to T0, T1, T2 or T3 based on risk, urgency and project maturity.

## 3. What this template produces

Debugging Handoff.

## 4. Required inputs

Error report, Current state.

## 5. Instructions

Complete the fields below in concrete language. Preserve assumptions, risks, decisions and open questions.

## 6. Questions / fields

What failed?
Exact error:
What changed before failure?
Files likely involved:
Steps to reproduce:
What not to change:
Validation after fix:

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
