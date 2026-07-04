---
project: AI Software Engineering Operating System (AI-SEOS)
sprint: 6
theme: Complete Template Packs
status: Draft for Codex Execution
version: 0.1.0
---

# pt73 — Vibe Coder Template Pack

## 1. Purpose

The Vibe Coder Template Pack helps users who build with AI coding tools but do not yet have mature engineering discipline. This pack should give structure without killing momentum. It should convert ideas into safe, sequenced implementation prompts that can be executed by Codex, Cursor, Claude Code, Gemini CLI or similar tools.

The goal is not to turn vibe coders into enterprise architects overnight. The goal is to prevent avoidable chaos.

## 2. User Profile

The Vibe Coder:

- uses AI tools to build software;
- may know basic frontend/backend concepts;
- may not deeply understand architecture, security, testing or deployment;
- wants fast execution;
- can copy commands, prompts and files;
- needs guardrails and validation;
- often gets stuck when the project grows.

## 3. Pack Philosophy

The Vibe Coder Pack must follow four rules:

1. Build in slices.
2. Validate after every slice.
3. Avoid premature complexity.
4. Keep the project understandable.

## 4. Required Templates

Sprint 6 must create:

```text
templates/packs/vibe-coder-pack/README.md
templates/intake/vibe-coder/project-intake-template.md
templates/intake/vibe-coder/stack-selection-helper.md
templates/intake/vibe-coder/ai-coding-session-plan-template.md
templates/intake/vibe-coder/implementation-slice-template.md
templates/intake/vibe-coder/codex-task-prompt-template.md
templates/intake/vibe-coder/validation-checklist-template.md
templates/intake/vibe-coder/debugging-handoff-template.md
templates/intake/vibe-coder/refactor-request-template.md
templates/intake/vibe-coder/deploy-readiness-template.md
templates/examples-filled/vibe-coder/simple-saas-example.md
```

## 5. Template: Project Intake

Create `project-intake-template.md` with:

```markdown
# Vibe Coder Project Intake

## 1. What are you building?

## 2. Who will use it?

## 3. What is the first version?

## 4. What must work before anything else?

## 5. What technology do you already have?

## 6. What tools are you using?
- VS Code
- Codex
- Cursor
- Claude Code
- Firebase
- Supabase
- Vercel
- GitHub
- Other

## 7. What do you not understand yet?

## 8. What should AI-SEOS protect you from?
- messy files
- insecure login
- bad database structure
- no deployment path
- no tests
- too many features
- unclear errors

## 9. Output from AI-SEOS
Recommended build path:

Suggested architecture level:

Implementation slices:

First Codex prompt:

Validation checklist:
```

## 6. Template: Stack Selection Helper

This template must not overwhelm the user. It should recommend simple defaults.

Possible fields:

- Do you need login?
- Do users save data?
- Do you need payments?
- Do you need admin panel?
- Do you need public pages?
- Do you need real-time updates?
- Do you need file uploads?
- Do you expect many users soon?

Based on answers, AI-SEOS can recommend:

- static site;
- simple web app;
- SaaS MVP;
- internal tool;
- automation workflow;
- AI assistant;
- marketplace;
- dashboard.

## 7. Template: AI Coding Session Plan

Create a template that forces a single coding session to have a boundary:

```markdown
# AI Coding Session Plan

## Goal of this session

## Files likely affected

## What must not be changed

## Current state

## Desired state

## Constraints

## Step-by-step instructions for the AI coding agent

## Validation steps

## Rollback plan

## Commit message
```

## 8. Template: Codex Task Prompt

Create `codex-task-prompt-template.md`:

```markdown
# Codex Task Prompt

You are working inside an existing AI-SEOS-guided project.

## Task

## Context

## Constraints

## Files to inspect first

## Files you may edit

## Files you must not edit

## Expected changes

## Validation commands

## Definition of Done

## Commit message

Do not rewrite unrelated files.
Do not introduce new dependencies without explaining why.
Do not skip validation.
```

## 9. Template: Implementation Slice

Each slice must be small enough to review.

Fields:

- Slice name;
- User value;
- Technical goal;
- Dependencies;
- Files/modules;
- Acceptance criteria;
- Test or validation;
- Risk;
- Handoff.

## 10. Vibe Coder Anti-Chaos Checklist

Create a checklist covering:

- Did the AI change too many files?
- Did it create duplicate components?
- Did it hardcode secrets?
- Did it bypass authentication?
- Did it ignore existing architecture?
- Did it add unnecessary dependencies?
- Did it update documentation?
- Did it create a commit?
- Can you explain what changed?

## 11. Output Contract

The pack must produce:

- Vibe Coder Intake;
- Suggested Build Path;
- Stack Recommendation;
- Implementation Slices;
- Codex Task Prompts;
- Validation Checklists;
- Deploy Readiness;
- Handoff to Execution Engine.

## 12. Definition of Done

The pack is complete when a vibe coder can use it to guide an AI coding agent through a build without losing project structure.
