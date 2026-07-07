# pt260 — Phase 17 Execution Prompt and Handoff

## 1. Nome da fase

Phase 17 — Resolve Aí Guided Discovery Interview and Validation Fixes

## 2. Objetivo

Implementar `resolve-ai entrevistar` para projetos do zero e aplicar correções descobertas nas validações reais: classificação de mudanças no `validar`, falsos positivos de sensibilidade/stack, experiência Windows e clareza do fluxo recomendado.

## 3. Prompt de execução para Codex

```text
Leia integralmente todos os arquivos Markdown numerados de pt251 a pt260 na raiz do projeto.

Use também README.md, ROADMAP.md, CHANGELOG.md, GOVERNANCE.md, CONTRIBUTING.md, packages/resolve-ai-cli/*, docs/release/*, docs/alpha-validation/*, docs/community/*, docs/sprints/phase-15b-* e todos os artefatos anteriores como documentos de governança obrigatórios.

Execute agora a Phase 17 — Resolve Aí Guided Discovery Interview and Validation Fixes.

Contexto:
A Phase 15B terminou com 81/100 — LIMITED GO. Depois disso, três feedbacks reais/semirreais foram recebidos:
1. Projeto INVEST: projeto novo; todos os comandos funcionaram via Node; diagnóstico ficou genérico; necessidade de entrevista antes do diagnóstico.
2. Controle de Gastos — Residência: projeto existente Professional Engineer; todos os comandos funcionaram; sugestões de dependência entre comandos, próximos passos e modo guiado.
3. ECO SISTEMA AVANÇA COMERCIAL: projeto real legado com dados sensíveis; todos os comandos funcionaram; segurança forte; problemas de falso positivo design-tokens, falso positivo Next.js e validação misturando artefatos Resolve Aí com mudanças reais.

Objetivo:
Implementar a primeira versão do comando `resolve-ai entrevistar` e corrigir os problemas de validação/diagnóstico/onboarding identificados nos feedbacks, sem publicar npm, sem tag e sem GitHub release.

Escopo obrigatório:
1. Preservar pt251 a pt260 em bootstrap-source/.
2. Implementar comando:
   - resolve-ai entrevistar
3. Implementar aliases:
   - resolve-ai entrevista
   - resolve-ai ideia
4. Criar fluxo de entrevista guiada local para projeto do zero.
5. A entrevista deve perguntar, no mínimo:
   - o que o usuário quer criar;
   - qual problema resolve;
   - para quem é;
   - quem usa;
   - tipo de produto;
   - validar rápido ou robusto;
   - primeira versão útil;
   - fora de escopo;
   - stack preferida;
   - stack a evitar;
   - restrições;
   - dados sensíveis em alto nível;
   - critério de sucesso.
6. Preencher ou atualizar sem sobrescrever por padrão:
   - docs/resolve-ai/00-project-intake.md
   - docs/resolve-ai/02-discovery.md
   - docs/resolve-ai/03-product-definition.md
7. Atualizar `.resolve-ai/state.json` com `ultimaEntrevista`.
8. Atualizar `resolve-ai status` para exibir resumo da última entrevista.
9. Atualizar `resolve-ai diagnosticar` para recomendar `resolve-ai entrevistar` quando detectar projeto vazio/do zero.
10. Atualizar `resolve-ai planejar` e/ou `preparar` para aproveitar entrevista/intake quando disponível, evitando fallback genérico.
11. Atualizar `resolve-ai validar` para separar:
    - arquivos gerados pelo Resolve Aí;
    - arquivos reais do projeto;
    - possíveis sensíveis;
    - desconhecidos.
12. Atualizar relatórios de validação docs 25/26 para mostrar essa separação.
13. Reduzir falso positivo de `design-tokens.css` e similares.
14. Corrigir falso positivo de Next.js em projeto Vite puro.
15. Ignorar por padrão pastas auxiliares como:
    - Resolve-Ai/
    - resolve-ai/
    - node_modules/
    - .git/
    - .resolve-ai/
    - docs/resolve-ai/
    - teste/
16. Melhorar `resolve-ai ajuda` com:
    - fluxo recomendado;
    - explicação de dependência leve entre comandos;
    - dica Windows/npm link;
    - dica de fallback via Node.
17. Garantir escrita UTF-8 dos documentos gerados.
18. Atualizar documentação:
    - README.md
    - ROADMAP.md
    - CHANGELOG.md
    - packages/resolve-ai-cli/README.md
    - docs/getting-started/quickstart-alpha.md
    - docs/getting-started/install-local-cli.md
    - docs/alpha-validation/README.md
    - docs/community/README.md
    - docs/sprints/README.md
19. Criar ou atualizar documentação específica:
    - docs/runtime/guided-discovery-interview.md
    - docs/runtime/project-zero-detection.md
    - docs/runtime/validation-change-classification.md
20. Criar ADRs 0236 a 0245.
21. Criar:
    - docs/sprints/phase-17-guided-discovery-interview-handoff.md
    - docs/sprints/phase-17-guided-discovery-interview-validation-report.md
    - docs/sprints/phase-17-guided-discovery-interview-retrospective.md

Restrições obrigatórias:
- Não publicar no npm.
- Não criar tag Git.
- Não criar GitHub release.
- Não declarar stable.
- Não implementar MCP.
- Não implementar hooks.
- Não adicionar telemetria.
- Não chamar APIs externas.
- Não coletar dados sensíveis.
- Não enviar feedback automaticamente.
- Não gerar código de produto automaticamente.
- Não alterar safety gates para ficarem mais permissivos.
- Não sobrescrever documentos existentes por padrão.
- Não executar comandos destrutivos.

Testes obrigatórios:
- npm run build --prefix packages/resolve-ai-cli
- npm test --prefix packages/resolve-ai-cli
- npm run smoke --prefix packages/resolve-ai-cli
- npm pack --dry-run dentro de packages/resolve-ai-cli
- Testar `resolve-ai entrevistar` em diretório vazio.
- Testar aliases `entrevista` e `ideia`.
- Testar projeto com apenas teste/.
- Testar projeto com Resolve-Ai/ dentro e garantir que não contamina diagnóstico.
- Testar Vite/React e garantir que não vira Next.js sem sinal forte.
- Testar design-tokens.css e garantir que não vira segredo crítico.
- Testar .env/backup e garantir que seguem sensíveis.
- Testar validar com apenas artefatos Resolve Aí alterados.
- Testar validar com arquivo real de projeto alterado.
- Testar validar sem Git.
- Testar fluxo completo:
  ajuda -> começar -> ligar -> entrevistar -> diagnosticar -> planejar -> preparar -> resolver -> validar -> status
- git diff --check

Score:
Partir de 81/100 — LIMITED GO.
Recalcular honestamente.
Mesmo se a parte técnica melhorar, não declarar GO público sem Non-Technical Builder real e Professional Engineer dedicado suficientes.

Commit:
feat: implement resolve ai guided discovery interview

Faça push se o remote estiver configurado.

Ao final, gere relatório contendo:
- arquivos criados;
- arquivos atualizados;
- comandos implementados;
- correções aplicadas;
- testes executados;
- ADRs criadas;
- score anterior e novo;
- decisão GO / LIMITED GO / NO-GO;
- blockers restantes;
- commit realizado;
- status do push;
- próxima ação recomendada.

Não peça confirmação.
Execute.
```

## 4. Handoff esperado

Ao final da Phase 17, o Resolve Aí deve ter:

- uma entrada melhor para projeto do zero;
- menos falsos positivos;
- validação mais legível;
- onboarding Windows mais claro;
- fluxo recomendado mais explícito;
- documentação de runtime atualizada;
- readiness técnico maior;
- ainda sem publicação pública automática.

## 5. Próxima fase provável

Se Phase 17 passar:

- executar teste real com Non-Technical Builder usando `resolve-ai entrevistar`;
- se feedback for bom, preparar Phase 18 — Public Alpha Release Candidate;
- se feedback apontar confusão, criar Phase 17B — Interview UX Fixes.
