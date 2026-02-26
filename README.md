# Transcend Blueprint Builder (Prototype v1)

Production-quality scaffold for a Transcend-branded, AI-assisted blueprint authoring tool for Design Partners.

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Backend**: Next.js API routes (server-only orchestration)
- **Database**: PostgreSQL (schema included in `db/schema.sql`)
- **Retrieval**: Typed retrieval scaffolding for process guidance + design kits
- **PDF Export**: HTML-to-PDF endpoint scaffold

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - run development server
- `npm run build` - production build
- `npm run lint` - lint TypeScript/React code
- `npm run typecheck` - run TypeScript checks

## Product Features in this Scaffold

- Structured 8-step wizard (current state through export)
- Transcend-branded UI shell and palette
- Hard-coded Blueprint/Leap/Condition frameworks
- Typed DesignKit + KitAtom model and seed kit entries
- Recommendation engine scaffold for kit atoms
- Blueprint Health Panel logic (risk flags + coherence checks)
- Provenance-aware web blueprint board view
- Draft persistence API routes
- PDF export API route scaffold

## Folder Structure

```text
app/
  api/
    blueprints/...
    recommendations/...
    export/pdf/...
  blueprint/[id]/page.tsx
  page.tsx
components/
  wizard/
  blueprint/
  layout/
lib/
  ai/
  retrieval/
  validation/
  data/
  db/
  constants/
  types/
db/
  schema.sql
```

## Database

Run SQL in `db/schema.sql` against PostgreSQL / Supabase.

Core tables:

- `communities`
- `blueprints`
- `design_kits`
- `kit_atoms`
- `blueprint_components`
- `blueprint_enablers`

## AI Guardrails

- AI is server-side only.
- Suggestions must be grounded in internal kit/process sources.
- Structural frameworks are immutable constants, not model-generated.
- Responses include provenance atom IDs.

## MVP Notes

This scaffold intentionally prioritizes:

- architectural correctness,
- schema clarity,
- extensibility for additional kits,
- and clear seams for retrieval/model providers.

It avoids over-optimizing external SaaS polish for v1.
