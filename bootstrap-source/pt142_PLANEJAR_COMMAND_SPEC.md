# pt142 — `resolve-ai planejar` — Command Specification

> Status: Draft for implementation  
> Comando principal: `resolve-ai planejar`  
> Objetivo: gerar plano incremental e backlog estruturado a partir do diagnóstico local.

---

## 1. Comando

```bash
resolve-ai planejar
```

Aliases recomendados:

```bash
resolve-ai plano
resolve-ai planejamento
```

Todos devem executar a mesma rotina.

---

## 2. Objetivo do comando

O comando `planejar` deve transformar o estado atual do projeto em um plano seguro e incremental de continuação.

Ele é especialmente útil depois de:

```bash
resolve-ai diagnosticar
```

Mas não deve depender rigidamente dele. Se não houver diagnóstico, o comando deve:

1. avisar que não encontrou diagnóstico anterior;
2. sugerir rodar `resolve-ai diagnosticar`;
3. ainda criar um plano mínimo com base nas informações disponíveis, ou recusar plano profundo por falta de contexto.

---

## 3. Entradas

O comando pode consumir:

- `.resolve-ai/config.json`;
- `.resolve-ai/state.json`;
- `docs/resolve-ai/00-project-intake.md`;
- `docs/resolve-ai/01-current-state-assessment.md`;
- `docs/resolve-ai/02-discovery.md`;
- `docs/resolve-ai/03-product-definition.md`;
- `docs/resolve-ai/04-architecture-review.md`;
- `docs/resolve-ai/05-risk-register.md`;
- `docs/resolve-ai/06-decision-log.md`;
- `docs/resolve-ai/07-execution-plan.md` se existir;
- `docs/resolve-ai/08-backlog.md` se existir;
- `docs/resolve-ai/09-handoff.md` se existir;
- README do projeto;
- package/configs detectados, apenas para contexto leve.

---

## 4. Saídas obrigatórias

O comando deve criar ou preservar os seguintes arquivos:

```text
docs/resolve-ai/10-plano-de-continuacao.md
docs/resolve-ai/11-backlog-priorizado.md
docs/resolve-ai/12-proximas-sprints.md
docs/resolve-ai/13-prompts-de-execucao.md
docs/resolve-ai/14-checklist-de-validacao.md
```

Opcionalmente, pode criar:

```text
docs/resolve-ai/15-riscos-do-plano.md
docs/resolve-ai/16-handoff-para-implementacao.md
```

A recomendação para MVP é criar os cinco obrigatórios primeiro.

---

## 5. Regra de não sobrescrita

Por padrão, o comando não deve sobrescrever arquivos existentes.

Se o arquivo já existir:

- preservar conteúdo;
- registrar no terminal que o arquivo já existia;
- sugerir futura opção `--atualizar` ou `--forcar`;
- não implementar `--forcar` nesta fase, salvo se já estiver muito simples e seguro.

---

## 6. Estrutura do relatório terminal

Ao final, exibir:

```text
Resolve Aí — Plano criado

Modo atual: <modo>
Tipo de projeto: <tipo>
Plano salvo em: docs/resolve-ai/10-plano-de-continuacao.md
Backlog salvo em: docs/resolve-ai/11-backlog-priorizado.md
Próximas sprints: docs/resolve-ai/12-proximas-sprints.md
Prompts: docs/resolve-ai/13-prompts-de-execucao.md
Checklist: docs/resolve-ai/14-checklist-de-validacao.md

Próxima ação sugerida:
<ação>
```

---

## 7. Comportamento por modo

### Non-Technical Builder

Gerar linguagem simples:

- o que fazer primeiro;
- o que evitar;
- o que pedir para a IA;
- o que validar manualmente.

### Vibe Coder

Gerar passos práticos:

- pequenos pacotes de implementação;
- prompts prontos;
- checklist de validação;
- alertas contra sair codando sem plano.

### Professional Engineer

Gerar plano técnico:

- milestones;
- backlog técnico;
- riscos;
- critérios de aceite;
- possíveis ADRs;
- handoff para implementação.

### Projeto em Andamento — Diagnóstico e Continuação

Gerar plano de continuidade:

- estabilização;
- segurança;
- testes;
- verificação;
- lançamento controlado;
- backlog por prioridade.

---

## 8. Atualização de estado

Atualizar `.resolve-ai/state.json` com:

```json
{
  "lastPlanAt": "ISO_DATE",
  "lastPlanSummary": "...",
  "planningDocuments": [
    "docs/resolve-ai/10-plano-de-continuacao.md",
    "docs/resolve-ai/11-backlog-priorizado.md"
  ],
  "nextRecommendedAction": "..."
}
```

Preservar demais campos do estado.

---

## 9. Segurança

O comando não deve:

- alterar código de produto;
- instalar pacotes;
- executar scripts do projeto;
- fazer commit;
- fazer push;
- ler conteúdo de arquivos sensíveis;
- copiar segredos para documentos.

---

## 10. Definition of Done do comando

- comando principal e aliases funcionam;
- documentos obrigatórios são criados;
- idempotência validada;
- `status` reflete último plano;
- testes automatizados passam;
- CLI README atualizado.
