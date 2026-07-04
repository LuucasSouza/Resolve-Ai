import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";

const cli = path.resolve("dist", "index.js");
const planningDocs = [
  "10-plano-de-continuacao.md",
  "11-backlog-priorizado.md",
  "12-proximas-sprints.md",
  "13-prompts-de-execucao.md",
  "14-checklist-de-validacao.md"
];

function tempProject(prefix = "resolve-ai-planning-") {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function run(args, cwd) {
  return execFileSync(process.execPath, [cli, ...args], { cwd, encoding: "utf8" });
}

function assertPlanningDocs(root) {
  for (const file of planningDocs) {
    assert.equal(fs.existsSync(path.join(root, "docs", "resolve-ai", file)), true, file);
  }
}

test("planejar em diretorio vazio cria plano basico de baixa confianca", () => {
  const root = tempProject("resolve-ai-plan-empty-");
  const output = run(["planejar"], root);
  const state = JSON.parse(fs.readFileSync(path.join(root, ".resolve-ai", "state.json"), "utf8"));

  assert.match(output, /baixa confiança/);
  assert.match(output, /resolve-ai diagnosticar/);
  assert.equal(state.lastCommand, "planejar");
  assert.equal(state.planningConfidence, "baixa");
  assertPlanningDocs(root);
});

test("planejar em projeto com diagnostico fake usa estado existente", () => {
  const root = tempProject("resolve-ai-plan-diagnosed-");
  run(["começar"], root);
  const statePath = path.join(root, ".resolve-ai", "state.json");
  const state = JSON.parse(fs.readFileSync(statePath, "utf8"));
  fs.writeFileSync(statePath, JSON.stringify({
    ...state,
    ultimoDiagnosticoEm: new Date().toISOString(),
    tipoProjeto: "em-andamento",
    modoRecomendado: "Professional Engineer",
    stackDetectada: ["Node.js", "TypeScript"],
    riscosDetectados: []
  }, null, 2), "utf8");

  const output = run(["planejar"], root);
  const updated = JSON.parse(fs.readFileSync(statePath, "utf8"));

  assert.match(output, /Usei o diagnóstico existente/);
  assert.equal(updated.lastCommand, "planejar");
  assert.equal(updated.nextRecommendedAction, "Executar a Sprint A com foco em estabilização e validação.");
  assertPlanningDocs(root);
});

test("planejar com risco critico prioriza seguranca", () => {
  const root = tempProject("resolve-ai-plan-risk-");
  run(["começar"], root);
  const statePath = path.join(root, ".resolve-ai", "state.json");
  const state = JSON.parse(fs.readFileSync(statePath, "utf8"));
  fs.writeFileSync(statePath, JSON.stringify({
    ...state,
    ultimoDiagnosticoEm: new Date().toISOString(),
    tipoProjeto: "em-andamento",
    modoRecomendado: "Vibe Coder",
    riscosDetectados: ["Possível arquivo sensível detectado por nome: .env"]
  }, null, 2), "utf8");

  run(["planejar"], root);
  const backlog = fs.readFileSync(path.join(root, "docs", "resolve-ai", "11-backlog-priorizado.md"), "utf8");
  const prompts = fs.readFileSync(path.join(root, "docs", "resolve-ai", "13-prompts-de-execucao.md"), "utf8");

  assert.match(backlog, /P0-001/);
  assert.match(backlog, /seguranca/);
  assert.match(prompts, /Não fazer push\/deploy sem autorização/);
});

test("planejar preserva documentos existentes", () => {
  const root = tempProject("resolve-ai-plan-existing-docs-");
  const doc = path.join(root, "docs", "resolve-ai", "10-plano-de-continuacao.md");
  fs.mkdirSync(path.dirname(doc), { recursive: true });
  fs.writeFileSync(doc, "plano manual", "utf8");

  const output = run(["planejar"], root);

  assert.match(output, /Documentos preservados:/);
  assert.equal(fs.readFileSync(doc, "utf8"), "plano manual");
  assertPlanningDocs(root);
});

test("planejar e aliases sao idempotentes e status mostra ultimo plano", () => {
  const root = tempProject("resolve-ai-plan-idempotent-");
  run(["diagnosticar"], root);
  run(["planejar"], root);
  const checklist = path.join(root, "docs", "resolve-ai", "14-checklist-de-validacao.md");
  fs.writeFileSync(checklist, "checklist manual", "utf8");

  assert.match(run(["plano"], root), /Documentos preservados:/);
  assert.match(run(["planejamento"], root), /Documentos preservados:/);
  assert.equal(fs.readFileSync(checklist, "utf8"), "checklist manual");

  const status = run(["status"], root);
  assert.match(status, /Último planejamento:/);
  assert.match(status, /Próxima ação planejada:/);
});

test("planejar nao altera codigo do produto analisado", () => {
  const root = tempProject("resolve-ai-plan-readonly-");
  const src = path.join(root, "src");
  fs.mkdirSync(src, { recursive: true });
  const productFile = path.join(src, "app.ts");
  fs.writeFileSync(productFile, "export const value = 1;\n", "utf8");

  run(["planejar"], root);

  assert.equal(fs.readFileSync(productFile, "utf8"), "export const value = 1;\n");
});
