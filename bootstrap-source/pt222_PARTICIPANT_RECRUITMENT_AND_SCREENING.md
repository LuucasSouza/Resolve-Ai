# pt222 — Participant Recruitment and Screening

> Projeto: Resolve Aí  
> Fase: Phase 14  
> Tema: recrutamento, perfis e triagem de participantes

---

## 1. Objetivo

Definir como selecionar participantes reais para validar o Resolve Aí sem coletar dados sensíveis e sem transformar a validação em pesquisa invasiva.

A meta não é fazer pesquisa acadêmica. A meta é obter evidência prática suficiente para decidir se o produto pode avançar para alpha público.

---

## 2. Perfis oficiais

### 2.1 Non-Technical Builder

Pessoa que tem uma ideia, problema ou projeto, mas não programa profissionalmente.

Exemplos:

- dono de pequeno negócio;
- criador de produto;
- gestor operacional;
- prestador de serviço;
- empreendedor iniciante;
- pessoa que usa IA, mas não entende arquitetura ou código.

O que validar:

- entende a promessa do Resolve Aí?
- entende que ele não "faz mágica", mas organiza o caminho?
- consegue seguir os comandos com ajuda?
- os documentos gerados são compreensíveis?
- a linguagem brasileira transmite confiança?

---

### 2.2 Vibe Coder

Pessoa que constrói com IA, edita código, usa Copilot/Codex/Claude/Gemini, mas não necessariamente segue engenharia formal.

Exemplos:

- indie hacker;
- maker;
- estudante;
- dev iniciante;
- criador que gera apps com IA;
- pessoa que já tem projeto bagunçado e quer organizar.

O que validar:

- entende o valor do diagnóstico?
- aceita passar por planejamento antes de "sair codando"?
- entende o fluxo `diagnosticar → planejar → preparar → resolver → validar`?
- o produto reduz bagunça?
- o safety gate parece útil ou chato demais?

---

### 2.3 Professional Engineer

Pessoa técnica experiente, dev, tech lead, arquiteto, staff engineer, CTO ou consultor.

O que validar:

- os documentos gerados têm rigor suficiente?
- o produto não parece "prompt toy"?
- a abordagem read-only é confiável?
- o uso de ADRs, riscos e handoffs faz sentido?
- o fluxo é útil para onboarding, legado e projetos em andamento?
- o produto poderia entrar em ambiente de equipe?

---

## 3. Tamanho mínimo da validação

### Rodada mínima

- 1 participante Non-Technical Builder;
- 1 participante Vibe Coder;
- 1 participante Professional Engineer.

### Rodada melhor

- 2 participantes por perfil;
- 6 sessões no total.

### Rodada forte

- 3 participantes por perfil;
- 9 sessões no total.

Para Phase 14, o mínimo aceitável é **1 por perfil**.

Se não houver participantes disponíveis, a Phase 14 deve registrar pendência e manter decisão LIMITED GO ou NO-GO.

---

## 4. Critérios de inclusão

O participante deve:

- aceitar testar uma ferramenta alpha;
- entender que o produto pode ter falhas;
- não usar dados sensíveis reais;
- aceitar que o foco é validar experiência e clareza;
- usar um projeto simulado, clone sanitizado ou diretório temporário.

---

## 5. Critérios de exclusão

Evitar participantes que:

- queiram usar dados reais sensíveis;
- esperem entrega comercial pronta;
- precisem de suporte crítico imediato;
- queiram publicar o projeto durante a sessão;
- não consigam testar em ambiente seguro;
- confundam validação com promessa de consultoria gratuita extensa.

---

## 6. Convite sugerido

```text
Estou testando uma ferramenta open-source chamada Resolve Aí.

A ideia é simples:
"Me dá o problema ou a ideia, e eu te ajudo a resolver."

Ela roda no terminal e ajuda a organizar um projeto com diagnóstico, plano, tarefa preparada, execução assistida e validação.

Ainda está em alpha. Não é para usar com dados sensíveis nem em produção.

Quero observar se o fluxo faz sentido, se os textos são claros e se a ferramenta realmente ajuda.

A sessão leva de 30 a 45 minutos.
```

---

## 7. Consentimento simples

Não é necessário coletar documento, assinatura ou dados pessoais para uma validação informal de alpha.

Mas é obrigatório deixar claro:

```text
Esta é uma validação de produto em fase alpha.
Não compartilhe senhas, tokens, dados de clientes, dados financeiros, dados pessoais sensíveis ou informações confidenciais.
O objetivo é avaliar clareza, utilidade e segurança do fluxo.
```

---

## 8. Dados permitidos

Pode registrar:

- perfil do participante;
- nível técnico aproximado;
- cenário testado;
- dificuldades observadas;
- pontos positivos;
- pontos confusos;
- bugs encontrados;
- recomendação final do participante.

Não registrar:

- nome completo;
- email pessoal;
- dados de clientes;
- tokens;
- senhas;
- URLs privadas;
- chaves de API;
- prints com informações sensíveis.

---

## 9. Registro anonimizado

Usar identificadores:

```text
NTB-01
VC-01
PE-01
```

Onde:

- NTB = Non-Technical Builder;
- VC = Vibe Coder;
- PE = Professional Engineer.

---

## 10. Resultado da triagem

Cada participante deve ser classificado assim:

```yaml
participant_id: "VC-01"
profile: "Vibe Coder"
technical_level: "intermediate"
project_type: "existing-side-project"
validation_mode: "moderated"
sensitive_data_used: false
approved_for_alpha_session: true
notes: "Usará projeto simulado baseado em projeto pessoal."
```
