# pt276 — GitHub Release and Tagging Preparation

## Objetivo

Preparar tag e GitHub Release futuros sem criar nenhum deles automaticamente.

## Proibido nesta fase

Não executar:

```bash
git tag
git push --tags
gh release create
```

sem autorização explícita.

## Tag sugerida futura

```text
v0.1.0-alpha.0
```

ou a tag correspondente à versão definida no package.

## Checklist de tag

Criar:

```text
docs/release/v0.1.0-alpha-rc/git-tag-checklist.md
```

Com:

- [ ] worktree limpo;
- [ ] build passou;
- [ ] testes passaram;
- [ ] smoke passou;
- [ ] npm dry-run passou;
- [ ] changelog atualizado;
- [ ] release notes criadas;
- [ ] versão confere;
- [ ] mantenedor aprovou tag.

## GitHub release draft

Criar:

```text
docs/release/v0.1.0-alpha-rc/github-release-draft.md
```

Pronto para copiar/colar, com:

- título;
- status alpha;
- instalação;
- comandos;
- fluxos;
- segurança;
- limitações;
- feedback.

## Maintainer approval gate

Criar:

```text
docs/release/v0.1.0-alpha-rc/maintainer-approval-gate.md
```

Com checkboxes desmarcados:

- [ ] aprovo criar tag;
- [ ] aprovo criar GitHub Release;
- [ ] aprovo publicar no npm.
