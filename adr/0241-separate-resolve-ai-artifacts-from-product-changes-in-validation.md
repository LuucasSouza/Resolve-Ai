# ADR 0241: Separate Resolve Aí Artifacts from Product Changes in Validation

## Status

Accepted

## Date

2026-07-06

## Context

`validar` previously mixed Resolve Aí generated files with product changes.

## Decision

Classify changed files as Resolve Aí artifacts, project files, possible sensitive paths, or unknown.

## Consequences

Validation output becomes clearer and less alarming. Product changes remain visible.

## Alternatives Considered

- Keep a flat changed-file list: rejected because it confuses generated documentation with product edits.

## Relation to Real Feedback

ECO SISTEMA AVANÇA COMERCIAL feedback showed this confusion directly.

