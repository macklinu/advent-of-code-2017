// @flow

function calculateChecksum(input: string): number {
  let arrays: Array<Array<number>> = input
    .split('\n')
    .filter(Boolean)
    .map(array => array.split('\t').map(str => parseInt(str, 10)))
  return arrays.reduce((total, array) => {
    let difference = Math.max.apply(null, array) - Math.min.apply(null, array)
    return total + difference
  }, 0)
}

module.exports = calculateChecksum
