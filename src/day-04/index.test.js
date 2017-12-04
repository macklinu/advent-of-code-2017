// @flow

const fs = require('fs')
const path = require('path')
const util = require('util')
const createPassphraseValidator = require('./')

async function getInput(filename: string): Promise<string> {
  const readFile = util.promisify(fs.readFile)
  return await readFile(path.join(__dirname, filename), 'utf8')
}

describe('validatePassphrases()', () => {
  test('solves part 1', async () => {
    let validatePassphrases = createPassphraseValidator((sum, array) => {
      let set = new Set(array)
      return set.size === array.length ? sum + 1 : sum
    })
    let input = await getInput('puzzle-input.txt')
    expect(validatePassphrases(input)).toBe(451)
  })

  test('solves part 2', async () => {
    let validatePassphrases = createPassphraseValidator((sum, array) => {
      let sortedStrings = array.map(string => {
        return string
          .split('')
          .sort()
          .join('')
      })
      let set = new Set(sortedStrings)
      return set.size === array.length ? sum + 1 : sum
    })

    expect(validatePassphrases('abcde fghij')).toBe(1)
    expect(validatePassphrases('abcde xyz ecdab')).toBe(0)
    expect(validatePassphrases('a ab abc abd abf abj')).toBe(1)
    expect(validatePassphrases('iiii oiii ooii oooi oooo')).toBe(1)
    expect(validatePassphrases('oiii ioii iioi iiio')).toBe(0)

    let input = await getInput('puzzle-input.txt')
    expect(validatePassphrases(input)).toBe(223)
  })
})
