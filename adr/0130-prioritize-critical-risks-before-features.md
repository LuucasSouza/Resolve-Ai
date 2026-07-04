# ADR 0130 — Prioritize Critical Risks Before Features

## Status

Accepted

## Contexto

Projetos podem conter secrets, backups ou riscos críticos.

## Decisão

Se houver risco crítico, preparar mitigação antes de feature.

## Consequências

Evita ampliar dano antes de hardening.

## Alternativas consideradas

- Preparar primeira feature do backlog.
- Ignorar risco no preparo.

## Impacto no usuário

Segurança passa a orientar execução.

## Riscos

Pode atrasar features desejadas.

## Relação com roadmap

Reforça safety gates do runtime.
