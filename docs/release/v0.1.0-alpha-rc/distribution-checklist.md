---
title: "Distribution Checklist"
status: "Release Candidate"
version: "0.1.0-alpha.0"
phase: "Phase 18"
owner: "Resolve Aí Maintainers"
last_updated: "2026-07-07"
---

# Distribution Checklist — v0.1.0-alpha.0

Como o Resolve Aí é distribuído hoje e como será distribuído se a publicação alpha for aprovada. Não afirmar publicação enquanto ela não aconteceu.

## Estado atual (2026-07-07)

**O pacote NÃO está publicado no npm.** A única distribuição suportada é local, via repositório GitHub.

## Distribuição atual (fallback local)

- [x] Clone + build documentados no `README.md` e em `docs/getting-started/install-local-cli.md`;
- [x] `npm link` documentado com caminho confiável para Windows;
- [x] Fallback sem link global documentado:

```bash
node caminho/para/Resolve-Ai/packages/resolve-ai-cli/dist/index.js ajuda
```

- [x] Kit `teste/` disponível para participantes de alpha manual;
- [x] Aliases sem acento documentados para Windows.

## Distribuição futura (somente após o gate do mantenedor)

- [ ] `npm publish --tag alpha` executado manualmente (ver `npm-publication-checklist.md`);
- [ ] Instalação documentada como:

```bash
npm install -g resolve-ai@alpha
resolve-ai ajuda
```

- [ ] Tag `v0.1.0-alpha.0` criada (ver `git-tag-checklist.md`);
- [ ] GitHub Release publicado como pre-release (ver `github-release-draft.md`);
- [ ] README atualizado para refletir a publicação real (sem prometer stable);
- [ ] Release notes divulgadas com known limitations visíveis.

## Canais proibidos nesta fase

- Publicação automática via CI/CD (não existe GitHub Action de publicação e não deve existir nesta fase);
- Divulgação como stable/production ready em qualquer canal;
- Qualquer distribuição que inclua telemetria.
