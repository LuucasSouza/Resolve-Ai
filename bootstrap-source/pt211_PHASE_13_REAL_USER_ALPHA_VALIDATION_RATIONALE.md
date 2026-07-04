# Resolve Aí — Phase 13

> Projeto público: **Resolve Aí**  
> Promessa: **“Me dá o problema ou a ideia, e eu te ajudo a resolver.”**  
> Nome técnico/histórico: **AI-SEOS**  
> Fase: **Phase 13 — Real User Alpha Validation and Release Decision**


## 1. Contexto

A Phase 12 elevou o readiness score de `72/100` para `80/100` e mudou a recomendação para **LIMITED GO**. Isso significa que o Resolve Aí já possui uma CLI local funcional, fluxo principal completo e documentação suficiente para validação controlada, mas ainda não possui evidência humana suficiente para um public alpha amplo.

O fluxo atual da CLI é:

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

A Phase 12 também corrigiu P1s técnicos importantes:

- Stack provável passou a detectar Node.js, TypeScript, Vite, React, Firebase, Supabase, Python e monorepo simples.
- Projetos novos simples não são classificados como risco crítico apenas por ausência de testes/CI.
- Arquivos sensíveis seguem como risco alto/crítico sem cópia de conteúdo.
- Copy do `resolver` foi ajustada para apontar para `resolve-ai validar`.
- `package.json` com BOM em Windows passou a ser tratado.

Mesmo assim, restam bloqueadores para publicação pública:

- Validação real com usuários ainda não ocorreu.
- Conteúdo do pacote npm precisa ser revisado antes de publicação.
- Publicação npm, tag Git e GitHub Release devem permanecer decisões manuais.

## 2. Objetivo da Phase 13

A Phase 13 transforma o status **LIMITED GO** em uma decisão baseada em evidência real. Ela deve conduzir validação com usuários reais dos três perfis oficiais do Resolve Aí, revisar o conteúdo do pacote npm e produzir uma decisão formal:

- **GO** — pode executar Public Alpha Release Execution.
- **LIMITED GO** — pode liberar alpha restrito, mas não publicar amplamente.
- **NO-GO** — deve corrigir bloqueadores antes de release.

## 3. Por que não publicar ainda

Publicar antes de observar usuários reais criaria riscos de:

- UX confusa para não técnicos.
- Expectativa errada de que o Resolve Aí programa sozinho.
- Documentação extensa demais sem caminho de entrada claro.
- Pacote npm contendo arquivos desnecessários ou fontes de manutenção confusa.
- Usuários interpretarem `resolver` como execução automática.
- Validação insuficiente em Windows, macOS e Linux.

O Resolve Aí deve ser brasileiro, leve e divertido, mas precisa continuar profissional. A Phase 13 protege esse equilíbrio.

## 4. Resultado esperado

Ao final da fase, o repositório deve conter:

- Protocolos de validação real.
- Guias de sessão por perfil.
- Registros honestos de sessões realizadas ou pendentes.
- Scorecard recalculado com evidência real.
- Revisão do conteúdo do pacote npm.
- Decisão formal GO / LIMITED GO / NO-GO.
- ADRs de validação e release decision.

## 5. Princípio central

> Não existe alpha público sério sem observar pessoas reais tentando usar o produto.

## 6. Escopo permitido

A Phase 13 pode:

- Criar documentação e templates de validação real.
- Rodar novamente testes locais.
- Revisar package metadata e conteúdo do dry-run.
- Ajustar documentação de instalação e quickstart se houver confusão evidente.
- Ajustar mensagens simples da CLI se houver bug claro de UX já identificado.
- Atualizar scorecards e blockers.

A Phase 13 não deve:

- Publicar no npm.
- Criar tag Git.
- Criar GitHub Release.
- Declarar stable.
- Implementar MCP.
- Implementar hooks.
- Adicionar telemetria.
- Coletar dados sensíveis reais.

## 7. Critério de sucesso

A fase é bem-sucedida mesmo que a decisão final seja **NO-GO**, desde que a decisão seja honesta, rastreável e baseada em evidência.
