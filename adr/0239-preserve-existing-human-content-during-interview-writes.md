# ADR 0239: Preserve Existing Human Content During Interview Writes

## Status

Accepted

## Date

2026-07-06

## Context

Resolve Aí must keep trust by not overwriting human project notes.

## Decision

Interview writes must never overwrite existing content by default. Existing files receive an appended interview section or are preserved.

## Consequences

Manual notes remain safe. Documents may grow, but traceability is preserved.

## Alternatives Considered

- Replace template-like files entirely: rejected because detecting human intent perfectly is risky.

## Relation to Real Feedback

Professional Engineer feedback valued predictable, conservative CLI behavior.

