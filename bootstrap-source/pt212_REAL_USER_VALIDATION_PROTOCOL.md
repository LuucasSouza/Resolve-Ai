# Resolve Aí — Phase 13

> Projeto público: **Resolve Aí**  
> Promessa: **“Me dá o problema ou a ideia, e eu te ajudo a resolver.”**  
> Nome técnico/histórico: **AI-SEOS**  
> Fase: **Phase 13 — Real User Alpha Validation and Release Decision**


## 1. Protocolo de Validação com Usuários Reais

Este protocolo define como conduzir validação com pessoas reais sem capturar dados sensíveis, sem depender de telemetria e sem forçar publicação prematura.

## 2. Perfis obrigatórios

A validação deve buscar pelo menos um participante por perfil:

### 2.1 Non-Technical Builder

Pessoa que tem uma ideia, problema ou projeto, mas não se considera desenvolvedora.

Objetivo da sessão:

- Ver se a promessa é compreendida.
- Ver se a pessoa entende o que a CLI faz e o que não faz.
- Ver se `começar`, `diagnosticar`, `planejar`, `preparar`, `resolver` e `validar` parecem naturais.
- Ver se a documentação gerada ajuda ou assusta.

### 2.2 Vibe Coder

Pessoa que usa IA para programar, mas ainda não possui disciplina forte de arquitetura, riscos, decisão e validação.

Objetivo da sessão:

- Ver se o Resolve Aí reduz bagunça.
- Ver se os docs 00–29 ajudam a conduzir o agente de código.
- Ver se a separação entre preparar/resolver/validar é útil.
- Ver se o modo Liga/Desliga é entendido.

### 2.3 Professional Engineer

Pessoa técnica, dev, tech lead, architect ou maintainer.

Objetivo da sessão:

- Ver se a documentação é confiável.
- Ver se as heurísticas são aceitáveis.
- Ver se o risco e o backlog fazem sentido.
- Ver se o CLI é previsível, seguro e versionável.

## 3. Regras de privacidade

Não coletar:

- Código proprietário.
- Arquivos `.env`.
- Tokens.
- Chaves privadas.
- Dados pessoais reais.
- Banco de dados real.
- Credenciais.
- Screenshots com informação sensível.

Coletar apenas:

- Perfil do usuário.
- Sistema operacional.
- Node/npm versions, se a pessoa aceitar.
- Tipo geral de projeto.
- Dificuldades percebidas.
- Comandos executados.
- Resultado geral.
- Feedback textual sanitizado.

## 4. Roteiro de sessão

### 4.1 Antes da sessão

1. Explicar o que é o Resolve Aí.
2. Explicar que é alpha.
3. Explicar que a CLI não envia dados para servidores.
4. Explicar que nenhum dado sensível deve ser compartilhado.
5. Confirmar que o usuário pode parar a qualquer momento.

### 4.2 Durante a sessão

O facilitador deve observar:

- Onde a pessoa trava.
- Quais palavras geram dúvida.
- Se a pessoa entende que `resolver` não altera código sozinho.
- Se o fluxo parece longo demais.
- Se o status ajuda.
- Se os documentos gerados são úteis.

### 4.3 Depois da sessão

Gerar um relatório sanitizado com:

- Resultado: passou / passou com ressalvas / falhou.
- Principais confusões.
- Bugs encontrados.
- Sugestões.
- Severidade.
- Recomendação de mudança.

## 5. Critérios de aprovação por perfil

### Non-Technical Builder

A sessão passa se:

- A pessoa entende a promessa.
- Consegue seguir o quickstart com ajuda moderada.
- Entende que Resolve Aí organiza e orienta, não substitui tudo sozinho.
- Consegue explicar o próximo passo após `status`.

### Vibe Coder

A sessão passa se:

- A pessoa consegue usar o fluxo em um projeto próprio ou fake.
- Usa pelo menos um documento gerado para orientar uma IA de código.
- Entende preparar/resolver/validar.
- Percebe valor em reduzir improviso.

### Professional Engineer

A sessão passa se:

- A pessoa considera o comportamento seguro.
- Não encontra riscos graves de privacidade.
- Entende a rastreabilidade documental.
- Aceita o produto como alpha experimental.

## 6. Resultado agregado

Após as sessões, classificar:

- **GO**: 3/3 perfis passam sem P0/P1 aberto.
- **LIMITED GO**: 2/3 perfis passam, ou há P1 contornável/documentado.
- **NO-GO**: qualquer P0, ou P1 que impeça uso básico.
