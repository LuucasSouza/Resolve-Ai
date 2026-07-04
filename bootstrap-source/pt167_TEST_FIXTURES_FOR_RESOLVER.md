---
title: "Fixtures e validação do resolver"
phase: "Phase 8 — Resolve Aí Guided Assisted Execution"
status: "Draft"
version: "0.8.0"
public_name: "Resolve Aí"
historical_name: "AI-SEOS"
language: "pt-BR"
---

# Fixtures e Validação do `resolve-ai resolver`

## 1. Objetivo dos testes

Garantir que `resolve-ai resolver` prepara execução assistida com segurança, sem alterar código do projeto analisado.

## 2. Testes obrigatórios

### 2.1 Diretório vazio

Cenário:

- sem `.resolve-ai/`;
- sem `docs/resolve-ai/`.

Esperado:

- comando não quebra;
- mensagem orienta rodar `começar`, `diagnosticar`, `planejar` ou `preparar`;
- não cria execução agressiva de baixa confiança.

### 2.2 Projeto com preparo existente

Cenário:

- `.resolve-ai/state.json` com `ultimoPreparo`;
- docs 15 a 19 existentes.

Esperado:

- cria docs 20 a 24;
- atualiza state com `ultimaExecucaoAssistida`;
- `canAutoExecute=false`.

### 2.3 Projeto com risco crítico

Cenário:

- state indica risco crítico;
- tarefa preparada relacionada a segurança.

Esperado:

- pacote prioriza mitigação;
- documento de aprovação destaca risco;
- prompt final proíbe ações destrutivas;
- execução pode ser classificada como alta ou bloqueada.

### 2.4 Resolve Aí desligado

Cenário:

- state `enabled=false`.

Esperado:

- comando avisa que está desligado;
- não gera pacote por padrão, salvo se a especificação atual decidir permitir com aviso;
- recomenda `resolve-ai ligar`.

### 2.5 Documentos existentes

Cenário:

- docs 20 a 24 já existem.

Esperado:

- não sobrescreve;
- informa que existem;
- mantém state coerente.

### 2.6 Alias

Testar:

```bash
resolve-ai resolver
resolve-ai resolva
resolve-ai fazer
```

### 2.7 Status após resolver

Esperado:

- `resolve-ai status` mostra execução assistida pendente.

### 2.8 Regressão

Todos os testes anteriores precisam continuar passando.

## 3. Restrições a verificar por teste/scan

Não deve aparecer nos arquivos novos da CLI:

- MCP runtime;
- hooks;
- telemetria;
- chamadas externas;
- `fetch` para APIs;
- execução de comandos destrutivos;
- alteração de arquivos fora de `.resolve-ai/` e `docs/resolve-ai/`.

## 4. Comando de teste

```bash
npm test --prefix packages/resolve-ai-cli
```

## 5. Validação manual recomendada

Rodar em diretório temporário:

```bash
node packages/resolve-ai-cli/dist/index.js começar
node packages/resolve-ai-cli/dist/index.js diagnosticar
node packages/resolve-ai-cli/dist/index.js planejar
node packages/resolve-ai-cli/dist/index.js preparar
node packages/resolve-ai-cli/dist/index.js resolver
node packages/resolve-ai-cli/dist/index.js status
```

## 6. Critério de aceite

A Phase 8 só passa se:

- testes automatizados passam;
- fluxo manual passa;
- docs 20 a 24 são criados;
- state é atualizado;
- status mostra execução assistida;
- nenhum código de produto é alterado;
- `canAutoExecute` permanece false.
