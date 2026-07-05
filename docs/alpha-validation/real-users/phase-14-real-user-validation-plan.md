---
title: "Phase 14 Real User Validation Plan"
status: "Pending Execution"
version: "0.1.0-alpha.0"
phase: "Phase 14"
owner: "Resolve Ai Maintainers"
last_updated: "2026-07-05"
---

# Phase 14 Real User Validation Plan

## Objetivo

Executar validacao alpha moderada com usuarios reais dos tres perfis oficiais do Resolve Ai antes de qualquer publicacao npm publica.

Perfis obrigatorios:

- Non-Technical Builder.
- Vibe Coder.
- Professional Engineer.

## Estado desta execucao

Nenhum usuario real esteve disponivel durante esta execucao da Phase 14. A validacao real permanece pendente e nao foi inventada.

## Escopo da sessao

Fluxo padrao:

```text
ajuda -> começar -> ligar -> diagnosticar -> planejar -> preparar -> resolver -> validar -> status
```

Cada sessao deve usar projeto simulado, sanitizado ou diretorio temporario. Dados sensiveis, nomes pessoais, tokens, chaves, dumps, `.env` reais e informacoes confidenciais nao devem ser coletados.

## Criterios de sucesso

- Participante entende o que o Resolve Ai faz.
- Participante entende que `resolver` e execucao assistida, nao automacao destrutiva.
- Participante entende que `validar` orienta revisao e nao roda testes automaticamente.
- Participante identifica proximo passo a partir dos documentos gerados.
- Nenhum P0 ou P1 de seguranca e observado.

## Criterios de decisao

- Sem uma sessao real por perfil, a decisao maxima e LIMITED GO.
- Qualquer P0 aberto exige NO-GO.
- Qualquer P1 de seguranca exige NO-GO.
- Confusao relevante sobre `resolver` parecer execucao automatica exige NO-GO para npm publico.

## Proxima acao

Agendar ao menos uma sessao por perfil usando os templates da Phase 14 e registrar feedback anonimizado.
