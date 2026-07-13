# Doc-Drift Detector

> A Kiro hook that watches for behavior changes in code and automatically flags documentation that needs updating.

## The Problem

Every team knows the pain: you ship a feature, the docs get outdated, and nobody notices until a user complains. Documentation drift is invisible until it hurts.

## The Solution

This Kiro hook fires every time you save a source file. It analyzes public API changes and compares them against your project's documentation. When it detects drift — code behavior that isn't reflected in docs — it appends a finding to `DOC_DRIFT.md`.

## How It Works

```
┌─────────────────┐     ┌──────────────┐     ┌─────────────────┐
│   Save a file   │ ──▶ │  Kiro Hook   │ ──▶ │  DOC_DRIFT.md   │
│  (src/**/*.ts)  │     │  analyzes    │     │  (drift report) │
└─────────────────┘     │  code vs docs│     └─────────────────┘
                        └──────────────┘
```

1. **Trigger** — You save any file matching `src/**/*.{ts,js,py,java}`
2. **Analyze** — The hook reads the saved file's public API (exports, signatures, types, defaults)
3. **Compare** — It checks existing docs (`README.md`, `docs/**`, inline JSDoc)
4. **Report** — If drift is found, a timestamped entry is appended to `DOC_DRIFT.md`

## What It Detects

- New or changed function signatures
- Added/removed parameters or options
- Changed return types or default values
- New exports not mentioned in docs
- Changed error messages or behavior

## Setup

The hook lives at `.kiro/hooks/doc-drift-detector.json` and works with any Kiro IDE workspace.

### File Structure

```
your-project/
├── .kiro/
│   └── hooks/
│       └── doc-drift-detector.json   ← the hook
├── src/                               ← watched source files
├── docs/                              ← documentation to check against
├── README.md
└── DOC_DRIFT.md                       ← drift findings (auto-generated)
```

### Customising the File Pattern

Edit `.kiro/hooks/doc-drift-detector.json` and change the `filePattern`:

```json
"when": {
  "type": "fileSave",
  "filePattern": "src/**/*.{ts,js}"
}
```

## Output Format

Each drift finding in `DOC_DRIFT.md` looks like:

```markdown
## 🔍 Drift Detected — 2026-07-13 21:25

**Source file:** `src/greeting.ts`

**Documentation affected:**
- `docs/api.md` — Missing `includeTime` option in GreetingOptions table

**What changed in code:**
- Added `includeTime` option to `GreetingOptions` interface

**Suggested doc update:**
- Add row to GreetingOptions table: `includeTime | boolean | false | Include current time in greeting`
```

## Design Decisions

- **Non-destructive** — The hook never auto-edits your docs. It only reports drift.
- **Public API only** — Internal implementation changes don't trigger false positives.
- **Append-only** — Each finding is timestamped and appended, creating an audit trail.
- **Zero dependencies** — Just a JSON hook file, no build step required.

## Built For

🎂 Kiro Birthday Challenge — July 13, 2026
