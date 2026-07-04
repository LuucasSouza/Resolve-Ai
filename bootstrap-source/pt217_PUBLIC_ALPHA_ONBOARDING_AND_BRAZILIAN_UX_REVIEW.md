# Resolve Aí — Phase 13

> Projeto público: **Resolve Aí**  
> Promessa: **“Me dá o problema ou a ideia, e eu te ajudo a resolver.”**  
> Nome técnico/histórico: **AI-SEOS**  
> Fase: **Phase 13 — Real User Alpha Validation and Release Decision**


## 1. Revisão de Onboarding e UX Brasileira

O Resolve Aí não deve parecer uma ferramenta gringa traduzida. Ele deve soar brasileiro, claro, leve e confiável.

## 2. Objetivo

Revisar a experiência pública antes do alpha:

- README.
- Quickstart.
- Mensagens da CLI.
- Nome dos comandos.
- Explicação do Modo Liga/Desliga.
- Promessa pública.
- Limitações conhecidas.

## 3. Princípios de linguagem

### 3.1 Claro antes de técnico

Preferir:

> Rode `resolve-ai diagnosticar` para entender o estado do projeto.

Evitar:

> Execute o subsistema heurístico de inspeção contextual.

### 3.2 Divertido sem virar piada

Pode ser leve:

> Resolve Aí ligado. Bora organizar essa bagunça.

Mas não deve comprometer confiança:

> Relaxa que eu faço tudo sozinho.

### 3.3 Promessa sem exagero

Promessa oficial:

> Me dá o problema ou a ideia, e eu te ajudo a resolver.

Não prometer:

- que gera software completo sozinho;
- que substitui engenheiro;
- que garante arquitetura perfeita;
- que corrige tudo automaticamente.

## 4. Checklist de UX pública

- [ ] README explica em 30 segundos o que é.
- [ ] README mostra comandos principais.
- [ ] README explica que alpha é experimental.
- [ ] Quickstart funciona para usuário brasileiro.
- [ ] `resolver` deixa claro que não executa código sozinho.
- [ ] `ligar/desligar/status` são fáceis de entender.
- [ ] Limitações conhecidas estão visíveis.
- [ ] Instalação local está simples.
- [ ] Não há jargão excessivo no caminho inicial.

## 5. Arquivo de revisão

Criar:

```text
docs/release/v0.1.0-alpha-brazilian-ux-review.md
```

## 6. Template

```markdown
# Revisão de UX Brasileira — v0.1.0-alpha

## Promessa pública

## Pontos claros

## Pontos confusos

## Termos técnicos demais

## Mensagens que precisam melhorar

## Risco de promessa exagerada

## Ajustes feitos nesta fase

## Ajustes pendentes

## Decisão de UX

GO / LIMITED GO / NO-GO
```

## 7. Copy recomendada para alpha

### README curto

```text
O Resolve Aí é um assistente de engenharia com CLI em português para organizar ideias, diagnosticar projetos, criar planos e preparar execuções com IA sem sair bagunçando o código.
```

### Modo Liga/Desliga

```text
Ligado: o Resolve Aí acompanha o projeto e organiza contexto.
Desligado: ele para de interferir e economiza contexto.
```

### Resolver

```text
O comando resolver não altera seu código sozinho. Ele prepara um pacote de execução assistida para você ou seu agente de IA usar com segurança.
```
