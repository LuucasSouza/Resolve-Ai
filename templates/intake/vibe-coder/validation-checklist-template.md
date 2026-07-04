---
title: "Validation Checklist Template"
template_id: "vibe-coder.validation-checklist"
version: "0.1.0"
status: "draft"
owner: "QA Lead"
profile: "vibe-coder"
lifecycle_stage: "execution"
input_artifacts:
  - "Implementation Slice"
output_artifacts:
  - "Validation Checklist"
next_engine: "QA Lead"
quality_gate: "QA Gate"
last_updated: "2026-07-04"
---

# Validation Checklist Template

## 1. When to use this template

Use when the project needs this artifact before moving to the next AI-SEOS stage.

## 2. Who this template is for

Profile: $Profile. Adjust depth to T0, T1, T2 or T3 based on risk, urgency and project maturity.

## 3. What this template produces

Validation Checklist.

## 4. Required inputs

Implementation Slice.

## 5. Instructions

Complete the fields below in concrete language. Preserve assumptions, risks, decisions and open questions.

## 6. Questions / fields

- Did the AI change too many files?
- Did it create duplicate components?
- Did it hardcode secrets?
- Did it bypass authentication?
- Did it ignore existing architecture?
- Did it add unnecessary dependencies?
- Did it update documentation?
- Did it create a commit?
- Can you explain what changed?

## 7. Output format

Pass/fail:
Evidence:
Fixes required:
Next slice:

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
