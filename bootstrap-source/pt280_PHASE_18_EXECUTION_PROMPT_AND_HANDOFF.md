# pt280 — Phase 18 Execution Prompt and Handoff

## Prompt para Codex

Cole o prompt abaixo no Codex a partir da raiz do repositório.

```text
Leia integralmente todos os arquivos Markdown numerados de pt271 a pt280 na raiz do projeto.

Use também README.md, ROADMAP.md, CHANGELOG.md, GOVERNANCE.md, CONTRIBUTING.md, packages/resolve-ai-cli/*, docs/release/*, docs/alpha-validation/*, docs/community/*, docs/sprints/phase-17b-* e todos os artefatos anteriores como documentos de governança obrigatórios.

Execute agora a Phase 18 — Public Alpha Release Candidate & Maintainer Approval Gate.

Contexto:
A Phase 17B foi concluída com 87/87 testes passando, commit 17d4455, score 88/100 — LIMITED GO muito forte. Não haverá validação humana adicional antes desta próxima fase. Portanto, a Phase 18 deve preparar um release candidate honesto, sem declarar stable e sem publicar automaticamente.

Objetivo:
Preparar o Resolve Aí para uma decisão final de publicação alpha pública, com documentação, release notes, npm dry-run audit, GitHub release draft, known limitations, rollback plan, feedback plan e gate explícito de aprovação do mantenedor.

Escopo obrigatório:
1. Preservar pt271 a pt280 em bootstrap-source/.
2. Criar docs/release/v0.1.0-alpha-rc/README.md.
3. Criar release-candidate-checklist.md.
4. Criar npm-publication-checklist.md.
5. Criar npm-package-audit.md.
6. Criar npm-publication-decision.md.
7. Criar github-release-draft.md.
8. Criar git-tag-checklist.md.
9. Criar release-notes.md.
10. Criar known-limitations.md.
11. Criar rollback-plan.md.
12. Criar post-release-feedback-plan.md.
13. Criar distribution-checklist.md.
14. Criar maintainer-approval-gate.md.
15. Revisar README.md para status alpha/release candidate, não stable.
16. Revisar quickstart e instalação local.
17. Revisar package.json do CLI e documentar auditoria.
18. Atualizar CHANGELOG.md.
19. Atualizar ROADMAP.md.
20. Atualizar docs/release/README.md.
21. Atualizar docs/alpha-validation/README.md.
22. Atualizar docs/community/README.md se necessário.
23. Criar ADRs 0256 a 0265.
24. Atualizar adr/README.md e docs/architecture/decision-log.md.
25. Criar docs/sprints/phase-18-public-alpha-rc-handoff.md.
26. Criar docs/sprints/phase-18-public-alpha-rc-validation-report.md.
27. Criar docs/sprints/phase-18-public-alpha-rc-retrospective.md.
28. Criar docs/release/v0.1.0-alpha-phase-18-readiness-scorecard.md.
29. Criar docs/release/v0.1.0-alpha-phase-18-go-no-go-decision.md.

Restrições obrigatórias:
- Não publicar no npm.
- Não executar npm publish.
- Não criar tag Git.
- Não criar GitHub release.
- Não declarar stable.
- Não declarar produção.
- Não esconder falta de validação humana real.
- Não adicionar telemetria.
- Não criar GitHub Actions de publicação.
- Não automatizar feedback.
- Não coletar dados sensíveis.
- Não alterar comportamento de execução do CLI, exceto pequenos ajustes de documentação/package se necessários.
- Não remover safety gates.
- Não commitar artefatos gerados por execução local da CLI, como .resolve-ai/ ou docs/resolve-ai/.
- Não incluir feedbacks sensíveis no pacote npm.

Testes obrigatórios:
- npm run build --prefix packages/resolve-ai-cli
- npm test --prefix packages/resolve-ai-cli
- npm run smoke --prefix packages/resolve-ai-cli
- cd packages/resolve-ai-cli && npm pack --dry-run
- git diff --check

Auditoria obrigatória:
- Verificar que npm pack dry-run não inclui .resolve-ai/.
- Verificar que npm pack dry-run não inclui docs/resolve-ai/.
- Verificar que npm pack dry-run não inclui .env.
- Verificar que npm pack dry-run não inclui feedbacks privados.
- Registrar número de arquivos, tamanho do pacote e decisão no npm-package-audit.md.

Score:
Partir de 88/100 — LIMITED GO muito forte.
Resultado máximo permitido sem validação humana real: 90/100 — RELEASE CANDIDATE READY, aguardando aprovação de mantenedor.
Não declarar GO stable.

Commit sugerido:
chore: prepare public alpha release candidate

Faça push se o remote estiver configurado.

Ao final, gere relatório contendo:
- arquivos criados;
- arquivos atualizados;
- package audit;
- testes executados;
- ADRs criadas;
- score anterior e novo;
- decisão GO / LIMITED GO / RELEASE CANDIDATE READY / NO-GO;
- blockers restantes;
- commit realizado;
- status do push;
- próxima ação recomendada.

Não peça confirmação.
Execute.
```

## Próxima fase possível

Se Phase 18 passar e o mantenedor autorizar explicitamente:

```text
Phase 19 — Public Alpha Publication Execution
```

Se Phase 18 encontrar problemas:

```text
Phase 18B — Release Candidate Fixes
```
