import fs from "node:fs";
import path from "node:path";
import { resolveAiPaths } from "./paths.js";

const questions = [
  { key: "ideia", question: "O que você quer criar?", fallback: "não informado" },
  { key: "problema", question: "Qual problema isso resolve?", fallback: "não informado" },
  { key: "publico", question: "Para quem é esse projeto?", fallback: "não informado" },
  { key: "usuarios", question: "Quem vai usar no dia a dia?", fallback: "não informado" },
  { key: "tipoProduto", question: "Isso parece mais um site, app, API, dashboard, automação, sistema interno, biblioteca ou outra coisa?", fallback: "não informado" },
  { key: "estrategia", question: "Você quer validar rápido ou construir algo mais robusto?", fallback: "não definido" },
  { key: "mvp", question: "Qual seria a primeira versão útil?", fallback: "não informado" },
  { key: "foraDeEscopo", question: "O que precisa ficar fora do escopo por enquanto?", fallback: "não informado" },
  { key: "stackPreferida", question: "Tem alguma tecnologia que você quer usar?", fallback: "não informado" },
  { key: "stackEvitada", question: "Tem alguma tecnologia que você quer evitar?", fallback: "não informado" },
  { key: "restricoes", question: "Existe alguma restrição importante? Prazo, custo, privacidade, LGPD, offline, mobile, etc.", fallback: "não informado" },
  { key: "dadosSensiveis", question: "Existe algum dado sensível envolvido? Descreva só em alto nível.", fallback: "não informado" },
  { key: "criterioSucesso", question: "Como você saberia que a primeira versão deu certo?", fallback: "não informado" },
  { key: "modoTrabalho", question: "Você quer que eu recomende um modo de trabalho?", fallback: "sim" }
];

function readStdinLines() {
  try {
    const raw = fs.readFileSync(0, "utf8");
    return raw.split(/\r?\n/).map((line) => line.trim());
  } catch {
    return [];
  }
}

function answerFrom(lines, index, fallback) {
  const value = lines[index]?.trim();
  if (!value || /^não sei$/i.test(value) || /^nao sei$/i.test(value)) return fallback;
  return value;
}

export function buildInterviewAnswers(lines= readStdinLines()) {
  const hasInput = lines.some(Boolean);
  const answers = Object.fromEntries(
    questions.map((item, index) => [item.key, answerFrom(lines, index, item.fallback)])
  );
  return { answers, interactive: hasInput };
}

function resumo(answers) {
  if (answers.ideia !== "não informado") return answers.ideia;
  if (answers.problema !== "não informado") return answers.problema;
  return "Ideia ainda não informada; completar entrevista antes de planejar.";
}

function front(title, generatedAt) {
  return `---\ntitle: "${title}"\ngenerated_by: "Resolve Aí"\ncommand: "resolve-ai entrevistar"\ngenerated_at: "${generatedAt}"\nstatus: "draft"\n---\n\n`;
}

function intakeContent(answers, generatedAt) {
  return front("00 — Project Intake", generatedAt) + `# Project Intake — Resolve Aí

## Origem

Entrevista guiada via \`resolve-ai entrevistar\`.

## Ideia

${answers.ideia}

> Fonte: resposta do usuário.

## Problema que resolve

${answers.problema}

> Fonte: resposta do usuário.

## Público-alvo

${answers.publico}

## Usuários principais

${answers.usuarios}

## Tipo de produto

${answers.tipoProduto}

## Estratégia inicial

${answers.estrategia}

## Primeira versão útil

${answers.mvp}

## Fora de escopo agora

${answers.foraDeEscopo}

## Restrições

${answers.restricoes}

## Dados sensíveis envolvidos

${answers.dadosSensiveis}

Descrever apenas em alto nível. Não registrar senha, token, .env, backup ou dado real de cliente.

## Critério de sucesso

${answers.criterioSucesso}
`;
}

function discoveryContent(answers, generatedAt) {
  return front("02 — Discovery", generatedAt) + `# Discovery — Resolve Aí

## Perguntas respondidas

- Ideia: ${answers.ideia}
- Problema: ${answers.problema}
- Público: ${answers.publico}
- Usuários: ${answers.usuarios}
- Tipo de produto: ${answers.tipoProduto}
- Estratégia: ${answers.estrategia}
- Dados sensíveis: ${answers.dadosSensiveis}

## Hipóteses

- A primeira versão deve focar em: ${answers.mvp}
- O escopo inicial deve evitar: ${answers.foraDeEscopo}

> Inferência do Resolve Aí: validar com o usuário antes de executar.

## Incertezas

- Stack preferida: ${answers.stackPreferida}
- Stack a evitar: ${answers.stackEvitada}
- Restrições: ${answers.restricoes}

## Riscos iniciais

- Dados sensíveis devem ser tratados apenas em alto nível.
- Escopo pode crescer se a primeira versão útil não for mantida pequena.

## Perguntas pendentes

- Quais critérios de aceite tornam o MVP pronto?
- Quem valida a primeira versão?
`;
}

function productContent(answers, generatedAt) {
  return front("03 — Product Definition", generatedAt) + `# Product Definition — Resolve Aí

## Produto

${answers.ideia}

## Usuário

${answers.usuarios}

## Job to be Done

Quando ${answers.publico} precisa resolver "${answers.problema}", quer ${answers.ideia}, para atingir ${answers.criterioSucesso}.

> Inferência do Resolve Aí: validar com o usuário antes de executar.

## MVP

${answers.mvp}

## Não-MVP

${answers.foraDeEscopo}

## Funcionalidades candidatas

- Capturar o fluxo mínimo descrito na entrevista.
- Validar o resultado com o público principal.
- Registrar critérios de aceite antes de implementar.

## Próximas decisões

- Confirmar stack preferida: ${answers.stackPreferida}
- Confirmar stack a evitar: ${answers.stackEvitada}
- Confirmar restrições: ${answers.restricoes}
`;
}

function isTemplateLike(content) {
  const lower = content.toLowerCase();
  return lower.includes("_preencher._") || lower.includes("não identificado no diagnóstico automático") || lower.includes("inferido por heurística");
}

function writeOrAppend(target, label, content, generatedAt) {
  if (!fs.existsSync(target)) {
    fs.writeFileSync(target, content, "utf8");
    return { created: [label], updated: [], preserved: [] };
  }

  const existing = fs.readFileSync(target, "utf8");
  if (existing.includes("## Entrevista guiada — Resolve Aí")) {
    return { created: [], updated: [], preserved: [label] };
  }

  const section = `\n\n---\n\n## Entrevista guiada — Resolve Aí\n\nAtualizado em: ${generatedAt}\n\n${content.replace(/^---[\s\S]*?---\n\n/, "")}`;
  const nextContent = isTemplateLike(existing) ? `${existing.trimEnd()}${section}\n` : `${existing.trimEnd()}${section}\n`;
  fs.writeFileSync(target, nextContent, "utf8");
  return { created: [], updated: [label], preserved: [] };
}

export function runGuidedInterview(root= process.cwd()) {
  const { answers, interactive } = buildInterviewAnswers();
  const generatedAt = new Date().toISOString();
  const paths = resolveAiPaths(root);
  fs.mkdirSync(paths.docsDir, { recursive: true });

  const specs = [
    { file: "00-project-intake.md", content: intakeContent(answers, generatedAt) },
    { file: "02-discovery.md", content: discoveryContent(answers, generatedAt) },
    { file: "03-product-definition.md", content: productContent(answers, generatedAt) }
  ];

  const created = [];
  const updated = [];
  const preserved = [];

  for (const spec of specs) {
    const target = path.join(paths.docsDir, spec.file);
    const label = `docs/resolve-ai/${spec.file}`;
    const result = writeOrAppend(target, label, spec.content, generatedAt);
    created.push(...result.created);
    updated.push(...result.updated);
    preserved.push(...result.preserved);
  }

  const state = {
    executadaEm: generatedAt,
    versaoFluxo: "phase-17-guided-discovery-interview",
    tipo: "guided-discovery-interview",
    tipoProjeto: "projeto-do-zero",
    modoRecomendado: "Projeto do Zero",
    confianca: interactive ? "media" : "baixa",
    resumoCurto: resumo(answers),
    respostas: answers,
    documentosAtualizados: [...created, ...updated, ...preserved],
    proximaAcao: "resolve-ai planejar"
  };

  return { state, created, updated, preserved, interactive };
}

export function interviewQuestionsText() {
  return questions.map((item, index) => `${index + 1}. ${item.question}`).join("\n");
}
