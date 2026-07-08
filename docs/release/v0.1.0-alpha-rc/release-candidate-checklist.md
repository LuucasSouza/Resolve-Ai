---
title: "Release Candidate Checklist"
status: "Release Candidate"
version: "0.1.0-alpha.0"
phase: "Phase 18"
owner: "Resolve Aí Maintainers"
last_updated: "2026-07-07"
---

# Release Candidate Checklist — v0.1.0-alpha.0

Checklist técnico executado na Phase 18 em 2026-07-07.

## Verificações executadas

- [x] build passou (`npm run build --prefix packages/resolve-ai-cli`, exit 0);
- [x] testes passaram (`npm test --prefix packages/resolve-ai-cli`, 87/87);
- [x] smoke passou (`npm run smoke --prefix packages/resolve-ai-cli`, exit 0);
- [x] npm dry-run passou (`npm pack --dry-run` dentro do pacote, 37 arquivos, 38.5 kB);
- [x] `git diff --check` passou;
- [x] README revisado (status alpha / release candidate, sem promessa de stable);
- [x] CHANGELOG revisado (entrada da Phase 18 adicionada);
- [x] known limitations claras (`known-limitations.md`);
- [x] npm publish **não** executado;
- [x] tag **não** criada;
- [x] GitHub Release **não** criado.

## Verificações pendentes (bloqueiam publicação)

- [ ] mantenedor aprovou explicitamente em `maintainer-approval-gate.md`;
- [ ] validação humana real com Non-Technical Builder;
- [ ] validação dedicada com Professional Engineer.

## Evidências

- Auditoria do pacote: `npm-package-audit.md`.
- Relatório de validação da fase: `../../sprints/phase-18-public-alpha-rc-validation-report.md`.
- Scorecard: `../v0.1.0-alpha-phase-18-readiness-scorecard.md`.
