---
title: "Aprovação humana e gates de controle"
phase: "Phase 8 — Resolve Aí Guided Assisted Execution"
status: "Draft"
version: "0.8.0"
public_name: "Resolve Aí"
historical_name: "AI-SEOS"
language: "pt-BR"
---

# Aprovação Humana e Gates de Controle

## 1. Princípio

O Resolve Aí deve manter o humano no controle.

A ferramenta pode organizar, orientar e preparar. Porém, antes de qualquer alteração real em código de produto, o usuário precisa entender:

- o que será feito;
- por que será feito;
- quais riscos existem;
- como validar;
- quando parar.

## 2. Gate 1 — Diagnóstico existente

Antes de resolver, o Resolve Aí deve verificar se há diagnóstico.

Se não houver, mensagem recomendada:

```text
Ainda não tenho diagnóstico suficiente desse projeto.
Rode resolve-ai diagnosticar antes de tentar resolver uma tarefa.
```

Exceção: permitir baixa confiança apenas para tarefas documentais simples, mas registrar aviso.

## 3. Gate 2 — Planejamento existente

Antes de resolver, deve haver planejamento ou tarefa preparada.

Se não houver:

```text
Ainda não tenho um plano de continuação.
Rode resolve-ai planejar para transformar o diagnóstico em prioridades.
```

## 4. Gate 3 — Tarefa preparada

O comando `resolver` deve depender preferencialmente de `resolve-ai preparar`.

Sem tarefa preparada, não gerar prompt final agressivo.

## 5. Gate 4 — Risco crítico

Se houver risco crítico em `.resolve-ai/state.json` ou nos documentos de risco, a execução deve ser classificada como bloqueada ou exigir aprovação manual explícita no documento `21-aprovacao-humana.md`.

Nesta fase, o comando não deve aceitar flags do tipo `--ignorar-risco`.

## 6. Gate 5 — Escopo claro

O pacote de execução deve declarar:

- escopo permitido;
- fora de escopo;
- arquivos/documentos de referência;
- critérios de validação.

Se não conseguir inferir escopo, deve avisar:

```text
O escopo ainda está amplo demais. Vou gerar uma execução assistida de baixa confiança.
Revise antes de colar no agente.
```

## 7. Gate 6 — Proibição de automação destrutiva

O comando `resolver` não deve:

- apagar arquivos;
- mover diretórios;
- alterar banco;
- alterar secrets;
- fazer deploy;
- publicar pacote;
- fazer push;
- executar scripts destrutivos.

Ele só gera documentos e prompt.

## 8. Documento de aprovação humana

O arquivo `21-aprovacao-humana.md` deve conter campos claros:

```markdown
## Decisão humana

- [ ] Aprovado para execução assistida
- [ ] Reprovado
- [ ] Precisa de mais diagnóstico
- [ ] Precisa quebrar em tarefa menor

Responsável:
Data:
Observações:
```

## 9. UX brasileira

Evitar linguagem pesada.

Bom:

```text
Calma. Antes de mexer no código, vamos confirmar se essa tarefa está segura.
```

Ruim:

```text
Execution authorization gate failed due to invalid precondition state.
```

## 10. Definition of Done da segurança da Phase 8

A Phase 8 só está pronta quando:

- `resolver` não altera código;
- `canAutoExecute` permanece false;
- há documentos de aprovação;
- riscos críticos bloqueiam ou alertam;
- prompt final inclui restrições claras;
- testes cobrem os principais cenários;
- status mostra a execução assistida pendente.
