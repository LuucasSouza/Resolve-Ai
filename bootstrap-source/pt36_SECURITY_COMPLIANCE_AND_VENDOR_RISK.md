---
title: Security, Compliance and Vendor Risk
part: pt36
sprint: 3
version: 0.3.0
status: Draft for implementation
owner: AI-SEOS Core Team
canonical_targets:
  - frameworks/risk-framework/security-risk-model.md
  - frameworks/risk-framework/compliance-risk-model.md
  - frameworks/risk-framework/vendor-risk-model.md
  - templates/risk/security-risk-checklist.md
  - templates/risk/vendor-risk-checklist.md
---

# Security, Compliance and Vendor Risk

## 1. Purpose

This document extends the Risk Engine with deeper models for three categories that require special handling:

- Security Risk;
- Compliance Risk;
- Vendor and Lock-in Risk.

These risks are structurally different from ordinary delivery or technical risks because they can create severe consequences even when the product appears to function correctly.

A system can be fast, beautiful and successful while still being unsafe, non-compliant or trapped in a vendor dependency.

AI-SEOS must detect these risks early.

## 2. Security risk model

Security risk exists when a weakness may compromise confidentiality, integrity, availability, identity, authorization, auditability or abuse resistance.

### 2.1 Security risk categories

| Category | Description |
|---|---|
| Authentication | User identity verification risk |
| Authorization | Access control and permission risk |
| Data Isolation | Tenant, user or domain boundary risk |
| Secrets Management | API keys, tokens and credentials risk |
| Input Handling | Injection, validation and parsing risk |
| Webhook Security | Signature verification and replay risk |
| Data Protection | Encryption, exposure and retention risk |
| Auditability | Lack of traceability risk |
| Dependency Security | Third-party package and supply chain risk |
| Infrastructure Security | Cloud, network and deployment risk |
| Abuse and Fraud | Misuse, scraping, spam, payment abuse |
| AI Security | Prompt injection, data leakage, tool misuse |

## 3. Security risk questions

The Risk Engine must ask:

### Authentication

- Who can access the system?
- How is identity verified?
- Are sessions managed securely?
- Are privileged accounts protected?
- Is MFA required for administrators?

### Authorization

- What can each actor access?
- Is authorization enforced server-side?
- Can users access data across tenants?
- Are role changes audited?
- Are default permissions safe?

### Data protection

- What sensitive data is stored?
- Where is it stored?
- Is data encrypted in transit?
- Is data encrypted at rest?
- Is personal data minimized?
- Is retention defined?

### Webhooks and integrations

- Are webhook signatures verified?
- Are replay attacks prevented?
- Are idempotency rules defined?
- Are failures retried safely?
- Are external calls observable?

### AI-specific security

- Can users inject instructions into AI context?
- Can model outputs trigger unsafe tools?
- Is sensitive data sent to model providers?
- Are prompts and outputs logged safely?
- Are AI actions permission-scoped?

## 4. Security risk severity rules

Certain security risks are automatically high or critical.

### Automatically Critical

- Cross-tenant data exposure.
- Production secrets committed to repository.
- Public unauthenticated access to sensitive data.
- Payment credentials exposed.
- Admin privilege escalation.
- Unvalidated AI tool execution with destructive permissions.

### Automatically High

- Missing webhook signature validation.
- Missing server-side authorization tests.
- Weak admin session controls.
- Sensitive logs without redaction.
- Over-permissive database rules.
- No backup for critical production data.

## 5. Compliance risk model

Compliance risk exists when system design may violate legal, regulatory, contractual or policy requirements.

AI-SEOS does not provide legal advice, but it must surface compliance questions early.

### 5.1 Compliance risk categories

| Category | Description |
|---|---|
| Privacy | Personal data processing, consent, retention |
| Data Residency | Where data is stored or processed |
| Financial | Payments, billing, chargebacks, tax data |
| Healthcare | Health or sensitive data requirements |
| Education | Student/minor data requirements |
| Enterprise Contract | SLA, audit, access control obligations |
| Accessibility | Legal or contractual accessibility obligations |
| AI Governance | AI transparency, explainability, data usage |

### 5.2 Compliance questions

- Does the product process personal data?
- Does it process sensitive personal data?
- Does it process children's data?
- Does it process payment data?
- Does it process health data?
- Does it require consent management?
- Does it need deletion/export workflows?
- Does it need audit logs?
- Does it need data residency controls?
- Does it need retention policies?
- Does it use AI in user-impacting decisions?
- Are users informed about AI usage when required?

## 6. Vendor and lock-in risk model

Vendor risk exists when the project depends on an external provider for critical capabilities.

Vendor lock-in is not always bad.

Early-stage projects often benefit from managed platforms.

The problem is accidental lock-in: dependency created without awareness of future migration cost.

### 6.1 Vendor risk categories

| Category | Description |
|---|---|
| API Lock-in | Application depends on proprietary APIs |
| Data Lock-in | Data difficult to export or migrate |
| Auth Lock-in | Identity tied to provider-specific model |
| Runtime Lock-in | Code runs only on vendor runtime |
| Pricing Risk | Cost can grow unpredictably |
| Availability Risk | Vendor outage affects core product |
| Compliance Risk | Vendor cannot meet required obligations |
| Roadmap Risk | Vendor product direction may change |
| Support Risk | Support quality may be insufficient |

### 6.2 Vendor risk questions

- Is this provider on the critical path?
- Can we export our data easily?
- Can we migrate users/auth identities?
- Is pricing predictable?
- What happens if provider changes pricing?
- What happens if provider removes a feature?
- What happens if provider has an outage?
- Are there open standards involved?
- Can we wrap provider-specific APIs behind an interface?
- Do we have a staged migration path?

## 7. Exit strategy model

Every high-impact vendor decision must define an exit strategy.

### 7.1 Exit strategy levels

| Level | Description |
|---|---|
| E0 | No exit strategy needed; low impact |
| E1 | Manual export is enough |
| E2 | Data export/import scripts required |
| E3 | Abstraction layer required |
| E4 | Parallel provider compatibility required |
| E5 | Vendor choice requires human approval and legal/compliance review |

## 8. Security checklist template

```markdown
# Security Risk Checklist

## Authentication

- [ ] Authentication method defined.
- [ ] Admin access protected.
- [ ] Session lifecycle defined.
- [ ] Password/auth provider policy documented.

## Authorization

- [ ] Roles defined.
- [ ] Permission model documented.
- [ ] Server-side authorization required.
- [ ] Tenant isolation tested.

## Data Protection

- [ ] Sensitive data identified.
- [ ] Encryption in transit assumed/required.
- [ ] Encryption at rest verified or documented.
- [ ] Retention policy defined.
- [ ] Logs redact sensitive data.

## Integrations

- [ ] Webhook signatures verified.
- [ ] Idempotency defined.
- [ ] External API errors handled.
- [ ] Secrets stored outside repository.

## AI Security

- [ ] Prompt injection risk assessed.
- [ ] Tool permissions scoped.
- [ ] Sensitive data exposure reviewed.
- [ ] AI output validation defined.
```

## 9. Vendor risk checklist template

```markdown
# Vendor Risk Checklist

## Vendor Criticality

- [ ] Vendor capability is classified as critical/non-critical.
- [ ] Alternative vendors identified.
- [ ] Outage impact documented.

## Data Portability

- [ ] Export mechanism exists.
- [ ] Export format documented.
- [ ] Migration complexity estimated.

## Pricing

- [ ] Pricing model understood.
- [ ] Cost scaling drivers identified.
- [ ] Budget thresholds defined.

## Lock-in

- [ ] Proprietary APIs identified.
- [ ] Abstraction strategy considered.
- [ ] Exit strategy level assigned.

## Compliance

- [ ] Data processing terms considered.
- [ ] Region/data residency considered.
- [ ] Security posture reviewed.
```

## 10. Risk classification ADR connection

Codex must create ADR 0024:

- `adr/0024-adopt-risk-classification-model.md`

This ADR must document why AI-SEOS separates risk into categories and why security, compliance, vendor and AI risks receive explicit treatment.

## 11. Required canonical files

Codex must create:

- `frameworks/risk-framework/security-risk-model.md`
- `frameworks/risk-framework/compliance-risk-model.md`
- `frameworks/risk-framework/vendor-risk-model.md`
- `frameworks/risk-framework/ai-risk-model.md`
- `templates/risk/security-risk-checklist.md`
- `templates/risk/vendor-risk-checklist.md`
- `templates/risk/compliance-risk-checklist.md`
- `templates/risk/ai-risk-checklist.md`

## 12. Definition of Done

This risk specialization is complete when:

- security risk model exists;
- compliance risk model exists;
- vendor risk model exists;
- AI risk model exists;
- checklists exist;
- exit strategy levels exist;
- critical security rules exist;
- ADR 0024 exists;
- Risk Engine references specialized models.
