/**
 * An object mapping a building name to the substrings of rooms that identify that building.
 */
export const buildings = {
  CIT: ['CIT', 'cit'],
  'Barus & Holley': ['B&H', 'Barus & Holley'],
  Unknown: [],
};

export type Building = keyof typeof buildings;

export const buildingNames: Building[] = Object.keys(buildings) as Building[];

/**
 * Extracts a building name from a given room name.
 * @param room The Name of the room
 * @returns
 */
export function parseBuilding(room: string): Building {
  if (!location) {
    return 'Unknown';
  }

  return buildingNames.find((building) => {
    const substrings = buildings[building];
    return substrings.some((sub) => room.includes(sub));
  });
}
