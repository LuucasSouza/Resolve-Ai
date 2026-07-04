---
title: Runtime Security, Privacy and Token Saving
phase: Phase 3 — Resolve Aí Runtime Productization
status: Draft
version: 0.1.0-alpha
public_name: Resolve Aí
legacy_technical_name: AI-SEOS
last_updated: 2026-07-04
---

# pt118 — Runtime Security, Privacy and Token Saving

## 1. Objetivo

Este documento define requisitos de segurança, privacidade e economia de tokens para o Resolve Aí Runtime.

A runtime só será confiável se respeitar três coisas:

```text
dados do usuário
segredos do projeto
tokens/contexto do agente
```

## 2. Segurança por padrão

O Resolve Aí não deve ler, registrar, indexar ou reproduzir dados sensíveis sem necessidade.

Arquivos sensíveis comuns:

```text
.env
.env.local
*.pem
*.key
service-account.json
backups/
dumps/
exports/
*_auth_users.json
CSV com dados reais
```

## 3. Detecção de risco

Ao diagnosticar projeto, o Resolve Aí deve sinalizar:

- arquivos sensíveis rastreados;
- secrets expostos;
- dumps no repositório;
- dados pessoais versionados;
- ausência de `.gitignore` adequado;
- ausência de CI/testes em projeto maduro;
- ausência de políticas de segurança.

## 4. Política de não exposição

Se encontrar dado sensível, o Resolve Aí deve:

- não imprimir o conteúdo completo;
- registrar caminho e tipo de risco;
- sugerir mitigação;
- recomendar rotação de credenciais se necessário;
- recomendar expurgo de histórico Git se já houve commit.

## 5. Economia de tokens

O Resolve Aí precisa evitar jogar o framework inteiro no contexto do agente.

Estratégias:

```text
resumos locais
handoff compacto
estado em JSON
consulta seletiva de documentos
Modo Liga/Desliga
index local futuro
```

## 6. Modo Liga/Desliga como economia

Quando desligado:

```text
não carregar contexto pesado
não rodar hooks pesados
não gerar documentação automática
não atualizar handoff automaticamente
não repetir instruções do framework
```

Quando ligado:

```text
carregar somente o necessário para a ação atual
```

## 7. Context Package compacto

O runtime deve preferir um contexto mínimo:

```text
Projeto
Modo
Última decisão
Riscos críticos
Próxima ação
Arquivos relevantes
Limites
```

Em vez de colar dezenas de páginas.

## 8. Privacidade local

Primeira versão deve funcionar localmente.

Não exigir upload de projeto para serviço externo.

## 9. Logs

Logs devem evitar:

- secrets;
- conteúdo de arquivos sensíveis;
- dados pessoais;
- tokens;
- prompts privados longos sem consentimento.

## 10. Critérios de aceite

Segurança e economia estarão especificadas quando:

- arquivos sensíveis estiverem listados;
- política de não exposição estiver definida;
- Modo Liga/Desliga estiver conectado a token saving;
- contexto compacto estiver definido;
- logs seguros estiverem documentados.
