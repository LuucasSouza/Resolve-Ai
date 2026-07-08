# pt275 — npm Publication Guardrails

## Regra principal

A Phase 18 **não publica no npm**.

Não executar:

```bash
npm publish
```

A ação máxima permitida é:

```bash
npm pack --dry-run
```

## Tag futura

Quando houver autorização explícita, publicar com:

```bash
npm publish --tag alpha
```

Não publicar como `latest` sem decisão explícita.

## Checklist de publicação futura

Criar:

```text
docs/release/v0.1.0-alpha-rc/npm-publication-checklist.md
```

Itens:

- [ ] build passou;
- [ ] testes passaram;
- [ ] smoke passou;
- [ ] npm dry-run revisado;
- [ ] pacote não contém dados sensíveis;
- [ ] pacote não contém artefatos locais;
- [ ] README não promete stable;
- [ ] versão é alpha;
- [ ] publicação será com `--tag alpha`;
- [ ] mantenedor aprovou explicitamente.

## Decisão de publicação

Criar:

```text
docs/release/v0.1.0-alpha-rc/npm-publication-decision.md
```

Com:

```text
Decisão atual: NÃO PUBLICADO
Estado: pronto para aprovação / bloqueado / aprovado com ressalvas
Motivo:
Aprovação do mantenedor:
```

## Rollback futuro

Se uma versão alpha futura tiver problema:

```bash
npm deprecate resolve-ai@<version> "Alpha com problema conhecido. Use versão posterior."
```

Não depender de unpublish como estratégia principal.
