# ADR 0261 — Adopt Manual Feedback Loop for Public Alpha

## Status

Accepted

## Context

Após uma publicação alpha pública, o volume de usuários pode crescer além do círculo privado. Existe tentação de adicionar telemetria ou coleta automática para compensar. As ADRs 0184, 0227 e 0228 já proíbem telemetria e exigem feedback controlado pelo participante.

## Decision

Manter o loop de feedback do alpha público 100% manual: GitHub Issues (templates existentes), `teste/feedback.md` enviado manualmente, comentários diretos, logs sanitizados e prints sem dados sensíveis. Triagem interna por severidade (P0–P4) sem expor jargão ao usuário iniciante. Nunca solicitar `.env`, tokens, senhas, chaves, backups ou dados de clientes.

## Consequences

### Positive

- Privacidade preservada; participante controla o que compartilha.
- Coerência com a promessa pública de ausência de telemetria.

### Negative

- Menos dados de uso; visão parcial dos problemas reais.
- Feedback depende de esforço ativo do usuário.

### Neutral

- O plano completo vive em `docs/release/v0.1.0-alpha-rc/post-release-feedback-plan.md`.

## Alternatives Considered

- Telemetria anônima opt-in: rejeitada nesta fase; proibida pelas restrições da Phase 18.
- Formulário externo automatizado: rejeitado; cria dependência e coleta fora do controle do participante.

## Follow-up

Reavaliar telemetria opt-in somente em fase futura, com ADR própria e consentimento explícito.
