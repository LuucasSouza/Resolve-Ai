---
title: Phase 3 ADRs and Implementation Plan
phase: Phase 3 — Resolve Aí Runtime Productization
status: Draft
version: 0.1.0-alpha
public_name: Resolve Aí
legacy_technical_name: AI-SEOS
last_updated: 2026-07-04
---

# pt119 — Phase 3 ADRs and Implementation Plan

## 1. Objetivo

Este documento define as ADRs e o plano de implementação da Phase 3.

A Phase 3 não deve sair implementando runtime sem registrar decisões estruturais.

## 2. ADRs esperadas

Criar ADRs 0087 a 0096.

### ADR 0087 — Adopt Resolve Aí Runtime Layer

Decisão:

```text
Adicionar uma camada runtime instalável para aplicar o Resolve Aí dentro de projetos reais.
```

### ADR 0088 — Adopt Portuguese-First CLI Commands

Decisão:

```text
Comandos públicos oficiais serão em português.
```

### ADR 0089 — Adopt Modo Liga/Desliga

Decisão:

```text
Adicionar controle simples de ativação/desativação para economia de tokens e controle de interferência.
```

### ADR 0090 — Adopt Project Adapter with `.resolve-ai/`

Decisão:

```text
Usar `.resolve-ai/` como estado operacional local.
```

### ADR 0091 — Adopt `docs/resolve-ai/` as Project Documentation Path

Decisão:

```text
Usar `docs/resolve-ai/` para documentação humana gerada no projeto.
```

### ADR 0092 — Adopt Existing Project Diagnostic Flow

Decisão:

```text
Formalizar Projeto em Andamento — Diagnóstico e Continuação como fluxo oficial.
```

### ADR 0093 — Adopt CLI-First, MCP-Later Strategy

Decisão:

```text
Começar com CLI local antes de MCP server e hooks avançados.
```

### ADR 0094 — Adopt Agent Instruction File Generation

Decisão:

```text
Gerar arquivos como AGENTS.md/CLAUDE.md/Copilot instructions para orientar agentes.
```

### ADR 0095 — Adopt Token-Saving Context Strategy

Decisão:

```text
Usar contexto compacto, estado local e Modo Liga/Desliga para economizar tokens.
```

### ADR 0096 — Adopt Safe Runtime Defaults

Decisão:

```text
Não modificar código, instalar dependências, commitar ou fazer push por padrão sem intenção explícita.
```

## 3. Plano de implementação incremental

### Etapa 1 — Especificação de Runtime

Criar documentação canônica.

### Etapa 2 — Package Skeleton

Criar estrutura inicial:

```text
packages/resolve-ai-cli/
```

### Etapa 3 — Comandos sem IA

Implementar comandos que criam arquivos e estado:

```text
começar
ligar
desligar
status
ajuda
```

### Etapa 4 — Diagnóstico documental

Implementar geração de prompts/documentos para diagnóstico.

### Etapa 5 — Agent Instructions

Gerar arquivos de instrução.

### Etapa 6 — Integração com agentes

Preparar MCP/adapters futuros.

## 4. Definition of Done da Phase 3

A Phase 3 estará concluída quando:

- runtime vision existir;
- CLI architecture existir;
- Modo Liga/Desliga existir;
- Project Adapter existir;
- entry flows existirem;
- agent adapters/MCP strategy existirem;
- commands/UX copy existirem;
- security/token-saving existir;
- ADRs 0087–0096 existirem;
- ROADMAP apontar para implementação inicial;
- README explicar a direção runtime;
- não houver promessa falsa de ferramenta pronta se ainda for especificação.

## 5. Próxima fase recomendada

Após Phase 3, criar:

```text
Phase 4 — Resolve Aí CLI MVP Implementation
```

Objetivo:

```text
Implementar o primeiro MVP executável da CLI.
```
