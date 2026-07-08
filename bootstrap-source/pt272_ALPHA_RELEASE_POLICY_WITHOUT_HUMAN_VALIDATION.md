# pt272 — Alpha Release Policy Without Human Validation

## Problema

O Resolve Aí vai avançar para preparação de alpha público sem teste humano real adicional. Isso precisa aparecer na documentação como limitação, não como detalhe escondido.

## Política oficial

Enquanto não houver validação humana real suficiente, o projeto deve ser descrito como:

```text
Alpha
Release Candidate
Experimental
Em validação pública
```

## Frases permitidas

- O Resolve Aí já possui fluxo CLI alpha de ponta a ponta.
- A ferramenta prepara diagnóstico, planejamento, tarefa e execução assistida.
- O comando `resolver` não executa código automaticamente.
- Ainda buscamos feedback real de usuários iniciantes.

## Frases proibidas

- Pronto para produção.
- Stable.
- Validado por usuários não técnicos reais.
- Seguro para qualquer projeto.
- Resolve automaticamente seu projeto.
- Substitui revisão humana.

## Known limitations obrigatórias

A documentação pública deve listar:

1. ainda não há validação humana ampla;
2. CLI exige terminal;
3. não há UI gráfica;
4. `validar` funciona melhor com Git;
5. não executa código automaticamente;
6. pode gerar muitos documentos;
7. pode ter falsos positivos em diagnóstico;
8. não há telemetria;
9. feedback é manual;
10. versão não é stable.

## Gate do mantenedor

Criar checklist explícito:

```markdown
- [ ] Aprovo publicar esta versão como alpha público.
- [ ] Entendo que ainda falta validação humana ampla.
- [ ] Entendo que esta versão não é stable.
```
