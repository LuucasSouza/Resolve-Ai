# ADR 0236: Adopt Guided Discovery Interview for Empty Projects

## Status

Accepted

## Date

2026-07-06

## Context

Alpha feedback showed that empty or idea-only projects cannot be understood well through filesystem heuristics alone.

## Decision

Adopt a guided local discovery interview for empty projects.

## Consequences

Resolve Aí can capture intent before planning. The CLI gains a project-zero entry point without generating product code.

## Alternatives Considered

- Keep using only `diagnosticar`: rejected because it stays generic in empty folders.
- Require manual document editing: rejected because it is too much friction for Non-Technical Builders.

## Relation to Real Feedback

The INVEST test showed that new projects need conversation before diagnosis.

