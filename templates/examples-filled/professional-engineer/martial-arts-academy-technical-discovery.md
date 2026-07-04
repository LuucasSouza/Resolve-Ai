---
title: "Martial Arts Academy Technical Discovery"
version: "0.1.0"
status: "Draft"
owner: "Template Maintainers"
profile: "professional-engineer"
lifecycle_stage: "discovery"
last_updated: "2026-07-04"
---

# Martial Arts Academy Technical Discovery

## Context

Small academy needs operational software for student, attendance, payment-state and retention workflows.

## Domain concepts

Student, MembershipPlan, ClassSession, AttendanceRecord, PaymentAccount, BillingStatus, RetentionRisk.

## NFRs

Availability target is business-hours reliability. Privacy is required for student personal data. Auditability is required for payment-state changes.

## Constraints

MVP should avoid automated billing and advanced AI. Manual reconciliation is acceptable.

## Required decisions

Stack, tenancy boundary, authorization model, data model and deployment target.
