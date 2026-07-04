# ADR 0144 — Adopt Post-Execution Checklist

## Status

Accepted

## Contexto

Após o agente executar uma tarefa, o usuário precisa validar resultado antes de considerar pronto.

## Problema

Sem checklist, a conclusão pode depender de impressão subjetiva.

## Opções consideradas

- Sem checklist.
- Checklist em prompt.
- Documento dedicado.

## Decisão

Criar `docs/resolve-ai/23-checklist-pos-execucao.md`.

## Consequências positivas

- Prepara a Phase 9.
- Ajuda a verificar funcionalidade, técnica, segurança e documentação.
- Mantém validação explícita.

## Consequências negativas

- Exige preenchimento manual após execução.

## Critérios de reversão

Revisar quando `resolve-ai validar` puder preencher parte do checklist automaticamente.

## Relação com outras ADRs

Relaciona-se às ADRs 0140 e 0145.
