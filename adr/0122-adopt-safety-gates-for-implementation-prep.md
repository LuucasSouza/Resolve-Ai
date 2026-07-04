# ADR 0122 — Adopt Safety Gates for Implementation Prep

## Status

Accepted

## Contexto

Prompts de execução podem induzir mudanças arriscadas se não tiverem limites.

## Decisão

Planos e prompts devem conter limites claros para evitar ações destrutivas.

## Consequências

Prompts proíbem deploy, push, secrets e escopo fora da tarefa sem autorização.

## Alternativas consideradas

- Prompts livres.
- Execução automática.

## Impacto no usuário

Aumenta controle e segurança.

## Riscos

Pode deixar prompts mais longos.

## Relação com roadmap

Define base de segurança para Phase 7.
