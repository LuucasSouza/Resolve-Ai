---
title: "Discovery Depth Selection Template"
template_id: "engine.discovery-engine.discovery-depth-selection-template"
version: "0.1.0"
status: "draft"
owner: "discovery-engine"
profile: "universal"
lifecycle_stage: "discovery"
input_artifacts:
  - "Engine input artifacts"
output_artifacts:
  - "Discovery Depth Selection Template"
next_engine: "discovery-engine"
quality_gate: "discovery-engine Quality Gate"
last_updated: "2026-07-04"
---

# Discovery Depth Selection Template

## 1. When to use this template

Use when the project needs this artifact before moving to the next AI-SEOS stage.

## 2. Who this template is for

Profile: $Profile. Adjust depth to T0, T1, T2 or T3 based on risk, urgency and project maturity.

## 3. What this template produces

Discovery Depth Selection Template.

## 4. Required inputs

Engine input artifacts.

## 5. Instructions

Complete the fields below in concrete language. Preserve assumptions, risks, decisions and open questions.

## Engine

discovery-engine

## Purpose

Operate the discovery-engine consistently using explicit artifact contracts.

## Trigger

A previous engine, agent or user requests this engine output.

## Required input artifacts

List source artifacts and their versions.

## Optional input artifacts

Add examples, ADRs, scorecards or prior reviews when useful.

## Processing instructions

Inspect inputs, identify missing information, generate output, record risks and prepare handoff.

## Questions

- What information is missing?
- What assumption is unsafe?
- What decision is premature?
- What risk is ignored?
- What artifact is stale?
- What next step should be blocked?

## Output artifact

Discovery Depth Selection Template.

## Failure modes

Incomplete input, stale artifacts, hidden decisions, ignored risks or premature execution.

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
