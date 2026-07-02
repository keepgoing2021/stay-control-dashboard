# LazyCodex Build Playbook For CMS-PMS

## What I Learned

LazyCodex is a thin Codex distribution for OmO. It is not an application
framework; it is an agent harness for complex codebases. The useful idea is the
workflow discipline:

- create project memory before changing code
- plan when the work has meaningful uncertainty
- execute plans in durable slices
- verify with evidence before declaring done

The primary install path is `npx lazycodex-ai install`, which delegates to
`oh-my-openagent` with the Codex platform. The project also supports a Codex
marketplace install path, but both routes install hooks, skills, MCP servers,
agent roles, and model routing into the Codex environment.

## Commands To Emulate

| LazyCodex command | Local use in this repo |
| --- | --- |
| `$init-deep` | Map repo structure and write durable project context. |
| `$ulw-plan "task"` | Create a scoped plan before broad implementation. |
| `$start-work [plan]` | Execute the checklist until every item is verified. |
| `$ulw-loop "task"` | For a single clear objective, iterate until tests/manual checks prove completion. |

## Build Strategy For This Repo

1. Initialize project memory once real app files exist.
   - Identify framework, package manager, scripts, database, routing, auth, and deployment target.
   - Add notes only where they reduce future ambiguity.
2. For each feature, define acceptance checks.
   - Expected user behavior
   - Data/API contract
   - Error states
   - Verification command or manual check
3. Implement in thin slices.
   - Add regression tests before risky refactors.
   - Prefer deletion and reuse over new abstraction.
   - Keep unrelated churn out of the diff.
4. Verify in order.
   - Install/build prerequisites
   - Unit/integration tests
   - Lint/typecheck
   - UI/runtime smoke test when applicable
5. Report evidence.
   - Changed files
   - Commands run
   - Known gaps or risks

## Installation Note

Do not install LazyCodex automatically in this workspace yet. The current
session already has OMX guidance active, and LazyCodex documentation says using
LazyCodex alongside OMX is not recommended. If the project later migrates to
LazyCodex, use one of these explicit paths:

```bash
npx lazycodex-ai install
```

or, for non-interactive autonomous setup:

```bash
npx lazycodex-ai install --no-tui --codex-autonomous
```

Then reopen Codex, approve the `omo` hooks in startup review, and verify:

```bash
npx lazycodex-ai doctor
```

## Current Workspace State

As of this note, `CMS-PMS` has no product source files yet. It contains Git
metadata and `.omx` runtime state only. The next meaningful build step is to add
or import the actual app scaffold, then run the build loop above.
