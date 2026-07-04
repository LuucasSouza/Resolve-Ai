# pt148 — Phase 6 ADRs

> Objetivo: definir ADRs esperadas para a Phase 6.

---

## ADRs obrigatórias

Criar ADRs 0116 a 0125.

### ADR 0116 — Adopt `planejar` as guided planning command

Decisão: adicionar `resolve-ai planejar` como comando oficial para transformar diagnóstico em plano.

### ADR 0117 — Keep planning read-only for product code

Decisão: planejamento pode criar docs e estado do Resolve Aí, mas não altera código do projeto.

### ADR 0118 — Adopt docs/resolve-ai/10-14 planning outputs

Decisão: padronizar os documentos `10` a `14`.

### ADR 0119 — Adopt prioritized backlog format

Decisão: backlog gerado deve conter prioridade, tipo, motivo, aceite e risco se ignorado.

### ADR 0120 — Adopt sprint A/B/C planning model

Decisão: usar sprints incrementais com nomes simples para guiar próximos passos.

### ADR 0121 — Adopt execution prompt generation

Decisão: gerar prompts prontos para agentes de IA, mas não executar automaticamente.

### ADR 0122 — Adopt safety gates for implementation prep

Decisão: prompts e planos devem conter limites claros para evitar ações destrutivas.

### ADR 0123 — Adopt status integration for planning state

Decisão: `resolve-ai status` deve mostrar último planejamento.

### ADR 0124 — Defer force/update planning overwrite options

Decisão: `--forcar` e `--atualizar` ficam para fase futura.

### ADR 0125 — Prepare Phase 7 implementation guidance

Decisão: Phase 7 deve focar em orientar execução segura de uma tarefa, não em automação destrutiva.

---

## Padrão dos ADRs

Cada ADR deve conter:

- status;
- contexto;
- decisão;
- consequências;
- alternativas consideradas;
- impacto no usuário;
- riscos;
- relação com roadmap.

---

## Atualizações obrigatórias

Atualizar:

- `adr/README.md`;
- `docs/architecture/decision-log.md`;
- `CHANGELOG.md`.
