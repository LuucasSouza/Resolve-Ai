# ADR-0018 - Adopt C4-Inspired Architecture Views

## Status

Accepted

## Context

Architecture documentation needs standard views that are understandable, versionable and suitable for GitHub-native documentation.

## Problem

Architecture diagrams can become inconsistent, decorative or too detailed without a view standard.

## Decision

Adopt C4-inspired architecture views using Mermaid as the repository-native diagram format.

## Options Considered

- No architecture view standard.
- Strict C4 compliance for every project.
- C4-inspired minimum views adapted to project complexity.

## Consequences

Architecture documents get consistent context, container, domain, integration and runtime views. Strict C4 purity is not required.

## Trade-offs

Gains: consistency and readability. Costs: maintainers must keep diagrams aligned with decisions.

## Reversibility

High. View standards can be extended or replaced by future ADR.

## Follow-up

Add examples in future architecture playbooks.

## References

- `docs/architecture/architecture-view-standard.md`
- `templates/architecture/architecture-overview-template.md`
