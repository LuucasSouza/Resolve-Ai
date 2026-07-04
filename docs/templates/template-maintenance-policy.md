---
title: "Template Maintenance Policy"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Template Maintainers"
last_updated: "2026-07-04"
document_type: "Template Governance"
---
# Template Maintenance Policy
## Objetivo
Evitar templates duplicados, obsoletos ou desalinhados com engines, ADRs e Entry Modes.
## Escopo
Aplica-se a todos os arquivos em 	emplates/, docs/templates/, examples/template-showcase/ e protocolos de manutencao relacionados.
## Principios
- Nenhum template ativo sem registry entry.
- Nenhuma mudanca de contrato sem avaliacao de impacto.
- Exemplos devem ser atualizados quando o template muda.
- Templates deprecated devem apontar substituto.
## Versionamento
- Patch: clareza, formatacao ou exemplo sem alterar contrato.
- Minor: nova secao opcional ou guidance adicional.
- Major: mudanca de campos obrigatorios, output contract ou handoff target.
## Responsabilidades
Template Maintainers revisam trimestralmente; engine owners revisam templates de seu engine; agent owners revisam handoffs.
## Proximos passos
Executar o protocolo em protocols/template-maintenance/template-maintenance-protocol.md quando houver ADR, engine ou entry mode novo.
