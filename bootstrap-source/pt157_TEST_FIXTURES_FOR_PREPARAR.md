---
project: Resolve Aí
phase: Phase 7 — Guided Execution Prep
status: Draft
language: pt-BR
public_name: Resolve Aí
legacy_name: AI-SEOS
---

# pt157 — Test Fixtures e Casos de Validação para `preparar`

## Objetivo

Garantir que `resolve-ai preparar` seja seguro, idempotente e útil.

## Casos obrigatórios

### 1. Diretório vazio

Esperado:

- não falhar;
- avisar ausência de diagnóstico;
- gerar pacote de baixa confiança ou orientar `diagnosticar`;
- não alterar código.

### 2. Projeto com diagnóstico, sem planejamento

Esperado:

- avisar ausência de planejamento;
- recomendar `resolve-ai planejar`;
- confiança baixa/média.

### 3. Projeto com diagnóstico e planejamento

Esperado:

- selecionar tarefa;
- gerar documentos 15 a 19;
- atualizar estado;
- status refletir preparo.

### 4. Risco crítico

Esperado:

- escolher hardening/segurança;
- não escolher feature;
- `riskLevel` vermelho;
- `approvalRequired` true.

### 5. Docs existentes

Esperado:

- não sobrescrever;
- avisar;
- manter idempotência.

### 6. Resolve Aí desligado

Esperado:

- avisar;
- não usar contexto pesado;
- ainda poder gerar pacote mínimo;
- registrar estado.

### 7. Projeto novo

Esperado:

- tarefa de intake/MVP/documentação;
- não sugerir deploy;
- não sugerir implementar app inteiro.

### 8. Projeto profissional

Esperado:

- escolher próxima tarefa do plano;
- incluir validação;
- linguagem técnica quando apropriado.

## Regressão

Todos os testes existentes devem continuar passando:

- ajuda;
- começar;
- ligar;
- desligar;
- status;
- diagnosticar;
- planejar.

## Comando

```bash
npm test --prefix packages/resolve-ai-cli
```

## Aceite

- mínimo 30 testes totais após Phase 7;
- zero falhas;
- nenhuma chamada externa;
- nenhum arquivo de código de produto alterado em fixtures.
