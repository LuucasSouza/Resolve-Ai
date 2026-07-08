---
title: "Post-Release Feedback Plan"
status: "Release Candidate"
version: "0.1.0-alpha.0"
phase: "Phase 18"
owner: "Resolve Aí Maintainers"
last_updated: "2026-07-07"
---

# Post-Release Feedback Plan — v0.1.0-alpha.0

Como coletar e tratar feedback após uma publicação alpha **futura**. Sem telemetria. Sem envio automático. O participante controla o que compartilha.

## Fontes permitidas

- GitHub Issues (templates existentes: `alpha-feedback.yml`, `bug-cli.yml`, `ux-confusion.yml`, `docs-improvement.yml`, `safety-concern.yml`);
- `teste/feedback.md` preenchido e enviado manualmente;
- comentários manuais (mensagem, e-mail);
- logs sanitizados (sem caminhos pessoais, sem segredos);
- prints sem dados sensíveis.

## Nunca pedir

- `.env`;
- tokens;
- senhas;
- dados de cliente;
- backups;
- chaves de API;
- banco de dados real;
- conteúdo sensível de qualquer tipo.

## Campos esperados no feedback

- perfil (Non-Technical Builder, Vibe Coder, Professional Engineer);
- sistema operacional;
- projeto novo ou existente;
- comandos testados;
- o que funcionou;
- o que confundiu;
- algum comando pareceu perigoso;
- recomendação (usaria de novo? indicaria?).

## Triagem interna

Classificação usada internamente (não expor jargão P0/P1 para usuário iniciante):

```text
P0 — segurança/perda de dados
P1 — comando quebrado
P2 — UX que bloqueia usuário
P3 — linguagem/documentação
P4 — ideia futura
```

Fluxo: registrar em `docs/community/alpha-feedback-log.md` → triar por perfil/severidade → alimentar backlog de melhoria → corrigir com evidência → registrar fix aplicado.

## Cadência

- P0: reação imediata + `rollback-plan.md`.
- P1/P2: corrigir no próximo alpha (`0.1.0-alpha.N+1`).
- P3/P4: acumular para fase de polish.

## Regra de honestidade

Feedback real nunca é inventado. Se não houver feedback, o registro diz "pendente" (ADR-0187).
