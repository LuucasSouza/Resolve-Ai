---
project: Resolve Aí
phase: Phase 7 — Guided Execution Prep
status: Draft
language: pt-BR
public_name: Resolve Aí
legacy_name: AI-SEOS
---

# pt153 — Seleção de Tarefa e Pacote de Execução

## Objetivo

Definir como o Resolve Aí escolhe uma tarefa segura e gera um pacote de execução.

## Modelo de tarefa

```ts
type PreparedTask = {
  id: string
  title: string
  source: "risk" | "backlog" | "plan" | "validation" | "documentation" | "fallback"
  priority: "critical" | "high" | "medium" | "low"
  confidence: "high" | "medium" | "low"
  category:
    | "security"
    | "tests"
    | "documentation"
    | "validation"
    | "bugfix"
    | "feature"
    | "refactor"
    | "release"
  scope: string[]
  outOfScope: string[]
  likelyFiles: string[]
  validation: string[]
  risks: string[]
  stopConditions: string[]
}
```

## Heurística de seleção

### Segurança primeiro

Se houver sinais de risco crítico, priorizar:

- dados sensíveis;
- `.env` exposto;
- tokens;
- backups reais;
- credenciais;
- auth;
- regras de permissão;
- LGPD;
- RLS sem teste.

### Verificação antes de feature

Se o projeto está avançado, priorizar:

- testes mínimos;
- validação de fluxos críticos;
- checklist de deploy;
- documentação de decisão.

### Projeto novo

Priorizar:

- intake;
- definição de MVP;
- estrutura inicial de documentação;
- plano inicial.

### Projeto vibe coded

Priorizar:

- mapear arquitetura;
- organizar backlog;
- criar validação;
- proteger arquivos sensíveis;
- criar testes pequenos.

### Projeto profissional

Priorizar:

- próximo milestone;
- ADR pendente;
- validação de arquitetura;
- risco de release;
- melhoria de alto ROI.

## Scoring simples

| Critério | Pontos |
|---|---:|
| Reduz risco crítico | +50 |
| Destrava release | +30 |
| Tem validação clara | +20 |
| É pequena | +15 |
| Não toca área sensível | +10 |
| Toca auth/pagamento/dados | -25 |
| É ampla/difusa | -30 |
| Não tem teste/validação | -20 |

## Tarefas proibidas como primeira execução

- reescrever aplicação inteira;
- trocar stack;
- migrar banco;
- deploy em produção;
- apagar histórico Git;
- alterar auth/RLS sem plano explícito;
- mexer em pagamentos sem validação;
- mexer em dados reais sem backup.

## Prompt seguro

O prompt gerado deve começar com:

```text
Você está executando uma tarefa preparada pelo Resolve Aí.

Antes de alterar arquivos:
1. Leia todos os documentos deste pacote.
2. Explique o plano em até 10 linhas.
3. Liste os arquivos que pretende tocar.
4. Não altere arquivos fora do escopo.
5. Não instale dependências sem autorização.
6. Não faça commit sem autorização.
7. Ao final, gere relatório de alterações e validação.
```
