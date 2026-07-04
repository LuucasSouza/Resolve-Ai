---
title: "Runtime MCP and Agent Adapters"
status: "Draft"
version: "0.1.0-alpha"
phase: "Phase 3 â€” Resolve AÃ­ Runtime Productization"
owner: "Resolve AÃ­ Maintainers"
last_updated: "2026-07-04"
---

# Runtime MCP and Agent Adapters

## Objetivo

Preparar a evoluÃ§Ã£o da runtime para integraÃ§Ã£o com agentes de IA, sem antecipar implementaÃ§Ã£o complexa.

## EstratÃ©gia

```text
1. CLI local
2. Arquivos de instruÃ§Ã£o para agentes
3. Estado local
4. GeraÃ§Ã£o de prompts e documentos
5. MCP server experimental
6. Hooks e adapters avanÃ§ados
```

## Arquivos de InstruÃ§Ã£o

A runtime futura pode gerar:

- `AGENTS.md`
- `CLAUDE.md`
- `GEMINI.md`
- `.github/copilot-instructions.md`
- `.cursor/rules/resolve-ai.mdc`

## MCP Futuro

Ferramentas conceituais:

- `resolve_ai_status`
- `resolve_ai_ligar`
- `resolve_ai_desligar`
- `resolve_ai_detectar_projeto`
- `resolve_ai_diagnosticar`
- `resolve_ai_buscar_contexto`
- `resolve_ai_registrar_decisao`
- `resolve_ai_registrar_risco`
- `resolve_ai_gerar_handoff`

## Regras

Hooks e adapters devem respeitar o Modo Liga/Desliga. Quando desligado, nÃ£o devem carregar contexto pesado nem atualizar documentos automaticamente.

## SeguranÃ§a

Adapters nÃ£o devem expor secrets, dados pessoais, `.env`, dumps, credenciais, tokens ou backups reais.
