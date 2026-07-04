# pt145 — Implementation Prep Safety Gates

> Objetivo: garantir que `resolve-ai planejar` prepare implementação sem executar mudanças perigosas.

---

## 1. Princípio central

Planejar não é implementar.

O comando `resolve-ai planejar` deve deixar o projeto pronto para implementação futura, mas não deve modificar o código do produto.

---

## 2. Mudanças permitidas

O comando pode criar/atualizar apenas arquivos de runtime/documentação do Resolve Aí:

```text
.resolve-ai/state.json
docs/resolve-ai/10-plano-de-continuacao.md
docs/resolve-ai/11-backlog-priorizado.md
docs/resolve-ai/12-proximas-sprints.md
docs/resolve-ai/13-prompts-de-execucao.md
docs/resolve-ai/14-checklist-de-validacao.md
```

---

## 3. Mudanças proibidas

O comando não deve alterar:

- `src/`;
- `app/`;
- `pages/`;
- `components/`;
- `lib/`;
- `services/`;
- `functions/`;
- `package.json`;
- lockfiles;
- `.env`;
- configurações de deploy;
- scripts do projeto;
- banco de dados;
- migrações;
- arquivos de produção.

---

## 4. Safety Gate 1 — Contexto mínimo

Antes de planejar, verificar:

- existe `.resolve-ai/state.json`?
- existe diagnóstico anterior?
- existe `docs/resolve-ai/`?

Se não existir, o comando deve informar:

```text
Ainda não encontrei um diagnóstico. Posso criar um plano básico, mas o ideal é rodar `resolve-ai diagnosticar` primeiro.
```

Para MVP, pode gerar plano básico, mas deve marcar como baixa confiança.

---

## 5. Safety Gate 2 — Riscos críticos primeiro

Se houver risco crítico no estado/diagnóstico, o primeiro plano deve priorizar esse risco.

Exemplo:

- dados sensíveis;
- segredos;
- ausência de RLS/teste de permissão;
- deploy sem validação;
- ausência de backup;
- risco LGPD.

---

## 6. Safety Gate 3 — Nada de refactor prematuro

Se o projeto já está 70%+ implementado, o plano deve evitar refatoração ampla antes de:

- segurança;
- testes;
- validação;
- deploy controlado.

---

## 7. Safety Gate 4 — Prompt seguro

Prompts gerados devem sempre incluir:

- objetivo;
- escopo;
- arquivos que podem ser tocados;
- arquivos que não devem ser tocados;
- validação;
- regra de não fazer push/deploy sem autorização.

---

## 8. Safety Gate 5 — Handoff claro

O arquivo `16-handoff-para-implementacao.md`, se criado, deve dizer:

- qual é a próxima ação;
- quais documentos ler;
- quais riscos considerar;
- quais ações estão proibidas.

---

## 9. Mensagem terminal recomendada

```text
Plano criado sem alterar código do produto.
Quando quiser executar uma tarefa, copie um dos prompts em docs/resolve-ai/13-prompts-de-execucao.md.
```

---

## 10. Definition of Done

- safety gates implementados;
- testes provam que código do produto não é alterado;
- prompts contêm limites claros;
- plano prioriza risco crítico quando existir.
