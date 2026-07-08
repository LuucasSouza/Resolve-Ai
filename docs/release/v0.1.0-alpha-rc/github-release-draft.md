---
title: "GitHub Release Draft"
status: "Release Candidate"
version: "0.1.0-alpha.0"
phase: "Phase 18"
owner: "Resolve Aí Maintainers"
last_updated: "2026-07-07"
---

# GitHub Release Draft — v0.1.0-alpha.0

Draft pronto para copiar/colar quando (e somente quando) o mantenedor aprovar em `maintainer-approval-gate.md`. Nenhum release foi criado na Phase 18.

Tag sugerida: `v0.1.0-alpha.0` (não criada nesta fase).

---

## Título

```text
Resolve Aí v0.1.0-alpha.0 — Public Alpha Candidate
```

## Corpo

```markdown
# Resolve Aí v0.1.0-alpha.0 — Alpha público para validação

> Me dá o problema ou a ideia, e eu te ajudo a resolver.

**Status: Alpha / Release Candidate.** Esta versão NÃO é stable, NÃO é
production ready e ainda busca feedback real de usuários iniciantes.

## O que é

O Resolve Aí é uma CLI local em português que ajuda a transformar um problema,
uma ideia ou um projeto existente em diagnóstico, plano e tarefas claras antes
de pedir código para uma IA.

## Segurança

O Resolve Aí não executa código automaticamente.
O comando `resolver` prepara um pacote e um prompt de execução assistida.
Você continua no controle.

Sem telemetria. Sem envio automático de dados. Tudo roda localmente.

## Instalação (enquanto não há pacote npm publicado)

```bash
git clone https://github.com/LuucasSouza/Resolve-Ai.git
cd Resolve-Ai
npm run build --prefix packages/resolve-ai-cli
cd packages/resolve-ai-cli
npm link
```

Fallback sem link global:

```bash
node caminho/para/Resolve-Ai/packages/resolve-ai-cli/dist/index.js ajuda
```

## Comandos

`ajuda`, `começar`, `ligar`, `desligar`, `entrevistar`, `diagnosticar`,
`planejar`, `preparar`, `resolver`, `validar`, `status` — com aliases sem
acento para Windows (`comecar`, `diagnostico`, `entrevista`, ...).

## Fluxo para projeto novo

```bash
resolve-ai começar
resolve-ai ligar
resolve-ai entrevistar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai preparar
resolve-ai resolver
resolve-ai validar
resolve-ai status
```

## Fluxo para projeto existente

```bash
resolve-ai começar
resolve-ai ligar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai preparar
resolve-ai resolver
resolve-ai validar
resolve-ai status
```

## Limitações conhecidas

1. Ainda não há validação humana ampla.
2. A CLI exige terminal; não há UI gráfica.
3. `validar` funciona melhor com Git.
4. Não executa código automaticamente (por design).
5. Pode gerar muitos documentos.
6. Pode ter falsos positivos em diagnóstico.
7. Não há telemetria; feedback é manual.
8. Esta versão não é stable.

Lista completa: `docs/release/v0.1.0-alpha-rc/known-limitations.md`.

## Feedback

Use GitHub Issues (template de alpha feedback) ou preencha `teste/feedback.md`
e envie manualmente. Nunca envie `.env`, tokens, senhas ou dados de clientes.
```

---

## Checklist antes de publicar este draft

- [ ] Gate do mantenedor aprovado (`maintainer-approval-gate.md`);
- [ ] Tag `v0.1.0-alpha.0` criada e conferida (`git-tag-checklist.md`);
- [ ] Release marcado como **pre-release** no GitHub;
- [ ] Corpo revisado para não conter promessa de stable.
