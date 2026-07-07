# ADR 0243: Require Strong Evidence Before Detecting Next.js

## Status

Accepted

## Date

2026-07-06

## Context

Vite React projects can contain folders such as `app/` or `pages/` without being Next.js.

## Decision

Detect Next.js only from strong evidence: `next` dependency, `next.config.*`, `.next/`, or scripts using `next`.

## Consequences

Vite React stack detection becomes more accurate.

## Alternatives Considered

- Infer Next.js from `app/` or `pages/`: rejected because it creates false positives.

## Relation to Real Feedback

ECO SISTEMA AVANÇA COMERCIAL exposed a Next.js false positive in a Vite project.

