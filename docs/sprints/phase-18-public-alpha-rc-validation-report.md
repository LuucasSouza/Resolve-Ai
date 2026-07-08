---
title: "Phase 18 — Public Alpha RC Validation Report"
status: "Complete"
version: "0.1.0-alpha.0"
phase: "Phase 18"
owner: "Resolve Aí Maintainers"
last_updated: "2026-07-07"
---

# Phase 18 — Public Alpha Release Candidate — Validation Report

## Escopo validado

A Phase 18 é uma fase de preparação de release: o comportamento da CLI não mudou. A validação cobre (a) regressão técnica completa e (b) auditoria do pacote npm.

## Testes obrigatórios executados (2026-07-07)

| Teste | Comando | Resultado |
|---|---|---|
| Build | `npm run build --prefix packages/resolve-ai-cli` | ✅ exit 0 |
| Testes automatizados | `npm test --prefix packages/resolve-ai-cli` | ✅ 87 testes, 87 pass, 0 fail |
| Smoke | `npm run smoke --prefix packages/resolve-ai-cli` | ✅ exit 0 |
| Pack dry-run | `cd packages/resolve-ai-cli && npm pack --dry-run` | ✅ tarball gerado sem erros |
| Whitespace | `git diff --check` | ✅ limpo |

## Auditoria do pacote (npm pack --dry-run)

- `resolve-ai-0.1.0-alpha.0.tgz`: **37 arquivos**, **38.5 kB** (147.1 kB descompactado), shasum `38f3306ef39617f8ed013b811423315e26a0a9f9`.
- Conteúdo: `dist/` (índice, cli, 10 comandos, 21 módulos core, types), `README.md` do pacote, `package.json`.
- Verificado ausente: `.resolve-ai/`, `docs/resolve-ai/`, `.env`, feedbacks privados, `src/`, `tests/`, `scripts/`, backups, segredos.
- Decisão da auditoria: **APROVADO** (detalhes em `docs/release/v0.1.0-alpha-rc/npm-package-audit.md`).

## Verificação das restrições da fase

| Restrição | Status |
|---|---|
| `npm publish` não executado | ✅ respeitada |
| Tag Git não criada | ✅ respeitada (`git tag` não executado) |
| GitHub Release não criado | ✅ respeitada |
| Stable/produção não declarados | ✅ respeitada (docs usam alpha / release candidate) |
| Lacuna de validação humana visível | ✅ registrada em release notes, limitations, scorecard e go/no-go |
| Sem telemetria / sem GitHub Actions de publicação | ✅ nenhum workflow ou coleta adicionados |
| Comportamento da CLI inalterado | ✅ `packages/resolve-ai-cli/src` e `tests` intocados nesta fase |
| Artefatos locais não commitados | ✅ `.resolve-ai/` e `docs/resolve-ai/` fora do commit |

## Artefatos criados

- 13 documentos em `docs/release/v0.1.0-alpha-rc/`;
- scorecard e go/no-go da Phase 18 em `docs/release/`;
- ADRs 0256–0265;
- handoff, validation report e retrospective da Phase 18 em `docs/sprints/`.

## Resultado

**90/100 — RELEASE CANDIDATE READY, aguardando aprovação do mantenedor.**

Blockers para publicação: gate do mantenedor desmarcado; validação humana real (Non-Technical Builder e Professional Engineer dedicado) pendente.
