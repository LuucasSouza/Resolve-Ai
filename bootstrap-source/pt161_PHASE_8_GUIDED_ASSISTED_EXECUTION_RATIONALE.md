---
title: "Phase 8 — Rationale da Execução Assistida"
phase: "Phase 8 — Resolve Aí Guided Assisted Execution"
status: "Draft"
version: "0.8.0"
public_name: "Resolve Aí"
historical_name: "AI-SEOS"
language: "pt-BR"
---

# Phase 8 — Rationale da Execução Assistida

## 1. Por que esta fase existe

A Phase 7 entregou o comando `resolve-ai preparar`. Esse comando seleciona uma tarefa segura, gera documentos de execução e cria um pacote de orientação para um próximo agente ou pessoa executar. Porém, após preparar, o usuário ainda precisa de um passo intermediário: transformar a tarefa preparada em uma **execução assistida, controlada e validável**.

A Phase 8 existe para criar esse passo sem transformar o Resolve Aí em um auto-coder perigoso.

O objetivo não é deixar a CLI alterar arbitrariamente o código do projeto. O objetivo é permitir que o Resolve Aí ajude o usuário a:

- confirmar qual tarefa será resolvida;
- revisar riscos antes da execução;
- gerar um prompt de execução claro para Codex/Claude/Cursor/Gemini;
- criar um registro de aprovação humana;
- criar checklist de validação pós-execução;
- atualizar o estado local com a execução assistida preparada;
- manter rastreabilidade entre diagnóstico, planejamento, tarefa preparada e execução.

## 2. O que a Phase 8 NÃO deve fazer

A Phase 8 não deve:

- implementar MCP;
- implementar hooks;
- executar alterações automáticas em código do projeto analisado;
- chamar APIs externas;
- acionar agentes de IA diretamente;
- instalar dependências no projeto analisado;
- fazer commit, push ou deploy no projeto analisado;
- transformar `resolve-ai resolver` em um comando destrutivo;
- prometer que o problema foi resolvido sem validação.

## 3. Decisão de produto

O comando público recomendado para esta fase é:

```bash
resolve-ai resolver
```

Mas nesta fase o significado de `resolver` é:

> "Preparar uma execução assistida e segura para resolver uma tarefa específica."

Não significa:

> "Modificar o código automaticamente sem aprovação."

Essa distinção deve aparecer claramente na UX.

## 4. Princípio central

O Resolve Aí deve agir como um copiloto de engenharia, não como uma ferramenta que toma controle do projeto.

A regra de segurança é:

```text
Diagnosticar antes de planejar.
Planejar antes de preparar.
Preparar antes de resolver.
Validar antes de declarar pronto.
```

## 5. Como isso se encaixa no fluxo atual

Fluxo atual:

```bash
resolve-ai começar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai preparar
```

Novo fluxo após Phase 8:

```bash
resolve-ai começar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai preparar
resolve-ai resolver
resolve-ai status
```

O comando `resolver` deve gerar documentos adicionais:

```text
docs/resolve-ai/20-execucao-assistida.md
docs/resolve-ai/21-aprovacao-humana.md
docs/resolve-ai/22-prompt-final-para-agente.md
docs/resolve-ai/23-checklist-pos-execucao.md
docs/resolve-ai/24-registro-de-execucao.md
```

## 6. Por que não pular direto para execução automática

Porque o Resolve Aí ainda está em fase de public alpha e seu diferencial é organização segura, não automação agressiva.

A execução automática exigiria:

- sandbox confiável;
- política robusta de permissões;
- diff preview;
- rollback;
- testes automatizados;
- controle de secrets;
- integração com Git;
- autorização explícita por tarefa;
- auditoria de alterações;
- políticas diferentes para projeto novo, existente e legado.

Isso deve ser uma fase futura.

## 7. Resultado esperado da Phase 8

Ao final da Phase 8, o Resolve Aí deve conseguir:

- ler a tarefa preparada;
- gerar uma execução assistida;
- criar prompt final para agente de IA;
- registrar que a execução precisa de aprovação humana;
- atualizar `status` com a tarefa em fase de execução assistida;
- manter `canAutoExecute` como `false`;
- orientar o usuário com clareza brasileira e sem jargão desnecessário.

## 8. Mensagem de produto

A mensagem pública deve ser simples:

> O Resolve Aí não sai mexendo no seu projeto do nada. Ele prepara o caminho, mostra o que será feito, pede aprovação e te entrega um prompt seguro para executar com sua IA de programação.
