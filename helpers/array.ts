export const makeArray = <T>(potentialArray: T | T[]) => Array.isArray(potentialArray) ? potentialArray : [potentialArray];

// eslint-disable-next-line func-style
export function* arrayByChunk<T>(array: T[], chunkSize: number) {
  for (let currentLocation = 0; currentLocation < array.length; currentLocation += chunkSize) {
    yield array.slice(currentLocation, currentLocation + chunkSize);
  }
}