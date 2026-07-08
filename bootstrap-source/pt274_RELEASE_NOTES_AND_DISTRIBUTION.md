# pt274 — Release Notes and Distribution Plan

## Objetivo

Criar release notes e plano de distribuição para o alpha público.

## Artefatos obrigatórios

Criar em `docs/release/v0.1.0-alpha-rc/`:

```text
release-notes.md
distribution-checklist.md
github-release-draft.md
known-limitations.md
```

## Release notes

Estrutura mínima:

1. O que é o Resolve Aí;
2. Status: alpha / release candidate;
3. O que esta versão faz;
4. Comandos disponíveis;
5. Fluxo para projeto novo;
6. Fluxo para projeto existente;
7. Segurança;
8. Como instalar localmente;
9. Como testar via Node;
10. Limitações conhecidas;
11. Como enviar feedback.

## Fluxo para projeto novo

```bash
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

## Mensagem de segurança obrigatória

```text
O Resolve Aí não executa código automaticamente.
O comando resolver prepara um pacote e um prompt de execução assistida.
Você continua no controle.
```

## Distribuição

Se ainda não publicado, documentar fallback:

```bash
node caminho/para/Resolve-Ai/packages/resolve-ai-cli/dist/index.js ajuda
```

Se publicado futuramente, documentar:

```bash
npm install -g resolve-ai@alpha
resolve-ai ajuda
```

Não afirmar publicação se ela ainda não aconteceu.
