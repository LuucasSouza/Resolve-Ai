# pt224 — Moderated Test Protocol

> Projeto: Resolve Aí  
> Fase: Phase 14  
> Tema: protocolo de teste moderado

---

## 1. Objetivo

Definir um protocolo prático para conduzir sessões moderadas de validação do Resolve Aí.

A pessoa moderadora deve observar, não convencer.

---

## 2. Princípios

1. Não guiar demais.
2. Não defender o produto.
3. Não explicar antes da hora.
4. Observar confusão real.
5. Registrar frases do participante.
6. Separar bug, confusão e sugestão.
7. Não coletar dados sensíveis.
8. Não transformar a sessão em consultoria completa.

---

## 3. Duração recomendada

Sessão curta:

```text
30 minutos
```

Sessão completa:

```text
45 a 60 minutos
```

Distribuição sugerida:

| Bloco | Tempo |
|---|---:|
| Introdução e segurança | 5 min |
| Contexto do participante | 5 min |
| Execução do fluxo | 15–25 min |
| Revisão dos documentos | 10–15 min |
| Feedback final | 5–10 min |

---

## 4. Script de abertura

```text
Hoje vamos testar o Resolve Aí, uma ferramenta open-source em alpha.

A promessa é:
"Me dá o problema ou a ideia, e eu te ajudo a resolver."

Quero observar se o fluxo é claro, útil e seguro.

Não use dados sensíveis, senhas, tokens, dados de clientes ou informações confidenciais.

Não tem resposta certa. Se algo parecer confuso, isso é um achado importante.
```

---

## 5. Preparação técnica

Antes da sessão:

```bash
node --version
npm --version
git --version
```

Confirmar que o CLI local funciona:

```bash
resolve-ai ajuda
```

Se não houver instalação via `npm link`, usar:

```bash
node /caminho/para/Resolve-Ai/packages/resolve-ai-cli/dist/index.js ajuda
```

---

## 6. Fluxo padrão

O fluxo padrão da sessão é:

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

O moderador pode interromper se houver confusão crítica.

---

## 7. Observações obrigatórias

Registrar:

- primeiro comando que causou dúvida;
- primeiro documento que causou dúvida;
- se o usuário entende a diferença entre comandos;
- se o usuário entende que `resolver` não executa código;
- se o usuário entende que `validar` não roda testes automaticamente;
- se o usuário entende o estado ligado/desligado;
- se os textos soam brasileiros e confiáveis;
- se os documentos parecem úteis ou burocráticos.

---

## 8. Classificação de achados

### Bug

Algo não funciona como deveria.

Exemplos:

- comando quebra;
- arquivo esperado não é criado;
- status mostra dado errado;
- stack detectada incorretamente.

### Confusão de UX

Algo funciona, mas o usuário não entende.

Exemplos:

- `resolver` parece executar código;
- `preparar` e `planejar` parecem iguais;
- `docs/resolve-ai/` parece excesso de documentação.

### Fricção

Algo é entendido, mas parece trabalhoso.

Exemplos:

- muitos comandos;
- instalação local difícil;
- fluxo longo;
- documentos demais para projeto simples.

### Sugestão

Ideia de melhoria.

Exemplos:

- comando `resumo`;
- modo mais curto;
- wizard interativo;
- output com emojis leves.

### Risco

Algo pode causar dano, vazamento ou má interpretação.

Exemplos:

- usuário quer rodar com `.env` real;
- usuário acha que pode commitar sem revisão;
- documentação sugere confiança excessiva.

---

## 9. Severidade

### P0 — Crítico

Impede uso seguro ou pode causar dano.

### P1 — Alto

Bloqueia adoção alpha ou causa confusão séria.

### P2 — Médio

Precisa melhorar, mas não bloqueia private alpha.

### P3 — Baixo

Polimento, clareza ou conveniência.

---

## 10. Encerramento

Perguntar:

1. Em uma frase, o que você acha que o Resolve Aí faz?
2. Qual comando ficou mais claro?
3. Qual comando ficou mais confuso?
4. Você usaria de novo?
5. Você recomendaria para alguém parecido com você?
6. O que precisa melhorar antes de ser público?
7. Você confia que ele não vai mexer no seu código sem querer?

---

## 11. Registro pós-sessão

Após a sessão, preencher:

```yaml
participant_id:
profile:
scenario:
date:
duration_minutes:
completed_flow: true/false
commands_completed:
documents_reviewed:
top_positive_signal:
top_confusion:
top_risk:
bugs:
ux_confusions:
frictions:
suggestions:
severity_summary:
moderator_recommendation:
```

---

## 12. Regra de honestidade

Se a sessão não aconteceu, registrar:

```text
Sessão não executada. Participante indisponível. Nenhuma validação real foi inferida.
```

Não substituir validação real por opinião interna.
