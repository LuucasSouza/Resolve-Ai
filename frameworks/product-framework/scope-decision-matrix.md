---
title: "Scope Decision Matrix"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Product Maintainers"
last_updated: "2026-07-03"
document_type: "Decision Matrix"
source: "bootstrap-source/pt23_MVP_AND_SCOPE_FRAMEWORK.md"
---

# Scope Decision Matrix

| Criterion | Weight | Question |
|---|---:|---|
| User Value | 5 | Does it directly help the primary user outcome? |
| Learning Value | 5 | Does it validate a critical assumption? |
| Business Value | 4 | Does it support the business objective? |
| Trust Requirement | 4 | Is it required for security, privacy or credibility? |
| Implementation Complexity | -4 | Is it expensive or complex? |
| Operational Cost | -3 | Does it add support burden? |
| Architectural Irreversibility | -5 | Does it create hard-to-reverse decisions? |
| Dependency Risk | -3 | Does it rely on uncertain dependencies? |

## Rule

High value plus high irreversibility requires architecture review or ADR.
