---
title: "Maintainer Approval Gate"
status: "Release Candidate — PENDING APPROVAL"
version: "0.1.0-alpha.0"
phase: "Phase 18"
owner: "Resolve Aí Maintainers"
last_updated: "2026-07-07"
---

# Maintainer Approval Gate — v0.1.0-alpha.0

Este é o gate final antes de qualquer ação de publicação. **Todos os checkboxes abaixo estão desmarcados de propósito.** Somente o mantenedor (Lucas Souza) pode marcá-los, manualmente, após ler os artefatos deste diretório.

Enquanto qualquer checkbox estiver desmarcado, são proibidos: `npm publish`, `git tag`, `git push --tags`, `gh release create`.

## Entendimento do mantenedor

- [ ] Aprovo publicar esta versão como alpha público.
- [ ] Entendo que ainda falta validação humana ampla.
- [ ] Entendo que esta versão não é stable.

## Autorizações específicas

- [ ] Aprovo criar a tag `v0.1.0-alpha.0`.
- [ ] Aprovo criar o GitHub Release (como pre-release), usando `github-release-draft.md`.
- [ ] Aprovo publicar no npm com `npm publish --tag alpha`.

## Pré-leitura obrigatória antes de marcar

1. `npm-package-audit.md` — o que vai dentro do pacote;
2. `known-limitations.md` — o que estamos admitindo publicamente;
3. `rollback-plan.md` — o que faremos se algo der errado;
4. `../v0.1.0-alpha-phase-18-go-no-go-decision.md` — por que o resultado é RELEASE CANDIDATE READY e não GO.

## Registro de aprovação

| Data | Quem | Decisão | Observações |
|---|---|---|---|
| — | — | PENDENTE | Gate criado na Phase 18; nenhuma aprovação registrada. |

## Depois da aprovação

Se todos os checkboxes forem marcados, a execução da publicação acontece em uma fase própria (Phase 19 — Public Alpha Publication Execution), seguindo `npm-publication-checklist.md`, `git-tag-checklist.md` e `distribution-checklist.md`, nessa ordem.
