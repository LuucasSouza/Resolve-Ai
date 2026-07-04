# Resolve Aí — Phase 13

> Projeto público: **Resolve Aí**  
> Promessa: **“Me dá o problema ou a ideia, e eu te ajudo a resolver.”**  
> Nome técnico/histórico: **AI-SEOS**  
> Fase: **Phase 13 — Real User Alpha Validation and Release Decision**


## 1. Revisão do Conteúdo do Pacote NPM

A Phase 12 executou `npm pack --dry-run` dentro do pacote e observou que o tarball simulado inclui 73 arquivos, com `src/` e `tests/` entrando no pacote.

Isso não é necessariamente errado para alpha, mas precisa ser uma decisão explícita.

## 2. Objetivo

Definir o conteúdo aceitável para o pacote `resolve-ai` ou `resolve-ai-cli` antes de publicação.

## 3. Perguntas de decisão

1. O pacote deve incluir apenas `dist/` e documentação mínima?
2. O pacote deve incluir `src/` por transparência alpha?
3. O pacote deve incluir `tests/`?
4. O pacote deve incluir docs extensos?
5. O pacote deve apontar bin corretamente para `dist/index.js`?
6. O pacote funciona após instalação simulada?
7. O pacote possui arquivos sensíveis acidentalmente?
8. O nome npm final será `resolve-ai`, `@resolve-ai/cli`, ou outro?

## 4. Política recomendada para alpha

Para public alpha, preferir pacote enxuto:

Inclui:

- `dist/`
- `README.md`
- `LICENSE`
- `package.json`

Opcional:

- `CHANGELOG.md`

Não incluir por padrão:

- `tests/`
- fixtures internas extensas;
- `bootstrap-source/`;
- docs completas do framework;
- arquivos de sprint;
- ADRs completas;
- `.resolve-ai/`;
- `docs/resolve-ai/` gerados localmente.

## 5. Ações da Phase 13

A Phase 13 deve:

1. Criar relatório de package review.
2. Executar `npm pack --dry-run` dentro do pacote.
3. Listar arquivos incluídos.
4. Identificar arquivos desnecessários.
5. Decidir se ajusta `files` no `package.json` agora ou deixa para Phase 14.
6. Garantir que não há dados sensíveis.
7. Registrar recomendação de publicação.

## 6. Arquivo de saída

Criar:

```text
docs/release/v0.1.0-alpha-package-content-review.md
```

## 7. Template de relatório

```markdown
# Package Content Review — v0.1.0-alpha

## Resultado do npm pack --dry-run

## Arquivos incluídos

## Arquivos desejados

## Arquivos desnecessários

## Riscos

## Recomendação

- GO / LIMITED GO / NO-GO para package content

## Decisão

```

## 8. Critérios de aprovação

GO para pacote se:

- bin funciona;
- `dist/` está presente;
- README está presente;
- LICENSE está presente;
- não há dados sensíveis;
- não há arquivos de usuário;
- conteúdo extra está justificado.

NO-GO se:

- pacote não executa;
- inclui dados sensíveis;
- falta README/LICENSE;
- bin aponta para arquivo inexistente;
- pacote depende de caminho local.
