---
title: "npm Package Audit (dry-run)"
status: "Release Candidate"
version: "0.1.0-alpha.0"
phase: "Phase 18"
owner: "Resolve Aí Maintainers"
last_updated: "2026-07-07"
---

# npm Package Audit — v0.1.0-alpha.0

Auditoria do tarball gerado por `npm pack --dry-run`, executado em 2026-07-07 dentro de `packages/resolve-ai-cli/`.

## Resultado do dry-run

| Item | Valor |
|---|---|
| name | `resolve-ai` |
| version | `0.1.0-alpha.0` |
| filename | `resolve-ai-0.1.0-alpha.0.tgz` |
| package size | 38.5 kB |
| unpacked size | 147.1 kB |
| total files | 37 |
| shasum | `38f3306ef39617f8ed013b811423315e26a0a9f9` |

## Conteúdo do tarball

- `package.json` (835 B);
- `README.md` do pacote (8.7 kB) — status alpha, sem promessa de stable;
- `dist/` completo: `index.js`, `cli.js`, 10 comandos em `dist/commands/`, 21 módulos em `dist/core/`, `dist/types/runtime.js`.

O campo `files` do `package.json` restringe o tarball a `dist` e `README.md` (ADR-0190).

## Verificação de arquivos proibidos

| Verificação | Resultado |
|---|---|
| `.resolve-ai/` não incluído | ✅ confirmado |
| `docs/resolve-ai/` não incluído | ✅ confirmado |
| `.env` não incluído | ✅ confirmado |
| Feedbacks privados não incluídos | ✅ confirmado |
| Backups / dados reais não incluídos | ✅ confirmado |
| Tokens ou segredos não incluídos | ✅ confirmado |
| `src/`, `tests/`, `scripts/` não incluídos | ✅ confirmado (fora do campo `files`) |

## Arquivos inesperados

Nenhum arquivo inesperado encontrado.

## Checklist package.json (pt273)

- [x] `name` correto (`resolve-ai`);
- [x] `version` alpha (`0.1.0-alpha.0`);
- [x] `bin` apontando para `dist/index.js`;
- [x] `files` mínimo e intencional (`dist`, `README.md`);
- [x] `license` presente (MIT);
- [x] `repository` correto (`https://github.com/LuucasSouza/Resolve-Ai.git`, directory `packages/resolve-ai-cli`);
- [x] `description` clara;
- [x] scripts `build`, `test`, `smoke` presentes;
- [x] ausência de dependências desnecessárias (zero dependências de runtime);
- [x] `engines` declara Node >= 20.

## Decisão da auditoria

**APROVADO** para publicação futura, condicionado ao gate do mantenedor (`maintainer-approval-gate.md`). Nenhum bloqueio técnico de pacote encontrado.

Antes de qualquer `npm publish` real, repetir o dry-run e comparar com esta auditoria.
