// @flow

function validatePassphrases(input: string): number {
  return input
    .split('\n')
    .filter(Boolean)
    .map(line => line.split(' '))
    .reduce((sum, array) => {
      let set = new Set(array)
      return set.size === array.length ? sum + 1 : sum
    }, 0)
}

module.exports = validatePassphrases
