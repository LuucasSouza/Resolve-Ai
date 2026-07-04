import { ajudaCommand } from "./commands/ajuda.js";
import { comecarCommand } from "./commands/comecar.js";
import { desligarCommand } from "./commands/desligar.js";
import { diagnosticarCommand } from "./commands/diagnosticar.js";
import { ligarCommand } from "./commands/ligar.js";
import { planejarCommand } from "./commands/planejar.js";
import { prepararCommand } from "./commands/preparar.js";
import { statusCommand } from "./commands/status.js";
import { error } from "./core/output.js";

export function run(argv = process.argv.slice(2), root = process.cwd()) {
  const command = argv[0] ?? "ajuda";

  try {
    switch (command) {
      case "ajuda":
      case "--help":
      case "-h":
        ajudaCommand();
        return 0;
      case "começar":
      case "comecar":
        comecarCommand(root);
        return 0;
      case "ligar":
        ligarCommand(root);
        return 0;
      case "diagnosticar":
      case "diagnostico":
      case "diagnóstico":
        diagnosticarCommand(root);
        return 0;
      case "planejar":
      case "plano":
      case "planejamento":
        planejarCommand(root);
        return 0;
      case "preparar":
      case "tarefa":
      case "executar":
        prepararCommand(root, command);
        return 0;
      case "desligar":
        desligarCommand(root);
        return 0;
      case "status":
        statusCommand(root);
        return 0;
      default:
        error(`Comando desconhecido: ${command}\n\nRode: resolve-ai ajuda`);
        return 1;
    }
  } catch (caught) {
    const message = caught instanceof Error ? caught.message : "Erro inesperado.";
    error(message);
    return 1;
  }
}
