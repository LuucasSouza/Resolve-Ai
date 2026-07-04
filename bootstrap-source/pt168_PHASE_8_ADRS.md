---
title: "ADRs da Phase 8"
phase: "Phase 8 — Resolve Aí Guided Assisted Execution"
status: "Draft"
version: "0.8.0"
public_name: "Resolve Aí"
historical_name: "AI-SEOS"
language: "pt-BR"
---

# ADRs da Phase 8

## 1. Objetivo

A Phase 8 deve criar ADRs 0136 a 0145.

## 2. ADRs obrigatórias

### ADR 0136 — Adopt `resolver` as assisted execution command

Decide adotar `resolve-ai resolver` como comando público de execução assistida.

### ADR 0137 — Keep execution non-automatic by default

Decide manter `canAutoExecute=false` e não alterar código automaticamente nesta fase.

### ADR 0138 — Adopt human approval document before execution

Decide gerar `21-aprovacao-humana.md` como gate obrigatório de controle.

### ADR 0139 — Adopt final agent prompt as execution handoff

Decide que a execução real será feita por agente externo via prompt controlado.

### ADR 0140 — Adopt assisted execution document set 20-24

Decide padronizar documentos 20 a 24 para execução assistida.

### ADR 0141 — Prioritize safety gates over speed

Decide que bloqueios e alertas de risco têm precedência sobre velocidade.

### ADR 0142 — Respect Modo Liga/Desliga during execution prep

Decide que `resolver` deve respeitar o estado ligado/desligado.

### ADR 0143 — Defer automatic code execution

Decide adiar execução automática de código para fase futura, se houver.

### ADR 0144 — Adopt post-execution checklist

Decide criar checklist pós-execução como requisito para validação posterior.

### ADR 0145 — Prepare Phase 9 validation command

Decide que a próxima fase deve implementar validação/revisão pós-execução, provavelmente `resolve-ai validar`.

## 3. Estrutura mínima de cada ADR

Cada ADR deve conter:

- Status;
- Contexto;
- Problema;
- Opções consideradas;
- Decisão;
- Consequências positivas;
- Consequências negativas;
- Critérios de reversão;
- Relação com outras ADRs.

## 4. Atualizações obrigatórias

Atualizar:

- `adr/README.md`;
- `docs/architecture/decision-log.md`;
- `CHANGELOG.md`.
