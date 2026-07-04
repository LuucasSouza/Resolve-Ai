# pt150 — Phase 6 Handoff

> Fase: Phase 6 — Resolve Aí Guided Planning and Implementation Prep  
> Objetivo: orientar implementação do comando `resolve-ai planejar`.

---

## 1. Diretórios esperados

Criar/atualizar no repositório do Resolve Aí:

```text
packages/resolve-ai-cli/src/commands/
packages/resolve-ai-cli/src/core/
packages/resolve-ai-cli/tests/
packages/resolve-ai-cli/dist/
docs/sprints/
adr/
bootstrap-source/
```

---

## 2. Arquivos esperados na CLI

Nomes sugeridos:

```text
packages/resolve-ai-cli/src/commands/planejar.ts
packages/resolve-ai-cli/src/core/planning-engine.ts
packages/resolve-ai-cli/src/core/planning-docs.ts
packages/resolve-ai-cli/src/core/backlog-generator.ts
packages/resolve-ai-cli/src/core/sprint-planner.ts
packages/resolve-ai-cli/src/core/execution-prompt-generator.ts
packages/resolve-ai-cli/tests/planejar.test.ts
```

Se a arquitetura atual do pacote usar nomes diferentes, manter consistência com o código existente.

---

## 3. Documentos gerados em projetos-alvo

O comando `resolve-ai planejar` deve gerar:

```text
docs/resolve-ai/10-plano-de-continuacao.md
docs/resolve-ai/11-backlog-priorizado.md
docs/resolve-ai/12-proximas-sprints.md
docs/resolve-ai/13-prompts-de-execucao.md
docs/resolve-ai/14-checklist-de-validacao.md
```

---

## 4. ADRs esperadas

Criar:

```text
adr/0116-adopt-planejar-as-guided-planning-command.md
adr/0117-keep-planning-read-only-for-product-code.md
adr/0118-adopt-planning-output-documents.md
adr/0119-adopt-prioritized-backlog-format.md
adr/0120-adopt-sprint-abc-planning-model.md
adr/0121-adopt-execution-prompt-generation.md
adr/0122-adopt-safety-gates-for-implementation-prep.md
adr/0123-adopt-status-integration-for-planning-state.md
adr/0124-defer-force-update-planning-overwrite-options.md
adr/0125-prepare-phase-7-implementation-guidance.md
```

---

## 5. Documentos de sprint esperados

```text
docs/sprints/phase-6-handoff.md
docs/sprints/phase-6-validation-report.md
docs/sprints/phase-6-retrospective.md
```

---

## 6. Atualizações esperadas

Atualizar:

```text
README.md
ROADMAP.md
CHANGELOG.md
adr/README.md
docs/README.md
docs/architecture/decision-log.md
docs/sprints/README.md
packages/resolve-ai-cli/README.md
frameworks/README.md
protocols/README.md
templates/README.md
```

---

## 7. Quality Gates

A Phase 6 passa somente se:

- `resolve-ai planejar` funciona;
- aliases funcionam;
- docs `10` a `14` são gerados;
- arquivos existentes não são sobrescritos;
- `status` mostra último plano;
- testes passam;
- ADRs 0116 a 0125 existem;
- não há MCP/hooks/telemetria;
- não altera código de projeto-alvo;
- working tree fica limpa após commit.

---

## 8. Próxima fase recomendada

Depois da Phase 6, iniciar:

```text
Phase 7 — Resolve Aí Guided Execution Prep
```

Objetivo provável:

- criar comando `resolve-ai executar` ou `resolve-ai resolver`;
- ainda sem execução automática destrutiva;
- escolher uma tarefa do backlog;
- gerar um pacote de execução aprovado;
- talvez integrar com prompts por agente.

A decisão sobre nome do comando deve ser tomada na Phase 7.
