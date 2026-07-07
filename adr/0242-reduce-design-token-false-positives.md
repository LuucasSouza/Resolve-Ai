# ADR 0242: Reduce Design Token False Positives

## Status

Accepted

## Date

2026-07-06

## Context

The word `token` can mean design token in frontend projects, not secret token.

## Decision

Do not classify `design-tokens`, `theme-tokens`, or `style-tokens` files as sensitive by default unless combined with strong secret terms.

## Consequences

Frontend projects produce less false security noise. Real `.env`, backup, credential, and password files remain sensitive.

## Alternatives Considered

- Treat every `token` path as sensitive: rejected due false positives.

## Relation to Real Feedback

ECO SISTEMA AVANÇA COMERCIAL reported `design-tokens.css` as a false positive.

