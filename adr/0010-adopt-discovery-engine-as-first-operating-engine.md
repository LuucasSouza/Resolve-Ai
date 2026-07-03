# ADR-0010 - Adopt Discovery Engine as First Operating Engine

## Status

Accepted

## Context

Most software failures begin before implementation, when teams solve unclear problems or hide assumptions.

## Decision

Adopt Discovery Engine as the first operating engine of AI-SEOS.

## Alternatives Considered

- Start with Architecture Engine.
- Start with Execution Engine.
- Start with Discovery Engine.

## Consequences

Positive: AI-SEOS starts at problem clarity before product and architecture decisions.

Negative: implementation-oriented users may perceive more upfront work before code.

## Reversibility

Medium. Other engines can become default entry points for mature projects, but new initiatives should continue through discovery.

## Follow-up Actions

- Use Discovery outputs as Sprint 2 inputs for Product and Architecture.

## References

- `operating-system/discovery/discovery-engine.md`
- `protocols/project-discovery/discovery-protocol.md`
