# Resolve Aí — Phase 13

> Projeto público: **Resolve Aí**  
> Promessa: **“Me dá o problema ou a ideia, e eu te ajudo a resolver.”**  
> Nome técnico/histórico: **AI-SEOS**  
> Fase: **Phase 13 — Real User Alpha Validation and Release Decision**


## ADRs da Phase 13

Criar ADRs 0186 a 0195.

## ADR 0186 — Validate with Real Users Before Public Alpha

Status: Proposed/Accepted

Decision:
Public alpha requires evidence from real users or an explicit LIMITED GO/NO-GO decision documenting the lack of evidence.

Rationale:
Simulated validation is necessary but insufficient.

Consequences:
Release decisions become slower but more trustworthy.

## ADR 0187 — Use Three Official User Profiles as Release Gate

Decision:
The profiles Non-Technical Builder, Vibe Coder and Professional Engineer are mandatory validation lenses.

## ADR 0188 — Keep Real User Validation Privacy-Preserving

Decision:
No sensitive project data, credentials, proprietary source code or personal data should be collected.

## ADR 0189 — Treat Package Content Review as Release Gate

Decision:
NPM package content must be reviewed before public publication.

## ADR 0190 — Do Not Count Simulated Scenarios as External Validation

Decision:
Local fixtures are technical validation, not evidence of market/user readiness.

## ADR 0191 — Preserve Portuguese-First Public UX

Decision:
The alpha UX remains Portuguese-first and Brazil-oriented.

## ADR 0192 — Separate Restricted Alpha from Public Alpha

Decision:
LIMITED GO means restricted alpha, not public npm announcement.

## ADR 0193 — Require GO/LIMITED GO/NO-GO Decision Document

Decision:
Every release-prep phase must end with formal decision documentation.

## ADR 0194 — Keep Publication Manual

Decision:
No npm publish, tag or GitHub Release is automated during Phase 13.

## ADR 0195 — Maintain Honest Readiness Scoring

Decision:
Readiness score must not increase without evidence.

## Required ADR fields

Each ADR must include:

- Context
- Decision
- Alternatives considered
- Consequences
- Validation
- Related artifacts
