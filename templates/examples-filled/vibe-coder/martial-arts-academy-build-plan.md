---
title: "Martial Arts Academy Vibe Coder Build Plan"
version: "0.1.0"
status: "Draft"
owner: "Template Maintainers"
profile: "vibe-coder"
lifecycle_stage: "execution"
last_updated: "2026-07-04"
---

# Martial Arts Academy Build Plan

## Build path

Build a web app with login, students table, attendance check-in, payment status and simple dashboard. Use one implementation slice at a time.

## Suggested slices

1. Project scaffold and basic navigation.
2. Student CRUD with active/inactive status.
3. Attendance check-in per class date.
4. Manual payment status and overdue filter.
5. Dashboard with active students, attendance this week and overdue count.

## Validation

Each slice must run locally, preserve existing files, update README notes and avoid payment automation in MVP.

## Risks

Do not hardcode secrets. Do not skip authorization after login is added. Do not add complex analytics before reliable data exists.
