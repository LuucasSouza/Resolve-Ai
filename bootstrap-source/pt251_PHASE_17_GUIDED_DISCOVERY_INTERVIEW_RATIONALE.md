# pt251 — Phase 17 — Guided Discovery Interview and Validation Fixes — Rationale

## 1. Contexto

A Phase 15B elevou o Resolve Aí para um estado de validação real parcial, com score 81/100 — LIMITED GO. Em seguida, três novos feedbacks reais/semirreais foram analisados:

1. Projeto novo `INVEST`, usando Node.js nativo, HTML, CSS e JavaScript.
2. Projeto existente `Controle de Gastos — Residência`, usando HTML/CSS/JS puro, Firebase Firestore/Auth, PWA e Claude API.
3. Projeto real legado `ECO SISTEMA AVANÇA COMERCIAL`, usando TypeScript, React, Vite, Tailwind, Supabase/Postgres e scripts Node.

Esses testes validaram que os 9 comandos principais funcionam ponta a ponta:

```bash
resolve-ai ajuda
resolve-ai começar
resolve-ai ligar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai preparar
resolve-ai resolver
resolve-ai validar
resolve-ai status
```

Também confirmaram os principais atributos do Resolve Aí:

- linguagem em português compreensível;
- sensação de segurança alta;
- entendimento claro de que `resolver` não executa código automaticamente;
- geração útil de documentação;
- postura conservadora diante de risco real;
- detecção de arquivos sensíveis por caminho/nome sem copiar conteúdo.

## 2. Problema central descoberto

O Resolve Aí funciona bem quando há estrutura mínima de projeto, mas ainda sofre quando o projeto está vazio, começando do zero ou contém apenas uma ideia.

O teste no projeto `INVEST` revelou que, em projeto novo, o diagnóstico heurístico tende a ficar genérico. O participante precisou ajustar manualmente documentos para refletir a ideia real do produto.

Isso entra em conflito com a promessa pública:

> Me dá o problema ou a ideia, e eu te ajudo a resolver.

Se a pessoa dá apenas uma ideia, o Resolve Aí precisa conversar antes de diagnosticar.

## 3. Decisão de produto

A próxima evolução deve ser o comando oficial:

```bash
resolve-ai entrevistar
```

Com aliases:

```bash
resolve-ai entrevista
resolve-ai ideia
```

Esse comando deve conduzir uma entrevista guiada, leve e brasileira, para projetos novos ou vazios.

## 4. Objetivo da Phase 17

Implementar a primeira versão do **Guided Discovery Interview**, permitindo que o Resolve Aí colete informações iniciais do usuário e preencha documentos fundamentais:

- `docs/resolve-ai/00-project-intake.md`
- `docs/resolve-ai/02-discovery.md`
- `docs/resolve-ai/03-product-definition.md`

Além disso, a fase deve corrigir problemas descobertos nas validações:

- separar arquivos gerados pelo Resolve Aí de mudanças reais no `validar`;
- reduzir falso positivo de `design-tokens.css` como segredo;
- reduzir falso positivo de Next.js em projetos Vite puros;
- melhorar ajuda com sequência recomendada de comandos;
- melhorar fallback local/Windows quando `resolve-ai` não está no PATH;
- registrar limitações de Git e encoding quando aplicável.

## 5. Princípios

A entrevista deve ser:

- curta;
- opcional;
- segura;
- em português brasileiro;
- útil para não técnicos e devs;
- sem chamadas externas;
- sem telemetria;
- sem coleta de dados sensíveis;
- sem gerar código automaticamente;
- sem substituir discovery humano profundo.

## 6. Escopo

Dentro do escopo:

- comando `entrevistar`;
- aliases `entrevista` e `ideia`;
- entrevista interativa via terminal quando stdin permitir;
- modo não interativo com mensagem clara se ambiente não suportar prompt;
- preenchimento seguro de documentos 00, 02 e 03;
- atualização de `.resolve-ai/state.json` com `ultimaEntrevista`;
- atualização de `status` para mostrar entrevista;
- recomendação automática de entrevista em projeto vazio;
- correções no `validar`, diagnóstico e ajuda.

Fora do escopo:

- geração de código;
- scaffold de framework;
- escolha automática de stack sem aprovação;
- wizard web;
- MCP;
- hooks;
- telemetria;
- publicação npm;
- tag Git;
- GitHub release.

## 7. Métrica de sucesso

A Phase 17 é bem-sucedida se:

1. `resolve-ai entrevistar` funciona em projeto vazio.
2. A entrevista preenche docs 00, 02 e 03 sem sobrescrever conteúdo existente sem aviso.
3. `diagnosticar` recomenda `entrevistar` quando detectar projeto vazio.
4. `preparar` aproveita intake/discovery/product-definition preenchidos.
5. `validar` separa artefatos do Resolve Aí de mudanças reais do projeto.
6. Falsos positivos conhecidos são reduzidos.
7. Todos os testes anteriores continuam passando.

## 8. Readiness esperado

Partindo de 81/100 — LIMITED GO, uma Phase 17 bem-sucedida pode elevar o readiness técnico para 84–86/100.

Mesmo assim, GO público só deve ser permitido se houver validação real suficiente com Non-Technical Builder e Professional Engineer dedicado.
