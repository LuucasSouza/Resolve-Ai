---
title: "Decision Object Model"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Decision Maintainers"
last_updated: "2026-07-03"
document_type: "Object Model"
source: "bootstrap-source/pt31_DECISION_ENGINE.md"
---

# Decision Object Model

```yaml
decision_id: DEC-0000
title: "Short decision title"
class: D0|D1|D2|D3|D4|D5
status: candidate|framed|evaluated|recommended|approved|rejected|implemented|superseded
owner: "Role or agent"
decision_question: ""
context:
  project: ""
  phase: ""
  constraints: []
  assumptions: []
alternatives: []
criteria: []
evaluation:
  matrix: ""
recommendation:
  chosen_alternative: ""
  rationale: ""
  trade_offs: []
risk_review:
  risk_level: ""
  mitigations: []
approval:
  required_by: ""
  approved_by: ""
artifacts:
  adr: ""
  related_docs: []
monitoring:
  signals: []
  revalidation_triggers: []
```
