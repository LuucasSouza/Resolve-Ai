---
title: "Rollback Plan"
status: "Release Candidate"
version: "0.1.0-alpha.0"
phase: "Phase 18"
owner: "Resolve Aí Maintainers"
last_updated: "2026-07-07"
---

# Rollback Plan — v0.1.0-alpha.0

Plano de reação para problemas após uma publicação alpha **futura**. Nada foi publicado na Phase 18; este plano existe antes da publicação de propósito.

Estratégia principal: **deprecar e corrigir para frente**. Não depender de `npm unpublish`.

## Cenário 1 — Pacote publicado com arquivo errado

Exemplos: artefato local, feedback privado, arquivo sensível no tarball.

1. Tratar como P0.
2. Deprecar imediatamente:
   ```bash
   npm deprecate resolve-ai@0.1.0-alpha.0 "Alpha com problema conhecido. Use versão posterior."
   ```
3. Se houver dado sensível real, avaliar `npm unpublish` da versão (exceção justificada) e rotacionar qualquer segredo exposto.
4. Corrigir o campo `files`/conteúdo, repetir a auditoria de dry-run e publicar novo alpha (`0.1.0-alpha.1`) com `--tag alpha`.
5. Registrar no changelog e abrir issue pública.

## Cenário 2 — README com promessa errada

Exemplo: texto que sugere stable ou validação humana ampla.

1. Corrigir o README no repositório.
2. Publicar novo alpha com README corrigido (o README do npm só muda com nova versão).
3. Atualizar a descrição do GitHub Release se existir.
4. Registrar no changelog.

## Cenário 3 — CLI quebrada no Windows

1. Tratar como P1.
2. Reproduzir com o guia `docs/getting-started/install-local-cli.md`.
3. Documentar workaround imediato (fallback `node dist/index.js`, aliases sem acento).
4. Corrigir, testar em Windows, publicar novo alpha e deprecar o anterior.
5. Abrir issue pública com o status.

## Cenário 4 — Issue de segurança

1. Tratar como P0.
2. Seguir `SECURITY.md`; não detalhar exploit publicamente antes da correção.
3. Deprecar a versão afetada com aviso claro.
4. Publicar correção como novo alpha o mais rápido possível.
5. Registrar no changelog e, corrigido, abrir issue pública explicando o impacto.

## Cenário 5 — Versão/tag errada

Exemplos: tag não confere com `package.json`, tag apontando para commit errado.

1. Não reutilizar tag publicada. Criar tag correta nova.
2. Se o pacote npm saiu com versão errada, deprecar e publicar a versão correta.
3. Atualizar o GitHub Release para apontar para a tag correta.
4. Registrar no changelog.

## Regras gerais

- Toda ação de rollback é manual e registrada no changelog.
- `npm deprecate` é a ferramenta padrão; `npm unpublish` é exceção para dados sensíveis.
- Comunicação pública honesta: issue aberta descrevendo o problema e o estado.
