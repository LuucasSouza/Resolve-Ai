# ADR 0136 — Adopt `resolver` as Assisted Execution Command

## Status

Accepted

## Contexto

Após `diagnosticar`, `planejar` e `preparar`, o Resolve Aí precisava transformar a tarefa preparada em um pacote de execução assistida.

## Problema

O usuário precisava de um comando claro para chegar ao prompt final de execução sem assumir automação destrutiva.

## Opções consideradas

- Usar `resolver` como execução assistida.
- Manter apenas `preparar`.
- Executar código automaticamente.

## Decisão

Adotar `resolve-ai resolver` como comando público de execução assistida.

## Consequências positivas

- Nome público simples.
- Fluxo natural após `preparar`.
- Mantém a promessa do Resolve Aí sem alterar código automaticamente.

## Consequências negativas

- O nome pode sugerir automação completa; a UX precisa explicar que é assistência controlada.

## Critérios de reversão

Revisar se usuários confundirem consistentemente o comando com execução automática.

## Relação com outras ADRs

Relaciona-se às ADRs 0126, 0135 e 0137.
