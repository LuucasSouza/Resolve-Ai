# ADR 0137 — Keep Execution Non-Automatic by Default

## Status

Accepted

## Contexto

Phase 8 introduz `resolve-ai resolver`, mas o runtime ainda não possui sandbox, diff preview, rollback ou política avançada de permissões.

## Problema

Execução automática poderia alterar código, dados ou configuração sem controle suficiente.

## Opções consideradas

- Autoexecutar a tarefa.
- Gerar apenas documentos e prompt.
- Bloquear qualquer orientação de execução.

## Decisão

Manter `canAutoExecute=false` e gerar somente pacote de execução assistida.

## Consequências positivas

- Reduz risco operacional.
- Mantém humano no controle.
- Preserva compatibilidade com public alpha.

## Consequências negativas

- O usuário ainda precisa colar o prompt em um agente externo.

## Critérios de reversão

Só reconsiderar após sandbox, aprovação explícita, rollback e validação automática.

## Relação com outras ADRs

Relaciona-se às ADRs 0102, 0129 e 0143.
