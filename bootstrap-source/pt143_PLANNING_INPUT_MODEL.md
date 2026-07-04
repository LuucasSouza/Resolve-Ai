# pt143 — Planning Input Model

> Objetivo: definir como o comando `resolve-ai planejar` interpreta os artefatos do diagnóstico e converte isso em plano incremental.

---

## 1. Problema que este modelo resolve

O diagnóstico pode conter muitas informações:

- stack;
- riscos;
- backlog inicial;
- decisões implícitas;
- estado atual;
- tipo de projeto;
- modo recomendado;
- incertezas;
- handoff.

Sem um modelo claro, o comando `planejar` pode gerar um plano genérico. Este documento define como priorizar informações.

---

## 2. Hierarquia de entradas

O planejamento deve seguir esta ordem de confiança:

1. `.resolve-ai/state.json` — estado operacional recente;
2. `docs/resolve-ai/05-risk-register.md` — riscos;
3. `docs/resolve-ai/07-execution-plan.md` — plano prévio, se existir;
4. `docs/resolve-ai/08-backlog.md` — backlog prévio, se existir;
5. `docs/resolve-ai/04-architecture-review.md` — arquitetura e restrições;
6. `docs/resolve-ai/03-product-definition.md` — produto e escopo;
7. `docs/resolve-ai/01-current-state-assessment.md` — estado atual;
8. README/package/configs — fallback.

---

## 3. Sinais de prioridade

O planejador deve procurar sinais como:

### Risco crítico

Palavras/sinais:

- senha;
- segredo;
- token;
- dados pessoais;
- LGPD;
- backup;
- RLS;
- produção;
- deploy;
- ausência de testes;
- sem CI;
- falha de permissão.

Se aparecer risco crítico, a primeira sprint deve ser hardening/segurança/verificação.

### Projeto novo

Sinais:

- poucos arquivos;
- ausência de package/config;
- sem README;
- sem src/app;
- sem docs.

Plano deve começar por intake e definição.

### Projeto em andamento

Sinais:

- package/config existente;
- app/src presente;
- README parcial;
- docs existentes;
- backlog/roadmap;
- código sem testes.

Plano deve começar por estabilização e continuação.

### Projeto legado

Sinais:

- tecnologias antigas;
- pouca documentação;
- scripts manuais;
- estrutura dispersa;
- arquivos de produção misturados.

Plano deve começar por inventário e segurança.

---

## 4. Modelo de prioridades

O planejamento deve ordenar ações nesta sequência:

1. Segurança e dados sensíveis;
2. Integridade de dados;
3. Autenticação e autorização;
4. Testes mínimos;
5. Verificação de regras críticas;
6. Documentação de decisões;
7. Deploy controlado;
8. Novas features;
9. Otimizações;
10. Refatorações cosméticas.

---

## 5. Classes de tarefas

Cada tarefa gerada deve receber uma classe:

- `seguranca`;
- `verificacao`;
- `teste`;
- `documentacao`;
- `arquitetura`;
- `produto`;
- `implementacao`;
- `deploy`;
- `refatoracao`;
- `limpeza`.

---

## 6. Formato interno recomendado

```ts
type PlanningInput = {
  projectType: 'novo' | 'em-andamento' | 'legado' | 'indeterminado'
  recommendedMode: string
  detectedStack: string[]
  risks: RiskSignal[]
  existingDocs: string[]
  previousBacklogItems: string[]
  constraints: string[]
  openQuestions: string[]
}
```

---

## 7. Resultado do modelo

O planejador deve produzir:

```ts
type PlanningOutput = {
  summary: string
  nextRecommendedAction: string
  milestones: Milestone[]
  backlogItems: BacklogItem[]
  executionPrompts: ExecutionPrompt[]
  validationChecklist: ChecklistItem[]
}
```

---

## 8. Regra de honestidade

Se o comando não tiver contexto suficiente, deve dizer:

```text
Ainda não tenho contexto suficiente para um plano profundo. Rode `resolve-ai diagnosticar` primeiro.
```

Não inventar arquitetura, stack ou regras de negócio.
