export interface Lokalizacja {
  x: number;
  y: number;
  z: number;
  czas: number;
}

export type MapaCzasoprzestrzenna = (
  x: number,
  y: number,
  z: number,
  czas: number
) => number;

export function znajdzWorek(
  lokalizacje: Lokalizacja[],
  mapa: MapaCzasoprzestrzenna
): Lokalizacja | null {
  if (lokalizacje.length === 0) {
    return null;
  }

  let highestValue = -Infinity;
  let highestLocation: Lokalizacja | null = null;

  lokalizacje.forEach(({ x, y, z, czas }) => {
    const value = mapa(x, y, z, czas);
    if (value > highestValue && !Number.isNaN(value)) {
      highestValue = value;
      highestLocation = { x, y, z, czas };
    }
  });

  return highestLocation;
}
