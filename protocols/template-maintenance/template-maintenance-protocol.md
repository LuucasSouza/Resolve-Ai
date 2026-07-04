---
title: "Template Maintenance Protocol"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Template Maintainers"
last_updated: "2026-07-04"
document_type: "Protocol"
---
# Template Maintenance Protocol
## Objetivo
Padronizar como templates sao revisados, versionados, promovidos, depreciados e sincronizados com exemplos.
## Escopo
Aplica-se a mudancas em templates, exemplos preenchidos, registry, taxonomy, quality standard e policies.
## Principios
- Mudanca de contrato exige impacto documentado.
- Mudanca de template exige revisao de exemplos.
- Mudanca de engine exige revisao dos templates daquele engine.
- Mudanca de entry mode exige revisao dos packs por perfil.
## Trigger
- Nova ADR aceita.
- Novo engine, protocolo ou agente.
- Drift detectado.
- Exemplo nao corresponde ao template.
- Template recebe feedback de uso real.
## Required checks
1. Confirmar owner e status.
2. Validar front matter.
3. Validar output contract e quality gate.
4. Comparar com templates similares.
5. Atualizar registry.
6. Atualizar changelog.
7. Atualizar exemplos afetados.
8. Registrar migracao ou deprecacao quando necessario.
## Deprecation policy
Templates deprecated devem manter link para substituto, motivo, data e plano de remocao. Templates archived nao devem ser usados em novos projetos.
## Proximos passos
Automatizar verificacao de registry e front matter em sprint futura.
