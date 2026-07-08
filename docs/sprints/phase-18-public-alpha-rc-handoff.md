---
title: "Phase 18 — Public Alpha RC Handoff"
status: "Complete"
version: "0.1.0-alpha.0"
phase: "Phase 18"
owner: "Resolve Aí Maintainers"
last_updated: "2026-07-07"
---

# Phase 18 — Public Alpha Release Candidate — Handoff

## O que a Phase 18 entregou

- Diretório `docs/release/v0.1.0-alpha-rc/` completo com 13 artefatos: README, release-candidate-checklist, npm-publication-checklist, npm-package-audit, npm-publication-decision, github-release-draft, git-tag-checklist, release-notes, known-limitations, rollback-plan, post-release-feedback-plan, distribution-checklist e maintainer-approval-gate.
- Scorecard e decisão da fase: `docs/release/v0.1.0-alpha-phase-18-readiness-scorecard.md` e `docs/release/v0.1.0-alpha-phase-18-go-no-go-decision.md`.
- ADRs 0256 a 0265, com índices atualizados.
- README, CHANGELOG, ROADMAP e READMEs de release/alpha-validation/community atualizados para status Release Candidate.
- pt271 a pt280 preservados em `bootstrap-source/`.

## O que a Phase 18 NÃO fez (de propósito)

- Não executou `npm publish`.
- Não criou tag Git nem GitHub Release.
- Não declarou stable nem produção.
- Não alterou comportamento de execução da CLI (`packages/resolve-ai-cli/src` intocado).
- Não adicionou telemetria, GitHub Actions de publicação ou coleta automática de feedback.
- Não commitou artefatos locais (`.resolve-ai/`, `docs/resolve-ai/`).

## Estado técnico no handoff

| Verificação | Resultado |
|---|---|
| `npm run build --prefix packages/resolve-ai-cli` | ✅ exit 0 |
| `npm test --prefix packages/resolve-ai-cli` | ✅ 87/87 |
| `npm run smoke --prefix packages/resolve-ai-cli` | ✅ exit 0 |
| `npm pack --dry-run` (no pacote) | ✅ 37 arquivos, 38.5 kB, sem arquivos proibidos |
| `git diff --check` | ✅ limpo |

## Decisão registrada

**90/100 — RELEASE CANDIDATE READY, aguardando aprovação do mantenedor.** Não é GO. Não é stable.

## Próxima fase

- Se o mantenedor marcar todos os checkboxes de `maintainer-approval-gate.md`: **Phase 19 — Public Alpha Publication Execution** (tag → GitHub pre-release → `npm publish --tag alpha`).
- Se surgirem problemas na revisão do mantenedor: **Phase 18B — Release Candidate Fixes**.
- Em paralelo (recomendado): rodar validação real Non-Technical Builder com o fluxo Controle Simples de Gastos e o kit `teste/`.

## Instruções para o próximo agente/mantenedor

1. Ler `docs/release/v0.1.0-alpha-rc/README.md` primeiro.
2. Nunca executar publicação com o gate desmarcado.
3. Antes de qualquer publish real, repetir `npm pack --dry-run` e comparar com `npm-package-audit.md`.
4. Não subir o score acima de 90/100 sem validação humana real registrada.
