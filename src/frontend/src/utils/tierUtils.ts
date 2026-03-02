import { TIERS } from "../data/gameData";

export function getTier(pts: number) {
  return TIERS.find((t) => pts >= t.min) || TIERS[TIERS.length - 1];
}
