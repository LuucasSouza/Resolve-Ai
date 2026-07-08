# ADR 0257 — Require Maintainer Approval Before npm Publish

## Status

Accepted

## Context

ADR-0180 e ADR-0194 já mantinham a publicação npm manual e sujeita a aprovação. A Phase 18 cria os artefatos finais de release, o que aumenta o risco de alguém (humano ou agente) tratar a preparação como autorização implícita para publicar.

## Decision

Nenhum `npm publish` pode ser executado enquanto os checkboxes de `docs/release/v0.1.0-alpha-rc/maintainer-approval-gate.md` estiverem desmarcados. A aprovação é manual, explícita, registrada com data e autor, e feita somente pelo mantenedor após ler auditoria de pacote, known limitations, rollback plan e decisão go/no-go.

## Consequences

### Positive

- Elimina publicação acidental ou automatizada.
- Cria trilha de auditoria da decisão de publicar.

### Negative

- Publicação depende da disponibilidade do mantenedor.

### Neutral

- O gate vale também para agentes de IA executando fases futuras.

## Alternatives Considered

- Aprovação implícita ao concluir a Phase 18: rejeitada; preparar não é aprovar.
- Automação de publicação via CI com aprovação por PR: rejeitada nesta fase; proibida pelas restrições da Phase 18.

## Follow-up

Registrar cada aprovação (ou recusa) na tabela de registro do gate.
