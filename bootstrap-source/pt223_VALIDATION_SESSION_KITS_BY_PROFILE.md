# pt223 — Validation Session Kits by Profile

> Projeto: Resolve Aí  
> Fase: Phase 14  
> Tema: roteiros de sessão por perfil

---

## 1. Objetivo

Criar kits práticos para conduzir sessões reais de validação com os três perfis oficiais.

Cada kit deve conter:

- cenário;
- preparação;
- roteiro;
- comandos;
- perguntas;
- observações;
- critérios de sucesso;
- sinais de confusão.

---

## 2. Kit A — Non-Technical Builder

### 2.1 Cenário sugerido

O participante tem uma ideia de sistema, mas não sabe por onde começar.

Exemplos:

- sistema para academia;
- controle de clientes;
- agenda de serviços;
- gestão de pagamentos;
- portal de alunos;
- aplicativo interno simples.

### 2.2 Preparação

Criar diretório temporário:

```bash
mkdir resolve-ai-test-non-technical
cd resolve-ai-test-non-technical
```

Rodar:

```bash
resolve-ai começar
resolve-ai ligar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai status
```

### 2.3 Tarefa principal

Pedir para o participante abrir os documentos gerados e responder:

- O que você acha que aconteceu?
- O que você faria agora?
- O texto ficou claro?
- Você entendeu a diferença entre diagnóstico, plano e execução?
- Você se sentiu mais orientado ou mais confuso?

### 2.4 Pontos de observação

Observar:

- medo do terminal;
- dificuldade com nomes de comandos;
- clareza da promessa;
- entendimento de `docs/resolve-ai/`;
- entendimento de `status`;
- percepção de valor;
- linguagem.

### 2.5 Critérios de sucesso

A sessão é bem-sucedida se o participante:

- entende que o Resolve Aí organiza o projeto;
- consegue explicar a próxima ação em palavras próprias;
- entende que o produto não substitui validação humana;
- acha os documentos úteis;
- não percebe o fluxo como técnico demais.

### 2.6 Sinais de problema

Registrar como problema se o participante:

- acha que a ferramenta vai construir tudo sozinha;
- não entende o que foi gerado;
- fica travado no terminal;
- não entende por que existem tantos arquivos;
- confunde `.resolve-ai/` com `docs/resolve-ai/`.

---

## 3. Kit B — Vibe Coder

### 3.1 Cenário sugerido

O participante tem um projeto criado com IA ou parcialmente desenvolvido.

Criar projeto fake:

```bash
mkdir resolve-ai-test-vibe
cd resolve-ai-test-vibe
npm init -y
mkdir src
echo "console.log('hello')" > src/index.js
```

Rodar:

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

### 3.2 Tarefa principal

Pedir para o participante:

- analisar o diagnóstico;
- revisar o backlog;
- abrir a tarefa preparada;
- abrir o prompt final para agente;
- dizer se usaria aquilo no Codex/Claude/Copilot;
- avaliar se o fluxo evita bagunça.

### 3.3 Perguntas

- O diagnóstico pareceu útil?
- O planejamento fez sentido?
- Você sentiu vontade de pular direto para resolver?
- O comando `preparar` ficou claro?
- O comando `resolver` pareceu perigoso ou seguro?
- O `validar` deveria rodar testes automaticamente ou só orientar?

### 3.4 Critérios de sucesso

A sessão é bem-sucedida se o participante:

- aceita o valor de planejar antes de implementar;
- entende que `resolver` não altera código;
- entende que `validar` é revisão pós-execução;
- usaria o prompt final com um agente de IA;
- percebe redução de desorganização.

### 3.5 Sinais de problema

Registrar problema se:

- o usuário acha o fluxo longo demais;
- os documentos parecem genéricos demais;
- o backlog não ajuda;
- a detecção de stack falha;
- a linguagem parece infantil para alguém técnico.

---

## 4. Kit C — Professional Engineer

### 4.1 Cenário sugerido

Projeto técnico fake ou repositório sanitizado.

Exemplo:

```bash
mkdir resolve-ai-test-professional
cd resolve-ai-test-professional
npm init -y
mkdir src docs
echo '{"compilerOptions":{"strict":true}}' > tsconfig.json
echo "VITE_API_URL=http://localhost:3000" > .env.example
```

Rodar fluxo completo:

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

### 4.2 Tarefa principal

Pedir para avaliar:

- arquitetura dos documentos;
- maturidade dos riscos;
- utilidade para projeto em andamento;
- utilidade para handoff entre agentes;
- adequação a equipe;
- qualidade do safety model.

### 4.3 Perguntas

- Você confiaria em rodar isso em um repositório real?
- O modo read-only é suficiente para ganhar confiança?
- O produto gera ruído demais?
- Os nomes em português ajudam ou atrapalham?
- Os comandos são memoráveis?
- O fluxo poderia virar padrão de equipe?
- O que impediria adoção?

### 4.4 Critérios de sucesso

A sessão é bem-sucedida se o participante:

- entende valor em contexto profissional;
- considera os safety gates apropriados;
- não vê risco de automação destrutiva;
- enxerga uso em diagnóstico, onboarding ou legado;
- recomenda melhorias específicas, não rejeição total.

### 4.5 Sinais de problema

Registrar problema se:

- docs parecem superficiais;
- readiness parece inflado;
- riscos são genéricos;
- falta opção de configuração avançada;
- dist versionado causa desconfiança;
- CLI sem npm reduz adoção.

---

## 5. Métrica rápida por sessão

Ao final, atribuir notas de 1 a 5:

```yaml
clarity: 1-5
trust: 1-5
usefulness: 1-5
safety_perception: 1-5
language_fit: 1-5
would_use_again: 1-5
```

Interpretação:

- média abaixo de 3: blocker potencial;
- média entre 3 e 4: precisa melhoria;
- média acima de 4: forte sinal positivo.

---

## 6. Frase final para o participante

```text
Obrigado por testar. O Resolve Aí ainda está em alpha.
O objetivo desta sessão não era provar que está pronto, mas descobrir o que precisa melhorar antes de mais pessoas usarem.
```
