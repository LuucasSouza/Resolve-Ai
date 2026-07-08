---
title: "npm Publication Decision"
status: "Release Candidate"
version: "0.1.0-alpha.0"
phase: "Phase 18"
owner: "Resolve Aí Maintainers"
last_updated: "2026-07-07"
---

# npm Publication Decision — v0.1.0-alpha.0

```text
Decisão atual: NÃO PUBLICADO
Estado: pronto para aprovação
Motivo: todos os gates técnicos passaram (build, 87/87 testes, smoke, dry-run
        auditado, git diff --check), mas a publicação exige aprovação explícita
        do mantenedor e a validação humana real (Non-Technical Builder e
        Professional Engineer dedicado) permanece pendente.
Aprovação do mantenedor: PENDENTE — ver maintainer-approval-gate.md
```

## O que "pronto para aprovação" significa

- O pacote `resolve-ai@0.1.0-alpha.0` está tecnicamente auditado e limpo (`npm-package-audit.md`).
- A publicação futura, se aprovada, deve usar `npm publish --tag alpha`.
- Nada acontece automaticamente. `npm publish` não foi executado na Phase 18.

## O que ainda bloqueia a publicação

1. Checkboxes de `maintainer-approval-gate.md` desmarcados.
2. Ausência de validação humana real ampla (registrada, não escondida).

## Registro

| Data | Evento |
|---|---|
| 2026-07-07 | Phase 18 concluída. Dry-run auditado e aprovado. Publicação NÃO executada. Estado: aguardando aprovação do mantenedor. |
