# ADR-0016 - Adopt Architecture Readiness Levels

## Status

Accepted

## Context

AI-SEOS needs a clear way to communicate architecture maturity across agents and handoffs.

## Problem

Without readiness levels, downstream agents may treat incomplete architecture as implementation-ready.

## Decision

Adopt Architecture Readiness Levels ARL-0 through ARL-7.

## Options Considered

- Use binary ready/not ready.
- Use informal status notes.
- Use explicit Architecture Readiness Levels.

## Consequences

Architecture maturity becomes explicit and reviewable. Agents must classify architecture state before handoff.

## Trade-offs

Gains: clearer handoff and reduced premature execution. Costs: one more maturity model to maintain.

## Reversibility

High. Levels can be refined after real usage.

## Follow-up

Align ARL with Sprint 3 Decision/Risk gates.

## References

- `operating-system/architecture/architecture-readiness-levels.md`
