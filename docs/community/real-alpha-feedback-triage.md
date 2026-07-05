---
title: "Real Alpha Feedback Triage"
status: "Draft"
version: "0.1.0-alpha.0"
phase: "Phase 14"
owner: "Resolve Ai Maintainers"
last_updated: "2026-07-05"
---

# Real Alpha Feedback Triage

## Severidades

| Severidade | Criterio | Acao |
|---|---|---|
| P0 | Dano, vazamento, sobrescrita inesperada, fluxo basico quebrado | NO-GO imediato |
| P1 seguranca | Confusao que pode levar a uso inseguro | NO-GO |
| P1 release | Bloqueia public npm, mas permite private alpha | Corrigir antes de GO publico |
| P2 | Melhoria importante sem bloquear alpha controlada | Planejar Phase 15A |
| P3 | Polimento | Backlog |

## Regras especificas

- Confusao relevante sobre `resolver` parecer execucao automatica bloqueia npm publico.
- Feedback com dados sensiveis deve ser redigido antes de registro publico.
- Scores baixos em dois ou mais perfis devem rebaixar decisao para NO-GO ou manter LIMITED GO.

## Campos obrigatorios

- Participant ID anonimizado.
- Perfil.
- Cenario.
- Evidencia observada.
- Severidade.
- Decisao de triagem.
- Proxima acao.
