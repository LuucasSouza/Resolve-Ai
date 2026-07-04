# pt146 — Planning Document Outputs

> Objetivo: especificar o conteúdo dos documentos criados por `resolve-ai planejar`.

---

## 1. Arquivos obrigatórios

```text
docs/resolve-ai/10-plano-de-continuacao.md
docs/resolve-ai/11-backlog-priorizado.md
docs/resolve-ai/12-proximas-sprints.md
docs/resolve-ai/13-prompts-de-execucao.md
docs/resolve-ai/14-checklist-de-validacao.md
```

---

## 2. `10-plano-de-continuacao.md`

Deve conter:

```markdown
# Plano de Continuação — Resolve Aí

## Resumo

## Situação atual

## Modo aplicado

## Tipo de projeto

## Objetivo do próximo ciclo

## Estratégia recomendada

## O que fazer agora

## O que evitar agora

## Dependências

## Riscos principais

## Próxima ação sugerida
```

---

## 3. `11-backlog-priorizado.md`

Deve conter tabela com:

- ID;
- prioridade;
- tipo;
- descrição;
- motivo;
- critério de aceite;
- risco se ignorar.

---

## 4. `12-proximas-sprints.md`

Deve conter pelo menos 3 sprints sugeridas.

Para projetos existentes, usar Sprint A/B/C por padrão.

Cada sprint deve conter:

- objetivo;
- por que vem agora;
- tarefas;
- critérios de aceite;
- riscos;
- o que não fazer.

---

## 5. `13-prompts-de-execucao.md`

Deve conter prompts prontos para colar no Codex/Claude/Cursor.

Cada prompt deve:

- usar `docs/resolve-ai/` como contexto;
- limitar escopo;
- proibir ações perigosas;
- pedir relatório final;
- pedir validação.

---

## 6. `14-checklist-de-validacao.md`

Deve conter:

```markdown
# Checklist de Validação — Resolve Aí

## Antes de executar
- [ ] Li docs/resolve-ai/10-plano-de-continuacao.md
- [ ] Entendi riscos principais
- [ ] Escolhi apenas uma tarefa/sprint

## Durante execução
- [ ] Não alterei escopo sem registrar
- [ ] Não toquei em arquivos proibidos
- [ ] Não fiz deploy sem autorização

## Depois da execução
- [ ] Testes/validação executados
- [ ] Documentação atualizada
- [ ] Próximo passo registrado
```

---

## 7. Linguagem por perfil

### Non-Technical Builder

Usar linguagem simples e evitar jargão.

### Vibe Coder

Usar passos práticos, alertas e comandos claros.

### Professional Engineer

Usar termos técnicos, ADRs, riscos e critérios de aceite.

### Projeto em Andamento

Usar plano de continuação, estabilização e lançamento controlado.

---

## 8. Idempotência

Se arquivos existirem, não sobrescrever.

Para MVP:

- registrar aviso;
- manter arquivo antigo;
- sugerir futura opção de atualização.

---

## 9. Atualização futura

Futuras fases podem adicionar:

- `--atualizar`;
- `--forcar` com backup;
- diff preview;
- aprovação interativa.
