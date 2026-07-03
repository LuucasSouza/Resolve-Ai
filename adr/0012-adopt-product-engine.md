# ADR-0012 - Adopt Product Engine

## Status

Accepted

## Context

Sprint 1 produced Discovery Engine outputs, but AI-SEOS needs a formal operating engine that turns discovery into product artifacts before architecture and execution.

## Problem

Without Product Engine, teams may jump from discovery directly to architecture or implementation without clear PRD, MVP boundary, metrics and backlog candidates.

## Decision

Adopt Product Engine as the official operating engine for converting Discovery outputs into PRD, MVP Definition, Product Roadmap, Product Backlog Candidate and Product Handoff.

## Options Considered

- Keep product work inside Discovery Engine.
- Move directly from Discovery to Architecture.
- Create Product Engine as a distinct lifecycle stage.

## Consequences

Product work becomes traceable and architecture receives clearer inputs. The cost is an additional required stage before architecture.

## Trade-offs

Gains: clearer scope, fewer feature dumps, better architecture inputs. Costs: more documentation and review before technical design.

## Reversibility

Medium. Product Engine can be merged into another engine later, but current lifecycle benefits from separation.

## Follow-up

Connect Product Engine outputs to Architecture Engine and Sprint 3 Decision/Risk engines.

## References

- `operating-system/product/product-engine.md`
- `protocols/product-definition/discovery-to-prd-protocol.md`
