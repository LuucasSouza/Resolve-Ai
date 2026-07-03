# ADR-0013 - Adopt MVP Scope Framework

## Status

Accepted

## Context

AI-assisted teams often build too much before learning or too little to validate meaningful product value.

## Problem

MVP scope needs a reusable decision model that balances user value, learning value, trust, operational cost and architectural reversibility.

## Decision

Adopt the MVP Scope Framework and Scope Decision Matrix as the canonical way to define MVP, enabling MVP, post-MVP, experimental and explicitly out scope.

## Options Considered

- Define MVP ad hoc per project.
- Use only priority labels.
- Adopt a structured MVP scope framework.

## Consequences

MVP decisions become reviewable and reusable. Contributors must document deferred and excluded scope.

## Trade-offs

Gains: reduced scope inflation and clearer learning goals. Costs: more explicit product review effort.

## Reversibility

High. Weights and categories can evolve in later ADRs.

## Follow-up

Validate the framework in real examples and connect high-irreversibility scope to architecture review.

## References

- `frameworks/product-framework/mvp-scope-framework.md`
- `templates/product/scope-decision-matrix-template.md`
