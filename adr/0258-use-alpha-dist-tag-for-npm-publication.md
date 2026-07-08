# ADR 0258 — Use Alpha Dist-Tag for npm Publication

## Status

Accepted

## Context

Quando a publicação npm for aprovada, um `npm publish` sem flags marcaria a versão como `latest`, fazendo `npm install -g resolve-ai` entregar um alpha não validado para qualquer usuário.

## Decision

Toda publicação alpha futura deve usar `npm publish --tag alpha`. O dist-tag `latest` só poderá ser usado após decisão explícita registrada em ADR própria, quando houver versão considerada estável.

## Consequences

### Positive

- `npm install -g resolve-ai` não entrega alpha por engano.
- Usuários que querem o alpha optam conscientemente com `resolve-ai@alpha`.

### Negative

- Instruções de instalação precisam explicar o sufixo `@alpha`.

### Neutral

- O primeiro publish de um pacote define `latest` por padrão; por isso a flag é obrigatória já na primeira publicação.

## Alternatives Considered

- Publicar como `latest` por simplicidade: rejeitado; contradiz a classificação pública permitida (pt271/pt272).
- Usar scope privado: rejeitado; o objetivo é alpha público para validação.

## Follow-up

Incluir a flag no comando documentado em `npm-publication-checklist.md` (feito na Phase 18).
