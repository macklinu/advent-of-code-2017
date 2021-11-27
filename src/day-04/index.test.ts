import * as path from 'path'
import { readFile } from '../utils/test'
import { createPassphraseValidator } from './'

const here = (p: string) => path.join(__dirname, p)

describe('validatePassphrases()', () => {
  test('solves part 1', async () => {
    let validatePassphrases = createPassphraseValidator((sum, array) => {
      let set = new Set(array)
      return set.size === array.length ? sum + 1 : sum
    })
    let input = await readFile(here('puzzle-input.txt'))
    expect(validatePassphrases(input)).toBe(451)
  })

  test('solves part 2', async () => {
    let validatePassphrases = createPassphraseValidator((sum, array) => {
      let sortedStrings = array.map((string) => {
        return string.split('').sort().join('')
      })
      let set = new Set(sortedStrings)
      return set.size === array.length ? sum + 1 : sum
    })

    expect(validatePassphrases('abcde fghij')).toBe(1)
    expect(validatePassphrases('abcde xyz ecdab')).toBe(0)
    expect(validatePassphrases('a ab abc abd abf abj')).toBe(1)
    expect(validatePassphrases('iiii oiii ooii oooi oooo')).toBe(1)
    expect(validatePassphrases('oiii ioii iioi iiio')).toBe(0)

    let input = await readFile(here('puzzle-input.txt'))
    expect(validatePassphrases(input)).toBe(223)
  })
})
