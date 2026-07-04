export type ResolveAiStatus = "ligado" | "desligado";

export interface ResolveAiConfig {
  schemaVersion: string;
  projectName: string | null;
  publicName: "Resolve Aí";
  docsPath: "docs/resolve-ai";
  defaultFlow: "projeto-em-andamento-diagnostico-e-continuacao";
  language: "pt-BR";
  createdAt: string;
}

export interface ResolveAiState {
  schemaVersion: string;
  active: boolean;
  currentMode: string | null;
  currentFlow: string | null;
  lastCommand: string;
  lastActivatedAt?: string;
  lastDeactivatedAt?: string;
  lastUpdatedAt: string;
  ultimoComando?: string;
  ultimoDiagnosticoEm?: string;
  modoRecomendado?: string;
  fluxoRecomendado?: string;
  tipoProjeto?: string;
  stackDetectada?: string[];
  riscosDetectados?: string[];
  maturidade?: number;
  proximaAcao?: string;
  documentosGerados?: string[];
  lastPlanAt?: string;
  lastPlanSummary?: string;
  planningDocuments?: string[];
  nextRecommendedAction?: string;
  planningConfidence?: "baixa" | "media" | "alta";
}

export interface InitResult {
  initialized: boolean;
  createdPaths: string[];
  existingPaths: string[];
  legacyDocsFound: boolean;
}

export type DiagnosticProjectType = "novo" | "em-andamento" | "legado" | "indeterminado";
export type DiagnosticConfidence = "baixa" | "media" | "alta";

export interface ProjectDetection {
  projectType: DiagnosticProjectType;
  recommendedFlow: string;
  recommendedMode: string;
  stack: string[];
  signals: string[];
  risks: string[];
  strengths: string[];
  attentionPoints: string[];
  mainAction: string;
  maturity: number;
  confidence: DiagnosticConfidence;
  generatedAt: string;
}

export interface DiagnosticResult {
  detection: ProjectDetection;
  createdDocs: string[];
  preservedDocs: string[];
  legacyDocsFound: boolean;
}

export interface PlanningInput {
  projectType: string;
  recommendedMode: string;
  detectedStack: string[];
  risks: string[];
  existingDocs: string[];
  hasDiagnosis: boolean;
  confidence: "baixa" | "media" | "alta";
}

export interface PlanningOutput {
  summary: string;
  nextRecommendedAction: string;
  milestones: string[];
  backlogItems: string[];
  executionPrompts: string[];
  validationChecklist: string[];
  hasCriticalRisk: boolean;
}
