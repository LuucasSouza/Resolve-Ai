# pt277 — Post-Release Feedback and Rollback Plan

## Objetivo

Definir como coletar feedback e reagir a problemas após uma publicação alpha futura.

## Feedback manual

Sem telemetria. Sem envio automático.

Fontes permitidas:

- GitHub Issues;
- `teste/feedback.md`;
- comentários manuais;
- logs sanitizados;
- prints sem dados sensíveis.

## Nunca pedir

- `.env`;
- tokens;
- senhas;
- dados de cliente;
- backups;
- chaves de API;
- banco de dados real;
- conteúdo sensível.

## Issue template

Criar ou atualizar:

```text
.github/ISSUE_TEMPLATE/alpha_feedback.md
```

Campos:

- perfil;
- sistema operacional;
- projeto novo/existente;
- comandos testados;
- o que funcionou;
- o que confundiu;
- algum comando pareceu perigoso;
- recomendação.

## Triagem interna

Usar internamente:

```text
P0 — segurança/perda de dados
P1 — comando quebrado
P2 — UX que bloqueia usuário
P3 — linguagem/documentação
P4 — ideia futura
```

Não expor jargão P0/P1 para usuário iniciante.

## Rollback plan

Criar:

```text
docs/release/v0.1.0-alpha-rc/rollback-plan.md
```

Cenários:

- pacote publicado com arquivo errado;
- README com promessa errada;
- CLI quebrada no Windows;
- issue de segurança;
- versão/tag errada.

Ações:

- deprecar versão;
- publicar alpha corrigido;
- atualizar README;
- abrir issue pública;
- registrar no changelog.
