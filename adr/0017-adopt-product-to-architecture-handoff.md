# ADR-0017 - Adopt Product to Architecture Handoff

## Status

Accepted

## Context

Product Engine produces artifacts that Architecture Engine must consume without rediscovering product context.

## Problem

Informal product-to-architecture transfer causes missing NFRs, hidden assumptions, unclear domain concepts and architecture drift.

## Decision

Adopt Product to Architecture Handoff as a canonical contract.

## Options Considered

- Let Architecture read PRD only.
- Use free-form summaries.
- Use a structured Product Handoff Package.

## Consequences

Architecture inputs become explicit. Product Engine must preserve future evolution signals without forcing premature implementation.

## Trade-offs

Gains: less context loss and better architecture fit. Costs: handoff package maintenance.

## Reversibility

High. Fields can evolve with future handoff templates.

## Follow-up

Use this handoff in Sprint 3 Decision/Risk inputs.

## References

- `operating-system/product/product-handoff-contract.md`
- `templates/product/product-handoff-package.md`
