---
title: "Release Notes — v0.1.0-alpha.0"
status: "Release Candidate"
version: "0.1.0-alpha.0"
phase: "Phase 18"
owner: "Resolve Aí Maintainers"
last_updated: "2026-07-07"
---

# Release Notes — Resolve Aí v0.1.0-alpha.0

## 1. O que é o Resolve Aí

O Resolve Aí é uma CLI local, em português, que transforma um problema, uma ideia ou um projeto existente em diagnóstico, plano e tarefas claras antes de qualquer código ser escrito por IA. Ele foi criado para pessoas não técnicas, vibe coders e engenheiros profissionais.

## 2. Status

**Alpha / Release Candidate.** Esta versão não é stable, não é production ready e ainda busca feedback real de usuários iniciantes. A publicação pública depende de aprovação explícita do mantenedor.

## 3. O que esta versão faz

- Entrevista guiada local para projetos do zero (`entrevistar`), preenchendo intake, discovery e definição de produto.
- Diagnóstico local do projeto: tipo, stack provável, modo recomendado e riscos por nome de arquivo (sem copiar conteúdo).
- Planejamento personalizado pela entrevista, com backlog priorizado e "Fazer primeiro / Fazer depois / Não fazer agora" para iniciantes.
- Preparação de tarefa concreta do MVP (`preparar`) e pacote de execução assistida (`resolver`) com aprovação humana e prompt final para o agente de IA.
- Validação guiada pós-execução (`validar`), com classificação de mudanças e detecção de arquivos sensíveis por nome.
- `status` com uma única próxima ação prioritária no topo.
- Risco público em português: baixo, médio, alto, crítico. `Confiança: baixa` vem com explicação simples.

## 4. Comandos disponíveis

| Comando | Aliases |
|---|---|
| `resolve-ai ajuda` | — |
| `resolve-ai começar` | `comecar` |
| `resolve-ai ligar` / `desligar` | — |
| `resolve-ai entrevistar` | `entrevista`, `ideia` |
| `resolve-ai diagnosticar` | `diagnostico`, `diagnóstico` |
| `resolve-ai planejar` | `plano`, `planejamento` |
| `resolve-ai preparar` | `tarefa`, `executar` |
| `resolve-ai resolver` | `resolva`, `fazer` |
| `resolve-ai validar` | `valida`, `revisar` |
| `resolve-ai status` | — |

## 5. Fluxo para projeto novo

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

## 6. Fluxo para projeto existente

Em um projeto que já tem código, a entrevista não é obrigatória:

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

## 7. Segurança

```text
O Resolve Aí não executa código automaticamente.
O comando resolver prepara um pacote e um prompt de execução assistida.
Você continua no controle.
```

- Sem telemetria e sem envio automático de dados; tudo roda localmente.
- Arquivos sensíveis (`.env`, backups, secrets) são detectados por nome/caminho, nunca copiados.
- Comandos são não destrutivos e não sobrescrevem documentos existentes por padrão.

## 8. Como instalar localmente

Enquanto o pacote não estiver publicado no npm:

```bash
git clone https://github.com/LuucasSouza/Resolve-Ai.git
cd Resolve-Ai
npm run build --prefix packages/resolve-ai-cli
cd packages/resolve-ai-cli
npm link
cd ../..
resolve-ai ajuda
```

Se a publicação alpha futura acontecer (após aprovação do mantenedor):

```bash
npm install -g resolve-ai@alpha
resolve-ai ajuda
```

Esta versão ainda **não** está publicada no npm.

## 9. Como testar via Node (fallback)

```bash
node caminho/para/Resolve-Ai/packages/resolve-ai-cli/dist/index.js ajuda
```

No Windows, prefira os aliases sem acento (`comecar`, `diagnostico`, `entrevista`).

## 10. Limitações conhecidas

Resumo (lista completa em `known-limitations.md`):

1. ainda não há validação humana ampla;
2. CLI exige terminal, sem UI gráfica;
3. `validar` funciona melhor com Git;
4. não executa código automaticamente;
5. pode gerar muitos documentos;
6. pode ter falsos positivos em diagnóstico;
7. não há telemetria e o feedback é manual;
8. versão não é stable.

## 11. Como enviar feedback

- GitHub Issues com o template de alpha feedback; ou
- preencher `teste/feedback.md` e enviar manualmente ao mantenedor.

Nunca envie `.env`, tokens, senhas, chaves de API, backups ou dados de clientes.
