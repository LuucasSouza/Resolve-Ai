---
title: "Weighted Decision Matrix"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Decision Maintainers"
last_updated: "2026-07-03"
document_type: "Framework"
source: "bootstrap-source/pt32_DECISION_FRAMEWORK_AND_MATRIX.md"
---

# Weighted Decision Matrix

## Weight Scale

| Weight | Meaning |
|---|---|
| 1 | Low importance |
| 2 | Useful but not decisive |
| 3 | Important |
| 4 | Very important |
| 5 | Critical |

## Score Scale

| Score | Meaning |
|---|---|
| 1 | Poor fit |
| 2 | Weak fit |
| 3 | Acceptable fit |
| 4 | Strong fit |
| 5 | Excellent fit |

## Formula

```text
weighted_score = criterion_weight * alternative_score
total_score = sum(weighted_scores)
```

## Rule

The highest score informs the recommendation but does not automatically decide it.
