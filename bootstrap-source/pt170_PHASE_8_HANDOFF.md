---
title: "Handoff da Phase 8"
phase: "Phase 8 — Resolve Aí Guided Assisted Execution"
status: "Draft"
version: "0.8.0"
public_name: "Resolve Aí"
historical_name: "AI-SEOS"
language: "pt-BR"
---

# Phase 8 — Handoff

## 1. Nome da fase

Phase 8 — Resolve Aí Guided Assisted Execution

## 2. Objetivo

Implementar o comando `resolve-ai resolver` como execução assistida não automática.

## 3. Diretórios esperados

```text
packages/resolve-ai-cli/src/commands/
packages/resolve-ai-cli/src/core/
packages/resolve-ai-cli/tests/
docs/sprints/
adr/
bootstrap-source/
```

## 4. Arquivos de código esperados

Sugestão de arquivos:

```text
packages/resolve-ai-cli/src/commands/resolver.ts
packages/resolve-ai-cli/src/core/assisted-execution-engine.ts
packages/resolve-ai-cli/src/core/assisted-execution-docs.ts
packages/resolve-ai-cli/tests/resolver.test.ts
```

Equivalentes em `dist/` se o projeto continuar versionando build compilado.

## 5. Documentos gerados no projeto analisado

O comando deve criar:

```text
docs/resolve-ai/20-execucao-assistida.md
docs/resolve-ai/21-aprovacao-humana.md
docs/resolve-ai/22-prompt-final-para-agente.md
docs/resolve-ai/23-checklist-pos-execucao.md
docs/resolve-ai/24-registro-de-execucao.md
```

## 6. ADRs esperadas

```text
ADR 0136 a ADR 0145
```

## 7. Relatórios da fase

Criar:

```text
docs/sprints/phase-8-handoff.md
docs/sprints/phase-8-validation-report.md
docs/sprints/phase-8-retrospective.md
```

## 8. Quality Gates

A Phase 8 só passa se:

- `resolver` funciona;
- aliases funcionam;
- docs 20 a 24 são criados;
- não há alteração de código de produto;
- `canAutoExecute=false`;
- `status` mostra execução assistida;
- Modo Liga/Desliga é respeitado;
- testes passam;
- ADRs existem;
- documentação é atualizada.

## 9. Definition of Done

- [ ] pt161 a pt170 lidos;
- [ ] pt161 a pt170 preservados em `bootstrap-source/`;
- [ ] comando `resolver` implementado;
- [ ] aliases implementados;
- [ ] documentos 20 a 24 gerados;
- [ ] state atualizado;
- [ ] status atualizado;
- [ ] testes automatizados adicionados;
- [ ] todos os testes passam;
- [ ] README atualizado;
- [ ] CHANGELOG atualizado;
- [ ] ROADMAP atualizado;
- [ ] ADRs 0136 a 0145 criadas;
- [ ] relatórios da fase criados;
- [ ] commit feito;
- [ ] push feito, se remote configurado.

## 10. Próxima fase recomendada

Após Phase 8, iniciar:

```text
Phase 9 — Resolve Aí Guided Review and Validation
```

Comando provável:

```bash
resolve-ai validar
```

Objetivo da Phase 9:

- validar resultado após execução manual/assistida;
- comparar tarefa preparada com alterações feitas;
- gerar relatório pós-execução;
- atualizar `24-registro-de-execucao.md` ou criar docs 25 a 29;
- manter o humano no controle;
- não fazer rollback automático ainda.
