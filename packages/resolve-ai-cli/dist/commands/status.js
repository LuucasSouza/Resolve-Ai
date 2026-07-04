import fs from "node:fs";
import { hasStarted, readState } from "../core/local-state.js";
import { print } from "../core/output.js";
import { resolveAiPaths } from "../core/paths.js";

export function statusCommand(root = process.cwd()) {
  if (!hasStarted(root)) {
    print(`
Resolve Aí ainda não começou neste projeto.

Rode:
  resolve-ai começar
`);
    return;
  }

  const paths = resolveAiPaths(root);
  const state = readState(root);
  const docsExists = fs.existsSync(paths.docsDir);
  const diagnosticSummary = state.ultimoDiagnosticoEm
    ? `
Último diagnóstico: ${state.ultimoDiagnosticoEm}
Tipo de projeto: ${state.tipoProjeto ?? "não informado"}
Modo recomendado: ${state.modoRecomendado ?? "não informado"}
Próxima ação: ${state.proximaAcao ?? "revisar docs/resolve-ai/09-handoff.md"}
`
    : "";
  const planningSummary = state.lastPlanAt
    ? `
Último planejamento: ${state.lastPlanAt}
Confiança do plano: ${state.planningConfidence ?? "não informada"}
Próxima ação planejada: ${state.nextRecommendedAction ?? "revisar docs/resolve-ai/10-plano-de-continuacao.md"}
`
    : "";
  const preparedSummary = state.ultimoPreparo
    ? `
Tarefa preparada:
- ${state.ultimoPreparo.tarefa}
- Risco: ${state.ultimoPreparo.riskLevel}
- Aprovação humana: necessária
- Autoexecução: não

Próximo passo:
Leia docs/resolve-ai/16-prompt-de-implementacao.md.
`
    : "";
  const disabledSummary = state.active === false ? "\nResolve Aí está desligado. Para preparar com contexto completo, rode: resolve-ai ligar\n" : "";

  if (state.active) {
    print(`
Resolve Aí está ligado neste projeto.
Modo atual: Projeto em Andamento — Diagnóstico e Continuação
Docs: ${docsExists ? "docs/resolve-ai/" : "não encontrado"}
Estado: .resolve-ai/state.json
Última atualização: ${state.lastUpdatedAt}
${diagnosticSummary}
${planningSummary}
${preparedSummary}
`);
    return;
  }

  print(`
Resolve Aí está preparado, mas desligado.

Docs: ${docsExists ? "docs/resolve-ai/" : "não encontrado"}
Estado: .resolve-ai/state.json
Última atualização: ${state.lastUpdatedAt}
${diagnosticSummary}
${planningSummary}
${preparedSummary}
${disabledSummary}

Para ligar:
  resolve-ai ligar
`);
}
