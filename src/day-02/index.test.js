// @flow

const fs = require('fs')
const path = require('path')
const util = require('util')

const calculateChecksum = require('./')

async function getInput(filename: string): Promise<string> {
  const readFile = util.promisify(fs.readFile)
  return await readFile(path.join(__dirname, filename), 'utf8')
}

describe('calculateChecksum()', () => {
  test('solves part 1', async () => {
    let exampleInput = await getInput('part-one-example-input.txt')
    let puzzleInput = await getInput('puzzle-input.txt')
    expect(calculateChecksum(exampleInput)).toBe(18)
    expect(calculateChecksum(puzzleInput)).toBe(47136)
  })
})
