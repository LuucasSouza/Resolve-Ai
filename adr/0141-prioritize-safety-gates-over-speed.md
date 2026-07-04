# ADR 0141 — Prioritize Safety Gates Over Speed

## Status

Accepted

## Contexto

Execução assistida pode envolver riscos técnicos e de segurança.

## Problema

Um fluxo rápido demais pode induzir alterações sem validação.

## Opções consideradas

- Priorizar velocidade.
- Priorizar gates de segurança.
- Permitir bypass por flag.

## Decisão

Priorizar gates de segurança sobre velocidade e não criar bypass nesta fase.

## Consequências positivas

- Reduz chance de alteração perigosa.
- Mantém public alpha conservador.
- Reforça confiança no workflow.

## Consequências negativas

- Pode parecer mais lento para usuários avançados.

## Critérios de reversão

Revisar quando houver políticas de permissão e diff preview.

## Relação com outras ADRs

Relaciona-se às ADRs 0130, 0138 e 0142.
