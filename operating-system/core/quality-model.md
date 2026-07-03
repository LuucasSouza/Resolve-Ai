---
title: "AI-SEOS Quality Model"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Core Maintainers"
last_updated: "2026-07-03"
document_type: "Quality Model"
source: "bootstrap-source/pt11_CORE_IDENTITY.md"
---

# Quality Model

## Objetivo

Definir a barra de qualidade comum para saídas do AI-SEOS.

## Critérios

Uma saída AI-SEOS deve ser:

- completa o suficiente para execução;
- explícita sobre incertezas;
- estruturada para revisão;
- específica para implementação;
- modular para reutilização;
- documentada para manutenção;
- crítica o suficiente para evitar overproduction de IA;
- pragmática o suficiente para evitar paralisia por análise.

## Quality Gates

- Propósito explícito.
- Escopo e não escopo.
- Entradas e saídas.
- Assumptions, constraints e riscos visíveis.
- Trade-offs documentados.
- Handoff acionável.

## Checklist

- [ ] O documento reduz ambiguidade?
- [ ] O próximo agente consegue agir?
- [ ] Há decisões sem ADR?
- [ ] Há suposições escondidas?
- [ ] Há riscos sem mitigação ou dono?

## Próximos passos

- Evoluir métricas de avaliação automática em sprints futuras.
