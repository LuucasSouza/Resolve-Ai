# pt144 — Backlog and Sprint Generation

> Objetivo: definir como o `resolve-ai planejar` gera backlog priorizado e próximas sprints.

---

## 1. Filosofia

O Resolve Aí deve gerar planos pequenos, claros e executáveis.

A prioridade não é criar o maior roadmap possível. A prioridade é responder:

> Qual é o menor próximo passo seguro que melhora o projeto sem criar bagunça?

---

## 2. Artefato: `11-backlog-priorizado.md`

Estrutura obrigatória:

```markdown
# Backlog Priorizado — Resolve Aí

## Resumo

## Legenda de prioridade
- P0: crítico
- P1: alto
- P2: médio
- P3: baixo

## Backlog

| ID | Prioridade | Tipo | Item | Motivo | Critério de aceite | Risco se ignorar |
|---|---|---|---|---|---|---|

## Itens que NÃO devem ser feitos agora

## Perguntas em aberto
```

---

## 3. Artefato: `12-proximas-sprints.md`

Estrutura obrigatória:

```markdown
# Próximas Sprints — Resolve Aí

## Estratégia

## Sprint A — <nome>

### Objetivo
### Por que vem agora
### Tarefas
### Critérios de aceite
### Riscos
### O que não fazer nesta sprint

## Sprint B — <nome>
...
```

---

## 4. Convenção de sprints

Para projeto existente, preferir:

- Sprint A — Hardening ou estabilização;
- Sprint B — Testes mínimos;
- Sprint C — Verificação funcional;
- Sprint D — Deploy/rodagem controlada;
- Sprint E — Evolução.

Para projeto novo, preferir:

- Sprint A — Discovery e escopo;
- Sprint B — Fundação técnica;
- Sprint C — MVP mínimo;
- Sprint D — Validação;
- Sprint E — Publicação.

Para vibe coding, preferir:

- Sprint A — Organização do projeto;
- Sprint B — Fluxo principal;
- Sprint C — Persistência e validação;
- Sprint D — Correções e deploy;
- Sprint E — Documentação e continuidade.

---

## 5. Critérios de priorização

Ordenar por:

1. risco crítico;
2. bloqueio de lançamento;
3. impacto em dados/segurança;
4. dependência de outras tarefas;
5. valor de negócio;
6. simplicidade;
7. redução de incerteza.

---

## 6. Prompt de execução por item

Cada item P0/P1 deve poder gerar um prompt de execução no arquivo `13-prompts-de-execucao.md`.

Exemplo:

```markdown
## Prompt — Sprint A / Item P0-001

Use os documentos em docs/resolve-ai/ como contexto obrigatório.

Objetivo:
Resolver <problema>.

Regras:
- Não implementar feature nova.
- Não fazer deploy.
- Não alterar dados reais.

Tarefas:
1. ...

Validação:
- ...
```

---

## 7. Limite do MVP

Na Phase 6, o planejador pode usar templates determinísticos e heurísticos. Não precisa de IA generativa externa.

O conteúdo pode ser baseado em:

- tipo do projeto;
- riscos detectados;
- stack detectada;
- docs existentes;
- modo recomendado.

---

## 8. Definition of Done

O backlog gerado deve:

- ter IDs;
- ter prioridade;
- ter tipo;
- ter critério de aceite;
- separar o que fazer agora do que evitar;
- preparar prompts para execução futura.
