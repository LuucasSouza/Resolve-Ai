# pt259 — Phase 17 ADRs

Criar ADRs 0236 a 0245.

## ADR 0236 — Adopt Guided Discovery Interview for Empty Projects

Decisão: adotar entrevista guiada para projetos do zero.

Motivo: feedback real mostrou que projeto vazio precisa capturar intenção antes de diagnóstico heurístico.

Consequência: novo comando `resolve-ai entrevistar`.

## ADR 0237 — Add `entrevistar`, `entrevista`, and `ideia` Commands

Decisão: criar comando principal e aliases brasileiros.

Motivo: linguagem acessível para público brasileiro.

Consequência: CLI ganha entrada orientada a ideia/problema.

## ADR 0238 — Populate Intake, Discovery and Product Definition from Interview

Decisão: entrevista alimenta docs 00, 02 e 03.

Motivo: esses documentos são base de planejamento.

Consequência: `planejar` e `preparar` terão contexto melhor.

## ADR 0239 — Preserve Existing Human Content During Interview Writes

Decisão: nunca sobrescrever conteúdo humano por padrão.

Motivo: confiança e segurança.

Consequência: atualizar documentos com seções adicionais quando necessário.

## ADR 0240 — Recommend Interview When Project Appears Empty

Decisão: `diagnosticar` deve recomendar `entrevistar` em projeto vazio.

Motivo: evitar plano genérico e diagnóstico de baixa confiança.

Consequência: fluxo para projeto novo melhora.

## ADR 0241 — Separate Resolve Aí Artifacts from Product Changes in Validation

Decisão: `validar` deve classificar mudanças.

Motivo: evitar alarme falso de alterações geradas pela própria ferramenta.

Consequência: relatórios mais claros.

## ADR 0242 — Reduce Design Token False Positives

Decisão: `design-tokens` não deve ser tratado como segredo crítico por padrão.

Motivo: evitar ruído em projetos front-end.

Consequência: regra de sensibilidade mais precisa.

## ADR 0243 — Require Strong Evidence Before Detecting Next.js

Decisão: detectar Next.js apenas com sinais fortes.

Motivo: evitar falso positivo em Vite React.

Consequência: stack detection mais confiável.

## ADR 0244 — Document Windows PATH and Node Fallback More Clearly

Decisão: reforçar docs de instalação local e fallback via Node.

Motivo: testes reais mostraram falha de PATH em Windows.

Consequência: melhor onboarding.

## ADR 0245 — Keep Guided Interview Local and Non-Telemetric

Decisão: entrevista é local, sem envio automático.

Motivo: privacidade e confiança.

Consequência: sem APIs externas, sem telemetria, sem dados sensíveis.

## Atualizações obrigatórias

Atualizar:

- `adr/README.md`
- `docs/architecture/decision-log.md`

Cada ADR deve conter:

- status;
- contexto;
- decisão;
- consequências;
- alternativas consideradas;
- relação com feedback real;
- data.
