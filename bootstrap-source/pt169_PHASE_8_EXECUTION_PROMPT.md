---
title: "Prompt de execução da Phase 8"
phase: "Phase 8 — Resolve Aí Guided Assisted Execution"
status: "Draft"
version: "0.8.0"
public_name: "Resolve Aí"
historical_name: "AI-SEOS"
language: "pt-BR"
---

# Prompt de Execução da Phase 8

Copie este prompt para o Codex após colocar pt161 a pt170 na raiz do projeto.

```text
Leia integralmente todos os arquivos Markdown numerados de pt161 a pt170 na raiz do projeto.

Use também README.md, ROADMAP.md, CHANGELOG.md, GOVERNANCE.md, CONTRIBUTING.md, packages/resolve-ai-cli/*, docs/runtime/*, docs/sprints/phase-7-* e todos os artefatos anteriores como documentos de governança obrigatórios.

Execute agora a Phase 8 — Resolve Aí Guided Assisted Execution.

Objetivo:
Implementar o comando `resolve-ai resolver`, que transforma a tarefa preparada em um pacote de execução assistida, com aprovação humana, prompt final para agente, checklist pós-execução e registro de execução, sem alterar código do produto analisado.

Escopo obrigatório:
1. Implementar comando `resolve-ai resolver`.
2. Implementar aliases:
   - `resolve-ai resolva`
   - `resolve-ai fazer`
3. Ler `.resolve-ai/state.json` quando existir.
4. Ler documentos em `docs/resolve-ai/` quando existirem.
5. Exigir ou recomendar fortemente tarefa preparada por `resolve-ai preparar`.
6. Respeitar o Modo Liga/Desliga.
7. Gerar, sem sobrescrever por padrão:
   - docs/resolve-ai/20-execucao-assistida.md
   - docs/resolve-ai/21-aprovacao-humana.md
   - docs/resolve-ai/22-prompt-final-para-agente.md
   - docs/resolve-ai/23-checklist-pos-execucao.md
   - docs/resolve-ai/24-registro-de-execucao.md
8. Atualizar `.resolve-ai/state.json` com `ultimaExecucaoAssistida`.
9. Manter `canAutoExecute` sempre como false.
10. Atualizar `resolve-ai status` para mostrar execução assistida pendente.
11. Criar testes automatizados para o comando.
12. Atualizar README do pacote CLI e README raiz.
13. Criar ADRs 0136 a 0145.
14. Criar docs/sprints/phase-8-handoff.md, phase-8-validation-report.md e phase-8-retrospective.md.
15. Preservar pt161 a pt170 em bootstrap-source/.

Restrições obrigatórias:
- Não implementar MCP.
- Não implementar hooks.
- Não adicionar telemetria.
- Não chamar APIs externas.
- Não alterar código de projetos analisados.
- Não instalar dependências no projeto analisado.
- Não fazer commit no projeto analisado.
- Não fazer deploy.
- Não executar a tarefa automaticamente.
- Não sobrescrever documentos existentes por padrão.

Testes obrigatórios:
- resolver em diretório vazio.
- resolver com preparo existente.
- resolver com risco crítico.
- resolver com Resolve Aí desligado.
- resolver com docs existentes.
- aliases resolva e fazer.
- status após resolver.
- todos os testes anteriores devem continuar passando.

Commit:
feat: implement resolve ai assisted execution command

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
