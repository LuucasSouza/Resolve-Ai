---
title: "Template Review Checklist"
template_id: "quality.template-review-checklist"
version: "0.1.0"
status: "draft"
owner: "Template Maintainers"
profile: "universal"
lifecycle_stage: "documentation"
input_artifacts:
  - "Template Candidate"
output_artifacts:
  - "Template Review Result"
next_engine: "Documentation Engine"
quality_gate: "Template Quality Gate"
last_updated: "2026-07-04"
---

# Template Review Checklist

## 1. When to use this template

Use before marking any AI-SEOS template as active or recommended.

## 2. Who this template is for

Template maintainers, engine owners, reviewers and documentation maintainers.

## 3. What this template produces

A review result for approving, changing, deprecating or superseding a template.

## 4. Required inputs

- Template candidate.
- Related ADRs.
- Registry entry.
- Related examples.

## 5. Review items

- [ ] Does the template have front matter?
- [ ] Does it identify the target profile?
- [ ] Does it identify lifecycle stage?
- [ ] Does it define input and output artifacts?
- [ ] Does it define quality gates?
- [ ] Does it link to the next engine?
- [ ] Does it include examples or example links?
- [ ] Is the language appropriate for the target profile?
- [ ] Are placeholders clear?
- [ ] Is there duplication with another template?
- [ ] Does it conflict with ADRs?
- [ ] Does it update the registry?

## 6. Output format

Decision: approve, request changes, deprecate or supersede.

Reviewer notes:

Required follow-up:

## 7. Handoff

Send approved changes to Template Maintainers and Documentation Engine.
