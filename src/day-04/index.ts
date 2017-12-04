export function createPassphraseValidator(
  reducer: (sum: number, array: string[]) => number
) {
  return function(input: string): number {
    return input
      .split('\n')
      .filter(Boolean)
      .map(line => line.split(' '))
      .reduce(reducer, 0)
  }
}
