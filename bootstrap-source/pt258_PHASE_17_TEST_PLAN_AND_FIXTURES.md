# pt258 — Phase 17 Test Plan and Fixtures

## 1. Objetivo

Criar cobertura suficiente para garantir que entrevista guiada e correções de validação/diagnóstico não quebrem o fluxo existente.

## 2. Testes obrigatórios da CLI

Rodar:

```bash
npm run build --prefix packages/resolve-ai-cli
npm test --prefix packages/resolve-ai-cli
npm run smoke --prefix packages/resolve-ai-cli
```

Rodar dentro do pacote:

```bash
npm pack --dry-run
```

## 3. Testes do comando `entrevistar`

### 3.1 Projeto vazio

Dado diretório vazio.

Quando rodar:

```bash
resolve-ai começar
resolve-ai ligar
resolve-ai entrevistar
```

Então:

- docs 00, 02 e 03 são criados/preenchidos;
- state tem `ultimaEntrevista`;
- status mostra entrevista;
- próxima ação é `resolve-ai planejar`.

### 3.2 Alias `entrevista`

```bash
resolve-ai entrevista
```

Deve funcionar igual.

### 3.3 Alias `ideia`

```bash
resolve-ai ideia
```

Deve funcionar igual.

### 3.4 Não sobrescrever conteúdo humano

Se `00-project-intake.md` já tiver conteúdo, adicionar seção de entrevista ou preservar.

### 3.5 Ambiente não interativo

Simular stdin não interativo.

Resultado esperado:

- mensagem clara;
- sem crash;
- instruções de preenchimento manual.

## 4. Testes de projeto zero detection

Fixtures:

1. vazio;
2. apenas `teste/`;
3. com `Resolve-Ai/` dentro;
4. com `.resolve-ai/` e `docs/resolve-ai/` apenas;
5. package.json mínimo;
6. Vite React.

## 5. Testes de `validar`

### 5.1 Git com apenas artefatos Resolve Aí

Mudanças:

- docs/resolve-ai/*.md
- .resolve-ai/state.json

Esperado:

- categoria: artefatos Resolve Aí;
- não assustar como mudança de código.

### 5.2 Git com código alterado

Mudança em `src/App.tsx`.

Esperado:

- categoria: código do projeto.

### 5.3 Git com sensível

Mudança em `.env` ou `backup-database.sql`.

Esperado:

- risco alto/crítico;
- conteúdo não copiado;
- recomendação de não commitar.

### 5.4 Sem Git

Esperado:

- mensagem clara sugerindo `git init`.

## 6. Testes de falso positivo

### 6.1 `design-tokens.css`

Não deve ser segredo crítico.

### 6.2 `.env.local`

Deve ser sensível.

### 6.3 `scripts/definir-senhas.js`

Deve ser sensível/alto risco por nome.

## 7. Testes de stack

### 7.1 Vite React

package com `vite`, `react`, `typescript`.

Esperado:

```text
Node.js, TypeScript, Vite, React
```

Não Next.js.

### 7.2 Next.js real

package com `next` ou `next.config.*`.

Esperado:

```text
Next.js
```

## 8. Teste de fluxo completo

```bash
resolve-ai ajuda
resolve-ai começar
resolve-ai ligar
resolve-ai entrevistar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai preparar
resolve-ai resolver
resolve-ai validar
resolve-ai status
```

## 9. Teste de encoding

Verificar acentos em docs gerados.

## 10. Critérios de aceite final

- todos os testes anteriores passam;
- total de testes aumenta;
- smoke cobre pelo menos uma chamada a `entrevistar`;
- package dry-run segue sem `src/` e `tests/`;
- `git diff --check` passa.
