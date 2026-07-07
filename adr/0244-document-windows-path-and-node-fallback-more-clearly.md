# ADR 0244: Document Windows PATH and Node Fallback More Clearly

## Status

Accepted

## Date

2026-07-06

## Context

Windows participants may not get `resolve-ai` on PATH after local linking.

## Decision

Document `cd packages/resolve-ai-cli && npm link` and fallback execution through Node more clearly in help and docs.

## Consequences

Local alpha testing is less blocked by PATH issues.

## Alternatives Considered

- Publish npm to avoid local linking: rejected because publication remains blocked by validation gates.

## Relation to Real Feedback

CS2 Clips feedback reported Windows `npm link` friction.

