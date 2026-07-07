# ADR 0238: Populate Intake, Discovery and Product Definition from Interview

## Status

Accepted

## Date

2026-07-06

## Context

Planning and preparation depend on docs 00, 02, and 03. Empty projects need these documents before useful planning.

## Decision

The interview writes or updates `00-project-intake.md`, `02-discovery.md`, and `03-product-definition.md`.

## Consequences

`planejar` and `preparar` receive better context and avoid generic fallback tasks.

## Alternatives Considered

- Write a new separate interview document only: rejected because downstream commands already read docs 00/02/03.

## Relation to Real Feedback

INVEST required manual edits to reflect the real idea. This decision automates that documentation step safely.

