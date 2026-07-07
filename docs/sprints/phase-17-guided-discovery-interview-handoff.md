---
title: "Phase 17 Guided Discovery Interview Handoff"
status: "Complete"
version: "0.1.0-alpha.0"
phase: "Phase 17"
owner: "Resolve Ai Maintainers"
last_updated: "2026-07-06"
---

# Phase 17 Guided Discovery Interview Handoff

## Result

Phase 17 implemented `resolve-ai entrevistar` and corrected validation/diagnostic issues found in alpha feedback.

## Commands Added

- `resolve-ai entrevistar`
- `resolve-ai entrevista`
- `resolve-ai ideia`

## Main Fixes

- Project-zero diagnosis now recommends `resolve-ai entrevistar`.
- Validation separates Resolve Aí artifacts, real project files, sensitive paths, and unknown files.
- `design-tokens.css` and similar files no longer become critical secret false positives by default.
- Vite React projects no longer become Next.js without strong Next evidence.
- Auxiliary folders such as `teste/`, `.resolve-ai/`, `docs/resolve-ai/`, `Resolve-Ai/`, `.git/`, and `node_modules/` are ignored by detection.
- Help output now explains command order, Windows `npm link`, and Node fallback.

## Score

84/100 - LIMITED GO.

## Next Action

Run a real Non-Technical Builder test starting with `resolve-ai entrevistar`.

