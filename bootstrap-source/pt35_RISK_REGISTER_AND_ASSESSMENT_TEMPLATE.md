---
title: Risk Register and Assessment Template
part: pt35
sprint: 3
version: 0.3.0
status: Draft for implementation
owner: AI-SEOS Core Team
canonical_targets:
  - templates/risk/risk-register-template.md
  - templates/risk/risk-assessment-template.md
  - templates/risk/risk-acceptance-template.md
  - frameworks/risk-framework/risk-register-standard.md
---

# Risk Register and Assessment Template

## 1. Purpose

This document defines the standard AI-SEOS risk register and risk assessment templates.

The Risk Register is the canonical place where active project risks are tracked.

The Risk Assessment Template is used to evaluate individual risks with enough detail to support decisions and mitigation.

## 2. Risk Register principles

A risk register must be:

- current;
- owned;
- prioritized;
- connected to decisions;
- reviewed regularly;
- actionable;
- honest;
- explicit about accepted risk.

A risk register is not a bureaucratic checklist.

It is an operational control surface.

## 3. Risk Register structure

```markdown
# Risk Register: [Project or Module Name]

## Metadata

- Project:
- Version:
- Status:
- Owner:
- Review Cadence:
- Last Reviewed:
- Next Review:

## Summary

| Level | Count |
|---|---:|
| Critical |  |
| High |  |
| Medium |  |
| Low |  |

## Active Risks

| ID | Title | Category | Probability | Impact | Score | Level | Owner | Strategy | Status | Due Date |
|---|---|---|---:|---:|---:|---|---|---|---|---|
| RISK-0001 |  |  |  |  |  |  |  |  |  |  |

## Critical Risks

[Detailed section for critical risks.]

## High Risks

[Detailed section for high risks.]

## Accepted Risks

[Accepted risks with approval.]

## Closed Risks

[Historical closed risks.]

## Review Notes

[Risk review history.]
```

## 4. Risk Assessment Template

```markdown
# Risk Assessment: [Risk Title]

## Metadata

- Risk ID:
- Status:
- Category:
- Owner:
- Source Artifact:
- Related Decision:
- Related ADR:
- Date Identified:
- Last Reviewed:
- Review Cadence:

## Risk Statement

If [cause/event/condition], then [impact/consequence], affecting [asset/outcome/stakeholder].

## Context

[Describe why this risk exists now.]

## Category

- Product
- Technical
- Security
- Compliance
- Operational
- Cost
- Delivery
- Vendor
- AI-specific

## Cause

[Root cause or uncertainty.]

## Impact

[Business, product, technical, operational or legal impact.]

## Probability

Score: 1-5

Rationale:

## Impact Score

Score: 1-5

Rationale:

## Risk Score

Probability x Impact = [score]

Level: Low | Medium | High | Critical

## Detection Signals

- [Signal 1]
- [Signal 2]

## Trigger Conditions

- [Trigger 1]
- [Trigger 2]

## Response Strategy

Avoid | Mitigate | Transfer | Accept | Monitor

## Mitigation Plan

| Action | Owner | Due Date | Status |
|---|---|---|---|
|  |  |  |  |

## Residual Risk

[Risk remaining after mitigation.]

## Acceptance

Required: Yes | No

Accepted by:

Acceptance rationale:

Expiration/review date:

## Dependencies

- [Dependency]

## Related Artifacts

- ADR:
- PRD:
- Architecture:
- Decision Record:
- Execution Plan:

## Notes

[Additional notes.]
```

## 5. Risk Acceptance Template

```markdown
# Risk Acceptance: [Risk Title]

## Metadata

- Risk ID:
- Risk Level:
- Owner:
- Accepted By:
- Date:
- Expiration Date:
- Related ADR:

## Accepted Risk

[Describe the risk being accepted.]

## Reason for Acceptance

[Explain why mitigation is not being pursued now.]

## Business Justification

[Explain business or delivery reason.]

## Expected Impact if Risk Occurs

[Describe consequences.]

## Monitoring Plan

[How the risk will be monitored.]

## Revalidation Trigger

[When acceptance must be reviewed.]

## Constraints

[Conditions under which acceptance remains valid.]

## Approval

- Name/Role:
- Date:
- Notes:
```

## 6. Risk scoring examples

### 6.1 Low risk

```text
Probability: 1
Impact: 2
Score: 2
Level: Low
```

Example:

A non-critical documentation page may become outdated.

### 6.2 Medium risk

```text
Probability: 3
Impact: 3
Score: 9
Level: Medium
```

Example:

A third-party API may require additional pagination handling.

### 6.3 High risk

```text
Probability: 3
Impact: 5
Score: 15
Level: High
```

Example:

Incorrect authorization may expose tenant data.

### 6.4 Critical risk

```text
Probability: 5
Impact: 5
Score: 25
Level: Critical
```

Example:

Production payment processing may fail without fallback during launch week.

## 7. Risk Review Meeting Protocol

Even when executed by AI agents, risk review should follow a structured protocol.

### 7.1 Inputs

- Active Risk Register;
- new ADRs;
- new architecture changes;
- new product scope changes;
- incidents;
- cost reports;
- security findings;
- unresolved assumptions.

### 7.2 Review questions

- What new risks appeared?
- Which risks increased?
- Which risks decreased?
- Which mitigations are overdue?
- Which accepted risks need reapproval?
- Which risks block execution?
- Which risks should be escalated?
- Which risks require ADR updates?

### 7.3 Outputs

- updated risk register;
- new risk assessments;
- mitigation tasks;
- risk acceptance records;
- escalation notes;
- handoff to Optimization Engine or Execution Engine.

## 8. Risk register quality checklist

- [ ] Every risk has an owner.
- [ ] Every risk has a category.
- [ ] Every risk has probability and impact.
- [ ] Every high/critical risk has mitigation or acceptance.
- [ ] Accepted risks have approver and expiration/review date.
- [ ] Security risks are not hidden as generic technical risks.
- [ ] Compliance risks are explicitly marked.
- [ ] Vendor risks include exit strategy when relevant.
- [ ] AI-specific risks include model, data and cost considerations.
- [ ] Register has last reviewed date.
- [ ] Risk levels are summarized.
- [ ] Related ADRs are linked.

## 9. Required canonical files

Codex must create:

- `templates/risk/README.md`
- `templates/risk/risk-register-template.md`
- `templates/risk/risk-assessment-template.md`
- `templates/risk/risk-acceptance-template.md`
- `templates/risk/risk-review-template.md`
- `frameworks/risk-framework/risk-register-standard.md`
- `frameworks/risk-framework/risk-scoring-model.md`

Codex must create ADR 0023:

- `adr/0023-adopt-risk-register-standard.md`

## 10. Definition of Done

The Risk Register standard is complete when:

- register template exists;
- assessment template exists;
- acceptance template exists;
- review template exists;
- scoring model exists;
- README links exist;
- ADR 0023 exists;
- Risk Engine references these templates.
