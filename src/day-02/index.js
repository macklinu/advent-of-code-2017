// @flow

function createChecksumCalculator(
  reducer: (total: number, array: Array<number>) => number
) {
  return function(input: string): number {
    let arrays: Array<Array<number>> = input
      .split('\n')
      .filter(Boolean)
      .map(array => array.split('\t').map(str => parseInt(str, 10)))
    return arrays.reduce(reducer, 0)
  }
}

module.exports = createChecksumCalculator
