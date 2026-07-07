# pt254 — Interview Document Outputs and Runtime State

## 1. Objetivo

Definir como a entrevista guiada deve transformar respostas do usuário em documentos úteis, sem inventar detalhes e sem destruir conteúdo existente.

## 2. Arquivos principais

### 2.1 `00-project-intake.md`

Deve conter:

```markdown
# Project Intake — Resolve Aí

## Origem
Entrevista guiada via `resolve-ai entrevistar`.

## Ideia
...

## Problema que resolve
...

## Público-alvo
...

## Usuários principais
...

## Tipo de produto
...

## Estratégia inicial
Validar rápido / robusto / não definido.

## Primeira versão útil
...

## Fora de escopo agora
...

## Restrições
...

## Dados sensíveis envolvidos
Descrição em alto nível, sem conteúdo sensível.

## Critério de sucesso
...
```

### 2.2 `02-discovery.md`

Deve conter:

```markdown
# Discovery — Resolve Aí

## Perguntas respondidas
...

## Hipóteses
...

## Incertezas
...

## Riscos iniciais
...

## Perguntas pendentes
...
```

### 2.3 `03-product-definition.md`

Deve conter:

```markdown
# Product Definition — Resolve Aí

## Produto
...

## Usuário
...

## Job to be Done
Quando ..., quero ..., para ...

## MVP
...

## Não-MVP
...

## Funcionalidades candidatas
...

## Próximas decisões
...
```

## 3. Política de preenchimento

O Resolve Aí deve distinguir:

- resposta explícita do usuário;
- inferência segura;
- campo desconhecido.

Usar marcação clara:

```markdown
> Fonte: resposta do usuário.
```

Ou:

```markdown
> Inferência do Resolve Aí: validar com o usuário antes de executar.
```

## 4. Estado local

Adicionar em `.resolve-ai/state.json`:

```json
{
  "ultimaEntrevista": {
    "executadaEm": "2026-07-06T00:00:00.000Z",
    "versaoFluxo": "phase-17-guided-discovery-interview",
    "tipoProjeto": "projeto-do-zero",
    "modoRecomendado": "Projeto do Zero",
    "confianca": "medium",
    "resumoCurto": "...",
    "documentosAtualizados": [
      "docs/resolve-ai/00-project-intake.md",
      "docs/resolve-ai/02-discovery.md",
      "docs/resolve-ai/03-product-definition.md"
    ],
    "proximaAcao": "resolve-ai planejar"
  }
}
```

## 5. Status

`resolve-ai status` deve exibir:

```text
Entrevista: feita
Ideia: <resumo curto>
Próxima ação prioritária: resolve-ai planejar
```

A prioridade de próxima ação deve respeitar:

1. validação bloqueada;
2. execução assistida pendente;
3. tarefa preparada;
4. plano pronto;
5. entrevista feita;
6. diagnóstico feito;
7. projeto iniciado.

## 6. Integração com `planejar`

Quando `ultimaEntrevista` existir, `planejar` deve usar as respostas para gerar plano menos genérico.

## 7. Integração com `preparar`

Quando docs 00/02/03 estiverem preenchidos, `preparar` deve evitar fallback como "Definir escopo mínimo" se já existir MVP/escopo.

## 8. Idioma

Todos os documentos gerados devem usar português brasileiro, UTF-8, sem caracteres quebrados.

## 9. Encoding no Windows

A implementação deve garantir escrita em UTF-8:

- Node `fs.writeFileSync(path, content, 'utf8')`;
- evitar buffers sem encoding;
- garantir que templates estejam salvos em UTF-8.

## 10. Critérios de aceite

- docs 00, 02 e 03 são úteis após entrevista;
- não há acentos quebrados nos arquivos novos;
- conteúdo existente é preservado;
- status resume entrevista;
- planejamento posterior usa entrevista.
