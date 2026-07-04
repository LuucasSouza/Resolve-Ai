# pt149 — Phase 6 Execution Prompt

Use este arquivo como referência para executar a Phase 6 no Codex.

---

## Prompt canônico

```text
Leia integralmente todos os arquivos Markdown numerados de pt141 a pt150 na raiz do projeto.

Use também README.md, ROADMAP.md, CHANGELOG.md, GOVERNANCE.md, CONTRIBUTING.md, packages/resolve-ai-cli/*, docs/runtime/*, protocols/project-entry/*, protocols/existing-project-diagnostics/*, docs/sprints/phase-5-* e todos os artefatos anteriores como documentos de governança obrigatórios.

Execute agora a Phase 6 — Resolve Aí Guided Planning and Implementation Prep.

Objetivo:
Implementar o comando `resolve-ai planejar`, que transforma diagnóstico local em plano incremental, backlog priorizado, próximas sprints, prompts de execução e checklist de validação, sem alterar código do produto analisado.

Escopo obrigatório:
1. Implementar comando `resolve-ai planejar`.
2. Implementar aliases:
   - `resolve-ai plano`
   - `resolve-ai planejamento`
3. Ler `.resolve-ai/state.json` quando existir.
4. Ler documentos existentes em `docs/resolve-ai/` quando existirem.
5. Funcionar sem diagnóstico anterior com mensagem clara de baixa confiança e recomendação para rodar `resolve-ai diagnosticar`.
6. Criar `docs/resolve-ai/` se não existir.
7. Gerar, sem sobrescrever por padrão:
   - docs/resolve-ai/10-plano-de-continuacao.md
   - docs/resolve-ai/11-backlog-priorizado.md
   - docs/resolve-ai/12-proximas-sprints.md
   - docs/resolve-ai/13-prompts-de-execucao.md
   - docs/resolve-ai/14-checklist-de-validacao.md
8. Atualizar `.resolve-ai/state.json` com último planejamento.
9. Atualizar `resolve-ai status` para mostrar resumo do último plano.
10. Criar testes automatizados para o comando.
11. Atualizar README do pacote CLI e README raiz.
12. Criar ADRs 0116 a 0125.
13. Criar docs/sprints/phase-6-handoff.md, phase-6-validation-report.md e phase-6-retrospective.md.
14. Preservar pt141 a pt150 em bootstrap-source/.

Restrições obrigatórias:
- Não implementar MCP.
- Não implementar hooks.
- Não adicionar telemetria.
- Não chamar APIs externas.
- Não alterar código de projetos analisados.
- Não instalar dependências no projeto analisado.
- Não fazer commit no projeto analisado.
- Não sobrescrever documentos existentes por padrão.
- Não implementar execução automática de tarefas.

Testes obrigatórios:
- planejar em diretório vazio.
- planejar em projeto com diagnóstico fake.
- planejar com risco crítico.
- planejar com documentos existentes.
- idempotência.
- status após planejamento.
- todos os testes anteriores devem continuar passando.

Commit:
Se a implementação alterar código da CLI, commit com:
feat: implement resolve ai planning command

Faça push se o remote estiver configurado.

Ao final, gere relatório contendo:
- arquivos criados;
- arquivos atualizados;
- comandos implementados;
- testes executados;
- ADRs criadas;
- decisões tomadas;
- riscos ou pendências;
- validação;
- commit realizado;
- status do push;
- próxima ação recomendada.

Não peça confirmação.
Execute.
```
