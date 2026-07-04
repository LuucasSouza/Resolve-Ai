---
project: Resolve Aí
phase: Phase 7 — Guided Execution Prep
status: Draft
language: pt-BR
public_name: Resolve Aí
legacy_name: AI-SEOS
---

# pt158 — ADRs da Phase 7

A Phase 7 deve criar ADRs 0126 a 0135.

## ADR 0126 — Adopt Guided Execution Prep

Adicionar `resolve-ai preparar` para preparar execução sem alterar código.

## ADR 0127 — Use `preparar` as Public Command

Usar `preparar` como comando principal. `resolver` fica para fase futura.

## ADR 0128 — Generate Execution Package Docs 15 to 19

Gerar documentos 15 a 19 em `docs/resolve-ai/`.

## ADR 0129 — Keep Execution Read-Only in Phase 7

Não alterar código de produto.

## ADR 0130 — Prioritize Critical Risks Before Features

Se houver risco crítico, preparar mitigação antes de feature.

## ADR 0131 — Require Human Approval Before Implementation

Todo pacote de execução exige aprovação humana.

## ADR 0132 — Update Runtime State with Prepared Task

Registrar `ultimoPreparo` no `state.json`.

## ADR 0133 — Extend Status with Prepared Task Summary

`resolve-ai status` deve mostrar tarefa preparada.

## ADR 0134 — Preserve Documents by Default

Não sobrescrever documentos existentes por padrão.

## ADR 0135 — Defer `resolver` Command to Future Phase

Não implementar execução real ainda.

## Atualizações obrigatórias

- `adr/README.md`
- `docs/architecture/decision-log.md`
- `CHANGELOG.md`
- `ROADMAP.md`
