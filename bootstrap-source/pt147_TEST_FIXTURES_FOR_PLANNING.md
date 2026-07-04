# pt147 — Test Fixtures and Validation Cases for `planejar`

> Objetivo: definir os testes obrigatórios para a Phase 6.

---

## 1. Testes mínimos

Executar:

```bash
npm test --prefix packages/resolve-ai-cli
```

Todos os testes existentes devem continuar passando.

---

## 2. Casos obrigatórios

### Caso 1 — Diretório vazio

Fluxo:

```bash
resolve-ai planejar
```

Esperado:

- não quebrar;
- avisar baixa confiança;
- sugerir `resolve-ai diagnosticar`;
- criar docs de plano básico ou não criar plano profundo, conforme decisão implementada;
- registrar estado sem erro.

### Caso 2 — Projeto diagnosticado

Preparar `.resolve-ai/state.json` com diagnóstico fake.

Executar:

```bash
resolve-ai planejar
```

Esperado:

- criar documentos `10` a `14`;
- atualizar estado;
- status mostra último plano.

### Caso 3 — Projeto com risco crítico

Estado fake com risco de dados sensíveis.

Esperado:

- primeira sprint prioriza hardening/segurança;
- backlog contém item P0;
- prompts proíbem push/deploy.

### Caso 4 — Documentos existentes

Criar previamente `docs/resolve-ai/10-plano-de-continuacao.md`.

Esperado:

- não sobrescrever;
- avisar que já existe;
- continuar criando arquivos faltantes.

### Caso 5 — Idempotência

Rodar `planejar` duas vezes.

Esperado:

- segunda execução não duplica conteúdo;
- não sobrescreve arquivos;
- estado permanece válido.

### Caso 6 — Status pós-planejamento

Executar:

```bash
resolve-ai status
```

Esperado:

- mostra último diagnóstico, se existir;
- mostra último plano;
- mostra próxima ação sugerida.

---

## 3. Teste manual recomendado

Em diretório temporário:

```bash
node packages/resolve-ai-cli/dist/index.js começar
node packages/resolve-ai-cli/dist/index.js diagnosticar
node packages/resolve-ai-cli/dist/index.js planejar
node packages/resolve-ai-cli/dist/index.js status
```

---

## 4. Segurança dos testes

Testes não devem:

- tocar em projetos reais;
- acessar rede;
- depender de API externa;
- alterar diretórios fora de fixture/temp;
- exigir variáveis de ambiente reais.

---

## 5. Métrica de aceite

A Phase 6 exige:

- todos os testes anteriores passando;
- novos testes de `planejar` passando;
- pelo menos 24 testes totais esperados, se 18 já existem;
- nenhum comportamento destrutivo.
