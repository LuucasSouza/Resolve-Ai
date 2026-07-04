# Resolve Aí — Phase 13

> Projeto público: **Resolve Aí**  
> Promessa: **“Me dá o problema ou a ideia, e eu te ajudo a resolver.”**  
> Nome técnico/histórico: **AI-SEOS**  
> Fase: **Phase 13 — Real User Alpha Validation and Release Decision**


## 1. Modelo de Captura de Feedback e Evidência

A Phase 13 precisa registrar feedback real sem transformar o projeto em uma coleta invasiva de dados. O modelo é baseado em observação manual, feedback sanitizado e classificação de severidade.

## 2. Tipos de evidência aceitos

### 2.1 Evidência forte

- Sessão observada ao vivo.
- Usuário executou comandos por conta própria.
- Relatório sanitizado com resultado, bloqueios e dúvidas.
- Feedback gravado em formulário ou issue sem dados sensíveis.

### 2.2 Evidência média

- Usuário testou sozinho e respondeu formulário.
- Usuário abriu issue com bug reproduzível.
- Usuário compartilhou logs sanitizados.

### 2.3 Evidência fraca

- Opinião informal sem teste.
- Feedback de alguém que só leu README.
- Suposição do mantenedor.

O score final deve priorizar evidência forte.

## 3. Severidade dos achados

### P0 — Bloqueador crítico

Exemplos:

- CLI copia conteúdo sensível.
- CLI altera código do projeto sem autorização.
- Comando falha no fluxo básico.
- Mensagem induz usuário a ação perigosa.
- Instalação local não funciona de forma reproduzível.

### P1 — Bloqueador de alpha público

Exemplos:

- Usuários reais não entendem o fluxo.
- `resolver` é interpretado como autoexecução.
- Diagnóstico gera confiança falsa.
- Stack detection falha em casos comuns.
- Documentação de instalação gera erro frequente.

### P2 — Correção importante

Exemplos:

- Copy confusa, mas contornável.
- Documento muito longo.
- Score agressivo demais.
- Quickstart poderia ser menor.

### P3 — Melhoria

Exemplos:

- Melhorar exemplos.
- Melhorar tom de voz.
- Adicionar mais cenários.

## 4. Template de sessão

```markdown
# Sessão de Validação Real — Resolve Aí

## Metadados

- Data:
- Perfil: Non-Technical Builder / Vibe Coder / Professional Engineer
- Ambiente: Windows / macOS / Linux / Outro
- Node version, se informado:
- Projeto usado: vazio / fake / real sanitizado
- Facilitador:

## Consentimento e privacidade

- Dados sensíveis foram evitados? sim/não
- Arquivos reais foram compartilhados? sim/não
- Conteúdo sensível foi copiado? sim/não

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

## Resultado

- Passou / Passou com ressalvas / Falhou

## Observações

## Confusões do usuário

## Bugs ou problemas

| ID | Severidade | Descrição | Evidência | Recomendação |
|---|---:|---|---|---|

## Frases úteis do usuário

> Registrar apenas frases não sensíveis.

## Decisão da sessão

- GO / LIMITED GO / NO-GO para este perfil
```

## 5. Consolidação

Criar arquivo agregado:

```text
docs/alpha-validation/real-users/phase-13-real-user-validation-summary.md
```

Ele deve conter:

- Sessões planejadas.
- Sessões executadas.
- Perfis cobertos.
- Principais P0/P1/P2.
- Readiness ajustado.
- Decisão final recomendada.
