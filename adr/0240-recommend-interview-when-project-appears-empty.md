# ADR 0240: Recommend Interview When Project Appears Empty

## Status

Accepted

## Date

2026-07-06

## Context

Project-zero detection should not infer too much from missing files.

## Decision

`resolve-ai diagnosticar` recommends `resolve-ai entrevistar` when the project appears empty or contains only auxiliary folders.

## Consequences

The recommended flow becomes less generic for new ideas.

## Alternatives Considered

- Keep recommending generic discovery: rejected because users need a concrete next command.

## Relation to Real Feedback

INVEST feedback showed that a generic diagnosis is not enough for a new project.

