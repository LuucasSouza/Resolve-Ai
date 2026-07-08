# pt278 — Phase 18 Test Plan and Checklist

## Testes obrigatórios

Executar:

```bash
npm run build --prefix packages/resolve-ai-cli
npm test --prefix packages/resolve-ai-cli
npm run smoke --prefix packages/resolve-ai-cli
```

Dentro do pacote:

```bash
cd packages/resolve-ai-cli
npm pack --dry-run
```

Também:

```bash
git diff --check
```

## Cenário projeto novo

Em pasta temporária fora do repo:

```bash
node caminho/dist/index.js ajuda
node caminho/dist/index.js começar
node caminho/dist/index.js ligar
node caminho/dist/index.js entrevistar
node caminho/dist/index.js diagnosticar
node caminho/dist/index.js planejar
node caminho/dist/index.js preparar
node caminho/dist/index.js resolver
node caminho/dist/index.js validar
node caminho/dist/index.js status
```

Validar:

- `entrevistar` aparece na ajuda;
- entrevista feita não é recomendada novamente;
- plano usa a ideia;
- preparar cria tarefa concreta;
- resolver não executa código;
- validar explica falta de Git;
- status mostra próxima ação prioritária.

## Cenário projeto existente

Criar projeto fake com `package.json` e rodar sem entrevista obrigatória.

Validar:

- projeto em andamento detectado;
- safety gates preservados;
- docs legados não migrados automaticamente.

## Cenário sensível

Criar nomes falsos:

```text
.env
backup.sql
secrets.json
```

Sem conteúdo real.

Validar:

- risco detectado por caminho/nome;
- conteúdo não copiado;
- segurança priorizada.

## Cenário falso positivo token

Criar:

```text
adr/0095-adopt-token-saving-context-strategy.md
src/design-tokens.css
```

Validar que não vira segredo crítico.

## Checklist de release candidate

Criar:

```text
docs/release/v0.1.0-alpha-rc/release-candidate-checklist.md
```

Com:

- [ ] build passou;
- [ ] testes passaram;
- [ ] smoke passou;
- [ ] npm dry-run passou;
- [ ] git diff --check passou;
- [ ] README revisado;
- [ ] CHANGELOG revisado;
- [ ] known limitations claras;
- [ ] npm publish não executado;
- [ ] tag não criada;
- [ ] release não criado.
