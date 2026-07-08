---
title: "Phase 18 — Public Alpha RC Retrospective"
status: "Complete"
version: "0.1.0-alpha.0"
phase: "Phase 18"
owner: "Resolve Aí Maintainers"
last_updated: "2026-07-07"
---

# Phase 18 — Public Alpha Release Candidate — Retrospective

## O que funcionou bem

- Separar preparação de release da execução de release (ADR-0185) permitiu avançar sem validação humana adicional e sem mentir sobre isso.
- O campo `files` do `package.json` (ADR-0190) manteve o tarball limpo: a auditoria não encontrou nenhum arquivo proibido na primeira tentativa.
- O teto explícito de score (90/100) removeu a tentação de inflar o resultado por causa do volume de documentação produzida.
- Reusar a lista de frases proibidas do pt272 na revisão de README/release notes tornou a revisão objetiva.

## O que poderia ser melhor

- A lacuna de validação humana segue sendo o gargalo real do projeto há várias fases; documentação adicional não a reduz. A próxima fase de maior valor é uma sessão real, não mais artefatos.
- O repositório acumula muitos documentos de release de fases anteriores (Phase 12–17B); uma consolidação futura evitaria confusão sobre qual documento é canônico — mitigada por `v0.1.0-alpha-rc/` ser agora o diretório canônico.
- O `.gitignore` não cobre `docs/resolve-ai/` nem `.resolve-ai/config.json` na raiz do repo; os artefatos locais ficaram fora do commit por disciplina manual. Vale considerar em fase futura ignorar esses caminhos na raiz (sem afetar projetos de usuários).

## Riscos observados

- Risco de o gate ser tratado como formalidade: mitigado exigindo pré-leitura obrigatória e registro datado de aprovação.
- Risco de o draft de GitHub Release desatualizar antes da publicação: mitigado com checklist de revalidação no próprio draft.

## Lições

1. Honestidade sobre lacunas custa pouco quando embutida no processo (score cap, frases proibidas, gate).
2. Auditoria de pacote versionada cria linha de base comparável para todos os releases futuros.
3. Preparar rollback antes do primeiro publish elimina decisões improvisadas sob pressão.

## Próxima ação recomendada

Executar a validação real com Non-Technical Builder (fluxo Controle Simples de Gastos, kit `teste/`) enquanto o mantenedor revisa o gate — os dois caminhos podem andar em paralelo.
