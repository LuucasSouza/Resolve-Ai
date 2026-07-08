# pt279 — Phase 18 ADRs

## ADRs obrigatórias

Criar:

```text
adr/0256-adopt-public-alpha-release-candidate-gate.md
adr/0257-require-maintainer-approval-before-npm-publish.md
adr/0258-use-alpha-dist-tag-for-npm-publication.md
adr/0259-document-known-limitations-before-public-release.md
adr/0260-prepare-github-release-draft-without-creating-release.md
adr/0261-adopt-manual-feedback-loop-for-public-alpha.md
adr/0262-define-rollback-plan-for-alpha-publication.md
adr/0263-keep-human-validation-gap-visible-in-release-docs.md
adr/0264-require-package-dry-run-audit-before-publication.md
adr/0265-classify-phase-18-as-release-candidate-not-stable.md
```

## Template

Cada ADR deve conter:

```markdown
# ADR XXXX — Title

## Status

Accepted

## Context

## Decision

## Consequences

### Positive

### Negative

### Neutral

## Alternatives Considered

## Follow-up
```

## Índices

Atualizar:

```text
adr/README.md
docs/architecture/decision-log.md
```

## Regra

Nenhuma ADR deve declarar stable, produção ou validação humana ampla.
