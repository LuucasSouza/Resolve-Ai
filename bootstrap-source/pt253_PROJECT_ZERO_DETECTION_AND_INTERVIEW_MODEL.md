# pt253 — Project Zero Detection and Interview Model

## 1. Problema

O Resolve Aí hoje usa heurísticas de arquivos para diagnosticar projetos. Isso funciona bem em projetos existentes, mas falha em projetos do zero, onde quase não há arquivos para analisar.

Nesses casos, a fonte de verdade não é o filesystem. É a intenção do usuário.

## 2. Definição de projeto do zero

Um projeto deve ser classificado como `projeto-do-zero` quando apresentar sinais como:

- diretório sem `package.json`, `README.md`, `src/`, `app/`, `pages/`, `index.html`, `pyproject.toml`, `requirements.txt`, `Cargo.toml`, `go.mod` ou equivalente;
- diretório contendo apenas `teste/`, `docs/resolve-ai/`, `.resolve-ai/` ou arquivos gerados pelo próprio Resolve Aí;
- diretório criado recentemente com poucos arquivos não estruturais;
- ausência de Git não deve ser suficiente sozinha para projeto do zero, mas é sinal auxiliar;
- presença do repositório `Resolve-Ai/` clonado dentro da pasta não deve ser tratada como stack do projeto-alvo.

## 3. Pastas a ignorar na detecção

A inspeção deve ignorar, por padrão:

```text
node_modules/
.git/
.resolve-ai/
docs/resolve-ai/
teste/
Resolve-Ai/
resolve-ai/
coverage/
dist/
build/
.tmp/
.cache/
```

A regra `Resolve-Ai/` é importante porque alguns participantes baixaram/clonaram o repositório da CLI dentro do projeto testado, confundindo o diagnóstico.

## 4. Estados possíveis

### 4.1 Projeto vazio

Poucos ou nenhum arquivo relevante.

Recomendação:

```bash
resolve-ai entrevistar
```

### 4.2 Projeto novo iniciado

Há alguns arquivos iniciais, mas pouca estrutura.

Recomendação:

```bash
resolve-ai entrevistar
resolve-ai planejar
```

### 4.3 Projeto existente

Há stack, código, arquivos de configuração e sinais de implementação.

Recomendação:

```bash
resolve-ai diagnosticar
resolve-ai planejar
```

### 4.4 Projeto legado/em andamento

Há estrutura grande, múltiplas pastas, sinais de migração, backups, scripts, dados históricos ou documentação antiga.

Recomendação:

```bash
resolve-ai diagnosticar
```

Com modo:

```text
Projeto em Andamento — Diagnóstico e Continuação
```

## 5. Modelo de decisão

A detecção deve calcular sinais positivos e negativos.

Exemplo:

```text
projectFiles = arquivos relevantes ignorando pastas auxiliares
hasCode = src/app/index.html/scripts
hasManifest = package.json/pyproject/go.mod/etc
hasDocsOnly = apenas docs/teste/.resolve-ai
hasResolveAiRepoInside = Resolve-Ai/package etc
```

Regra simplificada:

```text
if hasDocsOnly and not hasCode and not hasManifest:
  projeto-do-zero
elif not hasCode and not hasManifest:
  projeto-do-zero
elif hasManifest and lowCode:
  projeto-novo-iniciado
elif hasCode and highSensitiveRisk:
  projeto-existente-ou-legado
else:
  projeto-existente
```

## 6. Mensagem para projeto vazio

```text
Esse projeto parece estar começando do zero.
Em vez de tentar adivinhar, posso fazer uma entrevista rápida para entender sua ideia.

Sugestão:
resolve-ai entrevistar
```

## 7. Impacto nos documentos

Quando `diagnosticar` detectar projeto do zero, o documento `01-current-state-assessment.md` deve registrar:

- pouca estrutura detectada;
- diagnóstico por arquivos tem baixa confiança;
- entrevista recomendada;
- nenhum problema crítico inferido apenas por ausência de testes/CI;
- ausência de Git como recomendação, não risco crítico.

## 8. Anti-patterns

Não fazer:

- tratar projeto vazio como problemático;
- criar backlog genérico demais sem perguntar a ideia;
- inferir stack por presença do próprio repo Resolve-Ai;
- classificar falta de testes como red em projeto do zero;
- criar alarme de segurança sem evidência.

## 9. Critérios de teste

Criar fixtures para:

1. diretório vazio;
2. diretório com apenas `teste/`;
3. diretório com `Resolve-Ai/` clonado dentro;
4. diretório com package.json mínimo;
5. Vite React;
6. projeto legado com backups.
