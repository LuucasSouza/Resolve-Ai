---
title: "Runtime Security, Privacy and Token Saving"
status: "Draft"
version: "0.1.0-alpha"
phase: "Phase 3 â€” Resolve AÃ­ Runtime Productization"
owner: "Resolve AÃ­ Maintainers"
last_updated: "2026-07-04"
---

# Runtime Security, Privacy and Token Saving

## Objetivo

Definir requisitos de seguranÃ§a, privacidade e economia de tokens para a runtime futura.

## SeguranÃ§a por PadrÃ£o

NÃ£o ler, registrar, indexar ou reproduzir conteÃºdo sensÃ­vel sem necessidade explÃ­cita.

Arquivos e dados sensÃ­veis:

- `.env`
- `.env.local`
- `*.pem`
- `*.key`
- `service-account.json`
- `backups/`
- `dumps/`
- `exports/`
- dados pessoais reais
- tokens e credenciais

## PolÃ­tica de NÃ£o ExposiÃ§Ã£o

Ao encontrar dado sensÃ­vel, o Resolve AÃ­ deve registrar apenas tipo de risco, caminho, mitigaÃ§Ã£o sugerida e necessidade de rotaÃ§Ã£o ou expurgo quando aplicÃ¡vel.

## Economia de Tokens

EstratÃ©gias oficiais:

- Modo Liga/Desliga.
- Estado em JSON.
- Handoff compacto.
- Consulta seletiva de documentos.
- Context package mÃ­nimo.
- Ãndice local futuro.

## Context Package MÃ­nimo

```text
Projeto
Modo
Ãšltima decisÃ£o
Riscos crÃ­ticos
PrÃ³xima aÃ§Ã£o
Arquivos relevantes
Limites
```

## Responsabilidades

Logs, adapters, prompts e instruÃ§Ãµes de agentes devem evitar segredos, dados pessoais e prompts privados longos sem consentimento.
