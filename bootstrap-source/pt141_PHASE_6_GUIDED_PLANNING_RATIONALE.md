# pt141 — Phase 6: Guided Planning and Implementation Prep — Rationale

> Projeto: Resolve Aí  
> Fase: Phase 6 — Guided Planning and Implementation Prep  
> Status: Draft for execution  
> Objetivo: transformar o diagnóstico gerado na Phase 5 em plano incremental, backlog priorizado e pacote seguro de preparação para implementação.

---

## 1. Por que esta fase existe

A Phase 5 entregou o primeiro comando realmente útil do runtime:

```bash
resolve-ai diagnosticar
```

Esse comando lê o projeto localmente, identifica stack provável, tipo de projeto, modo recomendado, riscos visíveis, documentos existentes e gera `docs/resolve-ai/00` a `09` sem alterar o código do produto.

Porém diagnóstico sem plano vira apenas relatório. O usuário brasileiro que usa o Resolve Aí não quer apenas saber que existe problema; ele quer saber:

- o que fazer agora;
- em qual ordem;
- o que é urgente;
- o que pode esperar;
- o que não mexer;
- qual é o próximo passo seguro;
- que prompt mandar para a IA de programação;
- como evitar bagunçar o projeto.

A Phase 6 existe para criar o próximo comando:

```bash
resolve-ai planejar
```

Esse comando transforma o diagnóstico em um plano claro, incremental e seguro.

---

## 2. Diferença entre diagnosticar e planejar

### `diagnosticar`

Pergunta principal:

> Onde estamos?

Entregas:

- estado atual;
- stack detectada;
- riscos;
- modo recomendado;
- documentos `00` a `09`;
- resumo para continuação.

### `planejar`

Pergunta principal:

> O que fazemos agora, em qual ordem, sem quebrar tudo?

Entregas:

- plano incremental;
- milestones;
- sprints sugeridas;
- backlog priorizado;
- dependências;
- tarefas seguras para IA;
- prompts de execução;
- critérios de validação;
- recomendações de continuação.

---

## 3. Por que ainda não alterar código automaticamente

O Resolve Aí ainda está no estágio de runtime inicial. Ele já consegue criar contexto e diagnóstico, mas ainda não deve executar mudanças de código sozinho. Isso preserva confiança.

Nesta fase, `resolve-ai planejar` deve ser um comando de preparação, não de implementação.

Ele pode gerar:

- planos;
- documentos;
- prompts;
- checklists;
- backlog;
- sequência de execução.

Ele não deve:

- refatorar código;
- instalar dependências;
- commitar;
- abrir PR;
- alterar arquivos de produto;
- executar deploy;
- mexer em banco de dados;
- rodar migração;
- tocar em segredos.

---

## 4. Resultado esperado da Phase 6

Depois da Phase 6, um usuário deve conseguir executar:

```bash
resolve-ai começar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai status
```

E receber um fluxo simples:

1. o Resolve Aí cria sua base local;
2. diagnostica o projeto;
3. monta um plano de continuação;
4. gera backlog e prompts;
5. orienta o próximo passo sem tocar no código.

---

## 5. Escopo da Phase 6

Implementar o comando:

```bash
resolve-ai planejar
```

Com aliases se fizer sentido:

```bash
resolve-ai plano
resolve-ai planejamento
```

O comando deve:

- ler `.resolve-ai/state.json`;
- ler os documentos existentes em `docs/resolve-ai/` quando existirem;
- funcionar mesmo se o diagnóstico ainda não existir, mas com aviso claro;
- gerar documentos de planejamento em `docs/resolve-ai/`;
- não sobrescrever arquivos existentes por padrão;
- atualizar estado local com o último plano gerado;
- atualizar `resolve-ai status`;
- criar testes automatizados.

---

## 6. Princípio de UX

A experiência deve continuar brasileira, leve e direta:

```text
Beleza. Já entendi o projeto. Agora vou montar um plano seguro para continuar sem bagunçar.
```

Evitar linguagem pesada como:

```text
Generating implementation orchestration plan...
```

Preferir:

```text
Plano criado. Próximo passo sugerido: resolver os riscos críticos antes de criar feature nova.
```

---

## 7. Definition of Done

A Phase 6 só está pronta quando:

- `resolve-ai planejar` existe;
- o comando gera documentos de planejamento;
- o comando não altera código do produto;
- o comando usa diagnóstico anterior quando disponível;
- o comando funciona sem diagnóstico com orientação clara;
- `status` mostra resumo do último plano;
- testes automatizados cobrem fluxo principal e idempotência;
- ADRs da fase foram criadas;
- README e ROADMAP foram atualizados;
- Phase 7 futura está preparada.
