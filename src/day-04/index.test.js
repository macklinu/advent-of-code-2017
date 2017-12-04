// @flow

const fs = require('fs')
const path = require('path')
const util = require('util')
const validatePassphrases = require('./')

async function getInput(filename: string): Promise<string> {
  const readFile = util.promisify(fs.readFile)
  return await readFile(path.join(__dirname, filename), 'utf8')
}

describe('validatePassphrases()', () => {
  test('counts valid passphrases', async () => {
    let input = await getInput('puzzle-input.txt')
    expect(validatePassphrases(input)).toBe(451)
  })
})
