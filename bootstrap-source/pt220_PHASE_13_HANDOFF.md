# Resolve Aí — Phase 13

> Projeto público: **Resolve Aí**  
> Promessa: **“Me dá o problema ou a ideia, e eu te ajudo a resolver.”**  
> Nome técnico/histórico: **AI-SEOS**  
> Fase: **Phase 13 — Real User Alpha Validation and Release Decision**


## Handoff — Phase 13

## 1. Nome da fase

**Phase 13 — Real User Alpha Validation and Release Decision**

## 2. Estado de entrada

A Phase 12 fechou com:

- Readiness: `80/100`
- Decisão: `LIMITED GO`
- P0: nenhum
- P1 principal: validação real com usuários pendente
- P1/P2 técnicos corrigidos: stack detection, risk calibration, copy de resolver, BOM package.json
- npm publish: não executado
- tag Git: não criada

## 3. Objetivo de saída

Ao final da Phase 13, o projeto deve ter uma decisão formal sobre o próximo passo:

- **GO** para Phase 14 — Public Alpha Release Execution;
- **LIMITED GO** para alpha restrito/manual;
- **NO-GO** para Alpha Blocker Resolution.

## 4. Arquivos esperados

### docs/alpha-validation/real-users/

- `real-user-validation-protocol.md`
- `session-guide-non-technical-builder.md`
- `session-guide-vibe-coder.md`
- `session-guide-professional-engineer.md`
- `real-user-session-report-template.md`
- `phase-13-real-user-validation-summary.md`

### docs/release/

- `v0.1.0-alpha-package-content-review.md`
- `v0.1.0-alpha-brazilian-ux-review.md`
- `v0.1.0-alpha-phase-13-go-no-go-decision.md`
- updates to known limitations, blockers, release candidate and scorecard

### docs/sprints/

- `phase-13-handoff.md`
- `phase-13-validation-report.md`
- `phase-13-retrospective.md`

### adr/

- ADRs 0186 a 0195

### bootstrap-source/

- pt211 a pt220 preservados

## 5. Validação obrigatória

A fase deve executar:

```bash
npm run build --prefix packages/resolve-ai-cli
npm test --prefix packages/resolve-ai-cli
npm run smoke --prefix packages/resolve-ai-cli
```

E dentro do pacote:

```bash
npm pack --dry-run
```

## 6. Decisão esperada se não houver usuários reais

Se nenhuma validação real for realizada, a decisão honesta provavelmente deve permanecer:

```text
LIMITED GO ou NO-GO para public alpha amplo
```

O projeto pode estar tecnicamente pronto para alpha restrito, mas não deve declarar validação externa completa.

## 7. Próxima fase possível

### Se GO

**Phase 14 — Public Alpha Release Execution**

Incluir:

- tag Git;
- GitHub Release;
- npm publish alpha;
- announcement docs;
- post-release monitoring manual.

### Se LIMITED GO

**Phase 14 — Restricted Alpha Program**

Incluir:

- convite controlado;
- validação com mais usuários;
- ajustes de UX;
- package cleanup antes de npm.

### Se NO-GO

**Phase 14 — Alpha Blocker Resolution**

Incluir:

- correções P0/P1;
- nova rodada de testes;
- nova decisão.

## 8. Guardrail final

> O Resolve Aí só deve ir para alpha público quando a experiência real comprovar que ele ajuda sem confundir, sem prometer demais e sem colocar projetos em risco.
