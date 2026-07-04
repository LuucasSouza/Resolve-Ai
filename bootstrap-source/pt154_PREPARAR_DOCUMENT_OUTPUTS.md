---
project: Resolve Aí
phase: Phase 7 — Guided Execution Prep
status: Draft
language: pt-BR
public_name: Resolve Aí
legacy_name: AI-SEOS
---

# pt154 — Documentos Gerados pelo `resolve-ai preparar`

## Objetivo

Padronizar os documentos de saída em:

```text
docs/resolve-ai/
```

## 15 — Tarefa Preparada

Path:

```text
docs/resolve-ai/15-tarefa-preparada.md
```

Deve conter:

- resumo;
- tarefa;
- categoria;
- prioridade;
- confiança;
- origem;
- por que foi escolhida;
- escopo;
- fora do escopo;
- arquivos provavelmente envolvidos;
- pré-condições;
- Definition of Ready;
- Definition of Done.

## 16 — Prompt de Implementação

Path:

```text
docs/resolve-ai/16-prompt-de-implementacao.md
```

Obrigatório:

- tarefa;
- contexto;
- regras obrigatórias;
- arquivos permitidos;
- fora do escopo;
- validação;
- relatório final esperado.

Regras mínimas:

```text
1. Não altere arquivos fora do escopo.
2. Não instale dependências sem autorização.
3. Não faça commit sem autorização.
4. Não faça push.
5. Não faça deploy.
6. Não toque em dados reais.
7. Se encontrar risco crítico, pare e avise.
```

## 17 — Plano de Validação da Tarefa

Path:

```text
docs/resolve-ai/17-plano-de-validacao-da-tarefa.md
```

Deve conter:

- validação automática;
- validação manual;
- evidências esperadas;
- critérios de aceite;
- rollback;
- sinais de parada.

## 18 — Riscos da Execução

Path:

```text
docs/resolve-ai/18-riscos-da-execucao.md
```

Deve conter:

- riscos técnicos;
- riscos de segurança;
- riscos de dados;
- riscos de produto;
- mitigação;
- quando parar.

## 19 — Handoff de Execução

Path:

```text
docs/resolve-ai/19-handoff-de-execucao.md
```

Deve conter:

- contexto essencial;
- tarefa preparada;
- restrições;
- arquivos importantes;
- pendências;
- próxima ação recomendada.

## Idempotência

Se arquivo já existir:

- não sobrescrever por padrão;
- avisar;
- sugerir futura flag `--atualizar`.

## Estilo

Linguagem simples, brasileira, clara e objetiva.
