---
title: "Risk Scoring Model"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Risk Maintainers"
last_updated: "2026-07-03"
document_type: "Framework"
source: "bootstrap-source/pt34_RISK_ENGINE.md"
---

# Risk Scoring Model

## Probability

1 Very Low, 2 Low, 3 Medium, 4 High, 5 Very High.

## Impact

1 Very Low, 2 Low, 3 Medium, 4 High, 5 Critical.

## Score

```text
risk_score = probability * impact
```
