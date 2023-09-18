export function chunkArrangements<T>(arrangements: T[], chunkSize = 4) {
  const chunkedArray = [];
  for (let i = 0; i < arrangements.length; i += chunkSize) {
    chunkedArray.push(arrangements.slice(i, i + chunkSize));
  }
  return chunkedArray;
}
