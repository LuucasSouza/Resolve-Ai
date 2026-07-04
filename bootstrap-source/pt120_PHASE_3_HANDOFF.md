---
title: Phase 3 Handoff
phase: Phase 3 — Resolve Aí Runtime Productization
status: Draft
version: 0.1.0-alpha
public_name: Resolve Aí
legacy_technical_name: AI-SEOS
last_updated: 2026-07-04
---

# pt120 — Phase 3 Handoff

## 1. Objetivo

Este documento é o handoff para execução da **Phase 3 — Resolve Aí Runtime Productization**.

Ele orienta o Codex a transformar os documentos pt111 a pt120 em artefatos canônicos do repositório.

## 2. Diretórios a criar ou atualizar

```text
docs/runtime/
docs/runtime/cli/
docs/runtime/mode-control/
docs/runtime/project-adapter/
docs/runtime/agent-adapters/
docs/runtime/security/
docs/runtime/ux/
frameworks/runtime-framework/
protocols/runtime-activation/
protocols/project-entry/
protocols/existing-project-diagnostics/
templates/runtime/
templates/agent-instructions/
templates/prompts/runtime/
examples/runtime/
```

## 3. Arquivos canônicos a criar

```text
docs/runtime/resolve-ai-runtime-vision.md
docs/runtime/cli/resolve-ai-cli-architecture.md
docs/runtime/mode-control/modo-liga-desliga.md
docs/runtime/project-adapter/project-adapter-and-local-state.md
docs/runtime/project-entry-flows.md
docs/runtime/agent-adapters/runtime-mcp-and-agent-adapters.md
docs/runtime/ux/runtime-commands-and-ux-copy.md
docs/runtime/security/runtime-security-privacy-and-token-saving.md
frameworks/runtime-framework/README.md
protocols/runtime-activation/modo-liga-desliga-protocol.md
protocols/project-entry/project-entry-protocol.md
protocols/existing-project-diagnostics/projeto-em-andamento-diagnostico-e-continuacao.md
templates/runtime/config-yml-template.yml
templates/runtime/state-json-template.json
templates/agent-instructions/AGENTS.md
templates/agent-instructions/CLAUDE.md
templates/agent-instructions/copilot-instructions.md
templates/prompts/runtime/existing-project-diagnostic-runtime-prompt.md
examples/runtime/resolve-ai-cli-usage-examples.md
```

## 4. ADRs a criar

Criar ADRs 0087 a 0096:

```text
0087-adopt-resolve-ai-runtime-layer.md
0088-adopt-portuguese-first-cli-commands.md
0089-adopt-modo-liga-desliga.md
0090-adopt-project-adapter-with-local-state.md
0091-adopt-docs-resolve-ai-path.md
0092-adopt-existing-project-diagnostic-flow.md
0093-adopt-cli-first-mcp-later-strategy.md
0094-adopt-agent-instruction-file-generation.md
0095-adopt-token-saving-context-strategy.md
0096-adopt-safe-runtime-defaults.md
```

## 5. Arquivos a atualizar

```text
README.md
ROADMAP.md
CHANGELOG.md
GOVERNANCE.md
CONTRIBUTING.md
adr/README.md
docs/README.md
docs/architecture/decision-log.md
docs/sprints/README.md
templates/README.md
protocols/README.md
frameworks/README.md
```

## 6. Regras obrigatórias

- Não implementar CLI ainda, salvo se explicitamente autorizado.
- Não criar promessa de runtime já funcional se ainda é especificação.
- Não copiar outro projeto.
- Reforçar que a inspiração é facilidade de uso, não cópia técnica.
- Usar português como UX principal.
- Usar “Modo Liga/Desliga” como nome oficial público.
- Incluir Projeto em Andamento — Diagnóstico e Continuação como fluxo oficial.
- Preparar futura Phase 4 para CLI MVP.

## 7. Quality Gates

A Phase 3 passa se:

- runtime vision criada;
- CLI architecture criada;
- comandos em português definidos;
- Modo Liga/Desliga documentado;
- project adapter documentado;
- `.resolve-ai/` e `docs/resolve-ai/` definidos;
- projeto novo e projeto existente tratados separadamente;
- MCP/adapters tratados como evolução futura;
- segurança e token saving documentados;
- ADRs 0087–0096 criadas;
- README/ROADMAP/CHANGELOG atualizados.

## 8. Prompt de execução para Codex

```text
Leia integralmente pt111 a pt120.

Use todos os documentos do repositório como governança obrigatória.

Execute a Phase 3 — Resolve Aí Runtime Productization.

Objetivo:
Documentar e consolidar a arquitetura runtime do Resolve Aí, preparando a futura CLI `resolve-ai`, o Modo Liga/Desliga, o Project Adapter, os fluxos de entrada, integração com agentes e segurança/token saving.

Não implemente CLI ainda.
Crie documentação, protocolos, templates, ADRs e exemplos.

Preserve pt111 a pt120 em bootstrap-source/.
Crie ADRs 0087 a 0096.
Atualize README, ROADMAP, CHANGELOG, GOVERNANCE, CONTRIBUTING e índices.
Crie relatório de validação da Phase 3.
Commit com:
docs: execute phase 3 resolve ai runtime productization
Faça push se o remote estiver configurado.

Ao final, gere relatório com arquivos criados, atualizados, ADRs, decisões, riscos, validação e próxima ação.
```

## 9. Próxima ação pós-Phase 3

Após validar a Phase 3, iniciar:

```text
Phase 4 — Resolve Aí CLI MVP Implementation
```

Objetivo:

```text
Criar a primeira versão executável mínima da CLI.
```
