---
title: "Especificação do comando resolver"
phase: "Phase 8 — Resolve Aí Guided Assisted Execution"
status: "Draft"
version: "0.8.0"
public_name: "Resolve Aí"
historical_name: "AI-SEOS"
language: "pt-BR"
---

# Especificação do comando `resolve-ai resolver`

## 1. Objetivo do comando

O comando `resolve-ai resolver` transforma uma tarefa previamente preparada em um pacote de execução assistida.

Ele deve responder à pergunta:

> "Agora que já diagnosticamos, planejamos e preparamos uma tarefa, como eu peço para a IA executar isso com segurança?"

## 2. Comandos públicos

Comando principal:

```bash
resolve-ai resolver
```

Aliases recomendados:

```bash
resolve-ai resolva
resolve-ai fazer
```

Não usar aliases agressivos como `auto`, `run`, `deploy`, `execute-now` ou equivalentes.

## 3. Comportamento esperado

Quando executado, o comando deve:

1. Verificar se `.resolve-ai/state.json` existe.
2. Verificar se existe uma tarefa preparada (`ultimoPreparo`).
3. Ler documentos `docs/resolve-ai/15` a `19` quando existirem.
4. Se não houver preparo anterior, orientar o usuário a rodar:

```bash
resolve-ai preparar
```

5. Gerar documentos `20` a `24` sem sobrescrever por padrão.
6. Atualizar `.resolve-ai/state.json` com `ultimaExecucaoAssistida`.
7. Atualizar `status` para mostrar a execução assistida.
8. Exibir no terminal um resumo claro.

## 4. Outputs obrigatórios

### `docs/resolve-ai/20-execucao-assistida.md`

Deve conter:

- tarefa selecionada;
- objetivo;
- contexto;
- arquivos possivelmente envolvidos, se inferidos;
- restrições;
- riscos;
- estratégia de execução;
- critérios de parada;
- próximos passos.

### `docs/resolve-ai/21-aprovacao-humana.md`

Deve conter:

- o que será pedido ao agente;
- o que o agente não pode fazer;
- riscos principais;
- checklist de aprovação;
- campo de decisão humana;
- recomendação de não prosseguir se houver risco crítico não mitigado.

### `docs/resolve-ai/22-prompt-final-para-agente.md`

Deve conter o prompt pronto para colar no Codex/Claude/Cursor/Gemini.

Esse prompt deve sempre incluir:

- contexto do projeto;
- tarefa exata;
- arquivos/documentos de referência;
- restrições;
- validação esperada;
- proibição de alterações fora do escopo;
- necessidade de relatório final.

### `docs/resolve-ai/23-checklist-pos-execucao.md`

Deve conter:

- checklist de validação manual;
- checklist técnico;
- testes recomendados;
- verificação de documentação;
- verificação de Git diff;
- critérios para considerar a tarefa concluída.

### `docs/resolve-ai/24-registro-de-execucao.md`

Deve conter:

- status inicial: `pendente`;
- data de preparação;
- tarefa;
- modo aplicado;
- dependências;
- pendências;
- espaço para registrar resultado após execução.

## 5. Estado local

O comando deve atualizar `.resolve-ai/state.json` com:

```json
{
  "ultimaExecucaoAssistida": {
    "criadaEm": "ISO_DATE",
    "tarefa": "...",
    "status": "pendente",
    "canAutoExecute": false,
    "docsGerados": [
      "docs/resolve-ai/20-execucao-assistida.md",
      "docs/resolve-ai/21-aprovacao-humana.md",
      "docs/resolve-ai/22-prompt-final-para-agente.md",
      "docs/resolve-ai/23-checklist-pos-execucao.md",
      "docs/resolve-ai/24-registro-de-execucao.md"
    ]
  }
}
```

## 6. Regras de segurança

`canAutoExecute` deve permanecer `false` nesta fase.

O comando não deve:

- editar código do projeto;
- instalar dependências;
- executar testes do projeto analisado automaticamente;
- commitar;
- fazer push;
- chamar APIs;
- modificar arquivos fora de `.resolve-ai/` e `docs/resolve-ai/`.

## 7. UX recomendada

Mensagem de sucesso:

```text
✅ Pronto. Preparei a execução assistida.

Eu ainda não mexi no seu código.
Criei um prompt seguro em docs/resolve-ai/22-prompt-final-para-agente.md.

Próximo passo:
1. Leia a aprovação humana em docs/resolve-ai/21-aprovacao-humana.md
2. Cole o prompt final no seu agente de IA
3. Depois rode resolve-ai validar
```

Mensagem sem preparo anterior:

```text
Ainda não encontrei uma tarefa preparada.

Rode primeiro:
resolve-ai preparar

Assim eu consigo escolher uma tarefa segura antes de montar o prompt de execução.
```
