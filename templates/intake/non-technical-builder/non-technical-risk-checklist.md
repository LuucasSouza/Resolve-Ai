---
title: "Non-Technical Risk Checklist"
template_id: "non-technical-builder.risk-checklist"
version: "0.1.0"
status: "draft"
owner: "Risk Engine"
profile: "non-technical-builder"
lifecycle_stage: "risk"
input_artifacts:
  - "Simple Solution Brief"
output_artifacts:
  - "Plain-Language Risk Checklist"
next_engine: "Risk Engine"
quality_gate: "Risk Gate"
last_updated: "2026-07-04"
---

# Non-Technical Risk Checklist

## 1. When to use this template

Use when the project needs this artifact before moving to the next AI-SEOS stage.

## 2. Who this template is for

Profile: $Profile. Adjust depth to T0, T1, T2 or T3 based on risk, urgency and project maturity.

## 3. What this template produces

Plain-Language Risk Checklist.

## 4. Required inputs

Simple Solution Brief.

## 5. Instructions

Complete the fields below in concrete language. Preserve assumptions, risks, decisions and open questions.

## 6. Questions / fields

- Does this store personal information?
- Does it involve payments?
- Does it involve health, children, legal, financial or sensitive data?
- Can someone lose money if the system makes a mistake?
- Does more than one person need access?
- Should some people be blocked from seeing certain information?
- Does the system need backups?
- What happens if the system is offline?

## 7. Output format

Sensitive data:
Money risk:
Access risk:
Availability risk:
Human fallback:

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
