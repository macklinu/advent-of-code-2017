export function createChecksumCalculator(
  reducer: (total: number, array: number[]) => number
) {
  return function (input: string): number {
    let arrays: number[][] = input
      .split('\n')
      .filter(Boolean)
      .map((array) => array.split('\t').map((str) => parseInt(str, 10)))
    return arrays.reduce(reducer, 0)
  }
}
