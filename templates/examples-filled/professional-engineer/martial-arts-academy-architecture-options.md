---
title: "Martial Arts Academy Architecture Options"
version: "0.1.0"
status: "Draft"
owner: "Template Maintainers"
profile: "professional-engineer"
lifecycle_stage: "architecture"
last_updated: "2026-07-04"
---

# Martial Arts Academy Architecture Options

## Context

Modular SaaS MVP for one academy first, with possible multi-academy expansion later.

## Option A

Single web app with managed database and simple role-based access.

## Option B

No-code database plus custom dashboard.

## Option C

Overbuilt microservice architecture.

## Comparison

| Criterion | Weight | A | B | C |
|---|---:|---:|---:|---:|
| Delivery Speed | 3 | 3 | 3 | 1 |
| Maintainability | 3 | 3 | 2 | 1 |
| Cost | 2 | 3 | 2 | 1 |
| Security | 3 | 3 | 2 | 2 |
| Scalability | 1 | 2 | 1 | 3 |

## Recommendation

Choose Option A. Record ADRs for stack, data model and authorization.

> AI-SEOS note: Option C is rejected because the operational problem is not yet complex enough.
