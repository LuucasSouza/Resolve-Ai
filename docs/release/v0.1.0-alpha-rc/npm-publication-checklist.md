---
title: "npm Publication Checklist"
status: "Release Candidate"
version: "0.1.0-alpha.0"
phase: "Phase 18"
owner: "Resolve Aí Maintainers"
last_updated: "2026-07-07"
---

# npm Publication Checklist — v0.1.0-alpha.0

Checklist para a publicação npm **futura**. A Phase 18 não publica no npm. `npm publish` não foi e não deve ser executado sem aprovação explícita do mantenedor.

## Pré-condições técnicas (estado em 2026-07-07)

- [x] build passou;
- [x] testes passaram (87/87);
- [x] smoke passou;
- [x] npm dry-run revisado (`npm-package-audit.md`);
- [x] pacote não contém dados sensíveis;
- [x] pacote não contém artefatos locais (`.resolve-ai/`, `docs/resolve-ai/`, `.env`, feedbacks);
- [x] README não promete stable;
- [x] versão é alpha (`0.1.0-alpha.0`);

## Pré-condições de decisão (pendentes)

- [ ] publicação será com `npm publish --tag alpha` (nunca `latest` sem decisão explícita);
- [ ] mantenedor aprovou explicitamente em `maintainer-approval-gate.md`.

## Comando autorizado (somente após o gate)

```bash
cd packages/resolve-ai-cli
npm publish --tag alpha
```

## Regras

1. Nunca publicar como `latest` sem decisão explícita registrada em ADR.
2. Nunca publicar com o gate do mantenedor desmarcado.
3. Rodar `npm pack --dry-run` novamente imediatamente antes de qualquer publicação real e comparar com `npm-package-audit.md`.
4. Se qualquer arquivo inesperado aparecer no tarball, bloquear publicação e abrir correção.
