---
title: "Template Quality Standard"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Template Maintainers"
last_updated: "2026-07-04"
document_type: "Template Governance"
---
# Template Quality Standard
## Objetivo
Definir o minimo aceitavel para templates reutilizaveis do AI-SEOS.
## Escopo
Todos os templates oficiais e exemplos preenchidos.
## Principios
- Claro para humanos e executavel por agentes.
- Sem placeholders ambiguos.
- Perfil, lifecycle, entrada, saida, gate e handoff sempre visiveis.
- Progressive depth sem forcar complexidade prematura.
## Checklist de aceitacao
- Front matter com 	emplate_id, ersion, status, owner, profile, lifecycle_stage, input_artifacts, output_artifacts, 
ext_engine e quality_gate.
- Secoes: quando usar, publico, produto gerado, inputs, instrucoes, campos, output format, quality gates, erros comuns, exemplo e handoff.
- Linguagem compat?vel com o perfil.
- Registro em 	emplate-registry.md.
- Exemplo ou link para exemplo preenchido.
## Responsabilidades
Reviewers bloqueiam promocao para active quando houver conflito com ADRs ou contratos cross-engine.
## Proximos passos
Usar 	emplates/quality/template-review-checklist.md em cada PR de templates.
