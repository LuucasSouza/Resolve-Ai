---
title: "Real-World Implementation Cases"
project: "AI Software Engineering Operating System (AI-SEOS)"
sprint: "7"
version: "0.7.0"
status: "Draft"
owner: "AI-SEOS Principal Maintainer"
last_updated: "2026-07-04"
---

# Real-World Implementation Cases

## Purpose

This document defines the required real-world implementation cases for Sprint 7.

The purpose is to show how AI-SEOS can be used in practical projects, not only as documentation. These cases should be structured enough that a user can copy them as starting points.

## Required Implementation Cases

### Case 1: Martial Arts Academy SaaS

Primary example because it demonstrates a realistic small business SaaS.

Scope:

- student management;
- attendance;
- payments;
- retention;
- dashboard;
- multi-user access;
- compliance awareness.

Required outputs:

- Non-Technical Builder version;
- Vibe Coder version;
- Professional Engineer version;
- sample discovery;
- sample MVP;
- sample architecture;
- sample risk register;
- sample execution plan;
- sample handoff.

### Case 2: WhatsApp Order Tracker

For small local businesses receiving orders manually.

Scope:

- customers;
- orders;
- status tracking;
- payments;
- simple reporting;
- optional WhatsApp support.

### Case 3: Internal Team Operations Dashboard

For teams that need internal organization.

Scope:

- tasks;
- clients;
- deadlines;
- responsible person;
- status;
- simple metrics.

### Case 4: AI Document Assistant

For companies that want to ask questions over documents.

Scope:

- upload documents;
- search;
- answer questions;
- permissions;
- AI cost risk;
- hallucination control;
- retrieval quality.

### Case 5: Professional Multi-Tenant SaaS

For engineers.

Scope:

- multi-tenancy;
- authentication;
- RBAC;
- billing;
- observability;
- audit log;
- deployment;
- ADRs.

## Case Depth Levels

Cases must use three levels:

### C1 — Demonstration Case

Shows the framework briefly.

### C2 — Learning Case

Includes enough detail to teach the method.

### C3 — Reference Case

Includes full artifact chain across the lifecycle.

## Required Directory Structure

```text
examples/real-world/
  README.md
  martial-arts-academy-saas/
    README.md
    non-technical-builder.md
    vibe-coder.md
    professional-engineer.md
    artifact-chain.md
  whatsapp-order-tracker/
    README.md
    case.md
  internal-operations-dashboard/
    README.md
    case.md
  ai-document-assistant/
    README.md
    case.md
  multi-tenant-saas/
    README.md
    case.md
```

## Standard Artifact Chain

Every reference case must demonstrate:

```text
Raw Idea
↓
Entry Mode
↓
Interview
↓
Discovery
↓
Product Definition
↓
Architecture
↓
Decision
↓
Risk
↓
Optimization
↓
Execution
↓
Documentation
↓
Handoff
↓
Reflection
```

## Case Acceptance Criteria

A real-world case is acceptable when:

- it starts from natural language;
- it shows how mode affects output;
- it includes scope cuts;
- it includes trade-offs;
- it includes risks;
- it produces an execution plan;
- it includes one example of what the AI should not build yet.

## Sprint 7 Output Requirement

Codex must create at least five real-world case folders, with the martial arts academy SaaS as the most complete reference case.

