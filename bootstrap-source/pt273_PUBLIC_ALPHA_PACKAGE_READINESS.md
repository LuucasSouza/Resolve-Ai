# pt273 — Public Alpha Package Readiness

## Objetivo

Auditar o pacote `packages/resolve-ai-cli` para futura publicação alpha.

## Checklist package.json

Validar:

- `name` correto;
- `version` alpha;
- `bin` apontando para `dist/index.js`;
- `files` mínimo e intencional;
- `license` presente;
- `repository` correto;
- `description` clara;
- scripts `build`, `test`, `smoke`;
- ausência de dependências desnecessárias.

## Versionamento

Manter pre-release:

```json
{
  "version": "0.1.0-alpha.0"
}
```

ou incrementar somente com ADR e changelog.

## Dry-run obrigatório

Executar dentro de `packages/resolve-ai-cli`:

```bash
npm pack --dry-run
```

Registrar em:

```text
docs/release/v0.1.0-alpha-rc/npm-package-audit.md
```

com:

- número de arquivos;
- tamanho do pacote;
- tamanho descompactado;
- arquivos inesperados;
- decisão: aprovado, aprovado com ressalvas ou bloqueado.

## Arquivos proibidos no pacote

- `.env`;
- `.resolve-ai/`;
- `docs/resolve-ai/`;
- feedbacks privados;
- backups;
- dados reais;
- artefatos locais de teste;
- tokens ou segredos.

## Critérios de bloqueio

Bloquear publicação se:

- build falhar;
- testes falharem;
- smoke falhar;
- pacote incluir dados sensíveis;
- pacote incluir artefatos locais;
- README prometer stable;
- binário não funcionar.
