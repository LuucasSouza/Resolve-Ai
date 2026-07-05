# pt228 — Phase 14 ADRs

> Projeto: Resolve Aí  
> Fase: Phase 14  
> Tema: decisões arquiteturais e de produto

---

## ADR 0196 — Require Real User Validation Before Public Alpha

### Status

Accepted

### Context

A CLI passou em testes locais, mas ainda não possui validação humana real suficiente.

### Decision

Exigir validação real com usuários antes de public alpha.

### Consequences

- A publicação pode atrasar.
- O release será mais confiável.
- A decisão deixa de ser baseada apenas em testes técnicos.

---

## ADR 0197 — Use Anonymized Alpha Participant IDs

### Status

Accepted

### Context

Validações com usuários podem capturar dados pessoais desnecessários.

### Decision

Usar IDs anônimos como `NTB-01`, `VC-01` e `PE-01`.

### Consequences

- Reduz risco de privacidade.
- Facilita análise por perfil.
- Evita exposição de participantes.

---

## ADR 0198 — Separate Private Alpha From Public Alpha Release

### Status

Accepted

### Context

Pode haver readiness técnico sem readiness de adoção pública.

### Decision

Separar private alpha, limited alpha e public alpha.

### Consequences

- Permite evolução gradual.
- Evita publicar cedo demais.
- Melhora governança de release.

---

## ADR 0199 — Use GO / LIMITED GO / NO-GO Release Gate

### Status

Accepted

### Context

Decisões binárias são pobres para produto alpha.

### Decision

Usar três estados: GO, LIMITED GO e NO-GO.

### Consequences

- Decisão fica mais realista.
- Permite avanço controlado.
- Evita falsa maturidade.

---

## ADR 0200 — Treat Resolver Confusion as Release Blocker

### Status

Accepted

### Context

O comando `resolver` pode ser interpretado como execução automática.

### Decision

Confusão relevante sobre `resolver` deve bloquear npm público.

### Consequences

- Segurança e confiança têm prioridade.
- Copy e UX precisam ser claras.
- Execução assistida não pode parecer autoexecução.

---

## ADR 0201 — Require Profile-Based Validation Coverage

### Status

Accepted

### Context

O Resolve Aí atende três públicos diferentes.

### Decision

Validar separadamente Non-Technical Builder, Vibe Coder e Professional Engineer.

### Consequences

- Feedback fica mais preciso.
- Pode revelar tensões entre simplicidade e rigor.
- Release precisa equilibrar públicos.

---

## ADR 0202 — Avoid Sensitive Data in Alpha Validation

### Status

Accepted

### Context

Projetos reais podem conter segredos, dados pessoais e informações comerciais.

### Decision

Alpha validation deve usar projetos simulados, sanitizados ou dados não sensíveis.

### Consequences

- Reduz risco.
- Limita fidelidade de alguns testes.
- Mantém coerência com segurança do Resolve Aí.

---

## ADR 0203 — Use Human Feedback to Recalibrate Readiness Score

### Status

Accepted

### Context

Scores anteriores foram baseados em validações locais e técnicas.

### Decision

Readiness score deve ser recalibrado com feedback real.

### Consequences

- O score pode cair.
- A decisão fica mais honesta.
- Feedback humano ganha peso formal.

---

## ADR 0204 — Keep npm Publication Manual After Validation

### Status

Accepted

### Context

Mesmo após GO, publicação npm tem impacto público.

### Decision

A Phase 14 não publica npm automaticamente. A publicação, se aprovada, ocorre em fase posterior.

### Consequences

- Evita publicação acidental.
- Mantém controle humano.
- Separa decisão de execução.

---

## ADR 0205 — Define Phase 15 Branching Based on Release Decision

### Status

Accepted

### Context

A próxima fase depende da decisão GO/LIMITED GO/NO-GO.

### Decision

Definir três caminhos:

- Phase 15 — Public Alpha Release Execution
- Phase 15A — Private Alpha Expansion and Fixes
- Phase 15B — Alpha Blocker Resolution

### Consequences

- Roadmap fica adaptativo.
- Evita forçar release.
- Facilita continuidade.
