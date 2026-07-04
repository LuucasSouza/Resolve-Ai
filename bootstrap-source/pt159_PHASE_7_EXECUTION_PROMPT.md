---
project: Resolve Aí
phase: Phase 7 — Guided Execution Prep
status: Draft
language: pt-BR
public_name: Resolve Aí
legacy_name: AI-SEOS
---

# pt159 — Prompt de Execução para Codex

Cole no Codex:

```text
Leia integralmente todos os arquivos Markdown numerados de pt151 a pt160 na raiz do projeto.

Use também README.md, ROADMAP.md, CHANGELOG.md, GOVERNANCE.md, CONTRIBUTING.md, packages/resolve-ai-cli/*, docs/runtime/*, docs/sprints/phase-5-*, docs/sprints/phase-6-* e todos os artefatos anteriores como documentos de governança obrigatórios.

Execute agora a Phase 7 — Resolve Aí Guided Execution Prep.

Objetivo:
Implementar o comando `resolve-ai preparar`, que seleciona uma tarefa segura a partir do diagnóstico/planejamento, gera um pacote de execução com documentos 15 a 19, atualiza o estado local e prepara um prompt de implementação, sem alterar código do produto analisado.

Escopo obrigatório:
1. Implementar comando `resolve-ai preparar`.
2. Implementar aliases:
   - `resolve-ai tarefa`
   - `resolve-ai executar`
3. Ler `.resolve-ai/state.json` quando existir.
4. Ler documentos em `docs/resolve-ai/` quando existirem.
5. Funcionar sem diagnóstico/planejamento com mensagem clara de baixa confiança.
6. Gerar, sem sobrescrever por padrão:
   - docs/resolve-ai/15-tarefa-preparada.md
   - docs/resolve-ai/16-prompt-de-implementacao.md
   - docs/resolve-ai/17-plano-de-validacao-da-tarefa.md
   - docs/resolve-ai/18-riscos-da-execucao.md
   - docs/resolve-ai/19-handoff-de-execucao.md
7. Atualizar `.resolve-ai/state.json` com `ultimoPreparo`.
8. Atualizar `resolve-ai status` para mostrar resumo da tarefa preparada.
9. Priorizar riscos críticos antes de features.
10. Marcar `canAutoExecute` sempre como false nesta fase.
11. Criar testes automatizados para o comando.
12. Atualizar README do pacote CLI e README raiz.
13. Criar ADRs 0126 a 0135.
14. Criar docs/sprints/phase-7-handoff.md, phase-7-validation-report.md e phase-7-retrospective.md.
15. Preservar pt151 a pt160 em bootstrap-source/.

Restrições obrigatórias:
- Não implementar comando `resolver` ainda.
- Não implementar MCP.
- Não implementar hooks.
- Não adicionar telemetria.
- Não chamar APIs externas.
- Não alterar código de projetos analisados.
- Não instalar dependências no projeto analisado.
- Não fazer commit no projeto analisado.
- Não sobrescrever documentos existentes por padrão.
- Não executar a tarefa preparada.

Testes obrigatórios:
- preparar em diretório vazio.
- preparar com diagnóstico sem planejamento.
- preparar com diagnóstico e planejamento.
- preparar com risco crítico.
- preparar com docs existentes.
- preparar com Resolve Aí desligado.
- preparar em projeto novo.
- status após preparar.
- todos os testes anteriores devem continuar passando.

Commit:
feat: implement resolve ai execution prep command

Faça push se o remote estiver configurado.

Ao final, gere relatório completo.

Não peça confirmação.
Execute.
```
