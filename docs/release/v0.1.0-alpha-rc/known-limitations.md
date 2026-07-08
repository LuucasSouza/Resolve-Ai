---
title: "Known Limitations — v0.1.0-alpha.0"
status: "Release Candidate"
version: "0.1.0-alpha.0"
phase: "Phase 18"
owner: "Resolve Aí Maintainers"
last_updated: "2026-07-07"
---

# Known Limitations — Resolve Aí v0.1.0-alpha.0

Estas limitações são públicas e obrigatórias. Nenhum material de divulgação pode escondê-las.

## 1. Ainda não há validação humana ampla

O fluxo foi verificado por 87 testes automatizados, smoke test e simulações controladas, além de uma sessão real de Vibe Coder (Phase 15B). **Não houve validação real suficiente com Non-Technical Builder nem com Professional Engineer dedicado.** Por isso esta versão é release candidate, não stable.

## 2. CLI exige terminal

Não há instalador gráfico. O usuário precisa de Node.js 20+ e de um terminal.

## 3. Não há UI gráfica

Toda a interação acontece por linha de comando e por documentos Markdown gerados localmente.

## 4. `validar` funciona melhor com Git

Sem Git, a validação é limitada e a comparação de mudanças fica menos precisa. A CLI explica isso e trata `git init` como dica, não como bloqueio.

## 5. Não executa código automaticamente

Por design. O comando `resolver` prepara um pacote de execução assistida e um prompt para a IA do usuário; a execução real é sempre humana/assistida.

## 6. Pode gerar muitos documentos

O fluxo completo gera dezenas de arquivos em `docs/resolve-ai/`. Em projetos pequenos isso pode parecer excessivo.

## 7. Pode ter falsos positivos em diagnóstico

Detecção de stack e riscos é feita por heurísticas locais de nome/caminho. Falsos positivos foram reduzidos (design tokens, Next.js), mas ainda podem ocorrer.

## 8. Não há telemetria

Nada é enviado automaticamente. Consequência: o projeto não sabe como você usa a ferramenta, a menos que você conte.

## 9. Feedback é manual

Por GitHub Issues ou `teste/feedback.md` enviado manualmente. Não há coleta automática.

## 10. Versão não é stable

`0.1.0-alpha.0` é um alpha em validação pública. Comportamentos, comandos e formatos de documentos podem mudar sem garantia de compatibilidade.
