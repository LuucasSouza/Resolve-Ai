---
title: "Validation Change Classification"
status: "Draft"
version: "0.1.0-alpha.0"
phase: "Phase 17"
owner: "Resolve Ai Maintainers"
last_updated: "2026-07-06"
---

# Validation Change Classification

## Purpose

`resolve-ai validar` separates local changes into clear categories so users do not confuse Resolve Aí artifacts with product code changes.

## Categories

| Category | Meaning |
|---|---|
| Artefatos Resolve Aí | `.resolve-ai/`, `docs/resolve-ai/`, `teste/` |
| Arquivos reais do projeto | source, config, manifests, tests, README, app files |
| Possíveis sensíveis | `.env`, credentials, backups, dumps, private keys, auth exports |
| Desconhecidos | paths that need manual review |

## Safety

Sensitive files are detected by path/name only. Their contents are not read or copied.

Design token files such as `design-tokens.css`, `theme-tokens.ts`, and `style-tokens.json` are not treated as secrets unless combined with strong secret terms such as `secret`, `auth`, `api-key`, `credential`, `private`, `password`, or `.env`.

## Git Dependency

When Git is unavailable, validation explains that it cannot compare changes precisely and recommends:

```bash
git init
```

or running Resolve Aí inside an existing Git repository.

