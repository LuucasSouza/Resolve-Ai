---
project: Resolve Aí
phase: Phase 7 — Guided Execution Prep
status: Draft
language: pt-BR
public_name: Resolve Aí
legacy_name: AI-SEOS
---

# pt155 — Safety Gates e Aprovação antes de Execução

## Princípio

O Resolve Aí não transforma planejamento em execução sem aprovação explícita.

Na Phase 7, o máximo permitido é preparar a execução.

## Gates obrigatórios

### Gate 1 — Existe diagnóstico?

Se não existir: baixa confiança.

### Gate 2 — Existe planejamento?

Se não existir: baixa confiança.

### Gate 3 — Há risco crítico?

Se houver:

- escolher mitigação;
- não escolher feature;
- alertar terminal;
- registrar em `18-riscos-da-execucao.md`.

### Gate 4 — A tarefa é pequena?

Se não for:

- dividir;
- preparar apenas a primeira parte.

### Gate 5 — Existe validação?

Se não existir:

- gerar validação mínima;
- marcar risco.

### Gate 6 — Precisa de autorização humana?

Sempre sim.

## Categorias de risco

| Nível | Exemplos |
|---|---|
| Verde | documentação, checklist, README |
| Amarelo | testes, scripts auxiliares, pequenas correções |
| Laranja | banco, auth, permissões, deploy, pagamentos |
| Vermelho | dados reais, credenciais, produção, histórico Git com segredos, LGPD |

## Comportamento por risco

| Risco | Comportamento |
|---|---|
| Verde | preparar normalmente |
| Amarelo | preparar com checklist |
| Laranja | preparar com alerta forte |
| Vermelho | preparar mitigação/plano, não feature |

## Estado

`canAutoExecute` deve ser sempre `false` nesta fase.

```json
{
  "ultimoPreparo": {
    "approvalRequired": true,
    "riskLevel": "orange",
    "canAutoExecute": false
  }
}
```

## Fora do escopo

- execução automática;
- aplicação de patch;
- hooks;
- MCP;
- integração com Git;
- commit automático;
- rollback automático.
