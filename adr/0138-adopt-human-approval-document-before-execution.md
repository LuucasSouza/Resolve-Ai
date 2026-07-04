# ADR 0138 — Adopt Human Approval Document Before Execution

## Status

Accepted

## Contexto

Execução assistida precisa deixar claro o que será pedido ao agente e quais riscos existem.

## Problema

Sem aprovação explícita, o usuário pode executar prompts sem entender escopo, riscos e validação.

## Opções consideradas

- Gerar prompt direto.
- Exigir aprovação interativa.
- Criar documento de aprovação humana.

## Decisão

Gerar `docs/resolve-ai/21-aprovacao-humana.md` como gate documental obrigatório.

## Consequências positivas

- Torna o controle humano visível.
- Ajuda usuários não técnicos a revisar riscos.
- Cria trilha de auditoria.

## Consequências negativas

- Adiciona mais um passo antes da execução.

## Critérios de reversão

Revisar se um fluxo interativo futuro substituir o documento sem perder rastreabilidade.

## Relação com outras ADRs

Relaciona-se às ADRs 0131 e 0141.
