---
title: "Modelo do pacote de execução assistida"
phase: "Phase 8 — Resolve Aí Guided Assisted Execution"
status: "Draft"
version: "0.8.0"
public_name: "Resolve Aí"
historical_name: "AI-SEOS"
language: "pt-BR"
---

# Modelo do Pacote de Execução Assistida

## 1. Visão geral

O Pacote de Execução Assistida é o conjunto de documentos que conecta uma tarefa preparada ao agente que vai implementar.

Ele não é código.
Ele não é automação.
Ele não é permissão para alterar tudo.

Ele é um contrato entre:

- usuário;
- Resolve Aí;
- agente de IA;
- projeto real.

## 2. Entrada

O pacote deve consumir, quando disponíveis:

- `.resolve-ai/state.json`;
- `docs/resolve-ai/00-project-intake.md`;
- `docs/resolve-ai/01-current-state-assessment.md`;
- `docs/resolve-ai/05-risk-register.md`;
- `docs/resolve-ai/07-execution-plan.md`;
- `docs/resolve-ai/08-backlog.md`;
- `docs/resolve-ai/15-tarefa-preparada.md`;
- `docs/resolve-ai/16-prompt-de-implementacao.md`;
- `docs/resolve-ai/17-plano-de-validacao-da-tarefa.md`;
- `docs/resolve-ai/18-riscos-da-execucao.md`;
- `docs/resolve-ai/19-handoff-de-execucao.md`.

## 3. Seleção de tarefa

Nesta fase, o comando `resolver` não precisa permitir seleção interativa avançada.

Ordem recomendada:

1. Usar `ultimoPreparo` do state.
2. Se não existir, buscar documento `15-tarefa-preparada.md`.
3. Se ainda não existir, orientar o usuário a rodar `resolve-ai preparar`.

## 4. Classificação da execução

Toda execução assistida deve ser classificada:

```text
Baixo risco
Médio risco
Alto risco
Bloqueada
```

### Baixo risco

Exemplos:

- documentação;
- pequenas correções isoladas;
- criação de testes não destrutivos;
- organização de README.

### Médio risco

Exemplos:

- alteração de fluxo de negócio;
- ajuste em autenticação sem alteração de permissões críticas;
- mudança em integração não financeira.

### Alto risco

Exemplos:

- pagamentos;
- autenticação;
- RLS/permissões;
- dados pessoais;
- migração de banco;
- exclusão de arquivos;
- deploy.

### Bloqueada

A execução deve ser bloqueada quando:

- houver risco crítico sem mitigação;
- houver secrets/dados pessoais expostos;
- não houver diagnóstico mínimo;
- a tarefa pedir alteração destrutiva sem plano de rollback;
- o usuário pedir para ignorar validação de segurança.

## 5. Prompt final para agente

O prompt final deve ser direto, executável e seguro.

Estrutura mínima:

```text
Você está dentro de um projeto real.
Use os documentos em docs/resolve-ai/ como contexto obrigatório.

Tarefa:
...

Escopo permitido:
...

Fora de escopo:
...

Arquivos de referência:
...

Restrições:
- Não altere arquivos fora do escopo.
- Não instale dependências sem explicar e pedir aprovação.
- Não faça commit.
- Não faça deploy.
- Não remova dados.

Validação esperada:
...

Relatório final:
- arquivos alterados;
- decisões tomadas;
- testes executados;
- riscos remanescentes;
- próximos passos.
```

## 6. Pacote como ferramenta de segurança

O valor do pacote é reduzir ambiguidade.

Sem pacote:

```text
Resolve isso aí.
```

Com pacote:

```text
Resolva esta tarefa específica, com este escopo, estes riscos, estes arquivos de referência e estes critérios de validação.
```

## 7. Regras de não sobrescrita

Se documentos 20 a 24 já existirem, o comando deve:

- não sobrescrever por padrão;
- informar que já existem;
- sugerir futura opção `--atualizar` ou `--novo`;
- preservar o trabalho anterior.

## 8. Relação com Phase 9

A Phase 8 prepara a execução.

A Phase 9 deve validar o resultado.

A sequência ideal é:

```bash
resolve-ai preparar
resolve-ai resolver
# usuário cola prompt no agente e executa tarefa
resolve-ai validar
```
