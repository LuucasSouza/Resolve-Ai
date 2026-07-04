---
project: AI Software Engineering Operating System (AI-SEOS)
sprint: 6
theme: Complete Template Packs
status: Draft for Codex Execution
version: 0.1.0
---

# pt79 — Template QA and Maintenance

## 1. Purpose

Sprint 6 must not only create templates. It must establish a maintenance model so templates remain coherent as the AI-SEOS evolves. Without template QA, the repository will accumulate duplicate, stale or conflicting templates.

## 2. Template Registry

Create:

```text
docs/templates/template-registry.md
docs/templates/template-taxonomy.md
docs/templates/template-maintenance-policy.md
docs/templates/template-quality-standard.md
```

The registry must list:

- template id;
- file path;
- owner;
- profile;
- lifecycle stage;
- input artifacts;
- output artifacts;
- current status;
- related examples;
- last reviewed date.

## 3. Template Lifecycle

Templates must have statuses:

```text
draft
active
recommended
deprecated
superseded
archived
```

## 4. Template Versioning

Each template must have a version.

Guidance:

- Patch update: wording, formatting, examples.
- Minor update: new optional section or improved guidance.
- Major update: changed artifact contract or required fields.

## 5. Template Review Checklist

Create `templates/quality/template-review-checklist.md` with:

- Does the template have front matter?
- Does it identify the target profile?
- Does it identify lifecycle stage?
- Does it define input and output artifacts?
- Does it define quality gates?
- Does it link to the next engine?
- Does it include examples or example links?
- Is the language appropriate for the target profile?
- Are placeholders clear?
- Is there duplication with another template?
- Does it conflict with ADRs?
- Does it update the registry?

## 6. Drift Detection

Document how maintainers should find drift:

- template references deleted engine;
- template refers to old readiness level;
- template has outdated ADR references;
- entry mode language is inconsistent;
- template output no longer matches handoff contract;
- examples no longer follow the template.

## 7. Template Maintenance Protocol

Create:

```text
protocols/template-maintenance/template-maintenance-protocol.md
```

Sections:

- trigger;
- review cadence;
- owner;
- required checks;
- registry update;
- changelog update;
- migration notes;
- deprecation policy.

## 8. Template Quality Gate

A template cannot be marked active unless:

- it has a registry entry;
- it has owner;
- it has output contract;
- it has at least one quality gate;
- it has example or explanation;
- it has no known conflict with active ADRs.

## 9. ADRs Required

Sprint 6 must create ADRs documenting:

- template packs as official AI-SEOS assets;
- profile-specific templates;
- lifecycle template pack;
- engine template pack;
- agent handoff templates;
- example-filled templates;
- template registry and maintenance policy.

## 10. Definition of Done

Template QA is complete when there is a registry, taxonomy, maintenance policy, review checklist and protocol for keeping templates current.
