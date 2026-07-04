---
title: "Documentos gerados pelo resolver"
phase: "Phase 8 — Resolve Aí Guided Assisted Execution"
status: "Draft"
version: "0.8.0"
public_name: "Resolve Aí"
historical_name: "AI-SEOS"
language: "pt-BR"
---

# Documentos Gerados pelo `resolve-ai resolver`

## 1. Objetivo

Este documento define os arquivos que o comando `resolve-ai resolver` deve gerar.

Todos os documentos devem ser criados em:

```text
docs/resolve-ai/
```

E não devem sobrescrever arquivos existentes por padrão.

## 2. Lista oficial

```text
20-execucao-assistida.md
21-aprovacao-humana.md
22-prompt-final-para-agente.md
23-checklist-pos-execucao.md
24-registro-de-execucao.md
```

## 3. Template — 20-execucao-assistida.md

Estrutura recomendada:

```markdown
# 20 — Execução Assistida

## Resumo

## Tarefa selecionada

## Por que esta tarefa agora

## Contexto usado

## Escopo permitido

## Fora de escopo

## Estratégia de execução

## Riscos principais

## Critérios de parada

## Próximo passo
```

## 4. Template — 21-aprovacao-humana.md

Estrutura recomendada:

```markdown
# 21 — Aprovação Humana

## Antes de executar

O Resolve Aí ainda não alterou código.
Este documento existe para você revisar antes de colar o prompt no agente.

## O que será pedido

## O que NÃO será permitido

## Riscos

## Checklist de aprovação

- [ ] Entendi a tarefa
- [ ] Entendi os riscos
- [ ] Concordo com o escopo
- [ ] Sei como validar
- [ ] Não há risco crítico sem mitigação

## Decisão

- [ ] Aprovado
- [ ] Reprovado
- [ ] Precisa dividir em tarefa menor
- [ ] Precisa diagnosticar melhor

Responsável:
Data:
Observações:
```

## 5. Template — 22-prompt-final-para-agente.md

Estrutura recomendada:

```markdown
# 22 — Prompt Final para Agente

Copie o bloco abaixo e cole no seu agente de IA de programação.

```text
Você está dentro de um projeto real.
Use os documentos em docs/resolve-ai/ como contexto obrigatório.

Tarefa:
...

Escopo permitido:
...

Fora de escopo:
...

Restrições obrigatórias:
1. Não faça alterações fora do escopo.
2. Não instale dependências sem pedir aprovação.
3. Não faça commit.
4. Não faça deploy.
5. Não remova dados.
6. Preserve documentação existente.

Validação:
...

Ao final, gere relatório com:
- arquivos alterados;
- decisões tomadas;
- testes executados;
- riscos remanescentes;
- próximos passos.
```
```

## 6. Template — 23-checklist-pos-execucao.md

Estrutura recomendada:

```markdown
# 23 — Checklist Pós-Execução

## Validação funcional

- [ ] A tarefa foi concluída?
- [ ] O comportamento esperado funciona?
- [ ] Não houve alteração fora do escopo?

## Validação técnica

- [ ] Testes relevantes foram executados?
- [ ] Build/lint/typecheck foram executados, quando aplicável?
- [ ] Não houve novos erros óbvios?

## Validação de segurança

- [ ] Nenhum segredo foi exposto?
- [ ] Nenhum dado sensível foi copiado?
- [ ] Permissões relevantes foram preservadas?

## Validação de documentação

- [ ] docs/resolve-ai/ foi atualizado se necessário?
- [ ] Decisões relevantes foram registradas?

## Resultado

- [ ] Aprovado
- [ ] Reprovado
- [ ] Precisa ajuste
```

## 7. Template — 24-registro-de-execucao.md

Estrutura recomendada:

```markdown
# 24 — Registro de Execução

## Status

Pendente

## Tarefa

## Data de preparação

## Prompt usado

Ver `22-prompt-final-para-agente.md`.

## Resultado após execução

A preencher.

## Arquivos alterados

A preencher.

## Testes executados

A preencher.

## Decisões tomadas

A preencher.

## Riscos remanescentes

A preencher.
```

## 8. Qualidade esperada

Os documentos devem ser úteis mesmo para quem não é programador.

Eles precisam explicar o suficiente para a pessoa saber se deve ou não autorizar a execução.
