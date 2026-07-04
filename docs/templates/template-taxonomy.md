---
title: "Template Taxonomy"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Template Maintainers"
last_updated: "2026-07-04"
document_type: "Template Governance"
---
# Template Taxonomy
## Objetivo
Definir como templates sao classificados no AI-SEOS.
## Escopo
A taxonomia cobre perfil, etapa de lifecycle, engine, agente responsavel, profundidade e status de manutencao.
## Principios
- Perfil define linguagem e profundidade.
- Lifecycle define o momento de uso.
- Engine define responsabilidade operacional.
- Agent template define transferencia de contexto.
## Categorias
| Categoria | Valores oficiais |
|---|---|
| Profile | non-technical-builder, vibe-coder, professional-engineer, universal |
| Lifecycle | intake, discovery, product, architecture, decision, risk, optimization, execution, documentation, handoff, reflection |
| Depth | T0 Quick Capture, T1 Standard Project, T2 Production-Ready, T3 Enterprise / High-Risk |
| Status | draft, active, recommended, deprecated, superseded, archived |
| Owner | engine, agent or template maintainers |
## Responsabilidades
Template Maintainers garantem que novos templates usem kebab-case, front matter canonico e entradas no registry.
## Proximos passos
Aplicar esta taxonomia a todos os novos templates da Sprint 7 antes de marca-los como active.
