# pt221 — Phase 14: Real User Alpha Validation Rationale

> Projeto: Resolve Aí  
> Fase: Phase 14 — Real User Alpha Validation  
> Status: Specification Pack  
> Escopo: validação humana real, decisão de release, sem publicação automática

---

## 1. Contexto

A Phase 13 terminou com decisão **LIMITED GO** porque o produto demonstrou maturidade técnica local, mas ainda não possui evidência suficiente de uso por pessoas reais.

O Resolve Aí já possui um fluxo funcional:

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

Também já possui:

- CLI local funcional;
- build automatizado;
- smoke tests;
- testes automatizados;
- documentação de release candidate;
- package dry-run melhorado;
- score de readiness em 79/100;
- decisão explícita de não publicar npm sem validação real.

A Phase 14 existe para resolver o maior blocker restante: **evidência humana real**.

---

## 2. Objetivo da Phase 14

A Phase 14 deve executar, preparar ou registrar formalmente uma rodada de validação alpha com usuários reais dos três perfis oficiais:

1. **Non-Technical Builder**
2. **Vibe Coder**
3. **Professional Engineer**

A fase deve responder:

- Uma pessoa não técnica entende o que o Resolve Aí faz?
- Um vibe coder consegue usar o fluxo sem se perder?
- Um profissional técnico confia na abordagem, nos documentos e nos safety gates?
- A linguagem brasileira ajuda ou atrapalha?
- O comando `resolver` é entendido como execução assistida, não automação destrutiva?
- O usuário entende o que é `.resolve-ai/` e `docs/resolve-ai/`?
- O fluxo gera valor antes de qualquer publicação npm?
- A documentação de instalação local é suficiente?
- O produto está pronto para public alpha ou precisa continuar em private alpha?

---

## 3. O que esta fase NÃO deve fazer

A Phase 14 **não** deve:

- publicar no npm;
- criar tag Git;
- criar GitHub release;
- declarar stable;
- inventar feedback de usuários;
- usar dados reais sensíveis;
- coletar nomes, emails ou informações pessoais desnecessárias;
- implementar MCP;
- implementar hooks;
- adicionar telemetria;
- executar APIs externas;
- automatizar execução destrutiva;
- alterar a filosofia de segurança já definida.

---

## 4. Por que não publicar agora automaticamente

Publicar uma CLI sem validação humana pode gerar uma falsa sensação de maturidade.

O Resolve Aí tem uma proposta ambiciosa: transformar uma ideia ou problema em diagnóstico, plano, preparo, execução assistida e validação. Essa promessa não pode ser validada apenas por testes unitários.

Testes unitários confirmam que comandos funcionam.

Validação humana confirma se o produto:

- é compreensível;
- é confiável;
- é útil;
- reduz ansiedade;
- orienta bem;
- não gera confusão;
- entrega valor real.

---

## 5. Critérios de sucesso da Phase 14

A Phase 14 é considerada bem-sucedida se:

1. Existirem documentos de validação real ou pendência explícita.
2. Nenhuma validação real for inventada.
3. O feedback for classificado por severidade.
4. O readiness score for recalculado com honestidade.
5. A decisão GO / LIMITED GO / NO-GO for registrada.
6. O backlog de melhorias for atualizado.
7. O pacote npm for revisado novamente.
8. A documentação de quickstart for avaliada contra a experiência dos usuários.
9. A recomendação final for clara.

---

## 6. Resultado esperado

Ao final, o repositório deve conter:

- relatórios de sessão por perfil;
- roteiro de condução;
- roteiro de observação;
- formulário de feedback;
- scorecard atualizado;
- decisão formal de release;
- ADRs da Phase 14;
- documentação de sprint;
- próximos passos conforme o resultado.

A Phase 14 não é sobre velocidade. É sobre confiança.

---

## 7. Decisão esperada depois da Phase 14

A decisão deve seguir este modelo:

```text
GO:
  Pode preparar release público alpha na próxima fase.

LIMITED GO:
  Pode ampliar private alpha ou publicar apenas com escopo muito controlado.

NO-GO:
  Deve corrigir blockers antes de qualquer publicação.
```

A decisão deve ser baseada em evidência, não entusiasmo.
