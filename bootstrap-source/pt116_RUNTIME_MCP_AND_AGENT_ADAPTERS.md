---
title: Runtime MCP and Agent Adapters
phase: Phase 3 — Resolve Aí Runtime Productization
status: Draft
version: 0.1.0-alpha
public_name: Resolve Aí
legacy_technical_name: AI-SEOS
last_updated: 2026-07-04
---

# pt116 — Runtime MCP and Agent Adapters

## 1. Objetivo

Este documento define a visão para integração do Resolve Aí com agentes de IA.

A Phase 3 deve começar por CLI simples, mas precisa preparar evolução para:

- MCP server;
- adapters para agentes;
- arquivos de instrução;
- hooks opcionais;
- contexto persistente.

## 2. Estratégia incremental

Não começar implementando tudo.

Ordem recomendada:

```text
1. CLI local
2. Arquivos de instrução para agentes
3. Estado local
4. Commands/prompt generation
5. MCP server experimental
6. Hooks/adapters avançados
```

## 3. Arquivos de instrução

O Resolve Aí pode gerar arquivos compatíveis com ferramentas de IA.

Exemplos:

```text
AGENTS.md
CLAUDE.md
GEMINI.md
.cursor/rules/resolve-ai.mdc
.github/copilot-instructions.md
```

Esses arquivos devem orientar o agente:

- quando o Resolve Aí está ligado;
- onde está o contexto;
- o que fazer antes de mexer em código;
- quais documentos consultar;
- como registrar decisões;
- como gerar handoff.

## 4. Exemplo de AGENTS.md

```markdown
# Resolve Aí Instructions

O Resolve Aí está instalado neste projeto.

Antes de modificar código:

1. Verifique `.resolve-ai/state.json`.
2. Leia `docs/resolve-ai/09-handoff.md`, se existir.
3. Se o modo estiver desligado, não injete contexto do Resolve Aí.
4. Se estiver ligado, siga o plano em `docs/resolve-ai/07-execution-plan.md`.
5. Não faça mudanças destrutivas sem confirmação.
6. Registre decisões relevantes em `docs/resolve-ai/06-decision-log.md`.
```

## 5. MCP server futuro

O MCP server pode expor ferramentas como:

```text
resolve_ai_status
resolve_ai_ligar
resolve_ai_desligar
resolve_ai_detectar_projeto
resolve_ai_diagnosticar
resolve_ai_buscar_contexto
resolve_ai_registrar_decisao
resolve_ai_registrar_risco
resolve_ai_gerar_handoff
resolve_ai_validar_prontidao
```

## 6. Contrato de ferramenta

Cada ferramenta deve ter:

- nome;
- descrição;
- entrada;
- saída;
- efeitos colaterais;
- riscos;
- se consome contexto pesado ou não;
- se funciona desligado.

## 7. Hooks opcionais

Hooks futuros podem existir para:

```text
início de sessão
antes de editar arquivo
depois de editar arquivo
antes de compactar contexto
fim de sessão
```

Mas devem respeitar o Modo Liga/Desliga.

Se o Resolve Aí estiver desligado, hooks pesados não devem atuar.

## 8. Diferença de objetivo

O Resolve Aí não é uma ferramenta apenas de otimização de contexto.

Ele é uma ferramenta de orquestração de engenharia.

O contexto é meio, não fim.

Objetivo:

```text
ajudar a transformar problemas, ideias e projetos em soluções bem planejadas.
```

## 9. Segurança dos adapters

Adapters não devem vazar:

- secrets;
- dados pessoais;
- arquivos `.env`;
- dumps;
- credenciais;
- tokens;
- backups reais.

## 10. Critérios de aceite

Esta especificação estará pronta quando:

- estratégia incremental estiver clara;
- arquivos de instrução estiverem definidos;
- MCP futuro estiver mapeado;
- ferramentas conceituais estiverem listadas;
- hooks respeitarem Modo Liga/Desliga;
- segurança estiver documentada.
