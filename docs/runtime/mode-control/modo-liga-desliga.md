---
title: "Modo Liga/Desliga"
status: "Draft"
version: "0.1.0-alpha"
phase: "Phase 3 â€” Resolve AÃ­ Runtime Productization"
owner: "Resolve AÃ­ Maintainers"
last_updated: "2026-07-04"
---

# Modo Liga/Desliga

## Objetivo

Definir o controle pÃºblico de ativaÃ§Ã£o do Resolve AÃ­ dentro de um projeto.

```text
Ligou: o Resolve AÃ­ ajuda.
Desligou: ele para de injetar contexto e economiza tokens.
```

## Escopo

O Modo Liga/Desliga controla orientaÃ§Ã£o, contexto, hooks futuros, atualizaÃ§Ã£o automÃ¡tica de documentaÃ§Ã£o e consumo de tokens. Ele nÃ£o apaga documentos nem estado essencial.

## Estados

- `nÃ£o configurado`: o projeto ainda nÃ£o tem `.resolve-ai/`.
- `desligado`: existe configuraÃ§Ã£o local, mas a runtime nÃ£o injeta contexto.
- `ligado`: a runtime orienta o fluxo ativo.
- `pausado`: estado futuro para sessÃ£o temporariamente suspensa.
- `erro`: configuraÃ§Ã£o invÃ¡lida ou estado inconsistente.

## Comportamento Ligado

- Carrega contexto mÃ­nimo.
- Sugere prÃ³ximo passo.
- Consulta handoff e plano.
- Registra decisÃµes e riscos.
- Atualiza documentos quando solicitado.

Mensagem pÃºblica:

```text
Resolve AÃ­ ligado.
Vou acompanhar este projeto, organizar contexto e te ajudar a resolver sem bagunÃ§a.
```

## Comportamento Desligado

- NÃ£o injeta contexto pesado.
- NÃ£o roda hooks pesados.
- NÃ£o atualiza documentaÃ§Ã£o automaticamente.
- MantÃ©m estado mÃ­nimo para retomada.

Mensagem pÃºblica:

```text
Resolve AÃ­ desligado.
Vou parar de injetar contexto e economizar tokens. Quando quiser, Ã© sÃ³ ligar de novo.
```

## Responsabilidades

O modo deve tornar o estado claro para usuÃ¡rios nÃ£o tÃ©cnicos e engenheiros, sempre com linguagem simples.

## PrÃ³ximos Passos

Implementar persistÃªncia de estado em `.resolve-ai/state.json` na Phase 4.
