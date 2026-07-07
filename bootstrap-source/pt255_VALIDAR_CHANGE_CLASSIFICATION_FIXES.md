# pt255 — `validar` Change Classification Fixes

## 1. Problema

O teste no projeto legado `ECO SISTEMA AVANÇA COMERCIAL` revelou que `resolve-ai validar` detectou dezenas de arquivos alterados, mas muitos eram artefatos gerados pelo próprio Resolve Aí:

- `docs/resolve-ai/*.md`
- `.resolve-ai/state.json`

Isso pode gerar alarme falso. O usuário pode acreditar que o Resolve Aí alterou código do produto quando, na verdade, criou sua própria documentação.

## 2. Objetivo

Separar mudanças em categorias claras:

1. Artefatos do Resolve Aí.
2. Código/configuração do projeto.
3. Arquivos sensíveis por nome/caminho.
4. Arquivos desconhecidos.

## 3. Nova saída esperada

Exemplo:

```text
Validação concluída.

Mudanças detectadas:
- 31 arquivos gerados pelo Resolve Aí
- 2 arquivos do projeto alterados
- 0 arquivos sensíveis alterados

Observação:
Os arquivos em docs/resolve-ai/ e .resolve-ai/ são artefatos da própria ferramenta.
Eles não significam que o código do seu produto foi alterado.
```

## 4. Documentos

Atualizar `25-relatorio-de-validacao.md` e `26-mudancas-detectadas.md` para incluir:

```markdown
## Resumo por categoria

| Categoria | Quantidade | Observação |
|---|---:|---|
| Artefatos Resolve Aí | X | docs/resolve-ai/, .resolve-ai/ |
| Código do projeto | Y | arquivos fora dos metadados Resolve Aí |
| Possíveis sensíveis | Z | por nome/caminho, sem conteúdo |
| Desconhecidos | W | revisar manualmente |
```

## 5. Classificador

Criar função ou módulo:

```text
classifyChangedFile(path):
  resolve-ai-artifact | project-file | sensitive-path | unknown
```

### 5.1 Artefatos Resolve Aí

- `.resolve-ai/**`
- `docs/resolve-ai/**`
- `teste/**` se estiver no kit de teste

### 5.2 Arquivos do projeto

- `src/**`
- `app/**`
- `pages/**`
- `components/**`
- `package.json`
- `vite.config.*`
- `tsconfig.json`
- etc.

### 5.3 Possíveis sensíveis

- `.env`
- `.env.*`
- `secret`
- `credential`
- `private-key`
- `backup`
- `auth_users`
- `database-dump`
- etc.

## 6. Git ausente

Se não houver Git:

```text
Não encontrei um repositório Git aqui.
Então não consigo comparar mudanças com precisão.

Para habilitar validação melhor:
1. rode git init, ou
2. execute o Resolve Aí dentro de um repositório Git.
```

Essa melhoria já foi parcialmente aplicada na Phase 15B, mas deve ser reforçada nos relatórios.

## 7. Safety gate

Se houver arquivos sensíveis fora de `.resolve-ai/` e `docs/resolve-ai/`, manter bloqueio conservador:

```text
Não recomendo commit agora.
Revise os arquivos sensíveis antes.
```

## 8. Critérios de aceite

- `validar` separa artefatos Resolve Aí de arquivos reais do projeto.
- Relatórios docs 25/26 exibem categorias.
- Status não assusta com contagem inflada.
- Testes cobrem Git com docs gerados e mudanças reais.
