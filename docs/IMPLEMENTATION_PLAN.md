# Implementation Plan

## Phase 1: Foundations (Week 1-2)

1. Finalize immutable framework constants (Blueprint schema, Leaps, Conditions).
2. Deploy PostgreSQL schema and create CRUD endpoints.
3. Implement wizard shell with structured forms for steps 1-5.
4. Persist draft blueprint state and support resume.

## Phase 2: Intelligence Layer (Week 2-4)

1. Normalize high school math kit into `kit_atoms`.
2. Add typed retrieval per atom type + contextual ranking.
3. Add AI drafting endpoints with provenance requirements.
4. Implement recommendation cards with requirements/conflict metadata.

## Phase 3: Coherence + Outputs (Week 4-6)

1. Complete health panel checks and risk scoring.
2. Build three-column blueprint board rendering.
3. Integrate production PDF renderer and appendix toggles.
4. QA against acceptance tests with DP walkthrough scripts.
