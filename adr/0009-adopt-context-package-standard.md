# ADR-0009 - Adopt Context Package Standard

## Status

Accepted

## Context

Human + AI engineering fails when context is lost between sessions, agents or modules.

## Decision

Adopt a Context Package Standard for all handoffs and downstream work.

## Alternatives Considered

- Use free-form summaries.
- Depend on chat history.
- Standardize context packages as durable artifacts.

## Consequences

Positive: handoffs become inspectable, repeatable and less dependent on memory.

Negative: contributors must maintain structured context fields.

## Reversibility

High. Fields can evolve through future ADRs or template versioning.

## Follow-up Actions

- Use context package in Product and Architecture handoffs.
- Add examples in Sprint 2.

## References

- `operating-system/core/context-package-standard.md`
- `templates/context/context-package-template.md`
