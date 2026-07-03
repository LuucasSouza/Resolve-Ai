---
title: "AI-SEOS Mental Model"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Core Maintainers"
last_updated: "2026-07-03"
document_type: "Mental Model"
source: "bootstrap-source/pt11_CORE_IDENTITY.md"
---

# Mental Model

## Objetivo

Explicar como o AI-SEOS deve ser pensado por mantenedores, contribuidores e agentes.

## Modelo

AI-SEOS opera como um sistema em camadas:

```mermaid
flowchart TD
    Philosophy[Operating Philosophy] --> Core[Core Operating System]
    Core --> Engines[Engines]
    Engines --> Protocols[Protocols]
    Protocols --> Templates[Templates and Playbooks]
    Templates --> Agents[Specialized Agents]
    Agents --> Outputs[Project Outputs]
```

## Princípios

- Engines produzem capacidade operacional.
- Protocolos definem fluxo executável.
- Templates padronizam artefatos.
- Playbooks orientam cenários recorrentes.
- Agentes executam papéis com limites e contratos.

## Responsabilidades

Cada camada deve ser compreensível isoladamente e composable com as demais.

## Próximos passos

- Expandir exemplos de composição entre Discovery, Product e Architecture na Sprint 2.
