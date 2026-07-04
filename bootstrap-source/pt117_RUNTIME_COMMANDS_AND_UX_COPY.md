---
title: Runtime Commands and UX Copy
phase: Phase 3 — Resolve Aí Runtime Productization
status: Draft
version: 0.1.0-alpha
public_name: Resolve Aí
legacy_technical_name: AI-SEOS
last_updated: 2026-07-04
---

# pt117 — Runtime Commands and UX Copy

## 1. Objetivo

Este documento define os comandos, mensagens e tom da experiência do Resolve Aí Runtime.

A linguagem deve ser:

```text
brasileira
leve
clara
divertida
útil
sem parecer ferramenta gringa traduzida
```

## 2. Comandos principais

```bash
resolve-ai começar
resolve-ai ligar
resolve-ai desligar
resolve-ai status
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai continuar
resolve-ai revisar
resolve-ai entregar
resolve-ai ajuda
```

## 3. Comandos por intenção

### 3.1 Começar

```bash
resolve-ai começar
```

Mensagem:

```text
Bora resolver.
Vou entender se isso aqui é um projeto novo ou um projeto em andamento.
Antes de mexer em qualquer código, vou organizar o contexto.
```

### 3.2 Ligar

```bash
resolve-ai ligar
```

Mensagem:

```text
Resolve Aí ligado.
Vou acompanhar este projeto, organizar contexto e te ajudar a resolver sem bagunça.
```

### 3.3 Desligar

```bash
resolve-ai desligar
```

Mensagem:

```text
Resolve Aí desligado.
Vou parar de injetar contexto e economizar tokens. Quando quiser, é só ligar de novo.
```

### 3.4 Status

```bash
resolve-ai status
```

Mensagem:

```text
Status do Resolve Aí

Estado: ligado
Modo: Projeto em Andamento — Diagnóstico e Continuação
Última ação: diagnóstico inicial
Próxima sugestão: revisar riscos críticos antes de implementar
```

### 3.5 Diagnosticar

```bash
resolve-ai diagnosticar
```

Mensagem:

```text
Vou dar uma olhada geral antes de mexer.
Vou analisar estrutura, stack, riscos, decisões e próximos passos.
```

### 3.6 Planejar

```bash
resolve-ai planejar
```

Mensagem:

```text
Vou transformar o diagnóstico em um plano simples de execução.
Primeiro o que é urgente. Depois o que destrava. Depois o que melhora.
```

### 3.7 Continuar

```bash
resolve-ai continuar
```

Mensagem:

```text
Vou retomar de onde paramos.
Vou ler o último handoff e sugerir o próximo passo mais seguro.
```

### 3.8 Revisar

```bash
resolve-ai revisar
```

Mensagem:

```text
Vou revisar riscos, decisões, documentação e prontidão antes de avançar.
```

### 3.9 Entregar

```bash
resolve-ai entregar
```

Mensagem:

```text
Vou preparar um handoff claro para a próxima pessoa, agente ou etapa.
```

### 3.10 Ajuda

```bash
resolve-ai ajuda
```

Mensagem:

```text
Resolve Aí
Me dá o problema ou a ideia, e eu te ajudo a resolver.

Comandos:
  começar       Começa a usar neste projeto
  ligar         Liga o Resolve Aí
  desligar      Desliga e economiza tokens
  status        Mostra o estado atual
  diagnosticar  Entende o projeto antes de mexer
  planejar      Cria um plano de ação
  continuar     Continua de onde parou
  revisar       Revisa riscos e decisões
  entregar      Gera handoff
```

## 4. Mensagens de proteção

### 4.1 Projeto existente

```text
Esse projeto já tem código.
Vou começar com diagnóstico e planejamento. Nada de sair mexendo sem entender.
```

### 4.2 Risco crítico

```text
Encontrei risco crítico.
Antes de avançar, recomendo resolver isso. Se ignorar, pode dar problema sério depois.
```

### 4.3 Dados sensíveis

```text
Atenção: encontrei possível dado sensível no repositório.
Não vou expor esse conteúdo. Vou registrar o risco e sugerir correção segura.
```

## 5. Tom de voz

Usar frases curtas.

Evitar jargão quando não necessário.

Preferir:

```text
Vou organizar antes de mexer.
```

Em vez de:

```text
Iniciando protocolo de avaliação arquitetural multi-engine.
```

Mas manter rigor técnico nos documentos gerados.

## 6. Critérios de aceite

A UX estará pronta quando:

- comandos públicos estiverem em português;
- mensagens forem claras;
- proteção contra ação destrutiva estiver explícita;
- tom brasileiro estiver consistente;
- documentação técnica continuar rigorosa.
