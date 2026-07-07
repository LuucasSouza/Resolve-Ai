# pt257 — Windows CLI UX and Encoding Hardening

## 1. Contexto

Testes reais em Windows revelaram:

- `resolve-ai` nem sempre está no PATH após instalação local;
- usuários precisam chamar a CLI via Node apontando para `dist/index.js`;
- alguns arquivos Markdown podem apresentar acentos quebrados;
- terminais variam bastante em encoding, acentuação e suporte a Unicode.

## 2. Objetivos

Melhorar experiência Windows sem publicar npm e sem alterar arquitetura da CLI.

## 3. Quickstart Windows

Documentação oficial deve priorizar:

```bash
cd packages/resolve-ai-cli
npm link
```

Depois, no projeto testado:

```bash
resolve-ai ajuda
```

## 4. Fallback via Node

Documentar alternativa:

```bash
node C:\caminho\para\Resolve-Ai\packages\resolve-ai-cli\dist\index.js ajuda
```

Em `COMECE_AQUI.md`, deixar claro que se `resolve-ai` não funcionar, isso não significa que o Resolve Aí quebrou; pode ser apenas PATH/link.

## 5. Mensagem de ajuda

`resolve-ai ajuda` deve incluir:

```text
Fluxo recomendado:
começar → ligar → diagnosticar → planejar → preparar → resolver → validar → status
```

E:

```text
Se o comando global não funcionar no Windows, rode npm link dentro de packages/resolve-ai-cli.
```

## 6. Dependência entre comandos

Adicionar seção:

```text
Dá para rodar comandos isolados, mas o melhor resultado vem nesta ordem...
```

Isso veio diretamente do feedback Professional Engineer que apontou dúvida inicial sobre dependências.

## 7. Encoding

Garantir que todo arquivo gerado seja escrito como UTF-8.

Pontos de revisão:

- templates internos;
- `writeFile`/`writeFileSync`;
- conteúdo com emojis/acentos;
- Markdown gerado em Windows.

## 8. Teste manual recomendado

No Windows:

```bash
node packages/resolve-ai-cli/dist/index.js ajuda
node packages/resolve-ai-cli/dist/index.js começar
node packages/resolve-ai-cli/dist/index.js entrevistar
```

Abrir documentos gerados no VS Code e confirmar:

- `ação` aparece como `ação`, não quebrado;
- `diagnóstico` aparece correto;
- `próxima` aparece correto.

## 9. Saídas sem linhas em branco excessivas

Garantir que comandos principais não imprimam linhas vazias no topo.

Já corrigido parcialmente na Phase 15B, mas deve entrar em teste de regressão.

## 10. Critérios de aceite

- documentação Windows atualizada;
- ajuda explica fluxo recomendado;
- arquivos novos são UTF-8;
- testes não quebram;
- nenhum comando novo depende de acento obrigatório;
- aliases sem acento continuam funcionando.
