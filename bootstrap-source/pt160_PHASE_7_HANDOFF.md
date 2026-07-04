---
project: Resolve Aí
phase: Phase 7 — Guided Execution Prep
status: Draft
language: pt-BR
public_name: Resolve Aí
legacy_name: AI-SEOS
---

# pt160 — Phase 7 Handoff

## Fase

Phase 7 — Resolve Aí Guided Execution Prep

## Objetivo

Implementar `resolve-ai preparar` para criar pacote de execução seguro a partir do diagnóstico e planejamento.

## Arquivos esperados

### CLI

```text
packages/resolve-ai-cli/src/commands/preparar.ts
packages/resolve-ai-cli/src/core/task-selection-engine.ts
packages/resolve-ai-cli/src/core/execution-package-docs.ts
packages/resolve-ai-cli/tests/preparar.test.ts
```

Equivalentes em `dist/`.

### Docs gerados em projetos-alvo

```text
docs/resolve-ai/15-tarefa-preparada.md
docs/resolve-ai/16-prompt-de-implementacao.md
docs/resolve-ai/17-plano-de-validacao-da-tarefa.md
docs/resolve-ai/18-riscos-da-execucao.md
docs/resolve-ai/19-handoff-de-execucao.md
```

### Sprint docs

```text
docs/sprints/phase-7-handoff.md
docs/sprints/phase-7-validation-report.md
docs/sprints/phase-7-retrospective.md
```

### ADRs

```text
adr/0126-adopt-guided-execution-prep.md
adr/0127-use-preparar-as-public-command.md
adr/0128-generate-execution-package-docs-15-to-19.md
adr/0129-keep-execution-read-only-in-phase-7.md
adr/0130-prioritize-critical-risks-before-features.md
adr/0131-require-human-approval-before-implementation.md
adr/0132-update-runtime-state-with-prepared-task.md
adr/0133-extend-status-with-prepared-task-summary.md
adr/0134-preserve-documents-by-default.md
adr/0135-defer-resolver-command-to-future-phase.md
```

## Atualizações esperadas

- README.md
- ROADMAP.md
- CHANGELOG.md
- adr/README.md
- docs/README.md
- docs/architecture/decision-log.md
- docs/sprints/README.md
- packages/resolve-ai-cli/README.md

## Quality Gates

- `preparar` implementado.
- Aliases `tarefa` e `executar` implementados.
- Documentos 15 a 19 gerados.
- Estado local atualizado.
- Status mostra tarefa preparada.
- Riscos críticos priorizados.
- `canAutoExecute` sempre false.
- Nenhum código de produto alterado.
- Testes passam.
- ADRs 0126 a 0135 existem.
- pt151 a pt160 preservados.

## Fora do escopo

- `resolve-ai resolver`
- execução automática;
- MCP;
- hooks;
- publicação npm;
- telemetria;
- integração Git.

## Próxima fase recomendada

Phase 8 — Resolve Aí Guided Review and Validation

Comando provável:

```bash
resolve-ai validar
```

Objetivo:
Validar uma tarefa executada, comparar com pacote de execução, atualizar status, gerar relatório e preparar handoff.
