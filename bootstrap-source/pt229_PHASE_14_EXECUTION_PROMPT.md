# pt229 — Phase 14 Execution Prompt

> Projeto: Resolve Aí  
> Fase: Phase 14  
> Uso: prompt canônico para Codex

---

## Prompt

```text
Leia integralmente todos os arquivos Markdown numerados de pt221 a pt230 na raiz do projeto.

Use também README.md, ROADMAP.md, CHANGELOG.md, GOVERNANCE.md, CONTRIBUTING.md, docs/release/*, docs/alpha-validation/*, docs/community/*, templates/feedback/*, templates/validation/*, packages/resolve-ai-cli/* e todos os artefatos anteriores como documentos de governança obrigatórios.

Antes de executar, verifique se a reconciliação da Phase 13 foi feita:
- pt211 a pt220 preservados em bootstrap-source/;
- docs/sprints/phase-13-bootstrap-source-reconciliation.md existente ou registro equivalente;
- phase-13-validation-report.md atualizado com a observação de rastreabilidade.

Se a reconciliação da Phase 13 ainda não tiver sido feita, não bloqueie a Phase 14 automaticamente, mas registre isso como pendência de governança em docs/sprints/phase-14-validation-report.md.

Execute agora a Phase 14 — Real User Alpha Validation and Release Decision Gate.

Objetivo:
Executar, preparar ou registrar formalmente validação real com usuários dos três perfis oficiais do Resolve Aí, analisar feedback, revisar readiness, revisar package dry-run e registrar decisão GO / LIMITED GO / NO-GO para public alpha, sem publicar npm e sem criar tag.

Perfis obrigatórios:
1. Non-Technical Builder.
2. Vibe Coder.
3. Professional Engineer.

Escopo obrigatório:
1. Criar ou atualizar plano de validação real:
   - docs/alpha-validation/real-users/phase-14-real-user-validation-plan.md
2. Criar ou atualizar matriz de validação:
   - docs/alpha-validation/real-users/phase-14-real-user-validation-matrix.md
3. Criar ou atualizar relatórios por perfil:
   - docs/alpha-validation/real-users/phase-14-non-technical-builder-session.md
   - docs/alpha-validation/real-users/phase-14-vibe-coder-session.md
   - docs/alpha-validation/real-users/phase-14-professional-engineer-session.md
4. Se houver usuários reais disponíveis durante a execução, registrar feedback real de forma anonimizada.
5. Se não houver usuários reais disponíveis, registrar explicitamente como pendência. Não inventar validação.
6. Criar resumo consolidado:
   - docs/alpha-validation/real-users/phase-14-consolidated-findings.md
7. Criar resumo de score por perfil:
   - docs/alpha-validation/real-users/profile-score-summary.md
8. Criar templates:
   - templates/feedback/real-alpha-participant-feedback.md
   - templates/validation/real-alpha-session-report-template.md
   - templates/validation/real-alpha-moderator-script.md
   - templates/validation/real-alpha-observation-sheet.md
9. Criar ou atualizar backlog de feedback:
   - docs/community/real-alpha-feedback-backlog.md
   - docs/community/real-alpha-feedback-triage.md
10. Revisar package dry-run dentro de packages/resolve-ai-cli.
11. Criar ou atualizar documentos de release:
   - docs/release/v0.1.0-alpha-phase-14-readiness-scorecard.md
   - docs/release/v0.1.0-alpha-phase-14-go-no-go-decision.md
   - docs/release/v0.1.0-alpha-phase-14-blockers.md
   - docs/release/v0.1.0-alpha-phase-14-package-review.md
12. Recalcular readiness score honestamente, partindo do score anterior:
   - 79/100 — LIMITED GO
13. Criar ADRs 0196 a 0205.
14. Atualizar índices:
   - README.md
   - ROADMAP.md
   - CHANGELOG.md
   - adr/README.md
   - docs/README.md
   - docs/alpha-validation/README.md
   - docs/community/README.md
   - docs/release/README.md
   - docs/sprints/README.md
   - templates/README.md
   - packages/resolve-ai-cli/README.md
15. Criar:
   - docs/sprints/phase-14-handoff.md
   - docs/sprints/phase-14-validation-report.md
   - docs/sprints/phase-14-retrospective.md
16. Preservar pt221 a pt230 em bootstrap-source/.

Restrições obrigatórias:
- Não publicar no npm.
- Não criar tag Git.
- Não criar GitHub release.
- Não declarar stable.
- Não inventar validação real.
- Não coletar dados sensíveis reais.
- Não chamar APIs externas.
- Não implementar MCP.
- Não implementar hooks.
- Não adicionar telemetria.
- Não reescrever histórico Git.
- Não executar comandos destrutivos.
- Não alterar o comportamento dos comandos da CLI, salvo correções mínimas estritamente necessárias e justificadas.

Testes obrigatórios:
- npm run build --prefix packages/resolve-ai-cli
- npm test --prefix packages/resolve-ai-cli
- npm run smoke --prefix packages/resolve-ai-cli
- npm pack --dry-run dentro de packages/resolve-ai-cli
- fluxo local mínimo em diretório temporário:
  ajuda -> começar -> ligar -> diagnosticar -> planejar -> preparar -> resolver -> validar -> status
- git diff --check

Decisão obrigatória:
Registrar uma das decisões:
- GO
- LIMITED GO
- NO-GO

Regras de decisão:
- Se não houver validação real com pelo menos um usuário por perfil, a decisão máxima permitida é LIMITED GO.
- Se houver qualquer P0 aberto, a decisão deve ser NO-GO.
- Se houver P1 de segurança aberto, a decisão deve ser NO-GO.
- Se houver confusão relevante sobre o comando resolver parecer execução automática, a decisão deve ser NO-GO para npm público.
- Se houver validação real completa, sem P0/P1, package dry-run limpo e readiness >= 85, pode decidir GO.
- Não inflar score.

Commit:
docs: execute phase 14 real alpha validation gate

Faça push se o remote estiver configurado.

Ao final, gere relatório contendo:
- arquivos criados;
- arquivos atualizados;
- validações reais executadas ou pendentes;
- participantes por perfil;
- feedback consolidado;
- score anterior e novo;
- decisão GO / LIMITED GO / NO-GO;
- blockers restantes;
- resultado do package dry-run;
- testes executados;
- ADRs criadas;
- commit realizado;
- status do push;
- próxima ação recomendada.

Não peça confirmação.
Execute.
```
