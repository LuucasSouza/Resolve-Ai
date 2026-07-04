import { print } from "../core/output.js";

export function ajudaCommand() {
  print(`
Resolve Aí
Me dá o problema ou a ideia, e eu te ajudo a resolver.

Comandos disponíveis:
  resolve-ai começar      Prepara o Resolve Aí neste projeto
  resolve-ai comecar      Mesmo comando, sem acento
  resolve-ai diagnosticar Gera diagnóstico local seguro
  resolve-ai planejar     Cria plano, backlog, sprints e prompts
  resolve-ai preparar     Prepara uma tarefa segura para execução futura
  resolve-ai ligar        Liga o Resolve Aí neste projeto
  resolve-ai desligar     Desliga para economizar contexto e tokens
  resolve-ai status       Mostra como o Resolve Aí está neste projeto
  resolve-ai ajuda        Mostra esta ajuda
`);
}
