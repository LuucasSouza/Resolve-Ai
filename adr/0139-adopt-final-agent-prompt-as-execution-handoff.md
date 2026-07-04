# ADR 0139 — Adopt Final Agent Prompt as Execution Handoff

## Status

Accepted

## Contexto

O Resolve Aí ainda não chama agentes externos nem APIs.

## Problema

Era necessário entregar algo executável pelo usuário sem integrar diretamente com ferramentas externas.

## Opções consideradas

- Chamar agente externo.
- Gerar prompt final para copiar.
- Não gerar orientação de execução.

## Decisão

Adotar `docs/resolve-ai/22-prompt-final-para-agente.md` como handoff de execução.

## Consequências positivas

- Funciona com Codex, Claude, Cursor, Gemini e outros agentes.
- Evita dependência de APIs externas.
- Mantém a execução auditável.

## Consequências negativas

- A qualidade final depende do agente e da disciplina do usuário.

## Critérios de reversão

Revisar quando houver integração segura com agentes via adapter.

## Relação com outras ADRs

Relaciona-se às ADRs 0121, 0137 e 0143.
