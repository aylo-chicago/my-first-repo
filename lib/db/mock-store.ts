import { Blueprint } from '@/lib/types/blueprint';

const blueprints = new Map<string, Blueprint>();

export function saveBlueprint(blueprint: Blueprint): Blueprint {
  blueprints.set(blueprint.id, blueprint);
  return blueprint;
}

export function getBlueprint(id: string): Blueprint | undefined {
  return blueprints.get(id);
}

export function listBlueprints(): Blueprint[] {
  return Array.from(blueprints.values());
}
