---
title: Project Adapter and Local State
phase: Phase 3 — Resolve Aí Runtime Productization
status: Draft
version: 0.1.0-alpha
public_name: Resolve Aí
legacy_technical_name: AI-SEOS
last_updated: 2026-07-04
---

# pt114 — Project Adapter and Local State

## 1. Objetivo

Este documento define como o Resolve Aí se instala dentro de um projeto.

O objetivo é permitir que o framework funcione em qualquer repositório sem misturar sua lógica interna com o código da aplicação.

## 2. Duas camadas locais

O Resolve Aí deve criar duas camadas:

```text
.resolve-ai/        Camada operacional local
docs/resolve-ai/    Documentação humana do projeto
```

## 3. `.resolve-ai/`

A pasta `.resolve-ai/` é a memória operacional do runtime.

Ela pode ser ignorada pelo Git por padrão, exceto arquivos explicitamente seguros.

Estrutura proposta:

```text
.resolve-ai/
├── config.yml
├── state.json
├── session.md
├── handoff.md
├── mode.md
├── logs/
│   └── runtime.log
├── cache/
└── index/
```

## 4. `docs/resolve-ai/`

A pasta `docs/resolve-ai/` é documentação do projeto.

Ela pode ser versionada se não contiver dados sensíveis.

Estrutura para projeto existente:

```text
docs/resolve-ai/
├── 00-project-intake.md
├── 01-current-state-assessment.md
├── 02-discovery.md
├── 03-product-definition.md
├── 04-architecture-review.md
├── 05-risk-register.md
├── 06-decision-log.md
├── 07-execution-plan.md
├── 08-backlog.md
├── 09-handoff.md
└── README.md
```

## 5. Migração de `docs/ai-seos/`

Como o projeto nasceu tecnicamente como AI-SEOS, alguns projetos podem ter:

```text
docs/ai-seos/
```

A Phase 3 deve definir migração suave para:

```text
docs/resolve-ai/
```

Regra:

- não apagar `docs/ai-seos/` automaticamente;
- detectar existência;
- sugerir migração;
- criar nota de compatibilidade;
- preservar histórico.

## 6. `config.yml`

Exemplo:

```yaml
project:
  name: "Meu Projeto"
  type: "existing"
  detected_stack:
    - react
    - typescript
    - supabase

resolve_ai:
  status: "ligado"
  mode: "projeto-em-andamento"
  language: "pt-BR"
  docs_path: "docs/resolve-ai"
  legacy_docs_path: "docs/ai-seos"
  token_saving: false

safety:
  allow_code_changes_without_plan: false
  allow_dependency_install_without_approval: false
  allow_commit_without_approval: false
```

## 7. Detecção de projeto

O Project Adapter deve detectar sinais:

### 7.1 Projeto Node/Frontend

- `package.json`
- `vite.config.*`
- `next.config.*`
- `src/`
- `app/`
- `pages/`

### 7.2 Projeto Python

- `pyproject.toml`
- `requirements.txt`
- `src/`

### 7.3 Projeto Firebase/Supabase

- `firebase.json`
- `supabase/`
- `.firebaserc`
- migrations

### 7.4 Projeto já documentado

- `README.md`
- `docs/`
- `adr/`
- `CHANGELOG.md`

## 8. Classificação inicial

O adapter deve classificar:

```text
novo
em-andamento
legado
indefinido
```

## 9. Projeto em Andamento — Diagnóstico e Continuação

Quando o projeto já existe, aplicar o fluxo:

```text
Projeto em Andamento — Diagnóstico e Continuação
```

Regra obrigatória:

```text
Não modificar código antes de diagnóstico, plano e riscos.
```

## 10. Segurança

O Project Adapter deve evitar indexar ou registrar:

- `.env`;
- secrets;
- dumps;
- backups;
- dados pessoais;
- tokens;
- service role keys;
- credenciais.

Deve também sugerir `.gitignore` apropriado.

## 11. Critérios de aceite

O Project Adapter estará pronto quando:

- `.resolve-ai/` estiver especificado;
- `docs/resolve-ai/` estiver especificado;
- migração de `docs/ai-seos/` estiver planejada;
- detecção de stack estiver definida;
- classificação de projeto estiver definida;
- regras de segurança estiverem claras.
