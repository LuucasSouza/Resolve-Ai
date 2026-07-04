---
title: "Modo Liga/Desliga Protocol"
status: "Draft"
version: "0.1.0-alpha"
phase: "Phase 3 â€” Resolve AÃ­ Runtime Productization"
---

# Modo Liga/Desliga Protocol

## Objetivo

Definir o protocolo operacional para ligar, desligar e consultar o estado da runtime futura.

## Entradas

- Comando solicitado.
- `.resolve-ai/config.yml`, se existir.
- `.resolve-ai/state.json`, se existir.

## Regras

- `ligar` restaura contexto mÃ­nimo.
- `desligar` preserva estado essencial.
- `status` funciona mesmo desligado.
- Estado invÃ¡lido deve virar `erro`, nÃ£o execuÃ§Ã£o silenciosa.
- Desligado significa sem contexto pesado e sem hooks automÃ¡ticos.

## SaÃ­das

- Estado atualizado.
- Mensagem pÃºblica em portuguÃªs.
- PrÃ³xima aÃ§Ã£o sugerida.

## PrÃ³ximos Passos

Implementar como comando local na Phase 4.
