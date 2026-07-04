---
title: Modo Liga/Desliga
phase: Phase 3 — Resolve Aí Runtime Productization
status: Draft
version: 0.1.0-alpha
public_name: Resolve Aí
legacy_technical_name: AI-SEOS
last_updated: 2026-07-04
---

# pt113 — Modo Liga/Desliga

## 1. Objetivo

O **Modo Liga/Desliga** é o controle simples de ativação do Resolve Aí.

Ele existe por três motivos:

1. economizar tokens;
2. reduzir interferência quando o usuário quer trabalhar livremente;
3. permitir retomar o contexto rapidamente quando necessário.

A experiência deve ser simples, brasileira e divertida.

```text
Ligou: o Resolve Aí ajuda.
Desligou: ele para quietinho e economiza contexto.
```

## 2. Comandos oficiais

```bash
resolve-ai ligar
resolve-ai desligar
resolve-ai status
```

Não priorizar comandos em inglês na experiência pública.

## 3. Comportamento quando ligado

Quando ligado, o Resolve Aí pode:

- carregar contexto do projeto;
- orientar a IA;
- sugerir próximo passo;
- lembrar quality gates;
- registrar decisões;
- registrar riscos;
- gerar handoff;
- atualizar `docs/resolve-ai/`;
- manter estado em `.resolve-ai/`.

Mensagem sugerida:

```text
Resolve Aí ligado.
Vou acompanhar este projeto, organizar contexto e te ajudar a resolver sem bagunça.
```

## 4. Comportamento quando desligado

Quando desligado, o Resolve Aí deve:

- parar de injetar contexto;
- não rodar hooks pesados;
- não atualizar documentação automaticamente;
- não consumir tokens com orientação ativa;
- preservar estado mínimo para retomar depois.

Mensagem sugerida:

```text
Resolve Aí desligado.
Vou parar de injetar contexto e economizar tokens. Quando quiser, é só ligar de novo.
```

## 5. Status

`resolve-ai status` deve informar:

```text
Estado: ligado ou desligado
Modo atual
Tipo de projeto
Última ação registrada
Próxima ação sugerida
Documentos existentes
Riscos críticos abertos
```

Exemplo:

```text
Resolve Aí está ligado neste projeto.
Modo atual: Projeto em Andamento — Diagnóstico e Continuação.
Último contexto salvo: há 12 minutos.
Riscos críticos abertos: 1.
Próxima ação sugerida: executar hardening do repositório antes de implementar novas features.
```

## 6. Estados possíveis

```text
desligado
ligado
pausado
erro
não configurado
```

### 6.1 Desligado

Existe configuração local, mas o Resolve Aí não atua.

### 6.2 Ligado

O Resolve Aí atua como camada de orientação.

### 6.3 Pausado

Uso futuro. Parecido com desligado, mas preserva sessão ativa temporária.

### 6.4 Erro

Configuração inválida, arquivos corrompidos ou runtime inconsistente.

### 6.5 Não configurado

Projeto ainda não possui `.resolve-ai/`.

## 7. Arquivo de estado

Exemplo de `.resolve-ai/state.json`:

```json
{
  "status": "ligado",
  "mode": "projeto-em-andamento",
  "projectType": "existing",
  "lastAction": "diagnosticar",
  "lastContextUpdate": "2026-07-04T10:00:00-03:00",
  "nextSuggestedAction": "revisar riscos críticos",
  "tokenSaving": false
}
```

Quando desligado:

```json
{
  "status": "desligado",
  "tokenSaving": true,
  "lastAction": "desligar"
}
```

## 8. Regras obrigatórias

- Desligar não deve apagar documentos.
- Desligar não deve apagar estado local essencial.
- Ligar deve restaurar o último contexto útil.
- Status deve funcionar mesmo desligado.
- O usuário deve entender o estado sem termos técnicos.
- O Resolve Aí não deve consumir contexto pesado quando desligado.

## 9. Interação com agentes de IA

Quando ligado, arquivos de instrução podem dizer ao agente:

```text
O Resolve Aí está ligado. Antes de implementar, consulte .resolve-ai/state.json e docs/resolve-ai/09-handoff.md.
```

Quando desligado:

```text
O Resolve Aí está desligado. Não injete contexto do framework nem atualize docs/resolve-ai/ automaticamente.
```

## 10. Critérios de aceite

O Modo Liga/Desliga estará especificado quando:

- comandos públicos estiverem em português;
- estados estiverem definidos;
- comportamento ligado/desligado estiver claro;
- economia de tokens estiver documentada;
- state file estiver especificado;
- mensagens públicas estiverem leves e claras.
