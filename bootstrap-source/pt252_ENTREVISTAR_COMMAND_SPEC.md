# pt252 — `resolve-ai entrevistar` — Command Specification

## 1. Nome público

Comando principal:

```bash
resolve-ai entrevistar
```

Aliases:

```bash
resolve-ai entrevista
resolve-ai ideia
```

## 2. Intenção do comando

O comando existe para quando o usuário ainda não tem projeto estruturado, mas tem uma ideia, problema, dor ou objetivo.

Ele transforma uma conversa inicial em documentação mínima útil para o restante do fluxo.

## 3. Mensagem de abertura

Exemplo de saída:

```text
Bora entender essa ideia com calma.
Vou fazer algumas perguntas rápidas para transformar isso em um começo de projeto.

Promessa: não vou mexer no seu código.
Também não preciso de senha, token, .env ou dado sensível.

Se alguma pergunta não fizer sentido, responda "não sei".
```

## 4. Perguntas obrigatórias da entrevista

A primeira versão deve perguntar:

1. O que você quer criar?
2. Qual problema isso resolve?
3. Para quem é esse projeto?
4. Quem vai usar no dia a dia?
5. Isso parece mais um site, app, API, dashboard, automação, sistema interno, biblioteca ou outra coisa?
6. Você quer validar rápido ou construir algo mais robusto?
7. Qual seria a primeira versão útil?
8. O que precisa ficar fora do escopo por enquanto?
9. Tem alguma tecnologia que você quer usar?
10. Tem alguma tecnologia que você quer evitar?
11. Existe alguma restrição importante? Prazo, custo, privacidade, LGPD, offline, mobile, etc.
12. Existe algum dado sensível envolvido?
13. Como você saberia que a primeira versão deu certo?
14. Você quer que eu recomende um modo de trabalho?

## 5. Modelo de respostas

A implementação deve salvar um objeto em `.resolve-ai/state.json`:

```json
{
  "ultimaEntrevista": {
    "executadaEm": "ISO_DATE",
    "tipo": "guided-discovery-interview",
    "modoRecomendado": "Projeto do Zero",
    "confianca": "medium",
    "resumo": "...",
    "respostas": {
      "ideia": "...",
      "problema": "...",
      "publico": "...",
      "usuarios": "...",
      "tipoProduto": "...",
      "estrategia": "...",
      "mvp": "...",
      "foraDeEscopo": "...",
      "stackPreferida": "...",
      "stackEvitada": "...",
      "restricoes": "...",
      "dadosSensiveis": "...",
      "criterioSucesso": "..."
    }
  }
}
```

## 6. Documentos gerados/atualizados

O comando deve criar ou atualizar:

- `docs/resolve-ai/00-project-intake.md`
- `docs/resolve-ai/02-discovery.md`
- `docs/resolve-ai/03-product-definition.md`

Opcionalmente, se ainda não existirem:

- `docs/resolve-ai/07-execution-plan.md`
- `docs/resolve-ai/08-backlog.md`

Mas a primeira versão deve priorizar 00, 02 e 03.

## 7. Sobrescrita

Regra padrão:

- se o arquivo não existe, criar;
- se existe e parece template vazio, preencher se seguro;
- se existe e tem conteúdo humano, preservar e adicionar seção "Entrevista guiada" no final;
- nunca apagar conteúdo existente;
- nunca sobrescrever por padrão.

## 8. Modo não interativo

Se o ambiente não permitir leitura interativa, o comando deve exibir um bloco copiável:

```text
Não consegui abrir uma entrevista interativa neste terminal.
Você pode preencher manualmente estes campos em docs/resolve-ai/00-project-intake.md:
...
```

Não deve falhar de forma confusa.

## 9. Integração com comandos existentes

### `diagnosticar`

Se detectar projeto vazio ou sem estrutura, recomendar:

```bash
resolve-ai entrevistar
```

### `planejar`

Se houver `ultimaEntrevista`, usar como fonte de contexto.

### `preparar`

Se houver intake/discovery/product-definition preenchidos, evitar fallback genérico.

### `status`

Mostrar:

```text
Última entrevista: feita em ...
Ideia resumida: ...
Próxima ação sugerida: resolve-ai planejar
```

## 10. Segurança

A entrevista deve dizer explicitamente:

- não cole senhas;
- não cole tokens;
- não cole `.env`;
- não cole dados reais de cliente;
- descreva dados sensíveis em alto nível.

## 11. Critérios de aceite

- `resolve-ai entrevistar` existe.
- Aliases existem.
- Funciona em diretório vazio.
- Preenche docs 00, 02 e 03.
- Atualiza state.
- Não quebra comandos anteriores.
- Testes cobrem fluxo interativo simulado.
