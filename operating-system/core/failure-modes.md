---
title: "AI-SEOS Failure Modes"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Core Maintainers"
last_updated: "2026-07-03"
document_type: "Failure Modes"
source: "bootstrap-source/pt13_OPERATING_SYSTEM_KERNEL.md"
---

# Failure Modes

## Objetivo

Documentar falhas operacionais que o kernel deve detectar.

## Modos de Falha

- Missing Context: registrar assumption, open question ou bloquear decisão irreversível.
- Output Without Artifact: exigir artefato durável.
- Decision Without ADR: criar ADR.
- Scope Creep: retornar para discovery ou product framing.
- Architecture Drift: acionar architecture review.
- Stale Handoff: atualizar context package antes de downstream work.

## Responsabilidades

Agentes devem sinalizar estes modos de falha em relatórios e handoffs.

## Próximos passos

- Criar playbooks de correção para falhas recorrentes.
