---
title: "Git Tag Checklist"
status: "Release Candidate"
version: "0.1.0-alpha.0"
phase: "Phase 18"
owner: "Resolve Aí Maintainers"
last_updated: "2026-07-07"
---

# Git Tag Checklist — v0.1.0-alpha.0

Nenhuma tag foi criada na Phase 18. `git tag`, `git push --tags` e `gh release create` são proibidos sem aprovação explícita do mantenedor.

Tag sugerida futura: `v0.1.0-alpha.0` (deve sempre corresponder à `version` do `packages/resolve-ai-cli/package.json`).

## Checklist antes de criar a tag

- [ ] worktree limpo (`git status` sem mudanças pendentes);
- [ ] build passou;
- [ ] testes passaram;
- [ ] smoke passou;
- [ ] npm dry-run passou e confere com `npm-package-audit.md`;
- [ ] changelog atualizado;
- [ ] release notes criadas e revisadas;
- [ ] versão da tag confere com `package.json`;
- [ ] mantenedor aprovou tag em `maintainer-approval-gate.md`.

## Comandos futuros (somente após o gate)

```bash
git tag -a v0.1.0-alpha.0 -m "Resolve Aí v0.1.0-alpha.0 — Public Alpha Candidate"
git push origin v0.1.0-alpha.0
```

## Se a tag sair errada

Ver `rollback-plan.md`, cenário "versão/tag errada".
