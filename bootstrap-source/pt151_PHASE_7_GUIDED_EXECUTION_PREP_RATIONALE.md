---
project: Resolve Aí
phase: Phase 7 — Guided Execution Prep
status: Draft
language: pt-BR
public_name: Resolve Aí
legacy_name: AI-SEOS
---

# pt151 — Phase 7: Guided Execution Prep Rationale

## Propósito

A Phase 7 transforma o Resolve Aí de uma ferramenta que diagnostica e planeja em uma ferramenta que prepara a execução de uma tarefa com segurança.

Até aqui, o runtime já possui:

```bash
resolve-ai começar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai status
resolve-ai ligar
resolve-ai desligar
```

A próxima necessidade é preparar uma tarefa específica do backlog, sem cair no erro de sair alterando código automaticamente.

## Por que não executar automaticamente agora

A Phase 7 não deve modificar código de produto. Ela deve preparar.

Motivos:

1. Ainda não existe modelo de aprovação explícita.
2. `planejar` gera backlog, mas não seleciona tarefa com contrato de execução.
3. Projetos podem ter riscos críticos, dados sensíveis ou ausência de testes.
4. Um agente de IA pode interpretar uma tarefa de forma ampla demais.
5. O Resolve Aí deve ser confiável antes de ser poderoso.

## Decisão principal

Criar o comando principal:

```bash
resolve-ai preparar
```

Aliases:

```bash
resolve-ai tarefa
resolve-ai executar
```

O comando principal é `preparar` porque comunica segurança. `resolver` fica para uma fase futura.

## O que o comando deve fazer

1. Ler `.resolve-ai/state.json`.
2. Ler `docs/resolve-ai/`.
3. Selecionar uma tarefa segura e pequena.
4. Gerar pacote de execução.
5. Criar prompt de implementação.
6. Atualizar estado local.
7. Não alterar código do produto.

## Saídas esperadas

```text
docs/resolve-ai/15-tarefa-preparada.md
docs/resolve-ai/16-prompt-de-implementacao.md
docs/resolve-ai/17-plano-de-validacao-da-tarefa.md
docs/resolve-ai/18-riscos-da-execucao.md
docs/resolve-ai/19-handoff-de-execucao.md
```

## Relação com Modo Liga/Desliga

Se o Resolve Aí estiver desligado, o comando deve avisar que está rodando com contexto mínimo.

Mensagem sugerida:

> O Resolve Aí está desligado. Posso preparar um pacote básico, mas para usar contexto completo, rode `resolve-ai ligar`.

## Safety first

A tarefa preparada deve passar por gates:

- existe diagnóstico?
- existe planejamento?
- há risco crítico?
- a tarefa é pequena?
- a tarefa toca segurança, dados, auth, pagamentos ou deploy?
- existe validação?
- precisa de aprovação humana?

Se houver risco crítico, priorizar mitigação antes de feature.

## Sequência ideal do produto

```text
Diagnosticar
↓
Planejar
↓
Preparar
↓
Aprovar
↓
Resolver
↓
Validar
↓
Entregar
```

A Phase 7 cria o elo `preparar`.

## Definition of Done

- `resolve-ai preparar` existe.
- Aliases funcionam.
- Documentos 15 a 19 são gerados.
- `state.json` recebe `ultimoPreparo`.
- `status` mostra tarefa preparada.
- Riscos críticos bloqueiam features.
- `canAutoExecute` é sempre false.
- Testes automatizados passam.
