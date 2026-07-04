# ADR 0142 — Respect Modo Liga/Desliga During Execution Prep

## Status

Accepted

## Contexto

O Modo Liga/Desliga controla quando o Resolve Aí deve orientar fluxos ativos no projeto.

## Problema

Gerar pacote de execução assistida enquanto o modo está desligado contrariaria a expectativa de pausa.

## Opções consideradas

- Ignorar o modo.
- Gerar pacote com aviso.
- Bloquear geração e recomendar `resolve-ai ligar`.

## Decisão

Quando desligado, `resolver` não gera o pacote e recomenda `resolve-ai ligar`.

## Consequências positivas

- Respeita o controle do usuário.
- Evita geração acidental de pacote de execução.
- Mantém economia de contexto e intenção explícita.

## Consequências negativas

- Usuário precisa ligar o Resolve Aí antes de resolver.

## Critérios de reversão

Revisar se houver flags explícitas para execução offline documental.

## Relação com outras ADRs

Relaciona-se às ADRs 0089 e 0099.
