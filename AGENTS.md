# CMS-PMS Agent Notes

This repository should use a LazyCodex/OmO-style build loop without assuming
LazyCodex is globally installed.

## Build Loop

1. Build project memory first.
   - Map the stack, entry points, existing scripts, domain vocabulary, and risky areas.
   - Record durable context in repository docs when it will help future work.
2. Plan before broad edits.
   - For ambiguous or multi-step work, write a short implementation plan with acceptance checks.
   - Keep the plan decision-complete before touching product code.
3. Execute in small verified slices.
   - Prefer existing patterns and utilities.
   - Keep diffs reviewable and reversible.
   - Add dependencies only when explicitly requested.
4. Verify before claiming completion.
   - Run the relevant build, lint, typecheck, tests, and manual checks for the change.
   - If verification fails, fix and repeat.

## LazyCodex Reference

LazyCodex packages OmO for Codex. Its practical commands are:

- `$init-deep`: create hierarchical project memory.
- `$ulw-plan "task"`: write a decision-complete plan before implementation.
- `$start-work [plan]`: execute a prepared plan to completion.
- `$ulw-loop "task"`: keep working until evidence verifies the task.

Use the behavior of these workflows as the operating model here even when the
commands themselves are unavailable.

## Local Constraint

This workspace is currently running with OMX-style instructions. Do not install
LazyCodex into global Codex configuration unless the user explicitly asks for an
installation or migration, because LazyCodex documentation warns that running
LazyCodex alongside OMX is not recommended.
