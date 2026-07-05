# pt225 — Feedback Capture Instruments

> Projeto: Resolve Aí  
> Fase: Phase 14  
> Tema: formulários, relatórios e instrumentos de feedback

---

## 1. Objetivo

Definir instrumentos padronizados para registrar feedback da validação real.

A captura deve ser leve, prática, brasileira e segura.

---

## 2. Formulário rápido do participante

Criar ou atualizar:

```text
templates/feedback/real-alpha-participant-feedback.md
```

Conteúdo sugerido:

```markdown
# Feedback — Resolve Aí Alpha

## Perfil

- Perfil testado:
  - [ ] Non-Technical Builder
  - [ ] Vibe Coder
  - [ ] Professional Engineer

## Clareza

1. Você entendeu o que o Resolve Aí faz?
   - [ ] Sim
   - [ ] Mais ou menos
   - [ ] Não

2. Qual comando ficou mais claro?

3. Qual comando ficou mais confuso?

## Utilidade

4. O fluxo te ajudou a organizar o projeto?
   - [ ] Sim
   - [ ] Parcialmente
   - [ ] Não

5. Qual documento gerado foi mais útil?

6. Qual documento pareceu desnecessário?

## Segurança

7. Você sentiu que a ferramenta poderia mexer no seu código sem querer?
   - [ ] Sim
   - [ ] Não
   - [ ] Não sei

8. A explicação de que o Resolve Aí não executa automaticamente ficou clara?
   - [ ] Sim
   - [ ] Parcialmente
   - [ ] Não

## Linguagem

9. A linguagem brasileira ajudou?
   - [ ] Sim
   - [ ] Tanto faz
   - [ ] Atrapalhou

10. Alguma palavra/comando soou estranho?

## Recomendação

11. Você usaria novamente?
   - [ ] Sim
   - [ ] Talvez
   - [ ] Não

12. Você recomendaria?
   - [ ] Sim
   - [ ] Talvez
   - [ ] Não

13. O que precisa melhorar antes de lançar público?
```

---

## 3. Relatório do moderador

Criar ou atualizar:

```text
templates/validation/real-alpha-session-report-template.md
```

Conteúdo sugerido:

```markdown
# Real Alpha Session Report

## Identificação

- Participant ID:
- Perfil:
- Data:
- Duração:
- Moderador:
- Projeto usado:
- Dados sensíveis usados: Não

## Ambiente

- OS:
- Node:
- npm:
- Git:
- Modo de execução:
  - [ ] npm link
  - [ ] node dist/index.js
  - [ ] outro

## Fluxo executado

- [ ] ajuda
- [ ] começar
- [ ] ligar
- [ ] diagnosticar
- [ ] planejar
- [ ] preparar
- [ ] resolver
- [ ] validar
- [ ] status

## Achados

### Bugs

| ID | Descrição | Severidade | Evidência |
|---|---|---|---|

### Confusões de UX

| ID | Descrição | Severidade | Evidência |
|---|---|---|---|

### Fricções

| ID | Descrição | Severidade | Evidência |
|---|---|---|---|

### Sugestões

| ID | Descrição | Severidade | Evidência |
|---|---|---|---|

### Riscos

| ID | Descrição | Severidade | Evidência |
|---|---|---|---|

## Notas

| Dimensão | Nota 1–5 |
|---|---:|
| Clareza | |
| Confiança | |
| Utilidade | |
| Segurança percebida | |
| Linguagem | |
| Usaria de novo | |

## Recomendação do moderador

- [ ] GO
- [ ] LIMITED GO
- [ ] NO-GO

## Justificativa

```

---

## 4. Matriz consolidada

Criar ou atualizar:

```text
docs/alpha-validation/real-users/phase-14-real-user-validation-matrix.md
```

Modelo:

| Participante | Perfil | Fluxo completo | Clareza | Utilidade | Confiança | Severidade máxima | Recomendação |
|---|---|---:|---:|---:|---:|---|---|
| NTB-01 | Non-Technical Builder | Não |  |  |  |  | Pendente |
| VC-01 | Vibe Coder | Não |  |  |  |  | Pendente |
| PE-01 | Professional Engineer | Não |  |  |  |  | Pendente |

---

## 5. Backlog de feedback

Criar ou atualizar:

```text
docs/community/real-alpha-feedback-backlog.md
```

Campos:

| ID | Perfil | Tipo | Severidade | Descrição | Decisão | Fase sugerida |
|---|---|---|---|---|---|---|

Tipos:

- Bug
- UX Confusion
- Friction
- Suggestion
- Risk
- Documentation
- Packaging

Decisões:

- Corrigir agora
- Corrigir antes do npm
- Corrigir depois do alpha
- Documentar limitação
- Rejeitar com justificativa

---

## 6. Score por perfil

Criar:

```text
docs/alpha-validation/real-users/profile-score-summary.md
```

Modelo:

| Perfil | Clareza | Utilidade | Confiança | Segurança | Linguagem | Média | Decisão |
|---|---:|---:|---:|---:|---:|---:|---|
| Non-Technical Builder |  |  |  |  |  |  | Pendente |
| Vibe Coder |  |  |  |  |  |  | Pendente |
| Professional Engineer |  |  |  |  |  |  | Pendente |

---

## 7. Regra contra viés

O moderador não deve preencher notas para o participante.

Pode preencher observações, mas a nota deve refletir:

- fala do participante;
- comportamento observado;
- resposta explícita;
- evidência da sessão.

---

## 8. Regra de privacidade

Nunca registrar:

- nome completo;
- telefone;
- email;
- tokens;
- chaves;
- senha;
- path contendo nome sensível;
- conteúdo de `.env`;
- dados de clientes.

Usar placeholders:

```text
[REDACTED]
[PROJECT_PATH_REDACTED]
[USER_NAME_REDACTED]
```
