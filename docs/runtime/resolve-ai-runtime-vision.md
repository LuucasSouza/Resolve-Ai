---
title: "Resolve AÃ­ Runtime Vision"
status: "Draft"
version: "0.1.0-alpha"
phase: "Phase 3 â€” Resolve AÃ­ Runtime Productization"
owner: "Resolve AÃ­ Maintainers"
last_updated: "2026-07-04"
---

# Resolve AÃ­ Runtime Vision

## Objetivo

Definir a visÃ£o da camada runtime do Resolve AÃ­: uma forma futura de ativar o framework dentro de projetos reais sem transformar a experiÃªncia em um manual tÃ©cnico pesado.

A promessa pÃºblica permanece:

```text
Me dÃ¡ o problema ou a ideia, e eu te ajudo a resolver.
```

## Escopo

Esta fase documenta e consolida a arquitetura da runtime. Ela nÃ£o implementa a CLI, nÃ£o publica pacote executÃ¡vel e nÃ£o promete automaÃ§Ã£o funcional.

## PrincÃ­pios

- PortuguÃªs como experiÃªncia pÃºblica principal.
- Simplicidade antes de automaÃ§Ã£o avanÃ§ada.
- CLI local primeiro; MCP, hooks e adapters depois.
- Modo Liga/Desliga como controle pÃºblico de ativaÃ§Ã£o.
- SeparaÃ§Ã£o entre estado operacional local e documentaÃ§Ã£o humana.
- SeguranÃ§a, privacidade e economia de tokens como defaults.
- DiagnÃ³stico antes de alteraÃ§Ã£o em projetos existentes.

## Arquitetura Conceitual

```mermaid
flowchart TD
    U[UsuÃ¡rio] --> C[resolve-ai CLI futura]
    C --> M[Modo Liga/Desliga]
    C --> A[Project Adapter]
    A --> S[.resolve-ai estado local]
    A --> D[docs/resolve-ai documentaÃ§Ã£o]
    C --> R[Mode Router]
    R --> E[Engines do Resolve AÃ­]
    E --> G[InstruÃ§Ãµes para agentes]
```

## Responsabilidades

A runtime futura serÃ¡ responsÃ¡vel por detectar o tipo de projeto, criar estado local, orientar fluxos de entrada, gerar documentos base, instruir agentes e preservar handoff mÃ­nimo entre sessÃµes.

Ela nÃ£o deve substituir decisÃ£o humana, modificar cÃ³digo por padrÃ£o, instalar dependÃªncias sem intenÃ§Ã£o explÃ­cita ou expor dados sensÃ­veis.

## PrÃ³ximos Passos

- Implementar o CLI MVP na Phase 4.
- Criar comandos `comeÃ§ar`, `ligar`, `desligar`, `status` e `ajuda`.
- Validar a runtime em projetos reais com os trÃªs modos de entrada.
