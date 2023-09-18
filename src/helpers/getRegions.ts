import { Arrangements } from "@/types/data";

export function getRegionsArray(array: Arrangements[]) {
  return Array.from(
    new Set(
      array.map((arrangement) => {
        return arrangement.Location.Region;
      })
    )
  );
}
