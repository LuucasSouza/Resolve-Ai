# pt256 — Diagnostic False Positive and Stack Detection Fixes

## 1. Problemas encontrados

Os testes reais revelaram três problemas no diagnóstico:

1. Falso positivo de sensível em `design-tokens.css`.
2. Falso positivo de Next.js em projeto Vite puro.
3. Diagnóstico confundido quando o repositório `Resolve-Ai/` fica dentro do projeto testado.

## 2. Falso positivo: `design-tokens`

A palavra `token` pode indicar segredo, mas em front-end também pode significar design token.

Exemplos que **não devem** ser classificados como sensíveis por padrão:

```text
design-tokens.css
design-tokens/
tokens.css
style-tokens.json
theme-tokens.ts
```

Desde que não estejam combinados com termos sensíveis como:

```text
secret
auth
api-key
credential
private
.env
password
```

## 3. Regra recomendada

Classificar como `design-token-non-secret` quando:

- path contém `design-token`, `design-tokens`, `theme-token`, `style-token`;
- extensão é `.css`, `.scss`, `.json`, `.ts`, `.js`;
- path não contém termos fortes de segredo.

Não bloquear commit apenas por isso.

## 4. Falso positivo Next.js

Só detectar Next.js se houver pelo menos um dos sinais fortes:

- `next` em `dependencies` ou `devDependencies` do `package.json`;
- `next.config.js`, `next.config.mjs` ou `next.config.ts`;
- diretório `.next/`, ignorando se estiver em pasta ignorada;
- scripts `next dev`, `next build`, `next start`.

Não detectar Next.js apenas por presença de:

- `app/`;
- `pages/`;
- React;
- TypeScript;
- Vite.

## 5. Vite puro

Detectar Vite quando houver:

- `vite` em dependencies/devDependencies;
- `vite.config.*`;
- scripts com `vite`.

Se Vite e React existirem, mas Next.js não tiver sinal forte, stack deve ser:

```text
Node.js, TypeScript, Vite, React
```

Não:

```text
Next.js
```

## 6. Ignorar repositório Resolve-Ai interno

Se o projeto testado contém uma pasta `Resolve-Ai/`, ela deve ser ignorada por padrão na inspeção.

Motivo: participantes podem baixar/clonar o Resolve Aí dentro do projeto para rodar via Node.

Ignorar também variações:

```text
Resolve-Ai/
resolve-ai/
AI-SEOS/
ai-seos/
```

Desde que estejam como diretórios auxiliares e não sejam o root do próprio repositório do Resolve Aí.

## 7. Arquivos sensíveis por nome/caminho

Continuar detectando:

- `.env`;
- backups;
- dumps;
- auth users;
- CSVs de migração com nomes suspeitos;
- scripts de senha;
- credenciais.

Mas nunca copiar conteúdo.

## 8. Mensagem de diagnóstico

Quando houver possíveis falsos positivos, escrever:

```text
Alguns caminhos podem ser falso positivo. Revise manualmente antes de decidir.
```

## 9. Critérios de aceite

- `design-tokens.css` não aparece como crítico.
- Next.js não é detectado em Vite puro sem `next`.
- `Resolve-Ai/` dentro do projeto não contamina stack.
- backups e `.env` seguem como risco alto/crítico.
- Testes cobrem todos os casos acima.
