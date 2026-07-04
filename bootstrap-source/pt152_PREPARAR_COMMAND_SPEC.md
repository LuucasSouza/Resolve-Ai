---
project: Resolve Aí
phase: Phase 7 — Guided Execution Prep
status: Draft
language: pt-BR
public_name: Resolve Aí
legacy_name: AI-SEOS
---

# pt152 — Especificação do Comando `resolve-ai preparar`

## Nome público

```bash
resolve-ai preparar
```

Aliases:

```bash
resolve-ai tarefa
resolve-ai executar
```

O alias `executar` deve avisar que nesta fase o Resolve Aí apenas prepara, não executa.

## Promessa

> Preparar uma tarefa pequena, segura e bem explicada para o próximo passo.

## Entradas

Contexto local:

```text
.resolve-ai/state.json
docs/resolve-ai/
```

Arquivos prioritários:

```text
05-risk-register.md
07-execution-plan.md
08-backlog.md
10-plano-de-continuacao.md
11-backlog-priorizado.md
12-proximas-sprints.md
13-prompts-de-execucao.md
14-checklist-de-validacao.md
```

## Comportamento sem diagnóstico

Se não houver diagnóstico:

```text
Não encontrei diagnóstico anterior.
Rode primeiro: resolve-ai diagnosticar
Posso preparar um pacote genérico, mas a confiança será baixa.
```

## Comportamento sem planejamento

Se não houver planejamento:

```text
Não encontrei planejamento anterior.
Rode primeiro: resolve-ai planejar
Vou preparar uma tarefa básica com baixa confiança.
```

## Seleção de tarefa

Prioridade:

1. Risco crítico de segurança/hardening.
2. Documentação necessária para destravar execução.
3. Validação/teste mínimo.
4. Tarefa pequena do backlog.
5. Feature apenas se não houver risco crítico.

Regras:

- nunca escolher tarefa ampla;
- nunca escolher deploy como primeira tarefa se houver risco crítico;
- nunca escolher refactor grande automaticamente;
- nunca tocar auth/pagamentos/dados sensíveis sem alerta.

## Saída no terminal

```text
Resolve Aí — preparação de tarefa

Tarefa preparada:
Hardening inicial do repositório

Por que essa tarefa?
Existe risco crítico relacionado a dados sensíveis ou arquivos de backup.

Arquivos gerados:
- docs/resolve-ai/15-tarefa-preparada.md
- docs/resolve-ai/16-prompt-de-implementacao.md
- docs/resolve-ai/17-plano-de-validacao-da-tarefa.md
- docs/resolve-ai/18-riscos-da-execucao.md
- docs/resolve-ai/19-handoff-de-execucao.md

Próximo passo:
Revise o prompt em docs/resolve-ai/16-prompt-de-implementacao.md.
```

## Estado local

Atualizar `.resolve-ai/state.json`:

```json
{
  "ultimoPreparo": {
    "executadoEm": "ISO_DATE",
    "tarefa": "Hardening inicial do repositório",
    "confianca": "media",
    "riskLevel": "red",
    "approvalRequired": true,
    "canAutoExecute": false
  }
}
```

## Restrições

- não alterar código do produto;
- não executar tarefa;
- não instalar dependências;
- não fazer commit;
- não fazer push;
- não sobrescrever documentos existentes por padrão;
- não ler conteúdo sensível além de nomes/metadados quando houver suspeita.

## Testes mínimos

- preparar sem diagnóstico;
- preparar com diagnóstico;
- preparar com planejamento;
- preparar com risco crítico;
- preparar com docs existentes;
- preparar com Resolve Aí desligado;
- status após preparar;
- idempotência.
