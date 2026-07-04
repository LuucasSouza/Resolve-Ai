# Resolve Aí — Phase 13

> Projeto público: **Resolve Aí**  
> Promessa: **“Me dá o problema ou a ideia, e eu te ajudo a resolver.”**  
> Nome técnico/histórico: **AI-SEOS**  
> Fase: **Phase 13 — Real User Alpha Validation and Release Decision**


## 1. Framework de Decisão de Release

A Phase 13 deve produzir uma decisão formal e rastreável sobre a próxima fase.

## 2. Estados possíveis

### 2.1 GO — Public Alpha Release Execution

Significa que a próxima fase pode executar:

- tag `v0.1.0-alpha`;
- GitHub Release;
- publicação npm alpha;
- anúncio público controlado.

Critérios mínimos:

- Readiness >= 85/100.
- Nenhum P0.
- Nenhum P1 aberto.
- Pelo menos 1 validação real por perfil ou justificativa forte para exceção.
- Package content aprovado.
- Instalação local validada.
- README/quickstart compreendidos por usuários.

### 2.2 LIMITED GO — Restricted Alpha

Significa que pode liberar para grupo restrito, mas não publicar amplamente.

Critérios:

- Readiness entre 75 e 84.
- Nenhum P0.
- P1s conhecidos e contornáveis.
- Validação real parcial.
- Package content sem risco crítico.

### 2.3 NO-GO — Blocker Resolution

Significa que a próxima fase deve corrigir problemas antes de release.

Critérios:

- Qualquer P0.
- P1 que bloqueia uso básico.
- Falha de segurança/privacidade.
- Package content não aprovado.
- Usuários reais não conseguem concluir fluxo.
- Readiness < 75.

## 3. Matriz de decisão

| Dimensão | Peso | GO | LIMITED GO | NO-GO |
|---|---:|---|---|---|
| Segurança e privacidade | 20 | sem P0/P1 | P1 contornável | P0/P1 crítico |
| Fluxo CLI | 15 | completo e claro | completo com fricção | falha básica |
| UX brasileira | 10 | natural | aceitável | confusa |
| Validação real | 20 | 3 perfis | parcial | ausente ou ruim |
| Package readiness | 15 | aprovado | ajustes menores | risco crítico |
| Docs públicas | 10 | claras | longas/confusas | insuficientes |
| Testes locais | 10 | verdes | verdes com ressalvas | falham |

## 4. Readiness score

Pontuar de 0 a 100.

A Phase 12 fechou com:

```text
80/100 — LIMITED GO
```

A Phase 13 deve recalcular com base em:

- Validação real.
- Package review.
- Testes repetidos.
- Feedback de UX.
- Blockers restantes.

## 5. Arquivo de decisão

Criar:

```text
docs/release/v0.1.0-alpha-phase-13-go-no-go-decision.md
```

## 6. Estrutura da decisão

```markdown
# v0.1.0-alpha — Phase 13 GO / LIMITED GO / NO-GO Decision

## Decisão

GO / LIMITED GO / NO-GO

## Readiness anterior

80/100 — LIMITED GO

## Readiness atual

## Evidências consideradas

## Validação real

## Package review

## Blockers restantes

## Riscos aceitos

## Riscos não aceitos

## Próxima fase recomendada

```

## 7. Regras de honestidade

- Não contar validação simulada como validação real.
- Não contar opinião interna como validação de usuário.
- Não esconder P1.
- Não publicar se houver incerteza de segurança.
- Não transformar `LIMITED GO` em `GO` apenas por entusiasmo.
