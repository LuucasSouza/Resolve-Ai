# pt271 — Phase 18: Public Alpha Release Candidate Rationale

## Nome da fase

**Phase 18 — Public Alpha Release Candidate & Maintainer Approval Gate**

## Contexto

A Phase 17B deixou o Resolve Aí em estado tecnicamente forte para alpha: entrevista guiada, consistência de estado, linguagem de risco em português, status mais coerente, tarefa mais concreta e kit de teste atualizado.

Ainda existe uma lacuna importante: não haverá validação humana real adicional antes desta próxima fase. Portanto, a Phase 18 deve preparar o release candidate de forma honesta, sem declarar stable e sem afirmar validação humana ampla.

## Decisão estratégica

Avançar sem teste humano é aceitável apenas como **release candidate controlado**, não como versão estável.

Classificação pública permitida:

```text
Public Alpha Candidate
Alpha público para validação
Release Candidate aguardando aprovação do mantenedor
```

Classificação proibida:

```text
Stable
Production ready
Validado por usuários iniciantes reais
Pronto para qualquer projeto
```

## Objetivo

Preparar todos os artefatos necessários para uma decisão final de publicação alpha:

1. release notes;
2. known limitations;
3. npm dry-run audit;
4. checklist de publicação npm;
5. draft de GitHub Release;
6. checklist de tag;
7. plano de rollback;
8. plano de feedback pós-release;
9. gate de aprovação do mantenedor;
10. scorecard e go/no-go da Phase 18.

## Não objetivos

A Phase 18 não deve:

- publicar no npm;
- criar tag Git;
- criar GitHub Release;
- declarar stable;
- adicionar telemetria;
- coletar feedback automaticamente;
- remover safety gates;
- esconder a ausência de validação humana real.

## Resultado esperado

Criar o diretório:

```text
docs/release/v0.1.0-alpha-rc/
```

com os artefatos de release candidate.

## Score esperado

Entrada:

```text
88/100 — LIMITED GO muito forte
```

Resultado máximo permitido sem validação humana real:

```text
90/100 — RELEASE CANDIDATE READY, aguardando aprovação do mantenedor
```
