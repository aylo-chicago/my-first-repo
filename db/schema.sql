create extension if not exists vector;

create table if not exists communities (
  id uuid primary key,
  name text not null,
  grade_band text not null,
  current_state_summary text not null,
  performance_indicators jsonb not null default '[]'::jsonb,
  existing_design_realities jsonb not null default '[]'::jsonb,
  technical_constraints jsonb not null,
  partnership_opportunities jsonb not null default '[]'::jsonb,
  conditions_snapshot jsonb not null,
  leap_priorities jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists blueprints (
  id uuid primary key,
  community_id uuid not null references communities(id),
  version text not null,
  sections jsonb not null,
  coherence_map jsonb not null,
  risk_flags jsonb not null default '[]'::jsonb,
  provenance_map jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists design_kits (
  id text primary key,
  name text not null,
  grade_band text not null,
  domain text not null,
  version text not null,
  source text not null
);

create table if not exists kit_atoms (
  id text primary key,
  kit_id text not null references design_kits(id),
  atom_type text not null,
  title text not null,
  summary text not null,
  full_text text not null,
  leap_alignment jsonb not null,
  conditions_demands jsonb not null,
  required_enablers jsonb not null,
  dependencies jsonb not null,
  conflicts_with jsonb not null,
  grade_band text not null,
  structural_layer text not null,
  embedding vector(1536)
);

create table if not exists blueprint_components (
  blueprint_id uuid not null references blueprints(id),
  atom_id text not null references kit_atoms(id),
  notes text,
  primary key (blueprint_id, atom_id)
);

create table if not exists blueprint_enablers (
  blueprint_id uuid not null references blueprints(id),
  enabler_key text not null,
  description text not null,
  primary key (blueprint_id, enabler_key)
);
