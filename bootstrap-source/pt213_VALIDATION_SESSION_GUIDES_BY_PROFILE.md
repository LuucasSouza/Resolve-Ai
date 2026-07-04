# Resolve Aí — Phase 13

> Projeto público: **Resolve Aí**  
> Promessa: **“Me dá o problema ou a ideia, e eu te ajudo a resolver.”**  
> Nome técnico/histórico: **AI-SEOS**  
> Fase: **Phase 13 — Real User Alpha Validation and Release Decision**


## 1. Guias de Sessão por Perfil

Este documento define scripts práticos para conduzir sessões reais de validação.

## 2. Guia — Non-Technical Builder

### Abertura

Diga:

> O Resolve Aí é uma ferramenta para pegar uma ideia ou problema e transformar em diagnóstico, plano e próximos passos. Ele não promete programar tudo sozinho. Ele ajuda a organizar a bagunça.

### Tarefa

Peça para a pessoa imaginar um projeto simples, por exemplo:

- sistema para controlar alunos;
- landing page de um serviço;
- app de agenda;
- painel financeiro simples;
- ideia de SaaS.

### Fluxo guiado

Executar:

```bash
resolve-ai ajuda
resolve-ai começar
resolve-ai ligar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai preparar
resolve-ai resolver
resolve-ai validar
resolve-ai status
```

### Perguntas

1. O nome dos comandos faz sentido?
2. Algum comando pareceu assustador?
3. Você entendeu o que foi criado em `docs/resolve-ai/`?
4. Você saberia o que mandar para uma IA depois disso?
5. O `status` te ajuda a saber onde está?
6. O que parece brasileiro/natural?
7. O que parece técnico demais?

### Sinais de falha

- Pessoa acha que `resolver` alterou código sozinho.
- Pessoa não entende para que serve `validar`.
- Pessoa abandona por excesso de documentação.
- Pessoa não consegue identificar próximo passo.

## 3. Guia — Vibe Coder

### Abertura

Diga:

> A ideia é usar o Resolve Aí antes de sair pedindo código para IA. Ele cria contexto, plano, prompt e validação para reduzir retrabalho.

### Tarefa

Usar um projeto fake ou real sem dados sensíveis.

Fluxo esperado:

```bash
resolve-ai começar
resolve-ai ligar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai preparar
resolve-ai resolver
```

Depois, pedir que o usuário abra:

```text
docs/resolve-ai/22-prompt-final-para-agente.md
```

E avalie se usaria esse prompt em Codex, Claude, Copilot ou similar.

### Perguntas

1. O diagnóstico capturou o suficiente?
2. O planejamento reduziu ambiguidade?
3. O prompt final é usável?
4. O que faltou para você confiar?
5. Você usaria isso antes de pedir código?
6. O fluxo é longo, curto ou adequado?

### Sinais de falha

- Usuário ignora docs e volta ao improviso.
- Prompt final fica genérico demais.
- Backlog não parece acionável.
- Preparar/resolver parecem redundantes.

## 4. Guia — Professional Engineer

### Abertura

Diga:

> O Resolve Aí é um runtime documental e operacional para engenharia assistida por IA. Nesta fase ele é read-only para o código do produto e gera documentação de diagnóstico, plano, execução assistida e validação.

### Tarefa

Rodar em projeto real sanitizado ou fixture representativa.

Avaliar:

- Segurança.
- Idempotência.
- Clareza dos docs.
- Qualidade dos riscos.
- Clareza dos ADRs.
- Package readiness.

### Perguntas

1. Você confiaria em rodar isso em um repositório real?
2. O que bloquearia adoção em time?
3. O que precisa ir para CI antes de npm?
4. O pacote npm deve incluir `src/` e `tests/`?
5. O fluxo respeita separação entre planejamento e execução?
6. As mensagens em português ajudam ou limitam?

### Sinais de falha

- Detecta risco de privacidade.
- Considera pacote imaturo demais.
- Considera docs gerados enganosos.
- Identifica comando que aparenta fazer mais do que faz.

## 5. Registro de sessão

Cada sessão deve gerar arquivo em:

```text
docs/alpha-validation/real-users/sessions/YYYY-MM-DD-<perfil>-<id>.md
```

Sem dados pessoais identificáveis.
