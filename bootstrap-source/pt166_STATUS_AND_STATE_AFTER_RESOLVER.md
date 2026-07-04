---
title: "Status e state após resolver"
phase: "Phase 8 — Resolve Aí Guided Assisted Execution"
status: "Draft"
version: "0.8.0"
public_name: "Resolve Aí"
historical_name: "AI-SEOS"
language: "pt-BR"
---

# Status e Estado Local após `resolver`

## 1. Objetivo

Após a Phase 8, o comando `resolve-ai status` deve mostrar a execução assistida pendente quando ela existir.

## 2. Estado local

O arquivo `.resolve-ai/state.json` deve receber uma nova seção:

```json
{
  "ultimaExecucaoAssistida": {
    "criadaEm": "2026-07-04T00:00:00.000Z",
    "status": "pendente",
    "tarefa": "...",
    "risco": "medio",
    "canAutoExecute": false,
    "proximoPasso": "Revise docs/resolve-ai/21-aprovacao-humana.md e cole o prompt docs/resolve-ai/22-prompt-final-para-agente.md no seu agente de IA.",
    "docsGerados": []
  }
}
```

## 3. Status público

Exemplo de saída quando houver execução assistida:

```text
Resolve Aí está ligado neste projeto.

Último diagnóstico: encontrado
Último planejamento: encontrado
Tarefa preparada: encontrada
Execução assistida: pendente

Tarefa:
Corrigir risco crítico de dados sensíveis no repositório.

Próximo passo:
Leia docs/resolve-ai/21-aprovacao-humana.md e use o prompt em docs/resolve-ai/22-prompt-final-para-agente.md.

Importante:
Eu ainda não mexi no código.
```

## 4. Quando o Resolve Aí estiver desligado

Mesmo desligado, `status` deve funcionar.

Exemplo:

```text
Resolve Aí está desligado neste projeto.

Não vou injetar contexto nem orientar execução automaticamente.
Você ainda pode consultar o status e ligar novamente quando quiser.
```

## 5. Estado e economia de tokens

O comando `resolver` deve respeitar o Modo Liga/Desliga.

Se estiver desligado:

- permitir consultar status;
- permitir informar que o Resolve Aí está pausado;
- evitar gerar pacote de execução sem avisar;
- recomendar `resolve-ai ligar`.

Mensagem sugerida:

```text
Resolve Aí está desligado.

Para preparar uma execução assistida, ligue primeiro:
resolve-ai ligar
```

## 6. Idempotência

Se a execução assistida já existir, o comando deve:

- não sobrescrever documentos por padrão;
- informar os arquivos existentes;
- manter estado consistente;
- sugerir futura opção `--atualizar`.

## 7. Compatibilidade

O state deve continuar compatível com fases anteriores.

Não quebrar:

- `começar`;
- `diagnosticar`;
- `planejar`;
- `preparar`;
- `ligar`;
- `desligar`;
- `status`.
