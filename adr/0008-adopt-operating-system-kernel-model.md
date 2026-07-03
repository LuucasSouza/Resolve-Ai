# ADR-0008 - Adopt Operating System Kernel Model

## Status

Accepted

## Context

AI-SEOS needs a control layer that coordinates lifecycle, context, engines, agents, decisions and quality gates.

## Decision

Adopt the Operating System Kernel model as the conceptual control layer of AI-SEOS.

## Alternatives Considered

- Let each module define its own workflow independently.
- Use only a roadmap without lifecycle governance.
- Create a kernel that defines shared operating rules.

## Consequences

Positive: lifecycle, handoff and quality gates become consistent across modules.

Negative: the framework introduces more upfront structure.

## Reversibility

Medium. The kernel can be simplified or split if future engines need different lifecycle paths.

## Follow-up Actions

- Connect Product Engine and Architecture Engine to the kernel lifecycle in Sprint 2.

## References

- `operating-system/core/operating-system-kernel.md`
- `operating-system/core/lifecycle.md`
