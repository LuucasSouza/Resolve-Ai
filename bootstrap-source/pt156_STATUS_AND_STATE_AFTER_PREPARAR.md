---
project: Resolve Aí
phase: Phase 7 — Guided Execution Prep
status: Draft
language: pt-BR
public_name: Resolve Aí
legacy_name: AI-SEOS
---

# pt156 — Atualização de Status e Estado após `preparar`

## Objetivo

Atualizar `resolve-ai status` para refletir a tarefa preparada.

## Estado local

Adicionar em `.resolve-ai/state.json`:

```json
{
  "ultimoPreparo": {
    "executadoEm": "2026-01-01T00:00:00.000Z",
    "tarefa": "Hardening inicial do repositório",
    "categoria": "security",
    "prioridade": "critical",
    "confianca": "medium",
    "riskLevel": "red",
    "approvalRequired": true,
    "canAutoExecute": false,
    "documentosGerados": [
      "docs/resolve-ai/15-tarefa-preparada.md",
      "docs/resolve-ai/16-prompt-de-implementacao.md",
      "docs/resolve-ai/17-plano-de-validacao-da-tarefa.md",
      "docs/resolve-ai/18-riscos-da-execucao.md",
      "docs/resolve-ai/19-handoff-de-execucao.md"
    ]
  }
}
```

## Status público

Exemplo:

```text
Resolve Aí — status

Estado: ligado
Projeto: em-andamento
Modo: Projeto em Andamento — Diagnóstico e Continuação

Último diagnóstico:
- Stack: React, Vite, TypeScript, Supabase
- Riscos detectados: 5

Último plano:
- Prioridade: hardening
- Próxima sprint: Segurança do repositório

Tarefa preparada:
- Hardening inicial do repositório
- Risco: vermelho
- Aprovação humana: necessária
- Autoexecução: não

Próximo passo:
Leia docs/resolve-ai/16-prompt-de-implementacao.md.
```

## Quando não houver preparo

```text
Nenhuma tarefa preparada ainda.
Rode: resolve-ai preparar
```

## Quando estiver desligado

```text
Resolve Aí está desligado.
Para preparar com contexto completo, rode: resolve-ai ligar
```

## Privacidade

Status não deve exibir:

- conteúdo de `.env`;
- tokens;
- dados pessoais;
- conteúdo de dumps;
- conteúdo de CSV real.
